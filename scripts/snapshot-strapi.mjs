/**
 * Snapshot de migração — congela o conteúdo de um Strapi em JSON no disco.
 *
 * Uso:
 *   node scripts/snapshot-strapi.mjs http://localhost:1337
 *   node scripts/snapshot-strapi.mjs https://cms.exemplo.com.br
 *
 * As queries abaixo são cópia fiel das de src/lib/strapi.ts — o objetivo é que
 * o JSON gravado seja byte a byte o que getLandingPage()/getGlobal()/getBlogPosts()
 * devolvem hoje, para que a camada de conteúdo local renderize idêntico.
 *
 * Ferramenta de migração, one-shot. Sai do repo quando o Strapi sair.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const BASE = (process.argv[2] || "http://localhost:1337").replace(/\/$/, "");
const OUT_DIR = path.join(process.cwd(), "src", "content", "_snapshot");
const TIMEOUT_MS = 30000;

const LANDING_PAGE_QUERY = [
  "populate[seo][populate]=*",
  "populate[sections][on][sections.hero][populate][image]=true",
  "populate[sections][on][sections.hero][populate][primaryCta]=true",
  "populate[sections][on][sections.hero][populate][secondaryCta]=true",
  "populate[sections][on][sections.stats][populate][items]=true",
  "populate[sections][on][sections.feature-grid][populate][features]=true",
  "populate[sections][on][sections.services-list][populate][services][populate]=*",
  "populate[sections][on][sections.process][populate][steps]=true",
  "populate[sections][on][sections.portfolio][populate][projects][populate]=*",
  "populate[sections][on][sections.testimonials][populate][testimonials][populate]=*",
  "populate[sections][on][sections.faq][populate][items]=true",
  "populate[sections][on][sections.cta][populate][primaryCta]=true",
  "populate[sections][on][sections.cta][populate][secondaryCta]=true",
  "populate[sections][on][sections.contact-form][populate]=*",
].join("&");

const GLOBAL_QUERY = [
  "populate[defaultSeo][populate]=*",
  "populate[header][populate]=*",
  "populate[footer][populate]=*",
  "populate[contact]=*",
].join("&");

const BLOG_POPULATE = "populate[cover]=true&populate[seo][populate]=*";

async function get(pathname) {
  const url = `${BASE}${pathname}`;
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} em ${pathname}`);
  return res.json();
}

/** Pagina até esgotar a coleção — o blog de produção pode ter mais que uma página. */
async function getAll(pathname, extraParams = "") {
  const items = [];
  let page = 1;
  let pageCount = 1;
  do {
    const sep = pathname.includes("?") ? "&" : "?";
    const json = await get(
      `${pathname}${sep}${extraParams}pagination[page]=${page}&pagination[pageSize]=100`,
    );
    items.push(...(json.data ?? []));
    pageCount = json.meta?.pagination?.pageCount ?? 1;
    page += 1;
  } while (page <= pageCount);
  return items;
}

async function save(name, data) {
  const file = path.join(OUT_DIR, `${name}.json`);
  await writeFile(file, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  const count = Array.isArray(data) ? `${data.length} itens` : "ok";
  console.log(`  ✓ ${name}.json (${count})`);
  return data;
}

/** Varre o snapshot atrás de todo campo `url` de upload, pra saber quais mídias baixar depois. */
function collectMediaUrls(node, acc = new Set()) {
  if (!node || typeof node !== "object") return acc;
  if (Array.isArray(node)) {
    for (const item of node) collectMediaUrls(item, acc);
    return acc;
  }
  for (const [key, value] of Object.entries(node)) {
    if (key === "url" && typeof value === "string" && value.startsWith("/uploads/")) {
      acc.add(value);
    } else if (typeof value === "object") {
      collectMediaUrls(value, acc);
    }
  }
  return acc;
}

async function main() {
  console.log(`Snapshot de ${BASE}`);
  await mkdir(OUT_DIR, { recursive: true });

  const results = {};

  const steps = [
    ["landing-page", async () => (await get(`/api/landing-page?${LANDING_PAGE_QUERY}`)).data],
    ["global", async () => (await get(`/api/global?${GLOBAL_QUERY}`)).data],
    ["services", () => getAll("/api/services?populate=*&sort=order:asc")],
    ["projects", () => getAll("/api/projects?populate=*&sort=order:asc")],
    ["testimonials", () => getAll("/api/testimonials?populate=*")],
    ["blog-posts", () => getAll(`/api/blog-posts?${BLOG_POPULATE}&sort=publishedAt:desc&`)],
  ];

  for (const [name, fn] of steps) {
    try {
      results[name] = await save(name, await fn());
    } catch (err) {
      console.warn(`  ✗ ${name}: ${err.message}`);
      results[name] = null;
    }
  }

  const media = [...collectMediaUrls(results)].sort();
  await save("_media-urls", media);

  console.log(`\nSnapshot em src/content/_snapshot/`);
  if (media.length > 0) {
    console.log(`${media.length} mídia(s) referenciadas — baixar com scripts/download-media.mjs`);
  } else {
    console.log("Nenhuma mídia de upload referenciada (imagens vazias no Strapi).");
  }
}

main().catch((err) => {
  console.error(`\nFalhou: ${err.message}`);
  process.exit(1);
});

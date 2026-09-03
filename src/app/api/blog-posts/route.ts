import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { requireIngestAuth } from "@/lib/ingest/auth";
import { ingestError } from "@/lib/ingest/errors";
import { shortId } from "@/lib/ingest/short-id";
import { slugify } from "@/lib/ingest/slugify";
import { revalidateBlogPost } from "@/lib/ingest/revalidate";
import type { IngestPostInput } from "@/lib/ingest/types";

/**
 * GET cobre duas chamadas do Ascendly (SDD 1.1):
 *  - teste de conexão: ?pagination[limit]=1
 *  - busca de idempotência: ?filters[externalId][$eq]=<uuid>&pagination[pageSize]=1
 *
 * De propósito SEM filtro de status — rascunho e publicado juntos, senão
 * um post criado como draft fica invisível e o Ascendly duplica.
 */
export async function GET(request: Request) {
  const authError = requireIngestAuth(request);
  if (authError) return authError;

  const { searchParams } = new URL(request.url);
  const externalId = searchParams.get("filters[externalId][$eq]");

  let query = supabaseAdmin.from("blog_posts").select("id, document_id, slug");

  if (externalId) {
    query = query.eq("external_id", externalId).limit(1);
  } else {
    const limitParam =
      searchParams.get("pagination[limit]") ?? searchParams.get("pagination[pageSize]");
    const limit = Math.min(Math.max(parseInt(limitParam ?? "25", 10) || 25, 1), 100);
    query = query.order("created_at", { ascending: false }).limit(limit);
  }

  const { data, error } = await query;
  if (error) return ingestError(error.message, 500);

  return NextResponse.json({
    data: (data ?? []).map((row) => ({
      id: row.id,
      documentId: row.document_id,
      slug: row.slug,
    })),
  });
}

function mapCreateRow(input: IngestPostInput, forceDraft: boolean, documentId: string) {
  return {
    document_id: documentId,
    external_id: input.externalId,
    title: input.title,
    excerpt: input.excerpt ?? null,
    content: input.content ?? null,
    cover_id: input.cover ?? null,
    author: input.author ?? null,
    category: input.category ?? null,
    tags: input.tags ?? [],
    reading_time: input.readingTime ?? null,
    source: input.source ?? null,
    seo: input.seo ?? null,
    published_at: forceDraft ? null : (input.publishedAt ?? null),
  };
}

export async function POST(request: Request) {
  const authError = requireIngestAuth(request);
  if (authError) return authError;

  let body: { data?: IngestPostInput };
  try {
    body = await request.json();
  } catch {
    return ingestError("Body inválido — esperado JSON.", 400);
  }

  const input = body.data;
  if (!input || typeof input.title !== "string" || !input.title.trim()) {
    return ingestError("Campo obrigatório ausente: data.title.", 400);
  }
  if (!input.externalId) {
    return ingestError("Campo obrigatório ausente: data.externalId.", 400);
  }

  const { searchParams } = new URL(request.url);
  const forceDraft = searchParams.get("status") === "draft";

  const documentId = shortId();
  const baseSlug = slugify(input.slug?.trim() || input.title) || shortId(8);
  const row = mapCreateRow(input, forceDraft, documentId);

  let slug = baseSlug;
  for (let attempt = 0; attempt < 3; attempt++) {
    const { data, error } = await supabaseAdmin
      .from("blog_posts")
      .insert({ ...row, slug })
      .select("id, document_id, slug")
      .single();

    if (!error) {
      revalidateBlogPost(data.slug);
      return NextResponse.json(
        { data: { id: data.id, documentId: data.document_id, slug: data.slug } },
        { status: 201 },
      );
    }

    if (error.code === "23505" && error.message.toLowerCase().includes("slug")) {
      slug = `${baseSlug}-${shortId(4)}`;
      continue;
    }
    return ingestError(error.message, 500);
  }

  return ingestError("Não foi possível gerar um slug único.", 500);
}

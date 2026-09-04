import { ImageResponse } from "next/og";

export const alt = "M3 Brasil — Engenharia & Operação de Mídia para E-Commerce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * O Satori (motor do ImageResponse) não enxerga as fontes que o next/font
 * baixa pro bundle — precisa do arquivo em mãos. Buscamos o TTF direto do
 * Google; se a rede falhar durante o build, devolvemos null e a imagem sai na
 * fonte padrão em vez de derrubar o deploy.
 *
 * Sem User-Agent de browser moderno de propósito: com ele o Google responde
 * WOFF2 fatiado por unicode-range, e o Satori não lê WOFF2. Sem UA conhecido
 * ele devolve um TTF único e completo.
 */
async function loadGoogleFont(query: string): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(`https://fonts.googleapis.com/css2?family=${query}`).then((r) =>
      r.text(),
    );
    const url = css.match(/src:\s*url\((https:\/\/[^)]+)\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

/**
 * Texto fixo, não vindo do Supabase: a imagem tem dimensão travada em 1200x630
 * e não reflui, então copy de tamanho imprevisível quebraria o layout.
 */
export default async function OpenGraphImage() {
  const [serif, sans] = await Promise.all([
    loadGoogleFont("Instrument+Serif"),
    loadGoogleFont("Inter:wght@600"),
  ]);
  const serifFamily = serif ? "Instrument Serif" : undefined;
  const sansFamily = sans ? "Inter" : undefined;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#12283d",
          padding: "72px 80px",
        }}
      >
        {/* Régua de acento, o mesmo teal claro usado sobre fundo escuro no site */}
        <div style={{ display: "flex", width: 96, height: 4, backgroundColor: "#5fc9bd" }} />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span
              style={{
                fontFamily: serifFamily,
                fontSize: 148,
                lineHeight: 1,
                color: "#eef2f5",
                letterSpacing: "-0.03em",
              }}
            >
              M3
            </span>
            <span
              style={{
                fontFamily: sansFamily,
                marginLeft: 20,
                fontSize: 30,
                fontWeight: 600,
                letterSpacing: "0.28em",
                color: "#5fc9bd",
              }}
            >
              BRASIL
            </span>
          </div>

          <span
            style={{
              marginTop: 28,
              fontSize: 40,
              lineHeight: 1.3,
              color: "#9fb2c1",
              maxWidth: 820,
            }}
          >
            Engenharia &amp; Operação de Mídia para E-Commerce
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #204058",
            paddingTop: 28,
          }}
        >
          <span
            style={{ fontFamily: sansFamily, fontSize: 24, letterSpacing: "0.04em", color: "#eef2f5" }}
          >
            m3brasil.com.br
          </span>
          <span
            style={{
              fontFamily: sansFamily,
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "0.22em",
              color: "#9fb2c1",
            }}
          >
            CONSULTORIA
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        ...(serif
          ? [{ name: "Instrument Serif", data: serif, weight: 400 as const, style: "normal" as const }]
          : []),
        ...(sans ? [{ name: "Inter", data: sans, weight: 600 as const, style: "normal" as const }] : []),
      ],
    },
  );
}

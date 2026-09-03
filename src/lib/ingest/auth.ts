import { createHash, timingSafeEqual } from "node:crypto";
import { readEnv } from "@/lib/env";
import { ingestError } from "./errors";

function sha256(input: string) {
  return createHash("sha256").update(input).digest();
}

/**
 * Comparação em tempo constante do Bearer token contra BLOG_INGEST_TOKEN.
 * Compara hashes de tamanho fixo (em vez do token cru) pra não vazar o
 * comprimento do token esperado via timing do timingSafeEqual.
 *
 * Retorna a Response de erro pronta pra devolver, ou null se autenticado.
 */
export function requireIngestAuth(request: Request): Response | null {
  const expected = readEnv("BLOG_INGEST_TOKEN");
  if (!expected) {
    return ingestError("BLOG_INGEST_TOKEN não configurado no servidor.", 500);
  }

  const header = request.headers.get("authorization") ?? "";
  const [scheme, token] = header.split(" ");
  if (scheme !== "Bearer" || !token || !timingSafeEqual(sha256(token), sha256(expected))) {
    return ingestError("Token inválido.", 401);
  }

  return null;
}

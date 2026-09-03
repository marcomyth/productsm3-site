import { randomBytes } from "node:crypto";
import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { requireIngestAuth } from "@/lib/ingest/auth";
import { ingestError } from "@/lib/ingest/errors";
import { getImageSize } from "@/lib/ingest/image-size";
import { slugify } from "@/lib/ingest/slugify";

export const runtime = "nodejs";

// Vercel corta o corpo da request perto de 4.5 MB — fica um pouco abaixo
// pra responder com mensagem clara em vez de deixar a plataforma estourar.
const MAX_UPLOAD_BYTES = 4_400_000;
const MEDIA_BUCKET = "media";

const MIME_EXT: Record<string, string> = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
  "image/gif": ".gif",
  "image/svg+xml": ".svg",
};

export async function POST(request: Request) {
  const authError = requireIngestAuth(request);
  if (authError) return authError;

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_UPLOAD_BYTES) {
    return ingestError(
      `Arquivo maior que o limite de upload (${(MAX_UPLOAD_BYTES / 1_000_000).toFixed(1)} MB).`,
      413,
    );
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return ingestError("Body inválido — esperado multipart/form-data.", 400);
  }

  const file = formData.get("files");
  if (!(file instanceof File)) {
    return ingestError('Campo "files" ausente ou inválido.', 400);
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return ingestError(
      `Arquivo maior que o limite de upload (${(MAX_UPLOAD_BYTES / 1_000_000).toFixed(1)} MB).`,
      413,
    );
  }

  const bytes = new Uint8Array(await file.arrayBuffer());
  const { width, height } = getImageSize(bytes);

  const ext = extname(file.name) || MIME_EXT[file.type] || "";
  const base = slugify(baseName(file.name)) || "arquivo";
  const hash = `${base}_${randomBytes(3).toString("hex")}`;
  const path = `${hash}${ext}`;

  const { error: uploadError } = await supabaseAdmin.storage
    .from(MEDIA_BUCKET)
    .upload(path, bytes, { contentType: file.type || "application/octet-stream", upsert: false });

  if (uploadError) return ingestError(uploadError.message, 500);

  const { data: publicUrlData } = supabaseAdmin.storage.from(MEDIA_BUCKET).getPublicUrl(path);

  const { data: mediaRow, error: dbError } = await supabaseAdmin
    .from("media")
    .insert({
      name: file.name,
      url: publicUrlData.publicUrl,
      hash,
      ext,
      mime: file.type || null,
      width: width ?? null,
      height: height ?? null,
      size: Math.round((file.size / 1024) * 10) / 10,
      provider: "supabase",
    })
    .select(
      "id, name, url, hash, ext, mime, width, height, size, alternative_text, caption, provider, created_at, updated_at",
    )
    .single();

  if (dbError) {
    // Já subiu pro Storage — tenta desfazer pra não deixar arquivo órfão.
    await supabaseAdmin.storage.from(MEDIA_BUCKET).remove([path]);
    return ingestError(dbError.message, 500);
  }

  return NextResponse.json([
    {
      id: mediaRow.id,
      name: mediaRow.name,
      url: mediaRow.url,
      alternativeText: mediaRow.alternative_text,
      caption: mediaRow.caption,
      width: mediaRow.width,
      height: mediaRow.height,
      formats: null,
      hash: mediaRow.hash,
      ext: mediaRow.ext,
      mime: mediaRow.mime,
      size: mediaRow.size,
      previewUrl: null,
      provider: mediaRow.provider,
      provider_metadata: null,
      createdAt: mediaRow.created_at,
      updatedAt: mediaRow.updated_at,
    },
  ]);
}

function extname(filename: string): string {
  const i = filename.lastIndexOf(".");
  return i === -1 ? "" : filename.slice(i).toLowerCase();
}

function baseName(filename: string): string {
  const i = filename.lastIndexOf(".");
  return i === -1 ? filename : filename.slice(0, i);
}

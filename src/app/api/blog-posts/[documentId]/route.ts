import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";
import { requireIngestAuth } from "@/lib/ingest/auth";
import { ingestError } from "@/lib/ingest/errors";
import { slugify } from "@/lib/ingest/slugify";
import { revalidateBlogPost } from "@/lib/ingest/revalidate";
import type { IngestPostInput } from "@/lib/ingest/types";

/**
 * Mesmo body e mesma resposta do POST — é assim que o Ascendly evita
 * duplicar quando republica: acha o post via GET (por externalId) e
 * chama PUT em vez de POST. document_id e external_id nunca são
 * sobrescritos aqui (document_id é a chave da URL; external_id é a chave
 * de idempotência, setada só na criação).
 */
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ documentId: string }> },
) {
  const authError = requireIngestAuth(request);
  if (authError) return authError;

  const { documentId } = await params;

  let body: { data?: IngestPostInput };
  try {
    body = await request.json();
  } catch {
    return ingestError("Body inválido — esperado JSON.", 400);
  }

  const input = body.data;
  if (!input) return ingestError("Campo obrigatório ausente: data.", 400);

  const { searchParams } = new URL(request.url);
  const forceDraft = searchParams.get("status") === "draft";

  const patch: Record<string, unknown> = {
    published_at: forceDraft ? null : (input.publishedAt ?? null),
  };
  if (input.title !== undefined) patch.title = input.title;
  if (input.excerpt !== undefined) patch.excerpt = input.excerpt;
  if (input.content !== undefined) patch.content = input.content;
  if (input.cover !== undefined) patch.cover_id = input.cover;
  if (input.author !== undefined) patch.author = input.author;
  if (input.category !== undefined) patch.category = input.category;
  if (input.tags !== undefined) patch.tags = input.tags;
  if (input.readingTime !== undefined) patch.reading_time = input.readingTime;
  if (input.source !== undefined) patch.source = input.source;
  if (input.seo !== undefined) patch.seo = input.seo;
  if (input.slug !== undefined) {
    const slug = slugify(input.slug);
    if (slug) patch.slug = slug;
  }

  const { data, error } = await supabaseAdmin
    .from("blog_posts")
    .update(patch)
    .eq("document_id", documentId)
    .select("id, document_id, slug")
    .single();

  if (error) {
    if (error.code === "PGRST116") return ingestError("Post não encontrado.", 404);
    return ingestError(error.message, 500);
  }

  revalidateBlogPost(data.slug);
  return NextResponse.json({ data: { id: data.id, documentId: data.document_id, slug: data.slug } });
}

import { NextResponse } from "next/server";
import { postLead } from "@/lib/strapi";
import type { LeadPayload } from "@/lib/types";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let body: Partial<LeadPayload> = {};
  try {
    body = (await req.json()) as Partial<LeadPayload>;
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  if (!body.name || !body.email) {
    return NextResponse.json({ error: "name e email são obrigatórios" }, { status: 400 });
  }

  const payload: LeadPayload = {
    name: body.name,
    email: body.email,
    phone: body.phone,
    company: body.company,
    message: body.message,
    budget: body.budget,
    source: body.source || "landing-page",
  };

  const result = await postLead(payload);
  if (!result.ok) {
    return NextResponse.json({ error: result.error || "Falha ao enviar" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}

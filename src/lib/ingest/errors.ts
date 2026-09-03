import { NextResponse } from "next/server";

/** Formato de erro que o Ascendly sabe ler — ver SDD Parte 1.5. */
export function ingestError(message: string, status: number) {
  return NextResponse.json({ error: { message } }, { status });
}

import Link from "next/link";

export const runtime = "edge";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-6 px-4 py-32 text-center sm:px-6 lg:px-8">
      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Erro 404
      </p>
      <h1 className="text-4xl font-black tracking-tight sm:text-6xl">
        <span className="text-brand-gradient">Página não encontrada</span>
      </h1>
      <p className="text-base text-muted-foreground sm:text-lg">
        O link que você seguiu pode estar quebrado ou a página foi removida.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-2xl bg-brand-gradient px-7 py-3 text-sm font-semibold text-white shadow-brand-glow-intense transition-all hover:scale-[1.03] active:scale-[0.98]"
      >
        Voltar para o início
      </Link>
    </section>
  );
}

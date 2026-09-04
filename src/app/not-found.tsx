import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-space-sm px-grid-margin-mobile py-space-3xl text-center md:px-grid-margin-tablet lg:px-grid-margin-desktop">
      <span className="font-label-index text-label-index uppercase tracking-[0.2em] text-secondary">
        Erro 404
      </span>
      <h1 className="font-serif text-display-lg-mobile font-normal leading-tight tracking-tight text-primary md:text-display-lg">
        Página não encontrada
      </h1>
      <p className="max-w-md font-sans text-body-lead leading-relaxed text-on-surface-variant">
        O link que você seguiu pode estar quebrado ou a página foi removida.
      </p>
      <Link
        href="/"
        className="mt-space-xs inline-flex items-center justify-center rounded bg-secondary px-space-md py-space-sm font-label-meta text-label-meta uppercase tracking-[0.14em] text-on-secondary shadow-sm transition-all duration-150 hover:brightness-105"
      >
        Voltar para o início
      </Link>
    </section>
  );
}

import { draftMode } from "next/headers";

export async function PreviewBanner() {
  const dm = await draftMode();
  if (!dm.isEnabled) return null;

  return (
    <div className="sticky top-0 z-[60] w-full bg-amber-500 text-amber-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 text-xs font-semibold md:px-8">
        <span className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-amber-950" />
          Modo preview ativo — exibindo conteúdo em rascunho
        </span>
        <a
          href="/api/preview/exit"
          className="rounded-md bg-amber-950 px-3 py-1 text-amber-50 transition-opacity hover:opacity-90"
        >
          Sair do preview
        </a>
      </div>
    </div>
  );
}

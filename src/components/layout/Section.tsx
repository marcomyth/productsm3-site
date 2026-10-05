import { cn } from "@/lib/utils";
import { FundoFios } from "@/components/layout/FundoFios";

/**
 * Invólucro de seção da home.
 *
 * Existe porque a estrutura que o cliente pediu (a da Web Estratégica) tem
 * três coisas que antes estavam espalhadas e repetidas em cada componente: a
 * largura do conteúdo, o par fundo/cor-de-texto, e o respiro vertical. Com
 * isso solto, mudar o ritmo de fundos obrigava a reescrever as classes de cor
 * de todos os filhos, e mudar a largura obrigava a editar nove arquivos.
 *
 * Aqui a seção declara o tom, e os papéis de texto vêm por variável
 * (`t-forte`, `t-fraco`, `border-regua`, `bg-painel`, definidos em
 * globals.css). Inverter uma seção virou uma linha.
 */
export type TomSecao = "claro" | "claro-alt" | "escuro" | "verde" | "gradiente" | "foto";

/**
 * Cada tom é um par: o fundo e a classe que define os papéis de texto. Eles
 * andam juntos de propósito — foi separá-los que deixou o site preso num
 * único arranjo de cores.
 */
const FUNDO: Record<TomSecao, string> = {
  claro: "tom-claro bg-surface",
  "claro-alt": "tom-claro bg-surface-container-low",
  escuro: "tom-escuro bg-dark-surface",
  verde: "tom-escuro bg-dark-green",
  // O hero e o FAQ da referência usam gradiente, não cor plana.
  gradiente: "tom-escuro bg-gradient-to-b from-dark-green to-dark-surface",
  foto: "tom-escuro bg-dark-surface",
};

/**
 * Ziguezague no topo, como o divisor que a referência usa uma vez.
 *
 * Feito por `clip-path` e não por SVG: recortando o próprio fundo da seção, o
 * fundo da seção anterior aparece pelos vãos sem que eu precise descobrir e
 * repetir a cor dela. O x vai em porcentagem para acompanhar a largura, e o y
 * em pixel para que a altura do dente não cresça junto com a seção.
 */
function recorteZiguezague(dentes = 24, alturaPx = 20): string {
  const pontos: string[] = [];
  for (let i = 0; i <= dentes; i++) {
    const x = ((i / dentes) * 100).toFixed(3);
    pontos.push(`${x}% ${i % 2 === 0 ? `${alturaPx}px` : "0px"}`);
  }
  return `polygon(${pontos.join(", ")}, 100% 100%, 0% 100%)`;
}

type Props = {
  children: React.ReactNode;
  id?: string;
  tom?: TomSecao;
  /** `ampla` é a medida que a referência usa só no hero. */
  largura?: "normal" | "ampla";
  ziguezague?: boolean;
  /** Obrigatória quando `tom` é "foto". Sem ela a seção cai no fundo escuro. */
  fotoUrl?: string;
  /** Fundo animado de fios luminosos. Só faz sentido em tom escuro. */
  fios?: boolean;
  /** Texto alternativo não se aplica: a foto é decorativa e fica no fundo. */
  className?: string;
  /** Respiro vertical. O padrão casa com os 80px da referência. */
  respiro?: "normal" | "grande";
};

export function Section({
  children,
  id,
  tom = "claro",
  largura = "normal",
  ziguezague = false,
  fotoUrl,
  fios = false,
  className,
  respiro = "normal",
}: Props) {
  const comFoto = tom === "foto" && Boolean(fotoUrl);

  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden",
        FUNDO[tom],
        // 88px de respiro e a medida da referencia, medida no desktop. No
        // celular ela vira rolagem vazia entre blocos, entao cede para 56px e
        // so volta a partir de 768px.
        respiro === "grande"
          ? "py-space-2xl md:py-space-3xl"
          : "py-space-xl md:py-space-2xl",
        className,
      )}
      style={ziguezague ? { clipPath: recorteZiguezague() } : undefined}
    >
      {fios && (
        <>
          <FundoFios className="pointer-events-none absolute inset-0 h-full w-full" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-dark-surface/80 via-dark-surface/40 to-transparent"
          />
          {/* Vinheta: puxa o brilho para o centro e devolve contraste ao texto
              nas bordas, onde os fios cruzam com mais densidade. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_55%_45%,transparent_0%,var(--color-dark-surface)_80%)] opacity-90"
          />
        </>
      )}

      {comFoto && (
        <>
          <div
            aria-hidden="true"
            className="desfoque-no-scroll absolute inset-0 scale-105 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${fotoUrl})` }}
          />
          {/**
           * A foto sozinha não sustenta texto em cima: o véu garante o
           * contraste que os papéis de texto do tom escuro assumem ter.
           * `scale-105` na foto evita que a borda desfocada mostre o fundo.
           *
           * São dois véus. O plano cobre a foto inteira; o segundo é um
           * gradiente que escurece o lado esquerdo, onde o texto fica. Com véu
           * uniforme a única saída seria aumentá-lo até apagar a foto — e aí
           * não valeria a pena ter foto. Assim a imagem continua legível à
           * direita e o texto ganha contraste à esquerda.
           */}
          <div aria-hidden="true" className="absolute inset-0 bg-dark-surface/75" />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-dark-surface via-dark-surface/70 to-transparent"
          />
        </>
      )}

      <div
        className={cn(
          "relative z-10 mx-auto w-full px-grid-margin-mobile md:px-grid-margin-tablet lg:px-grid-margin-desktop",
          largura === "ampla" ? "max-w-content-wide" : "max-w-content",
        )}
      >
        {children}
      </div>
    </section>
  );
}

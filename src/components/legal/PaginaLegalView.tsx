import Link from "next/link";
import type { PaginaLegal } from "@/content/legal";
import { REVISADO_EM } from "@/content/legal";
import { IDIOMA_HTML, rota, type Idioma } from "@/i18n/config";

type Props = {
  dados: PaginaLegal;
  idioma: Idioma;
  /** Endereço de contato, vindo do conteúdo do rodapé. */
  email: string;
  /** Razão social com CNPJ, vinda do conteúdo do rodapé. */
  controlador: string;
  /** Rótulo do link para a outra página jurídica, no idioma certo. */
  rotuloPrivacidade: string;
};

const CLASSE_LINK = "text-secondary underline-offset-4 hover:underline";

/**
 * Resolve os marcadores de um parágrafo.
 *
 * O texto jurídico vive como string em src/content/legal/, e três coisas
 * dentro dele não são texto: o e-mail de contato, a razão social e o link
 * para a outra página. Elas não podem ser escritas na tradução porque mudam
 * sozinhas — o e-mail e a razão social vêm do conteúdo do rodapé, e o link
 * muda de prefixo conforme o idioma.
 *
 * O negrito entra pela mesma porta, com `**assim**`. Dois casos no site todo
 * não justificam um interpretador de Markdown, e a alternativa — HTML dentro
 * da string — tornaria o texto ilegível para quem o revisar como texto
 * jurídico, que é a pessoa que mais precisa lê-lo.
 */
function resolver(texto: string, props: Props): React.ReactNode[] {
  const partes = texto.split(/(\{email\}|\{controlador\}|\{privacidade\}|\*\*[^*]+\*\*)/g);

  return partes.map((parte, i) => {
    if (parte === "{email}") {
      return (
        <a key={i} href={`mailto:${props.email}`} className={CLASSE_LINK}>
          {props.email}
        </a>
      );
    }
    if (parte === "{controlador}") return props.controlador;
    if (parte === "{privacidade}") {
      return (
        <Link key={i} href={rota(props.idioma, "/privacidade")} className={CLASSE_LINK}>
          {props.rotuloPrivacidade}
        </Link>
      );
    }
    if (parte.startsWith("**") && parte.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-on-surface">
          {parte.slice(2, -2)}
        </strong>
      );
    }
    return parte;
  });
}

/**
 * Desenho das duas páginas jurídicas.
 *
 * Elas tinham marcação própria, idêntica uma à outra, com o texto escrito
 * dentro. Com três idiomas isso seriam seis arquivos iguais em estrutura — e
 * um ajuste de espaçamento feito em cinco deles, esquecido no sexto, só
 * apareceria para quem lesse a política de privacidade em espanhol.
 */
export function PaginaLegalView(props: Props) {
  const { dados, idioma } = props;

  const revisadoEm = new Date(`${REVISADO_EM}T12:00:00Z`).toLocaleDateString(IDIOMA_HTML[idioma], {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mx-auto max-w-[40rem] px-grid-margin-mobile py-space-2xl md:px-grid-margin-tablet lg:px-grid-margin-desktop">
      <span className="font-label-index text-label-index uppercase tracking-[0.2em] text-secondary">
        {dados.rotulo}
      </span>
      <h1 className="mt-space-2xs font-sans text-display-lg-mobile font-bold tracking-tight text-primary md:text-display-lg">
        {dados.titulo}
      </h1>
      {/* `<time>` com `dateTime`: a data é lida por máquina em texto jurídico,
          e o formato por extenso muda em cada idioma. */}
      <p className="mt-space-2xs font-label-meta text-label-meta uppercase tracking-wider text-outline">
        {dados.atualizadoRotulo}: <time dateTime={REVISADO_EM}>{revisadoEm}</time>
      </p>

      <p className="mt-space-md font-sans text-body-lead leading-relaxed text-on-surface-variant">
        {resolver(dados.intro, props)}
      </p>

      {dados.secoes.map((secao) => (
        <section key={secao.titulo} className="mt-space-xl">
          <h2 className="font-sans text-headline-sm font-semibold text-primary">{secao.titulo}</h2>
          <div className="mt-space-xs space-y-space-sm font-sans text-body-default leading-relaxed text-on-surface-variant">
            {/* Chave pelo índice, e não pelo texto: a lista é estática e nunca
                reordena, e usar o parágrafo como chave manda cada parágrafo
                jurídico inteiro de novo no payload do React, dobrando o peso
                das duas páginas mais compridas do site. */}
            {secao.paragrafos.map((paragrafo, i) => (
              <p key={i}>{resolver(paragrafo, props)}</p>
            ))}
            {/* Rodapé de seção com o dispositivo legal que sustenta o que foi
                dito. A régua à esquerda é o que o separa do argumento: ele é a
                fonte, não a continuação. */}
            {secao.base && (
              <p className="border-l-2 border-secondary/40 pl-space-xs font-sans text-body-sm text-outline">
                {resolver(secao.base, props)}
              </p>
            )}
          </div>
        </section>
      ))}
    </div>
  );
}

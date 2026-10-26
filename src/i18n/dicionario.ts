import type { Idioma } from "./config";

/**
 * Tudo que estava escrito dentro dos componentes.
 *
 * O conteúdo editorial do site mora no Supabase, em três idiomas. Mas havia
 * uma segunda camada de texto que nunca passou por lá: rótulos de seção,
 * parágrafos escritos direto no JSX, rótulos de botão, mensagens de lista
 * vazia, textos de erro. Em um site de um idioma só isso passa despercebido;
 * em três, cada string esquecida no componente é uma frase em português no
 * meio de uma página em inglês.
 *
 * Por que aqui e não no Supabase, junto do resto: este é texto de interface,
 * não de venda. Ele muda quando o componente muda, no mesmo commit, e um
 * rótulo de botão que vive no banco é um rótulo que o `git log` não explica.
 *
 * O tipo `Textos` é o que garante a tradução completa: faltando uma chave em
 * qualquer idioma, o build não passa.
 */
type Textos = {
  layout: {
    /** Primeiro link da página, só para quem navega por teclado. */
    pularParaConteudo: string;
    logoAlt: string;
  };
  barra: {
    navegacao: string;
    abrirMenu: string;
    fecharMenu: string;
    idioma: string;
  };
  linhaServicos: {
    navegacao: string;
  };
  servicos: {
    rotulo: string;
    intro: string;
  };
  metodo: {
    rotulo: string;
    afirmacao: string;
    descricao: string;
  };
  clientes: {
    titulo: string;
    verResultados: string;
  };
  declaracao: {
    titulo: string;
    paragrafos: readonly [string, string, string];
    comoTrabalhamos: string;
    oQueEntregamos: string;
  };
  ultimosPosts: {
    titulo: string;
    emBreve: string;
    verBlog: string;
  };
  cases: {
    metaTitulo: string;
    metaDescricao: string;
    voltar: string;
  };
  naoEncontrada: {
    codigo: string;
    titulo: string;
    texto: string;
    voltar: string;
  };
  blog: {
    metaTitulo: string;
    metaDescricao: string;
    selo: string;
    titulo: string;
    subtitulo: string;
    /** "{n}" é trocado pelo número no componente. */
    umArtigo: string;
    varios: string;
    vazio: string;
    /** "{categoria}" é trocado pelo nome da categoria. */
    vazioNaCategoria: string;
    anterior: string;
    proxima: string;
    /** "{atual}" e "{total}". */
    paginacao: string;
    postNaoEncontrado: string;
    voltarAoBlog: string;
    /** "{n}" é o número de minutos. */
    tempoDeLeitura: string;
    categorias: {
      noticia: string;
      tutorial: string;
      case: string;
      novidade: string;
      tendencia: string;
      geral: string;
    };
  };
};

export const DICIONARIO: Record<Idioma, Textos> = {
  pt: {
    layout: {
      pularParaConteudo: "Pular para o conteúdo",
      logoAlt: "Agência M3",
    },
    barra: {
      navegacao: "Principal",
      abrirMenu: "Abrir menu",
      fecharMenu: "Fechar menu",
      idioma: "Idioma",
    },
    linhaServicos: {
      navegacao: "Serviços",
    },
    servicos: {
      rotulo: "áreas de domínio",
      intro:
        "Elevamos a qualidade dos seus processos de marketing sem elevar o custo operacional. Implementamos e gerenciamos o funil sinérgico de vendas com transparência total, para que cada atividade da sua operação de tráfego trabalhe pelos objetivos do seu negócio.",
    },
    metodo: {
      rotulo: "método e entregáveis",
      afirmacao: "Rigor analítico em quatro fases irredutíveis",
      descricao:
        "Eliminamos o desperdício antes de acelerar. A escala só acontece após a estabilização da margem.",
    },
    clientes: {
      titulo: "Marcas que já fazem parte da nossa operação",
      verResultados: "Ver os resultados de cada uma",
    },
    declaracao: {
      titulo: "Como uma operação de tráfego para de desperdiçar",
      paragrafos: [
        "O desperdício quase nunca aparece no relatório de mídia. Ele aparece na margem, quando a receita que o painel comemora já estava acontecendo sem o anúncio. Por isso o trabalho começa isolando o que é receita assistida e o que é pura canibalização.",
        "Só depois disso a verba sobe, e ela sobe indexada à margem de contribuição líquida, não ao faturamento. É o que separa crescer de simplesmente gastar mais.",
        "A operação fica aberta enquanto roda. Há reunião semanal de P&L com o seu time, e cada sinal enviado ao algoritmo é documentado. Transparência total da gestão de fontes de tráfego é uma diretriz da casa, e é também o que torna o resultado auditável por você.",
      ],
      comoTrabalhamos: "Como trabalhamos",
      oQueEntregamos: "O que entregamos",
    },
    ultimosPosts: {
      titulo: "Últimos artigos sobre tráfego, dados e e-commerce",
      emBreve: "Em breve",
      verBlog: "Confira o blog completo",
    },
    cases: {
      metaTitulo: "Cases de Sucesso",
      metaDescricao:
        "Resultados entregues pela Agência M3 em projetos de tráfego, e-commerce e construção de marca, com a métrica e o período de cada um.",
      voltar: "Voltar para a home",
    },
    naoEncontrada: {
      codigo: "Erro 404",
      titulo: "Página não encontrada",
      texto: "O link que você seguiu pode estar quebrado ou a página foi removida.",
      voltar: "Voltar para o início",
    },
    blog: {
      metaTitulo: "Blog",
      metaDescricao:
        "Conteúdo sobre desenvolvimento web, SaaS, e-commerce, performance e SEO. Artigos práticos pra quem cria produtos digitais.",
      selo: "Blog",
      titulo: "Ideias, insights e bastidores",
      subtitulo:
        "Conteúdo sobre criação de produtos digitais, performance, SEO e gestão de negócio.",
      umArtigo: "{n} artigo publicado",
      varios: "{n} artigos publicados",
      vazio: "Nenhum artigo publicado ainda. Volte em breve!",
      vazioNaCategoria: "Nenhum artigo na categoria “{categoria}” ainda.",
      anterior: "← Anterior",
      proxima: "Próxima →",
      paginacao: "Página {atual} de {total}",
      postNaoEncontrado: "Post não encontrado",
      voltarAoBlog: "Voltar para o blog",
      tempoDeLeitura: "{n} min de leitura",
      categorias: {
        noticia: "Notícia",
        tutorial: "Tutorial",
        case: "Case",
        novidade: "Novidade",
        tendencia: "Tendência",
        geral: "Geral",
      },
    },
  },

  en: {
    layout: {
      pularParaConteudo: "Skip to content",
      logoAlt: "Agência M3",
    },
    barra: {
      navegacao: "Main",
      abrirMenu: "Open menu",
      fecharMenu: "Close menu",
      idioma: "Language",
    },
    linhaServicos: {
      navegacao: "Services",
    },
    servicos: {
      rotulo: "areas of expertise",
      intro:
        "We raise the quality of your marketing processes without raising your operating cost. We implement and run the synergistic sales funnel with full transparency, so that every activity in your traffic operation works towards your business objectives.",
    },
    metodo: {
      rotulo: "method and deliverables",
      afirmacao: "Analytical rigour across four irreducible phases",
      descricao:
        "We eliminate the waste before we accelerate. Scale only happens once the margin is stable.",
    },
    clientes: {
      titulo: "Brands already part of our operation",
      verResultados: "See what each one achieved",
    },
    declaracao: {
      titulo: "How a traffic operation stops wasting money",
      paragrafos: [
        "Waste almost never shows up in the media report. It shows up in the margin, when the revenue the dashboard is celebrating was already going to happen without the ad. That is why the work starts by separating assisted revenue from pure cannibalisation.",
        "Only then does the budget go up, and it goes up indexed to net contribution margin, not to gross revenue. That is what separates growing from simply spending more.",
        "The operation stays open while it runs. There is a weekly P&L meeting with your team, and every signal sent to the algorithm is documented. Full transparency over how traffic sources are managed is a house rule, and it is also what makes the result auditable by you.",
      ],
      comoTrabalhamos: "How we work",
      oQueEntregamos: "What we deliver",
    },
    ultimosPosts: {
      titulo: "Latest articles on traffic, data and e-commerce",
      emBreve: "Coming soon",
      verBlog: "Browse the full blog",
    },
    cases: {
      metaTitulo: "Case Studies",
      metaDescricao:
        "Results delivered by Agência M3 across traffic, e-commerce and brand-building projects, with the metric and the window for each one.",
      voltar: "Back to the homepage",
    },
    naoEncontrada: {
      codigo: "Error 404",
      titulo: "Page not found",
      texto: "The link you followed may be broken, or the page may have been removed.",
      voltar: "Back to the homepage",
    },
    blog: {
      metaTitulo: "Blog",
      metaDescricao:
        "Writing on web development, SaaS, e-commerce, performance and SEO. Practical articles for people building digital products.",
      selo: "Blog",
      titulo: "Ideas, insights and the work behind them",
      subtitulo:
        "Writing on building digital products, performance, SEO and running a business.",
      umArtigo: "{n} article published",
      varios: "{n} articles published",
      vazio: "No articles published yet. Check back soon.",
      vazioNaCategoria: "No articles in the “{categoria}” category yet.",
      anterior: "← Previous",
      proxima: "Next →",
      paginacao: "Page {atual} of {total}",
      postNaoEncontrado: "Post not found",
      voltarAoBlog: "Back to the blog",
      tempoDeLeitura: "{n} min read",
      categorias: {
        noticia: "News",
        tutorial: "Tutorial",
        case: "Case study",
        novidade: "Release",
        tendencia: "Trend",
        geral: "General",
      },
    },
  },

  es: {
    layout: {
      pularParaConteudo: "Saltar al contenido",
      logoAlt: "Agência M3",
    },
    barra: {
      navegacao: "Principal",
      abrirMenu: "Abrir menú",
      fecharMenu: "Cerrar menú",
      idioma: "Idioma",
    },
    linhaServicos: {
      navegacao: "Servicios",
    },
    servicos: {
      rotulo: "áreas de dominio",
      intro:
        "Elevamos la calidad de tus procesos de marketing sin elevar el coste operativo. Implementamos y gestionamos el embudo sinérgico de ventas con transparencia total, para que cada actividad de tu operación de tráfico trabaje por los objetivos de tu negocio.",
    },
    metodo: {
      rotulo: "método y entregables",
      afirmacao: "Rigor analítico en cuatro fases irreducibles",
      descricao:
        "Eliminamos el desperdicio antes de acelerar. La escala solo llega cuando el margen está estable.",
    },
    clientes: {
      titulo: "Marcas que ya forman parte de nuestra operación",
      verResultados: "Ver los resultados de cada una",
    },
    declaracao: {
      titulo: "Cómo una operación de tráfico deja de desperdiciar",
      paragrafos: [
        "El desperdicio casi nunca aparece en el informe de medios. Aparece en el margen, cuando los ingresos que el panel celebra ya estaban ocurriendo sin el anuncio. Por eso el trabajo empieza separando los ingresos asistidos de la pura canibalización.",
        "Solo después sube el presupuesto, y sube indexado al margen de contribución neto, no a la facturación. Eso es lo que separa crecer de simplemente gastar más.",
        "La operación queda abierta mientras funciona. Hay una reunión semanal de cuenta de resultados con tu equipo, y cada señal enviada al algoritmo queda documentada. La transparencia total sobre la gestión de las fuentes de tráfico es una norma de la casa, y es también lo que hace que puedas auditar el resultado.",
      ],
      comoTrabalhamos: "Cómo trabajamos",
      oQueEntregamos: "Qué entregamos",
    },
    ultimosPosts: {
      titulo: "Últimos artículos sobre tráfico, datos y e-commerce",
      emBreve: "Próximamente",
      verBlog: "Ver el blog completo",
    },
    cases: {
      metaTitulo: "Casos de Éxito",
      metaDescricao:
        "Resultados entregados por Agência M3 en proyectos de tráfico, e-commerce y construcción de marca, con la métrica y el periodo de cada uno.",
      voltar: "Volver al inicio",
    },
    naoEncontrada: {
      codigo: "Error 404",
      titulo: "Página no encontrada",
      texto: "El enlace que seguiste puede estar roto o la página se ha eliminado.",
      voltar: "Volver al inicio",
    },
    blog: {
      metaTitulo: "Blog",
      metaDescricao:
        "Contenido sobre desarrollo web, SaaS, e-commerce, rendimiento y SEO. Artículos prácticos para quien crea productos digitales.",
      selo: "Blog",
      titulo: "Ideas, hallazgos y el trabajo detrás",
      subtitulo:
        "Contenido sobre creación de productos digitales, rendimiento, SEO y gestión de negocio.",
      umArtigo: "{n} artículo publicado",
      varios: "{n} artículos publicados",
      vazio: "Todavía no hay artículos publicados. Vuelve pronto.",
      vazioNaCategoria: "Todavía no hay artículos en la categoría «{categoria}».",
      anterior: "← Anterior",
      proxima: "Siguiente →",
      paginacao: "Página {atual} de {total}",
      postNaoEncontrado: "Entrada no encontrada",
      voltarAoBlog: "Volver al blog",
      tempoDeLeitura: "{n} min de lectura",
      categorias: {
        noticia: "Noticia",
        tutorial: "Tutorial",
        case: "Caso",
        novidade: "Novedad",
        tendencia: "Tendencia",
        geral: "General",
      },
    },
  },
};

export function textos(idioma: Idioma): Textos {
  return DICIONARIO[idioma];
}

/**
 * Troca os marcadores `{nome}` de um texto pelos valores dados.
 *
 * Existe porque frase com número no meio não se monta por concatenação: a
 * ordem das palavras muda de idioma para idioma, e o único jeito de a
 * tradução continuar podendo decidir onde o número entra é o número ser um
 * buraco dentro da frase dela.
 */
export function preencher(texto: string, valores: Record<string, string | number>): string {
  return texto.replace(/\{(\w+)\}/g, (inteiro, chave: string) =>
    chave in valores ? String(valores[chave]) : inteiro,
  );
}

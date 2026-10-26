import type { SiteContent } from "@/lib/types";
import { CASES_DIR, HERO_IMAGE, WHATSAPP_ES } from "./midia";

/**
 * Contenido del sitio en español — traducción de src/content/site.ts.
 *
 * Escrito como copy de venta, no como traducción literal: el original en
 * portugués vende, y una traducción palabra por palabra de una página de
 * venta deja de vender. Donde los dos se separan, es a propósito.
 *
 * El trato es de tú, no de usted. El portugués habla de "você", que es
 * informal, y la oficina de Valencia es la puerta de entrada al mercado de
 * habla hispana: en España el tuteo es la norma en comunicación comercial, y
 * cambiar de registro cambiaría la voz de la marca.
 *
 * Tres cosas no cambian de idioma a idioma:
 *
 * - Las cifras. "R$ 40 millones+" mantiene el real, porque el dinero se
 *   invirtió en reales y convertirlo afirmaría una cantidad que nadie midió.
 *   La coma decimal coincide aquí con la portuguesa: 4,2x.
 * - Los nombres de marca y de la empresa, el CNPJ y los datos de contacto.
 * - Los destinos de ancla (#servicos, #metodo). Son identificadores del DOM
 *   compartidos por los tres idiomas, no palabras que alguien lea.
 */

export const siteContentEs: SiteContent = {
  seo: {
    title: "M3 Brasil — Ingeniería y Operación de Medios para E-Commerce",
    description:
      "Asumimos la operación de adquisición y la ingeniería propia de e-commerces que ya venden y necesitan escalar sin destruir el margen. Google, Meta e infraestructura web bajo una única cuenta de resultados.",
    keywords: [
      "medios pagados para e-commerce",
      "gestión de tráfico pagado",
      "ingeniería de e-commerce",
      "auditoría de medios",
      "performance media",
      "headless commerce",
    ],
  },

  header: {
    logoLabel: "M3",
    logoSuffix: "BRASIL",
    tagline: "Consultoría",
    navLinks: [
      { label: "Servicios", url: "/es#servicos" },
      { label: "Casos", url: "/es/cases" },
      { label: "Método", url: "/es#metodo" },
      { label: "Auditoría", url: "/es#auditoria" },
      { label: "Blog", url: "/es/blog" },
    ],
    ctaLabel: "Pedir Diagnóstico",
    ctaUrl: WHATSAPP_ES,
  },

  footer: {
    tagline: [
      "Eliminar el desperdicio que provoca una gestión de tráfico genérica",
      "Rentabilidad por encima de la media del mercado, de forma sostenible",
      "Transparencia total sobre la gestión de las fuentes de tráfico",
      "Mejora continua de la calidad del marketing con menor coste operativo",
      "Innovación continua",
      "Volverse incomparable",
    ],
    locations: "São Paulo — Santa Catarina — Valencia, España",
    columns: [
      {
        title: "Publicaciones e Índices",
        links: [
          { label: "Auditorías de Conversión", url: "/es#auditoria" },
          { label: "Consultoría y Gobernanza", url: "/es#servico-01" },
          { label: "Rediseño de Sistema", url: "/es#servico-02" },
          { label: "Gobernanza de Medios", url: "/es#servico-03" },
        ],
      },
      {
        title: "Estructura",
        links: [
          { label: "Índice de Casos", url: "/es/cases" },
          { label: "El Método M3", url: "/es#metodo" },
          { label: "Liderazgo Técnico", url: "/es#auditoria" },
          { label: "Solicitar un Informe", url: "/es#auditoria" },
        ],
      },
    ],
    contactEmail: "contato@agenciam3.com.br",
    contactPhone: "+55 71 9921-6851",
    copyrightHolder: "Meta 3 Digital Serviços de Marketing LTDA — CNPJ 45.964.223/0001-07",
    legalLinks: [
      { label: "Privacidad y Gobernanza", url: "/es/privacidade" },
      { label: "Compliance Jurídico", url: "/es/compliance" },
    ],
  },

  hero: {
    eyebrow: "Calidad con Reducción de Coste",
    title: "No necesitas más presupuesto de tráfico",
    subtitle:
      "Rediseñamos tu sistema competitivo para la excelencia operativa. Agenda un diagnóstico y descubre en qué nivel está tu embudo sinérgico de ventas",
    primaryCta: { label: "Hablar con nuestros especialistas", url: "/es#auditoria" },
    secondaryCta: { label: "Casos de éxito", url: "/es/cases" },
    meta: [
      "¿Contratas marketing a ciegas y rezas para vender más?",
      "¿Vas por la tercera agencia de marketing y ninguna da resultado?",
      "¿Estás saturado de leads no cualificados?",
    ],
    figure: {
      imageUrl: HERO_IMAGE,
      imageAlt: "Puesto de trabajo con un monitor ultrapanorámico que muestra el panel de rendimiento de medios, con R$ 126.832 invertidos y un ROAS de 10x, y un portátil al lado con la planificación de medios por canal",
    },
  },

  proofBar: [
    {
      value: "R$ 40 millones+",
      label: "Gestionados en Google y Meta Ads",
      description:
        "Consultoría, auditoría y gobernanza de tráfico pagado para el embudo sinérgico de ventas",
      destaque: true,
    },
    {
      value: "R$ 120 millones+",
      label: "Facturados en el Mercado Industrial",
      description: "Ingresos que las operaciones dirigidas por M3 ya han generado en la industria",
      destaque: true,
    },
    {
      value: "4,2x",
      label: "ROAS Medio en 12 Meses",
      description: "Mayor rendimiento del tráfico sin aumentar el coste operativo",
    },
    {
      value: "+10 años",
      label: "De Mercado",
      description: "Rediseñando sistemas competitivos para industrias en transición hacia el B2C",
    },
    {
      value: "+30",
      label: "E-Commerces Activos",
      description: "Gestión de tráfico con plataforma propia para nuestros clientes",
    },
  ],

  services: [
    {
      index: "01",
      category: "Adquisición Pagada",
      title: "Consultoría, auditoría y gobernanza de marketing digital",
      description:
        "Growth y performance para e-commerce. Gestión de tráfico enfocada en el beneficio operativo, no en el panel",
      ctaLabel: "Ver detalle operativo",
      bullets: [
        "Mayor margen",
        "Mayor control del presupuesto de campaña",
        "Google Ads y Performance Max",
        "Meta Ads con foco en incrementalidad",
        "Marketplaces y Retail Media",
        "Gestión de catálogo en Merchant",
        "Medición server-side (GTM + Meta CAPI)",
        "Informe de margen por canal",
      ],
    },
    {
      index: "02",
      category: "Ingeniería Web",
      title: "Rediseño de sistema competitivo",
      description:
        "Ingeniería de e-commerce a medida y aplicaciones web. Arquitectura y desarrollo propios, diseñados para cada modelo de negocio. Sistemas headless, stack moderno, APIs bajo demanda, Core Web Vitals por debajo de 1,0 s y capa analítica nativa desde el primer commit.",
      ctaLabel: "Ver especificaciones técnicas",
      bullets: [
        "Leads mejor cualificados",
        "Reducción del coste operativo",
        "Arquitectura headless y a medida",
        "Sistemas de checkout propios",
        "APIs y microservicios a medida",
        "Infraestructura de baja latencia",
        "Capa de datos y seguimiento CAPI",
        "Optimización continua de conversión (CRO)",
      ],
    },
    {
      index: "03",
      category: "Diagnóstico",
      title: "Gobernanza de medios pagados",
      description:
        "Excelencia operativa junto a tu equipo o en su lugar. Diagnóstico independiente de la operación que tienes hoy. Dónde se fuga el presupuesto, qué esconde la medición y cuánto de los ingresos atribuidos es realmente incremental.",
      ctaLabel: "Solicitar alcance del informe",
      bullets: [
        "Mayor productividad del equipo de medios",
        "Mayor previsibilidad de costes e ingresos",
        "Mayor rendimiento del tráfico",
        "Auditoría de la estructura de cuentas",
        "Revisión analítica de GA4 y eventos",
        "Análisis empírico de incrementalidad",
        "Fatiga creativa y relevancia",
        "Plan de corrección priorizado",
        "Cuadros de mando ejecutivos en Looker Studio",
        "Presentación ejecutiva a la dirección",
      ],
    },
  ],

  method: [
    {
      index: "01",
      phaseLabel: "Fase Inicial",
      title: "Diagnóstico",
      description:
        "Lectura profunda de la cuenta, los márgenes y el historial real de atribución, para separar los ingresos asistidos de la pura canibalización.",
      timeframe: "Eliminar el desperdicio que provoca una gestión de tráfico genérica",
    },
    {
      index: "02",
      phaseLabel: "Estructuración",
      title: "Reestructuración",
      description:
        "Limpieza de feeds, reingeniería de campañas e implementación de CAPI/GA4. Optimización de etiquetas y saneamiento de las señales que se envían al algoritmo.",
      timeframe: "Rentabilidad por encima de la media del mercado, de forma sostenible",
    },
    {
      index: "03",
      phaseLabel: "Aceleración",
      title: "Escala",
      description:
        "Aumento progresivo del presupuesto, indexado al margen de contribución neto. Pruebas sistemáticas de nuevos formatos y audiencias propias.",
      timeframe: "Innovación continua",
    },
    {
      index: "04",
      phaseLabel: "Gobernanza",
      title: "Gobernanza",
      description:
        "Reuniones semanales de cuenta de resultados, pruebas continuas de creatividades y previsión de stock, en estrecha cooperación con el director financiero y el equipo de ingeniería.",
      timeframe: "Mayor calidad con menor coste — volverse incomparable",
    },
  ],

  cases: [
    {
      category: "Mueller",
      reference: "mueller",
      imageUrl: `${CASES_DIR}/mueller.png`,
      imageAlt: "Logotipo de Mueller",
      backgroundUrl: `${CASES_DIR}/fundo-mueller.jpg`,
      backgroundAlt: "Lavadero con una lavadora Mueller",
      sector: "Línea blanca · más de 70 años de fábrica",
      metricValue: "+34%",
      metricLabel: "de venta en la tienda online",
      metricAccent: true,
      placarLabel: "venta en la tienda online",
      extraMetrics: [{ value: "+30%", label: "en autoridad de dominio" }],
      headline:
        "Setenta años dentro de la cocina brasileña. Ahora con el mismo peso en el estante digital.",
      description:
        "Cocinas, placas, hornos, lavadoras y secadoras: la marca ya era conocida dentro de casa. Trasladamos ese peso al canal online, afianzamos la autoridad de dominio y abrimos presencia en los marketplaces.",
    },
    {
      category: "Lexus Brasília",
      reference: "lexus-brasilia",
      imageUrl: `${CASES_DIR}/lexus-brasilia.png`,
      imageAlt: "Logotipo de Lexus Brasília",
      backgroundUrl: `${CASES_DIR}/fundo-lexus-brasilia.jpg`,
      backgroundAlt: "Un Lexus bajo un cielo estrellado",
      sector: "Automoción premium · Distrito Federal",
      metricValue: "+20%",
      metricLabel: "de reconocimiento de marca en Brasilia",
      metricAccent: true,
      placarLabel: "reconocimiento de marca · Brasilia",
      headline:
        "Quien compra premium en Brasilia elige entre unas pocas casas. Lexus pasó a pesar más en esa elección.",
      description:
        "En un segmento donde la decisión pasa por la reputación antes que por el precio, la disputa es local. Concentramos el trabajo en esa plaza, construyendo reconocimiento de marca y autoridad de dominio.",
    },
    {
      category: "Musa",
      reference: "musa",
      imageUrl: `${CASES_DIR}/musa.png`,
      imageAlt: "Logotipo de Musa",
      backgroundUrl: `${CASES_DIR}/fundo-musa.jpg`,
      backgroundAlt: "Campaña de moda de baño de Musa",
      sector: "Moda de baño · tienda propia",
      metricValue: "+120%",
      metricLabel: "de reconocimiento de marca",
      metricAccent: true,
      placarLabel: "reconocimiento de marca",
      headline:
        "Más del doble de reconocimiento, en un comercio donde la demanda desaparece en cuanto termina la temporada.",
      description:
        "Una colección de temporada vende en una ventana corta, y es la marca la que sostiene la demanda fuera del pico. Construimos reconocimiento, autoridad de dominio y engagement, y Musa pasó a vender tanto en su tienda online como en los marketplaces.",
    },
    {
      category: "Vale Europeu Turismo",
      reference: "vale-europeu",
      imageUrl: `${CASES_DIR}/vale-europeu.png`,
      imageAlt: "Logotipo de Vale Europeu Turismo",
      backgroundUrl: `${CASES_DIR}/fundo-vale-europeu.jpg`,
      backgroundAlt: "Cicloturistas en una carretera del Vale Europeu",
      sector: "Turismo · Santa Catarina",
      metricValue: "+150%",
      metricLabel: "de crecimiento de marca en 12 meses",
      metricAccent: true,
      placarLabel: "crecimiento de marca · 12 meses",
      headline:
        "Dos veces y media más marca en un año, disputando las vacaciones con destinos mucho más famosos.",
      description:
        "Siete rutas cualificadas, del cicloturismo a la ruta cervecera. Un destino tiene que estar presente justo en el momento en que alguien decide dónde pasar las vacaciones. Construimos marca, autoridad de dominio y posicionamiento para esa disputa.",
    },
    {
      category: "Fogatti",
      reference: "fogatti",
      imageUrl: `${CASES_DIR}/fogatti.png`,
      imageAlt: "Logotipo de Fogatti",
      backgroundUrl: `${CASES_DIR}/fundo-fogatti.jpg`,
      backgroundAlt: "Cocina con una campana extractora Fogatti",
      sector: "Línea blanca · industria",
      metricValue: "+30%",
      metricLabel: "de venta en la tienda online",
      metricAccent: true,
      placarLabel: "venta en la tienda online",
      extraMetrics: [{ value: "+27%", label: "en autoridad de dominio" }],
      headline:
        "En una categoría donde todo el mundo compara precios, Fogatti aparece antes de la comparación.",
      description:
        "Placas, hornos empotrables, campanas y extractores, en una categoría que se compara lado a lado. Construimos autoridad de dominio y reconocimiento de marca, y llevamos la venta más allá de la tienda propia, con presencia firme en los marketplaces.",
    },
    {
      category: "Somos Cria",
      reference: "somos-cria",
      imageUrl: `${CASES_DIR}/somos-cria.png`,
      imageAlt: "Logotipo de Somos Cria",
      backgroundUrl: `${CASES_DIR}/fundo-somos-cria.jpg`,
      backgroundAlt: "Ambiente con un banco y un perchero de Somos Cria",
      sector: "Mobiliario de diseño de autor · venta directa",
      metricValue: "+30%",
      metricLabel: "de crecimiento de marca en 24 meses",
      metricAccent: true,
      placarLabel: "crecimiento de marca · 24 meses",
      headline: "Vender una butaca de ticket alto a quien nunca se ha sentado en ella.",
      description:
        "Butacas, bancos y piezas exclusivas, directamente desde la web. Quien compra decide sin tocar el producto, y es la marca la que sostiene esa decisión. Fue exactamente eso lo que construimos: marca, autoridad de dominio y engagement.",
    },
    {
      category: "CIMVI",
      reference: "cimvi",
      imageUrl: `${CASES_DIR}/cimvi.png`,
      imageAlt: "Logotipo de CIMVI",
      backgroundUrl: `${CASES_DIR}/fundo-cimvi.jpg`,
      backgroundAlt: "Sede de CIMVI",
      sector: "Sector público · consorcio de 14 ayuntamientos",
      metricValue: "+50%",
      metricLabel: "de engagement y visibilidad en 24 meses",
      metricAccent: true,
      placarLabel: "engagement y visibilidad · 24 meses",
      headline: "Catorce ayuntamientos, una sola voz. Del despacho al vecino de la calle.",
      description:
        "Los ayuntamientos del Médio Vale do Itajaí gestionan los residuos como una sola operación. Hablar con el gestor y con el vecino al mismo tiempo es un problema de estructura, no de anuncio. El trabajo continuo dio al consorcio visibilidad en la región y autoridad reconocida en la agenda del saneamiento.",
    },
  ],

  casesPage: {
    eyebrow: "Casos de 2022 a 2026 · siete marcas en la operación",
    titleLead: "No pidieron más tráfico.",
    titleAccent: "Pidieron volverse incomparables.",
    description:
      "Mueller, Lexus Brasília, Fogatti, Musa, Somos Cria, Vale Europeu y CIMVI ya operan con M3. Las cifras del marcador son lo que pasó después. El octavo nombre de esta página sigue en blanco.",
    ctaLabel: "Quiero el diagnóstico gratuito",
    meta: ["Diagnóstico en dos semanas", "Gratuito", "Sin compromiso de contrato continuado"],
    placarTitle: "Marcador de la operación",
    placarPeriod: "2022 a 2026",
    intro: {
      eyebrow: "evidencias prácticas",
      title: "Siete marcas ya forman parte de nuestra operación. El octavo lugar está abierto.",
      description:
        "Periodo de análisis: 2022 a 2026. De un fabricante con más de setenta años de historia a un destino turístico que disputa las vacaciones: cada una llegó con un problema distinto, y todas salieron más difíciles de copiar.",
    },
    vaga: {
      sector: "Plaza abierta",
      value: "+?%",
      label: "la cifra que todavía no existe",
      placarLabel: "la próxima línea del marcador",
      marca: "[tu marca]",
      logoLabel: "tu logotipo aquí",
      headline: "El próximo caso de esta página empieza con un diagnóstico de dos semanas.",
      description:
        "Operación de medios, arquitectura técnica del e-commerce y fuga de margen, todo en el mismo informe. Sin compromiso de contrato continuado.",
      ctaLabel: "Ocupar la octava plaza",
    },
  },

  finalCta: {
    eyebrow: "Próximo Paso",
    title: "Empieza por reclasificar el problema",
    description:
      "No necesitas más tráfico. Te ayudamos a rediseñar tu sistema competitivo. Dos semanas. Diagnóstico completo de tu operación de medios, de la arquitectura técnica del e-commerce y de la fuga de margen. Sin compromiso de contrato continuado.",
    ctaLabel: "Solicitar diagnóstico gratuito",
    ctaUrl: WHATSAPP_ES,
    meta: [
      { label: "Requisito de Inversión", value: "Inversión > R$ 30k/mes" },
      {
        label: "Entregable Principal",
        value: "Más calidad en los servicios de marketing y menor coste operativo",
      },
      { label: "Tiempo de Implementación", value: "10 días naturales" },
    ],
    painPoints: {
      intro: "Quizá tu empresa o tu producto sea demasiado fácil de copiar. Por eso:",
      items: [
        "No tienes margen",
        "No fidelizas",
        "No tienes valor de equity",
        "No puedes cobrar un sobreprecio",
        "Dependes de las agencias de publicidad",
        "Estás a merced de la estacionalidad",
        "No tienes una identidad de marca reconocible",
        "No acumulas conocimiento de marketing",
      ],
    },
  },
};

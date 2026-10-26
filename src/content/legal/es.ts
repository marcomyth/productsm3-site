import type { ConteudoLegal } from "./tipos";

/**
 * Texto jurídico en español — traducción de cortesía.
 *
 * Las leyes brasileñas conservan su nombre en portugués, con una glosa breve
 * la primera vez que aparece cada una ("Lei 13.709/2018, la LGPD, la ley
 * brasileña de protección de datos"). Traducir el nombre produciría un texto
 * que se lee bien y no cita nada: no existe un título oficial en español que
 * citar, y quien quiera comprobar la fuente necesita el nombre que existe.
 *
 * El trato es de usted en este texto, y no de tú como en el resto del sitio.
 * No es una incoherencia: aquí no se vende nada, se informa sobre derechos, y
 * el registro formal es el que corresponde a un texto que puede acabar delante
 * de una autoridad de control.
 *
 * La versión en portugués es la que rige. Así se dice en la sección final de
 * cada página, no en un aviso aparte, porque es un hecho sobre el texto y
 * pertenece al texto.
 */
export const legalEs: ConteudoLegal = {
  privacidade: {
    metaTitulo: "Privacidad y Gobernanza",
    metaDescricao:
      "Cómo trata este sitio los datos personales: responsable, bases legales, registros de acceso, derechos del titular según la LGPD brasileña y canal para ejercerlos.",
    rotulo: "Gobernanza de Datos",
    titulo: "Privacidad y Gobernanza",
    atualizadoRotulo: "Última actualización",
    intro:
      "Esta página describe qué hace este sitio con los datos personales de quien lo visita, con qué fundamentos legales y cómo ejerce usted sus derechos. Hoy la respuesta corta es que el sitio no recoge nada por su cuenta, y el texto siguiente explica exactamente qué significa eso y qué sigue existiendo a pesar de ello.",
    secoes: [
      {
        titulo: "1. Quién es el responsable",
        paragrafos: [
          "{controlador} es la responsable de los datos personales tratados con motivo de este sitio, por ser quien decide sobre la finalidad y los medios de ese tratamiento. Contacto para cualquier asunto de privacidad: {email}.",
        ],
        base: "Base legal: Lei 13.709/2018 (la LGPD, ley brasileña de protección de datos), art. 5, VI, que define al responsable como la persona a quien corresponden las decisiones sobre el tratamiento.",
      },
      {
        titulo: "2. Qué recoge este sitio por su cuenta",
        paragrafos: [
          "Nada que le identifique. No hay formulario de registro, no hay cookie de rastreo y no hay herramienta de medición de audiencia instalada: ni Google Analytics, ni Meta Pixel, ni Hotjar, ni equivalente. Tampoco hay cookie publicitaria ni elaboración de perfiles de navegación.",
          "Esa ausencia es una decisión, no un descuido: la LGPD exige que el tratamiento se limite al mínimo necesario para la finalidad pretendida, y la finalidad de este sitio es presentar servicios, no observar a quien los lee.",
        ],
        base: "Base legal: LGPD, art. 6, III (necesidad) y art. 6, I (finalidad específica e informada).",
      },
      {
        titulo: "3. Registros de acceso al sitio",
        paragrafos: [
          "Como cualquier aplicación en internet, el servidor que entrega estas páginas registra automáticamente datos técnicos de cada acceso: dirección IP, fecha y hora con huso horario, y la página solicitada. Esos registros no se usan para identificar visitantes, no se cruzan con ninguna otra base y no alimentan ningún análisis comercial.",
          "Conservar esos registros no es opcional para nosotros. El Marco Civil da Internet obliga al proveedor de aplicación constituido como persona jurídica con fines económicos a mantener los registros de acceso a la aplicación durante seis meses, en un entorno controlado y seguro, y prohíbe entregarlos a terceros fuera de los supuestos legales.",
        ],
        base: "Base legal: Lei 12.965/2014 (Marco Civil da Internet, marco de derechos civiles de internet en Brasil), art. 15, encabezado y §2, y Decreto 8.771/2016, arts. 13 a 15, sobre estándares de seguridad en la conservación. En la LGPD, el fundamento es el art. 7, II, cumplimiento de una obligación legal por el responsable.",
      },
      {
        titulo: "4. Qué ocurre cuando usa los botones de contacto",
        paragrafos: [
          "Los botones de diagnóstico abren una conversación en WhatsApp con el mensaje ya escrito. No se envía nada hasta que lo envía usted, y ningún dato suyo pasa por este sitio por el camino: el enlace solo abre la aplicación, sin informar a WhatsApp de qué página viene.",
          "A partir de ahí la conversación ocurre dentro de WhatsApp, servicio del grupo Meta, que es responsable independiente del tratamiento realizado en su propia plataforma y tiene su propia política de privacidad. Como Meta opera servidores fuera de Brasil, esta etapa implica una transferencia internacional de datos, sometida al capítulo correspondiente de la LGPD. Lo que usted nos escriba se usa únicamente para responderle y para evaluar una eventual contratación.",
          "La dirección de correo del pie de página funciona igual: abre su propio programa de correo, con el destinatario ya puesto, y el mensaje circula por su proveedor.",
        ],
        base: "Base legal: LGPD, art. 7, V, cuando el contacto se dirige a medidas precontractuales a petición suya, y art. 7, IX, interés legítimo, cuando se trata solo de responder a un mensaje suyo. Transferencia internacional: arts. 33 a 36.",
      },
      {
        titulo: "5. Quién más toca esos datos",
        paragrafos: [
          "El contenido del sitio y los registros técnicos quedan con los prestadores de infraestructura que alojan la aplicación y su base de contenido. Actúan como encargados, es decir, tratan los datos por nuestra cuenta y siguiendo nuestras instrucciones, sin finalidad propia. No vendemos, cedemos ni compartimos datos personales con terceros con fines comerciales.",
        ],
        base: "Base legal: LGPD, art. 5, VII (encargado) y art. 39, que vincula al encargado a las instrucciones del responsable.",
      },
      {
        titulo: "6. Cuánto tiempo los guardamos",
        paragrafos: [
          "Los registros de acceso a la aplicación se mantienen durante el plazo legal de seis meses y después se eliminan, salvo orden judicial en contrario. Los mensajes que usted nos envía se conservan mientras dure la atención y durante el plazo en que los necesitemos para defender un derecho, y se eliminan después.",
        ],
        base: "Base legal: Marco Civil, art. 15, encabezado, y LGPD, art. 15, I y IV, y art. 16, que admite la conservación para el cumplimiento de una obligación legal y para el ejercicio regular de derechos.",
      },
      {
        titulo: "7. Seguridad e incidentes",
        paragrafos: [
          "Adoptamos medidas técnicas y administrativas para proteger los datos frente a accesos no autorizados y frente a situaciones accidentales o ilícitas. El tráfico del sitio va cifrado, y las rutas internas que reciben contenido editorial exigen autenticación por token, con comparación en tiempo constante para no filtrar información por el tiempo de respuesta.",
          "Si ocurriera un incidente de seguridad capaz de acarrearle riesgo o daño relevante, lo comunicaremos a la Autoridade Nacional de Proteção de Dados (ANPD) de Brasil y a los titulares afectados en un plazo razonable.",
        ],
        base: "Base legal: LGPD, arts. 46 a 49 (seguridad y buenas prácticas) y art. 48 (comunicación de incidentes).",
      },
      {
        titulo: "8. Sus derechos",
        paragrafos: [
          "En cualquier momento, y sin coste, puede pedirnos: confirmación de la existencia de tratamiento; acceso a los datos; corrección de datos incompletos, inexactos o desactualizados; anonimización, bloqueo o eliminación de datos innecesarios, excesivos o tratados en disconformidad con la ley; portabilidad a otro proveedor; eliminación de los datos tratados con su consentimiento; información sobre con quién los compartimos; información sobre la posibilidad de no consentir y sus consecuencias; y revocación del consentimiento.",
          "Para ejercer cualquiera de ellos, escriba a {email}. Respondemos de inmediato, en formato simplificado, o de forma completa en un plazo de quince días desde su solicitud. Si se opone a un tratamiento fundado en interés legítimo, basta con decirlo y lo reevaluamos.",
          "También puede presentar una petición directamente ante la Autoridade Nacional de Proteção de Dados contra el responsable, si entiende que alguno de sus derechos no ha sido atendido.",
        ],
        base: "Base legal: LGPD, art. 18, I a IX, art. 19, I y II (plazos de respuesta), art. 18, §1 (petición ante la ANPD) y art. 18, §2 (oposición a tratamiento dispensado de consentimiento).",
      },
      {
        titulo: "9. Canal de protección de datos",
        paragrafos: [
          "La dirección {email} es el canal oficial de comunicación sobre protección de datos, y es por donde la ANPD y los titulares deben dirigirse a nosotros. Operamos a una escala compatible con la de un agente de tratamiento de pequeño porte, condición en la que la designación formal de un delegado es facultativa, pero la existencia de este canal no lo es.",
        ],
        base: "Base legal: LGPD, art. 41, y Resolução CD/ANPD nº 2/2022, art. 11, que dispensa a los agentes de pequeño porte de designar delegado siempre que mantengan un canal de comunicación.",
      },
      {
        titulo: "10. Operación en la Unión Europea",
        paragrafos: [
          "Parte de nuestra operación está en Valencia, España. En la medida en que el tratamiento de datos ocurra en el contexto de las actividades de ese establecimiento, se aplica también el Reglamento General de Protección de Datos europeo, de forma acumulativa con la LGPD. Donde ambas normas difieran en alcance, rige para usted la más protectora.",
          "Bajo el RGPD los fundamentos del tratamiento aquí descrito son los mismos, leídos por sus disposiciones correspondientes: ejecución de medidas precontractuales a petición suya, cumplimiento de una obligación legal e interés legítimo. Sus derechos incluyen, además de los ya enumerados, la limitación del tratamiento, la oposición al tratamiento basado en interés legítimo y el derecho a no ser objeto de una decisión basada únicamente en el tratamiento automatizado que produzca efectos jurídicos sobre usted. Este sitio no toma decisiones de ese tipo.",
          "Si se encuentra en la Unión Europea y entiende que alguno de sus derechos no ha sido atendido, puede presentar una reclamación ante la autoridad de control de su país. En España, esa autoridad es la Agencia Española de Protección de Datos.",
        ],
        base: "Base legal: Reglamento (UE) 2016/679 (RGPD), art. 3.1, sobre el tratamiento en el contexto de las actividades de un establecimiento en la Unión; art. 6.1, letras b, c y f, sobre las bases de licitud; arts. 15 a 22, sobre los derechos del interesado; y art. 77, sobre el derecho a reclamar ante la autoridad de control. En la LGPD, art. 3, I y II.",
      },
      {
        titulo: "11. Cuando esto cambie",
        paragrafos: [
          "El texto anterior describe la situación de hoy. Si pasamos a usar herramientas de medición, cookies no esenciales o formularios en el sitio, actualizaremos esta página antes de que el cambio entre en vigor, con la fecha en la cabecera indicando la revisión, porque la información previa y adecuada sobre el tratamiento es un derecho del titular y no una cortesía.",
          "Este texto en español es una traducción de cortesía. La versión en portugués de esta página es la que rige, y en caso de discrepancia prevalece.",
        ],
        base: "Base legal: LGPD, art. 6, VI (transparencia) y art. 9, que garantiza el acceso facilitado a la información sobre el tratamiento.",
      },
    ],
  },

  compliance: {
    metaTitulo: "Compliance Jurídico",
    metaDescricao:
      "Identificación de la empresa, naturaleza del contenido del sitio, origen y alcance de las cifras presentadas en los casos, uso de marcas de terceros y legislación aplicable.",
    rotulo: "Información Legal",
    titulo: "Compliance Jurídico",
    atualizadoRotulo: "Última actualización",
    intro:
      "Esta página reúne la información legal de este sitio: quién responde por él, qué significa el contenido, de dónde salen las cifras presentadas y hasta dónde pueden leerse como una promesa. Cada sección indica la disposición que la sustenta, para que el texto pueda comprobarse.",
    secoes: [
      {
        titulo: "1. Identificación",
        paragrafos: [
          "Este sitio lo mantiene {controlador}. Canal de contacto para cualquier asunto tratado en esta página: {email}.",
        ],
        base: "Base legal: Lei 12.965/2014 (Marco Civil da Internet), art. 7, que asegura al usuario información clara sobre quién presta el servicio, y Lei 8.078/1990 (el CDC, código brasileño de defensa del consumidor), art. 31, sobre el deber de información correcta y ostensiva.",
      },
      {
        titulo: "2. Naturaleza del contenido",
        paragrafos: [
          "Las páginas de este sitio tienen carácter informativo y publicitario. Las descripciones de servicio, los plazos y los formatos de trabajo presentan lo que hacemos, y el alcance de cada trabajo, con entregables, plazos e importes, se define en un contrato firmado entre las partes.",
          "Eso no significa que lo escrito aquí pueda desdecirse después. La información publicitaria suficientemente precisa obliga a quien la difunde e integra el contrato que llegue a celebrarse. Por eso el texto del sitio está escrito para cumplirse, y no como pieza de efecto.",
        ],
        base: "Base legal: CDC, arts. 30 y 35, sobre la vinculación de la oferta, y Código Civil brasileño, art. 427, sobre la fuerza obligatoria de la propuesta.",
      },
      {
        titulo: "3. Las cifras presentadas en los casos",
        paragrafos: [
          "Los porcentajes mostrados junto a cada cliente son **resultados obtenidos en trabajo nuestro para esa empresa**. Cada ficha nombra la métrica a la que se refiere la cifra, como crecimiento de marca o aumento de venta en la tienda online, y el encabezado de la sección informa del periodo de análisis.",
          "Esas cifras son específicas de cada caso. Dependen del sector, del punto de partida, del presupuesto, del producto y del tiempo de trabajo, y **no constituyen promesa ni previsión de un resultado equivalente para otro cliente**. Ninguna contratación se hace con garantía de reproducir esos índices.",
          "Los datos de origen de cada cifra están disponibles para quien los solicite en la dirección de correo indicada, dentro de lo que permita la confidencialidad acordada con cada cliente. Si alguna ficha pasara a mostrar un dato de mercado en lugar de un resultado nuestro, nombrará el sector al que se refiere la cifra, y la fuente se informará igualmente.",
        ],
        base: "Base legal: CDC, art. 37, §1, que considera engañosa la publicidad capaz de inducir a error sobre la naturaleza o las características del servicio, y art. 36, párrafo único, que obliga al anunciante a conservar los datos fácticos y técnicos que sustentan el mensaje. En el mismo sentido, el Código Brasileiro de Autorregulamentação Publicitária, art. 27, §1 y §2, sobre veracidad y comprobación.",
      },
      {
        titulo: "4. Marcas y nombres de terceros",
        paragrafos: [
          "Los nombres y logotipos de empresas mostrados en este sitio pertenecen a sus respectivos titulares y se usan para identificar relaciones comerciales reales, sin sugerir que sean de nuestra titularidad y sin implicar respaldo o patrocinio más allá del vínculo existente.",
          "La exhibición de cada marca, y la difusión del resultado asociado a ella, se realiza con autorización de su titular. La autorización de uso de marca es revocable, y la revocación produce efecto desde el momento en que nos llega.",
          "Si usted es titular de alguna de esas marcas y quiere que la mención se ajuste o se retire, escriba a {email} y lo atenderemos.",
        ],
        base: "Base legal: Lei 9.279/1996 (ley brasileña de propiedad industrial), art. 130, III, sobre el derecho a velar por la integridad y la reputación de la marca, y art. 132, IV, que exceptúa el uso de la marca por terceros cuando no haya connotación comercial indebida. La autorización del titular es lo que descarta el supuesto de uso indebido del art. 190, I, de la misma ley.",
      },
      {
        titulo: "5. Propiedad intelectual del sitio",
        paragrafos: [
          "El contenido editorial, la identidad visual, las fotografías producidas para este sitio y el código que lo ejecuta son titularidad de {controlador}, salvo el material de terceros identificado en la sección anterior. La reproducción, distribución o adaptación requieren autorización previa y expresa.",
        ],
        base: "Base legal: Lei 9.610/1998 (ley brasileña de derechos de autor), art. 7, sobre obras protegidas, y arts. 28 y 29, que condicionan la utilización a la autorización previa del titular. Para el código, Lei 9.609/1998, art. 2.",
      },
      {
        titulo: "6. Contenido del blog",
        paragrafos: [
          "Los textos publicados en el blog tienen finalidad informativa y reflejan el análisis de sus autores en la fecha de publicación. No constituyen consultoría individualizada, y toda decisión de negocio tomada a partir de ellos debe considerar el caso concreto.",
        ],
        base: "Base legal: CDC, art. 31, sobre información adecuada, y Lei 9.610/1998, art. 24, sobre los derechos morales del autor, incluido el de que su nombre conste en la obra.",
      },
      {
        titulo: "7. Legislación aplicable y fuero",
        paragrafos: [
          "A este sitio y a su contenido se aplica la legislación brasileña. Cualquier controversia entre empresas se dirimirá en el fuero de la comarca de la sede de la responsable, salvo disposición contractual específica.",
          "Cuando la relación sea de consumo, esa elección no prevalece: el consumidor puede demandar en el fuero de su propio domicilio, y es nula la cláusula que dificulte su defensa.",
        ],
        base: "Base legal: Código de Processo Civil brasileño, art. 63, sobre la elección de fuero, y art. 63, §3, que permite al juez tenerla por ineficaz cuando sea abusiva. CDC, art. 101, I, sobre el fuero del domicilio del consumidor, y art. 51, IV y XV, sobre la nulidad de cláusulas abusivas.",
      },
      {
        titulo: "8. Reclamaciones, tratamiento de datos y versión que rige",
        paragrafos: [
          "Las reclamaciones sobre cualquier punto de esta página pueden enviarse a {email}, y se responden por el mismo canal. El tratamiento de datos personales está descrito en {privacidade}, con las bases legales de cada finalidad.",
          "Este texto en español es una traducción de cortesía. La versión en portugués de esta página es la que rige, y en caso de discrepancia prevalece.",
        ],
      },
    ],
  },
};

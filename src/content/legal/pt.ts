import type { ConteudoLegal } from "./tipos";

/**
 * Texto jurídico em português — a versão oficial.
 *
 * Fica no repositório e não no Supabase, como o resto do conteúdo: mudança em
 * política de privacidade precisa de histórico, revisão e data, coisas que um
 * campo editável direto no banco não dá.
 *
 * Cada afirmação descreve a prática real do site, auditada no código: nenhum
 * script de medição, nenhum cookie, nenhum formulário. E cada seção cita o
 * dispositivo que a sustenta, para o texto poder ser conferido em vez de ter
 * que ser acreditado. Isso não substitui revisão de advogado.
 */
export const legalPt: ConteudoLegal = {
  privacidade: {
    metaTitulo: "Privacidade & Governança",
    metaDescricao:
      "Como este site trata dados pessoais: controlador, bases legais, registros de acesso, direitos do titular pela LGPD e canal para exercê-los.",
    rotulo: "Governança de Dados",
    titulo: "Privacidade & Governança",
    atualizadoRotulo: "Última atualização",
    intro:
      "Esta página descreve o que este site faz com dados pessoais de quem o visita, sob quais fundamentos legais, e como você exerce os seus direitos. Hoje a resposta curta é que o site não coleta nada por conta própria, e o texto abaixo explica exatamente o que isso significa e o que continua existindo mesmo assim.",
    secoes: [
      {
        titulo: "1. Quem é o controlador",
        paragrafos: [
          "{controlador} é a controladora dos dados pessoais tratados em razão deste site, por ser quem decide sobre a finalidade e os meios desse tratamento. Contato para qualquer assunto de privacidade: {email}.",
        ],
        base: "Base legal: Lei 13.709/2018 (LGPD), art. 5º, VI, que define controlador como a pessoa a quem competem as decisões sobre o tratamento.",
      },
      {
        titulo: "2. O que este site coleta por conta própria",
        paragrafos: [
          "Nada que identifique você. Não há formulário de cadastro, não há cookie de rastreamento e não há ferramenta de medição de audiência instalada, nem Google Analytics, nem Meta Pixel, nem Hotjar, nem equivalente. Também não há cookie de publicidade nem construção de perfil de navegação.",
          "Essa ausência é uma decisão, não um descuido: a LGPD exige que o tratamento se limite ao mínimo necessário para a finalidade pretendida, e a finalidade deste site é apresentar serviços, não observar quem os lê.",
        ],
        base: "Base legal: LGPD, art. 6º, III (necessidade) e art. 6º, I (finalidade específica e informada).",
      },
      {
        titulo: "3. Registros de acesso ao site",
        paragrafos: [
          "Como qualquer aplicação na internet, o servidor que entrega estas páginas registra automaticamente dados técnicos de cada acesso: endereço IP, data e hora com fuso, e a página solicitada. Esses registros não são usados para identificar visitantes, não são cruzados com outra base e não alimentam nenhuma análise comercial.",
          "A guarda desses registros não é opcional para nós. O Marco Civil da Internet obriga o provedor de aplicação constituído como pessoa jurídica com fins econômicos a manter os registros de acesso à aplicação por seis meses, em ambiente controlado e de segurança, e proíbe que eles sejam fornecidos a terceiros fora das hipóteses legais.",
        ],
        base: "Base legal: Lei 12.965/2014 (Marco Civil da Internet), art. 15, caput e §2º, e Decreto 8.771/2016, arts. 13 a 15, sobre padrões de segurança na guarda. Na LGPD, o fundamento é o art. 7º, II, cumprimento de obrigação legal pelo controlador.",
      },
      {
        titulo: "4. O que acontece quando você usa os botões de contato",
        paragrafos: [
          "Os botões de diagnóstico levam a uma conversa no WhatsApp, com a mensagem já escrita. Nada é enviado até que você mesmo envie, e nenhum dado seu passa por este site no caminho: o link apenas abre o aplicativo, sem informar ao WhatsApp de que página você veio.",
          "A partir daí a conversa acontece dentro do WhatsApp, serviço do grupo Meta, que é controlador independente do tratamento feito na própria plataforma e tem política de privacidade própria. Como a Meta opera servidores fora do Brasil, essa etapa envolve transferência internacional de dados, submetida ao capítulo próprio da LGPD. O que você nos escrever é usado apenas para responder você e para avaliar um eventual contrato.",
          "O endereço de e-mail no rodapé funciona do mesmo jeito: abre o seu próprio programa de e-mail, com o destinatário preenchido, e a mensagem trafega pelo seu provedor.",
        ],
        base: "Base legal: LGPD, art. 7º, V, quando o contato se destina a medidas preliminares de contrato a seu pedido, e art. 7º, IX, legítimo interesse, quando se trata apenas de responder a uma mensagem sua. Transferência internacional: arts. 33 a 36.",
      },
      {
        titulo: "5. Quem mais toca nesses dados",
        paragrafos: [
          "O conteúdo do site e os registros técnicos ficam com os prestadores de infraestrutura que hospedam a aplicação e a sua base de conteúdo. Eles atuam como operadores, ou seja, tratam os dados por nossa conta e seguindo as nossas instruções, sem finalidade própria. Não vendemos, cedemos nem compartilhamos dados pessoais com terceiros para fins comerciais.",
        ],
        base: "Base legal: LGPD, art. 5º, VII (operador) e art. 39, que vincula o operador às instruções do controlador.",
      },
      {
        titulo: "6. Por quanto tempo guardamos",
        paragrafos: [
          "Os registros de acesso à aplicação são mantidos pelo prazo legal de seis meses e depois eliminados, salvo ordem judicial em contrário. As mensagens que você nos envia ficam enquanto durar o atendimento e o prazo em que precisamos delas para defender um direito, e são eliminadas depois disso.",
        ],
        base: "Base legal: Marco Civil, art. 15, caput, e LGPD, art. 15, I e IV, e art. 16, que admite a conservação para cumprimento de obrigação legal e para exercício regular de direitos.",
      },
      {
        titulo: "7. Segurança e incidentes",
        paragrafos: [
          "Adotamos medidas técnicas e administrativas para proteger os dados de acesso não autorizado e de situações acidentais ou ilícitas. O tráfego do site é cifrado, e as rotas internas que recebem conteúdo editorial exigem autenticação por token, com comparação em tempo constante para não vazar informação pelo tempo de resposta.",
          "Se ocorrer incidente de segurança capaz de acarretar risco ou dano relevante a você, comunicaremos a Autoridade Nacional de Proteção de Dados e os titulares afetados em prazo razoável.",
        ],
        base: "Base legal: LGPD, arts. 46 a 49 (segurança e boas práticas) e art. 48 (comunicação de incidente).",
      },
      {
        titulo: "8. Seus direitos",
        paragrafos: [
          "A qualquer momento, e sem custo, você pode nos pedir: confirmação da existência de tratamento; acesso aos dados; correção de dados incompletos, inexatos ou desatualizados; anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei; portabilidade a outro fornecedor; eliminação dos dados tratados com o seu consentimento; informação sobre com quem compartilhamos; informação sobre a possibilidade de não consentir e as consequências disso; e revogação do consentimento.",
          "Para exercer qualquer um deles, escreva para {email}. Respondemos de imediato, em formato simplificado, ou de forma completa em até quinze dias contados do seu pedido. Se você se opuser a um tratamento fundado em legítimo interesse, basta dizer, e reavaliamos.",
          "Você também pode peticionar diretamente à Autoridade Nacional de Proteção de Dados contra o controlador, se entender que algum direito seu não foi atendido.",
        ],
        base: "Base legal: LGPD, art. 18, I a IX, art. 19, I e II (prazos de resposta), art. 18, §1º (petição à ANPD) e art. 18, §2º (oposição a tratamento dispensado de consentimento).",
      },
      {
        titulo: "9. Canal do encarregado",
        paragrafos: [
          "O endereço {email} é o canal oficial para comunicação sobre proteção de dados, e é por ele que a ANPD e os titulares devem nos procurar. Operamos em escala compatível com a de agente de tratamento de pequeno porte, condição em que a indicação formal de encarregado é facultativa, mas a existência deste canal não é.",
        ],
        base: "Base legal: LGPD, art. 41, e Resolução CD/ANPD nº 2/2022, art. 11, que dispensa agentes de pequeno porte de indicar encarregado desde que mantenham canal de comunicação.",
      },
      {
        titulo: "10. Operação na União Europeia",
        paragrafos: [
          "Parte da nossa operação fica em Valência, Espanha. No que o tratamento de dados ocorrer no contexto das atividades desse estabelecimento, aplica-se também o Regulamento Geral de Proteção de Dados europeu, cumulativamente com a LGPD. Onde as duas normas divergirem em extensão, vale para você a que for mais protetiva.",
          "Sob o RGPD, os fundamentos do tratamento aqui descrito são os mesmos, lidos pelos seus dispositivos correspondentes: execução de medidas pré-contratuais a seu pedido, cumprimento de obrigação legal e interesse legítimo. Os seus direitos incluem, além dos já listados acima, a limitação do tratamento, a oposição a tratamento fundado em interesse legítimo e o direito de não ficar sujeito a decisão tomada exclusivamente por meio automatizado que produza efeitos jurídicos sobre você. Este site não toma decisões desse tipo.",
          "Se você estiver na União Europeia e entender que algum direito seu não foi atendido, pode apresentar reclamação à autoridade de controlo do seu país. Na Espanha, essa autoridade é a Agencia Española de Protección de Datos.",
        ],
        base: "Base legal: Regulamento (UE) 2016/679 (RGPD), art. 3º, 1, sobre tratamento no contexto das atividades de um estabelecimento na União; art. 6º, 1, alíneas b, c e f, sobre os fundamentos de licitude; arts. 15 a 22, sobre os direitos do titular; e art. 77, sobre o direito de reclamação à autoridade de controlo. Na LGPD, art. 3º, I e II.",
      },
      {
        titulo: "11. Quando isso mudar",
        paragrafos: [
          "O texto acima descreve a situação de hoje. Se passarmos a usar ferramentas de medição, cookies não essenciais ou formulários no site, atualizamos esta página antes de a mudança entrar no ar, com a data no topo indicando a revisão, porque informação prévia e adequada sobre o tratamento é direito do titular e não cortesia.",
        ],
        base: "Base legal: LGPD, art. 6º, VI (transparência) e art. 9º, que garante acesso facilitado às informações sobre o tratamento.",
      },
    ],
  },

  compliance: {
    metaTitulo: "Compliance Jurídico",
    metaDescricao:
      "Identificação da empresa, natureza do conteúdo do site, origem e alcance dos números apresentados nos cases, uso de marcas de terceiros e legislação aplicável.",
    rotulo: "Informações Legais",
    titulo: "Compliance Jurídico",
    atualizadoRotulo: "Última atualização",
    intro:
      "Esta página reúne as informações legais deste site: quem responde por ele, o que o conteúdo significa, de onde vêm os números apresentados e até onde eles podem ser lidos como promessa. Cada seção indica o dispositivo que a sustenta, para que o texto possa ser conferido.",
    secoes: [
      {
        titulo: "1. Identificação",
        paragrafos: [
          "Este site é mantido por {controlador}. Canal de contato para qualquer assunto tratado nesta página: {email}.",
        ],
        base: "Base legal: Lei 12.965/2014 (Marco Civil da Internet), art. 7º, que assegura ao usuário informações claras sobre quem presta o serviço, e Lei 8.078/1990 (Código de Defesa do Consumidor), art. 31, sobre o dever de informação correta e ostensiva.",
      },
      {
        titulo: "2. Natureza do conteúdo",
        paragrafos: [
          "As páginas deste site têm caráter informativo e publicitário. Descrições de serviço, prazos e formatos de trabalho apresentam o que fazemos, e o escopo de cada trabalho, com entregáveis, prazos e valores, é definido em contrato firmado entre as partes.",
          "Isso não significa que o que está escrito aqui possa ser desdito depois. A informação publicitária suficientemente precisa obriga quem a veicula e integra o contrato que vier a ser celebrado. Por isso o texto do site é escrito para ser cumprido, e não como peça de efeito.",
        ],
        base: "Base legal: CDC, arts. 30 e 35, sobre vinculação da oferta, e Código Civil, art. 427, sobre a força obrigatória da proposta.",
      },
      {
        titulo: "3. Os números apresentados nos cases",
        paragrafos: [
          "Os percentuais exibidos ao lado de cada cliente são **resultados obtidos em trabalho nosso para aquela empresa**. Cada card nomeia a métrica a que o número se refere, como crescimento de marca ou aumento de venda na loja online, e o cabeçalho da seção informa a janela de análise.",
          "Esses números são específicos de cada caso. Eles dependem do setor, do ponto de partida, da verba, do produto e do tempo de trabalho, e **não constituem promessa nem previsão de resultado equivalente para outro cliente**. Nenhuma contratação é feita com garantia de reprodução desses índices.",
          "Os dados de origem de cada número ficam disponíveis a quem pedir pelo e-mail acima, dentro do que a confidencialidade acordada com cada cliente permitir. Se algum card passar a exibir dado de mercado em vez de resultado nosso, ele nomeará o setor a que o número se refere, e a fonte será igualmente informada.",
        ],
        base: "Base legal: CDC, art. 37, §1º, que considera enganosa a publicidade capaz de induzir a erro sobre a natureza ou as características do serviço, e art. 36, parágrafo único, que obriga o anunciante a manter os dados fáticos e técnicos que dão sustentação à mensagem. No mesmo sentido, Código Brasileiro de Autorregulamentação Publicitária, art. 27, §1º e §2º, sobre veracidade e comprovação.",
      },
      {
        titulo: "4. Marcas e nomes de terceiros",
        paragrafos: [
          "Nomes e logotipos de empresas exibidos neste site pertencem aos respectivos titulares e são usados para identificar relações comerciais reais, sem sugerir que sejam de nossa titularidade e sem implicar endosso ou patrocínio além do vínculo existente.",
          "A exibição de cada marca, e a divulgação do resultado a ela associado, ocorre com autorização do respectivo titular. Autorização de uso de marca é revogável, e a revogação produz efeito a partir do momento em que nos chega.",
          "Se você é titular de alguma dessas marcas e quer que a menção seja ajustada ou removida, escreva para {email} e atendemos.",
        ],
        base: "Base legal: Lei 9.279/1996 (Lei da Propriedade Industrial), art. 130, III, sobre o direito de zelar pela integridade e reputação da marca, e art. 132, IV, que ressalva o uso da marca por terceiros quando não houver conotação comercial indevida. A autorização do titular é o que afasta a hipótese de uso indevido do art. 190, I, da mesma lei.",
      },
      {
        titulo: "5. Propriedade intelectual do site",
        paragrafos: [
          "O conteúdo editorial, a identidade visual, as fotografias produzidas para este site e o código que o executa são de titularidade de {controlador}, salvo o material de terceiros identificado na seção anterior. Reprodução, distribuição ou adaptação dependem de autorização prévia e expressa.",
        ],
        base: "Base legal: Lei 9.610/1998 (Lei de Direitos Autorais), art. 7º, sobre obras protegidas, e arts. 28 e 29, que condicionam a utilização à autorização prévia do titular. Para o código, Lei 9.609/1998, art. 2º.",
      },
      {
        titulo: "6. Conteúdo do blog",
        paragrafos: [
          "Os textos publicados no blog têm finalidade informativa e refletem a análise dos seus autores na data de publicação. Eles não constituem consultoria individualizada, e decisão de negócio tomada com base neles deve considerar o caso concreto.",
        ],
        base: "Base legal: CDC, art. 31, sobre informação adequada, e Lei 9.610/1998, art. 24, sobre direitos morais do autor, incluindo o de ter o nome indicado na obra.",
      },
      {
        titulo: "7. Legislação aplicável e foro",
        paragrafos: [
          "Aplica-se a legislação brasileira a este site e ao seu conteúdo. Eventual controvérsia entre empresas será dirimida no foro da comarca da sede da controladora, salvo disposição contratual específica.",
          "Quando a relação for de consumo, essa eleição não prevalece: o consumidor pode propor ação no foro do seu próprio domicílio, e é nula a cláusula que dificulte a sua defesa.",
        ],
        base: "Base legal: Código de Processo Civil, art. 63, sobre eleição de foro, e art. 63, §3º, que permite ao juiz reputá-la ineficaz quando abusiva. CDC, art. 101, I, sobre o foro do domicílio do consumidor, e art. 51, IV e XV, sobre nulidade de cláusulas abusivas.",
      },
      {
        titulo: "8. Reclamações e tratamento de dados",
        paragrafos: [
          "Reclamações sobre qualquer ponto desta página podem ser enviadas para {email}, e são respondidas pelo mesmo canal. O tratamento de dados pessoais está descrito em {privacidade}, com as bases legais de cada finalidade.",
        ],
      },
    ],
  },
};

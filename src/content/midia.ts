/**
 * Caminhos de imagem e links externos compartilhados pelos três idiomas.
 *
 * Vivem aqui, e não dentro de cada arquivo de conteúdo, porque um caminho
 * repetido três vezes é um caminho que pode divergir em uma delas — e o
 * sintoma seria uma imagem quebrada só em espanhol, que é exatamente o tipo
 * de defeito que ninguém percebe por meses.
 */

/* A mesma foto de estação de trabalho, com os dois monitores fundidos num
   ultrawide só e o painel real do cliente projetado na perspectiva da tela.
   O notebook ao lado recebeu uma programação de mídia por canal, sem data
   nenhuma. A foto original segue em hero.jpg, intacta, e é a base de onde
   esta é gerada. */
export const HERO_IMAGE = "/images/hero-estacao.jpg";

export const CASES_DIR = "/images/cases";

/**
 * Destino dos botões de diagnóstico — o do topo e o da seção final.
 *
 * É o mesmo número do rodapé, só que sem formatação: o wa.me aceita dígitos e
 * nada mais. A mensagem já vem escrita para quem chega do outro lado saber o
 * que está sendo pedido, e vem no idioma de quem clicou: quem navegou o site
 * inteiro em espanhol não deveria ter a conversa aberta em português.
 */
const WHATSAPP_NUMERO = "557199216851";

function whatsapp(mensagem: string): string {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

export const WHATSAPP_PT = whatsapp(
  "Olá! Vim pelo site da Agência M3 e gostaria de solicitar o diagnóstico gratuito.",
);

export const WHATSAPP_EN = whatsapp(
  "Hello! I came from the Agência M3 website and would like to request the free diagnosis.",
);

export const WHATSAPP_ES = whatsapp(
  "¡Hola! Vengo del sitio de Agência M3 y me gustaría solicitar el diagnóstico gratuito.",
);

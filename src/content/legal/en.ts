import type { ConteudoLegal } from "./tipos";

/**
 * Legal text in English — a courtesy translation.
 *
 * Brazilian statutes keep their Portuguese names, with a short gloss the first
 * time each appears ("Lei 13.709/2018, the LGPD, Brazil's data protection
 * act"). Inventing English titles for them would produce text that reads well
 * and cites nothing: there is no official English name to cite, and a reader
 * who wants to check the source needs the name that exists.
 *
 * The Portuguese version at /privacidade and /compliance is the one that
 * governs. That is stated in the closing section of each page, rather than in
 * a banner, because it is a fact about the text and belongs with the rest of
 * the text.
 */
export const legalEn: ConteudoLegal = {
  privacidade: {
    metaTitulo: "Privacy & Governance",
    metaDescricao:
      "How this site handles personal data: the controller, the legal bases, access logs, your rights under Brazil's LGPD and the channel to exercise them.",
    rotulo: "Data Governance",
    titulo: "Privacy & Governance",
    atualizadoRotulo: "Last updated",
    intro:
      "This page describes what this site does with the personal data of the people who visit it, on what legal grounds, and how you exercise your rights. The short answer today is that the site collects nothing of its own accord, and the text below explains exactly what that means and what still exists regardless.",
    secoes: [
      {
        titulo: "1. Who the controller is",
        paragrafos: [
          "{controlador} is the controller of the personal data processed in connection with this site, being the party that decides on the purpose and the means of that processing. Contact for any privacy matter: {email}.",
        ],
        base: "Legal basis: Lei 13.709/2018 (the LGPD, Brazil's general data protection act), art. 5, VI, which defines the controller as the party to whom decisions about processing belong.",
      },
      {
        titulo: "2. What this site collects on its own",
        paragrafos: [
          "Nothing that identifies you. There is no sign-up form, no tracking cookie and no audience measurement tool installed: no Google Analytics, no Meta Pixel, no Hotjar, nothing equivalent. There is also no advertising cookie and no browsing profile being built.",
          "That absence is a decision, not an oversight: the LGPD requires processing to be limited to the minimum necessary for the intended purpose, and the purpose of this site is to present services, not to watch the people reading about them.",
        ],
        base: "Legal basis: LGPD, art. 6, III (necessity) and art. 6, I (specific, disclosed purpose).",
      },
      {
        titulo: "3. Site access logs",
        paragrafos: [
          "Like any application on the internet, the server that delivers these pages automatically records technical data for each request: IP address, date and time with time zone, and the page requested. These logs are not used to identify visitors, are not cross-referenced against any other database and feed no commercial analysis.",
          "Keeping those logs is not optional for us. Brazil's Marco Civil da Internet requires an application provider incorporated as a for-profit legal entity to retain application access logs for six months, in a controlled and secure environment, and prohibits handing them to third parties outside the cases the law allows.",
        ],
        base: "Legal basis: Lei 12.965/2014 (Marco Civil da Internet, Brazil's internet civil rights framework), art. 15, main paragraph and §2, and Decreto 8.771/2016, arts. 13 to 15, on security standards for retention. Under the LGPD, the ground is art. 7, II, compliance with a legal obligation by the controller.",
      },
      {
        titulo: "4. What happens when you use the contact buttons",
        paragrafos: [
          "The diagnosis buttons open a WhatsApp conversation with the message already written. Nothing is sent until you send it yourself, and none of your data passes through this site on the way: the link simply opens the app, without telling WhatsApp which page you came from.",
          "From that point the conversation happens inside WhatsApp, a Meta group service, which is an independent controller of the processing carried out on its own platform and has its own privacy policy. Because Meta operates servers outside Brazil, this step involves an international transfer of data, governed by the LGPD's own chapter on the subject. Whatever you write to us is used only to reply to you and to assess a possible engagement.",
          "The email address in the footer works the same way: it opens your own mail program with the recipient filled in, and the message travels through your provider.",
        ],
        base: "Legal basis: LGPD, art. 7, V, where the contact relates to pre-contractual steps taken at your request, and art. 7, IX, legitimate interest, where it is simply a matter of replying to a message from you. International transfer: arts. 33 to 36.",
      },
      {
        titulo: "5. Who else touches this data",
        paragrafos: [
          "The site content and the technical logs sit with the infrastructure providers that host the application and its content database. They act as processors, meaning they handle the data on our behalf and under our instructions, with no purpose of their own. We do not sell, assign or share personal data with third parties for commercial purposes.",
        ],
        base: "Legal basis: LGPD, art. 5, VII (processor) and art. 39, which binds the processor to the controller's instructions.",
      },
      {
        titulo: "6. How long we keep it",
        paragrafos: [
          "Application access logs are kept for the statutory period of six months and then deleted, barring a court order to the contrary. The messages you send us are kept for as long as the conversation lasts and for as long as we need them to defend a legal right, and are deleted after that.",
        ],
        base: "Legal basis: Marco Civil, art. 15, main paragraph, and LGPD, art. 15, I and IV, and art. 16, which allows retention to comply with a legal obligation and for the regular exercise of rights.",
      },
      {
        titulo: "7. Security and incidents",
        paragrafos: [
          "We apply technical and administrative measures to protect data against unauthorised access and against accidental or unlawful situations. Site traffic is encrypted, and the internal routes that receive editorial content require token authentication, compared in constant time so that nothing leaks through response timing.",
          "Should a security incident occur that is capable of causing you relevant risk or harm, we will notify Brazil's Autoridade Nacional de Proteção de Dados (ANPD) and the affected data subjects within a reasonable period.",
        ],
        base: "Legal basis: LGPD, arts. 46 to 49 (security and good practice) and art. 48 (incident notification).",
      },
      {
        titulo: "8. Your rights",
        paragrafos: [
          "At any time, and at no cost, you may ask us for: confirmation that processing exists; access to the data; correction of incomplete, inaccurate or outdated data; anonymisation, blocking or deletion of data that is unnecessary, excessive or processed unlawfully; portability to another provider; deletion of data processed with your consent; information about who we share it with; information about your option to withhold consent and the consequences of doing so; and withdrawal of consent.",
          "To exercise any of these, write to {email}. We reply immediately in simplified form, or in full within fifteen days of your request. If you object to processing grounded in legitimate interest, simply say so and we will reassess it.",
          "You may also petition the Autoridade Nacional de Proteção de Dados directly against the controller if you believe one of your rights has not been honoured.",
        ],
        base: "Legal basis: LGPD, art. 18, I to IX, art. 19, I and II (reply deadlines), art. 18, §1 (petition to the ANPD) and art. 18, §2 (objection to processing that does not require consent).",
      },
      {
        titulo: "9. Data protection channel",
        paragrafos: [
          "The address {email} is the official channel for communication about data protection, and it is where the ANPD and data subjects should reach us. We operate at a scale consistent with that of a small-scale processing agent, a condition under which formally appointing a data protection officer is optional, but maintaining this channel is not.",
        ],
        base: "Legal basis: LGPD, art. 41, and Resolução CD/ANPD nº 2/2022, art. 11, which exempts small-scale agents from appointing an officer provided they maintain a communication channel.",
      },
      {
        titulo: "10. Operations in the European Union",
        paragrafos: [
          "Part of our operation sits in Valencia, Spain. To the extent that data processing occurs in the context of the activities of that establishment, the European General Data Protection Regulation applies as well, cumulatively with the LGPD. Where the two diverge in scope, the one more protective of you prevails.",
          "Under the GDPR the grounds for the processing described here are the same, read through the corresponding provisions: performance of pre-contractual steps at your request, compliance with a legal obligation, and legitimate interest. Your rights include, in addition to those listed above, restriction of processing, objection to processing based on legitimate interest, and the right not to be subject to a decision based solely on automated processing which produces legal effects concerning you. This site makes no such decisions.",
          "If you are in the European Union and believe one of your rights has not been honoured, you may lodge a complaint with the supervisory authority of your country. In Spain, that authority is the Agencia Española de Protección de Datos.",
        ],
        base: "Legal basis: Regulation (EU) 2016/679 (GDPR), art. 3(1), on processing in the context of the activities of an establishment in the Union; art. 6(1)(b), (c) and (f), on lawful grounds; arts. 15 to 22, on data subject rights; and art. 77, on the right to lodge a complaint with a supervisory authority. Under the LGPD, art. 3, I and II.",
      },
      {
        titulo: "11. When this changes",
        paragrafos: [
          "The text above describes the situation as it stands today. If we start using measurement tools, non-essential cookies or forms on the site, we will update this page before the change goes live, with the date at the top marking the revision, because prior and adequate information about processing is a right of the data subject and not a courtesy.",
          "This English text is a translation provided for convenience. The Portuguese version of this page is the governing one, and in the event of any discrepancy it prevails.",
        ],
        base: "Legal basis: LGPD, art. 6, VI (transparency) and art. 9, which guarantees facilitated access to information about the processing.",
      },
    ],
  },

  compliance: {
    metaTitulo: "Legal Compliance",
    metaDescricao:
      "Company identification, the nature of the content on this site, the origin and the reach of the figures shown in the case studies, use of third-party trademarks and applicable law.",
    rotulo: "Legal Information",
    titulo: "Legal Compliance",
    atualizadoRotulo: "Last updated",
    intro:
      "This page gathers the legal information for this site: who answers for it, what the content means, where the figures shown come from, and how far they may be read as a promise. Each section cites the provision that supports it, so that the text can be checked.",
    secoes: [
      {
        titulo: "1. Identification",
        paragrafos: [
          "This site is maintained by {controlador}. Contact channel for any matter covered on this page: {email}.",
        ],
        base: "Legal basis: Lei 12.965/2014 (Marco Civil da Internet), art. 7, which guarantees users clear information about who provides the service, and Lei 8.078/1990 (the CDC, Brazil's consumer protection code), art. 31, on the duty to provide correct and conspicuous information.",
      },
      {
        titulo: "2. The nature of the content",
        paragrafos: [
          "The pages of this site are informational and promotional in character. Service descriptions, timeframes and ways of working present what we do, and the scope of each engagement, with deliverables, deadlines and fees, is set out in a contract signed by the parties.",
          "That does not mean what is written here can be walked back later. Sufficiently precise advertising information binds whoever publishes it and forms part of any contract that follows. That is why the text on this site is written to be honoured, not for effect.",
        ],
        base: "Legal basis: CDC, arts. 30 and 35, on the binding force of an offer, and the Código Civil, art. 427, on the binding nature of a proposal.",
      },
      {
        titulo: "3. The figures shown in the case studies",
        paragrafos: [
          "The percentages shown beside each client are **results obtained through our work for that company**. Each card names the metric the figure refers to, such as brand growth or an increase in online store sales, and the section heading states the analysis window.",
          "These figures are specific to each case. They depend on the sector, the starting point, the budget, the product and the length of the engagement, and **they are not a promise or a forecast of an equivalent result for any other client**. No engagement is entered into with a guarantee that these figures will be reproduced.",
          "The source data behind each figure is available to anyone who asks at the email address above, within the limits of the confidentiality agreed with each client. Should any card come to show market data instead of a result of ours, it will name the sector the figure refers to, and the source will be stated just the same.",
        ],
        base: "Legal basis: CDC, art. 37, §1, which treats as misleading any advertising capable of inducing error about the nature or characteristics of a service, and art. 36, sole paragraph, which requires the advertiser to retain the factual and technical data supporting the message. To the same effect, the Código Brasileiro de Autorregulamentação Publicitária, art. 27, §1 and §2, on truthfulness and substantiation.",
      },
      {
        titulo: "4. Third-party trademarks and names",
        paragrafos: [
          "Company names and logos shown on this site belong to their respective owners and are used to identify real commercial relationships, without suggesting that they are ours and without implying endorsement or sponsorship beyond the relationship that exists.",
          "Each trademark is displayed, and the associated result disclosed, with the owner's authorisation. Authorisation to use a trademark is revocable, and revocation takes effect from the moment it reaches us.",
          "If you own one of these trademarks and want the mention adjusted or removed, write to {email} and we will do so.",
        ],
        base: "Legal basis: Lei 9.279/1996 (Brazil's industrial property act), art. 130, III, on the right to safeguard the integrity and reputation of a mark, and art. 132, IV, which carves out third-party use of a mark where there is no improper commercial connotation. The owner's authorisation is what removes the case from the improper-use provision in art. 190, I, of the same act.",
      },
      {
        titulo: "5. Intellectual property in this site",
        paragrafos: [
          "The editorial content, the visual identity, the photography produced for this site and the code that runs it are owned by {controlador}, except for the third-party material identified in the previous section. Reproduction, distribution or adaptation require prior express authorisation.",
        ],
        base: "Legal basis: Lei 9.610/1998 (Brazil's copyright act), art. 7, on protected works, and arts. 28 and 29, which make use conditional on the owner's prior authorisation. For the code, Lei 9.609/1998, art. 2.",
      },
      {
        titulo: "6. Blog content",
        paragrafos: [
          "Articles published on the blog are informational and reflect their authors' analysis on the date of publication. They are not individualised consulting, and a business decision taken on the basis of them should account for the specific case.",
        ],
        base: "Legal basis: CDC, art. 31, on adequate information, and Lei 9.610/1998, art. 24, on the moral rights of the author, including the right to be named in the work.",
      },
      {
        titulo: "7. Governing law and venue",
        paragrafos: [
          "Brazilian law applies to this site and its content. Any dispute between companies will be settled in the courts of the district where the controller has its seat, unless a contract provides otherwise.",
          "Where the relationship is a consumer one, that choice does not prevail: the consumer may bring an action in the courts of their own domicile, and any clause that hampers their defence is void.",
        ],
        base: "Legal basis: Código de Processo Civil, art. 63, on choice of venue, and art. 63, §3, which allows a judge to treat it as ineffective where abusive. CDC, art. 101, I, on the venue of the consumer's domicile, and art. 51, IV and XV, on the nullity of abusive clauses.",
      },
      {
        titulo: "8. Complaints, data processing and the governing version",
        paragrafos: [
          "Complaints about any point on this page may be sent to {email}, and are answered through the same channel. The processing of personal data is described in {privacidade}, with the legal basis for each purpose.",
          "This English text is a translation provided for convenience. The Portuguese version of this page is the governing one, and in the event of any discrepancy it prevails.",
        ],
      },
    ],
  },
};

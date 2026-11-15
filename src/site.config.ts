/**
 * ============================================================
 *  TODO O CONTEÚDO DA LANDING PAGE ESTÁ NESTE FICHEIRO
 * ============================================================
 * Para um novo imóvel:
 *  1. Altera os textos/valores abaixo.
 *  2. Troca as imagens em src/assets/ (mesmos nomes) ou muda os imports aqui.
 *
 * Dicas:
 *  - Texto a negrito: escreve entre **asteriscos duplos**  → "CPCV com **10%** de sinal"
 *  - Títulos: [linha normal, linha em itálico]
 *  - A tradução para inglês é automática (Google Translate), não é preciso traduzir nada.
 *  - Só o index.html (título do separador / partilha nas redes) é editado à parte.
 */
import {
  Car,
  MapPin,
  MoveVertical,
  Shield,
  Sun,
  TreePine,
  Waves,
  Wind,
} from "lucide-react";

/* ---------- Imagens e vídeo (ficheiros em src/assets/) ---------- */
import heroImage from "./assets/panoramica.jpg";
import emblem from "./assets/rvpt.png";
import galleryCover from "./assets/primeirapagina.jpg";
import sala1 from "./assets/sala1.jpg";
import cozinha2 from "./assets/cozinha2.jpg";
import is1 from "./assets/is1.jpg";
import sala8 from "./assets/sala8.jpg";
import quarto1 from "./assets/quarto1.jpg";
import consultantPhoto from "./assets/profile.png";
import aboutPhoto from "./assets/profile2.png";
import logoLeft from "./assets/logocb.png";
import logoRight from "./assets/logoTeam.png";
import salaPhoto from "./assets/sala.jpg";
import plan from "./assets/planta.png";
import qr from "./assets/qr.png";
import view1 from "./assets/vistasala.jpeg";
import buildingPhoto from "./assets/predio.jpg";
import view2 from "./assets/panorama.jpeg";
import mapImage from "./assets/frame.jpg";
import footerLogo from "./assets/footer.png";
import video from "./assets/video.mp4";

export const site = {
  /* ============ IMÓVEL ============ */
  property: {
    /** Título e subtítulo grandes no topo */
    heroTitle: "dê o próximo passo connosco",
    heroSubtitle: "uma propriedade, duas soluções",
    /** Morada mostrada junto aos preços (a 2ª parte aparece em itálico) */
    addressStreet: "Av. das Escolas, 12,",
    addressHighlight: "Portela",
    /** Preço da opção Investimento / Habitação Própria */
    priceInvestment: "232.000 €",
    priceHousing: "495.000 €",
    /** Links dos anúncios (abrem ao clicar na imagem de cada opção) */
    listingInvestmentUrl: "https://carlos-barata.century21.pt/comprar/C0222-07203",
    listingHousingUrl: "https://carlos-barata.century21.pt/comprar/C0222-07202",
    /** Números do topo da página */
    specs: { rooms: "3", bathrooms: "2", area: "104 m²", parking: "1" },
  },

  /* ============ IMAGENS ============ */
  images: {
    hero: heroImage,
    heroAlt: "Fachada do imóvel",
    emblem, // logo/emblema por cima do título
    gallery: [
      { src: sala1, alt: "Sala de estar com sofá amplo e janelas do piso ao teto" },
      { src: cozinha2, alt: "Cozinha" },
      { src: is1, alt: "Mesa de jantar com design contemporâneo" },
      { src: sala8, alt: "Sala de estar" },
      { src: quarto1, alt: "Quarto com vista para o jardim" },
      { src: galleryCover, alt: "Vista do imóvel" },
    ],
    aboutPhoto,
    aboutLogos: [logoLeft, logoRight],
    investmentPhoto: salaPhoto,
    housingPhoto: buildingPhoto,
    plan, // planta
    qr,
    investmentView: view1, // imagem clicável (anúncio Investimento)
    housingView: view2, // imagem clicável (anúncio Habitação)
    virtualTourPoster: sala1, // imagem do botão "Visita Virtual" no telemóvel
    map: mapImage,
    footerLogo,
    video,
  },

  /* ============ SOBRE MIM ============ */
  about: {
    title: ["O que me proponho", "fazer por si..."],
    paragraphs: [
      "A minha abordagem assenta no rigor, transparência e na gestão de expectativas baseada em dados, pilares que entendo serem essenciais para a sua decisão. Com um percurso multidisciplinar em finanças, tecnologia e imobiliário, entendo a necessidade de processos eficientes, ágeis e sem ruído.",
      "O meu compromisso é gerir o seu imóvel com a mesma visão estratégica que aplicaria no seu negócio: foco total em resultados, otimização de tempo e proteção absoluta do seu investimento. Conte comigo e com a estrutura da NT Real Estate Team, bem como do nosso parceiro de eleição, a Century 21 Colombo, para uma mediação de alto nível, onde a sua prioridade é o meu único indicador de sucesso.",
    ],
  },

  /* ============ INVESTIMENTO ============ */
  investment: {
    title1: ["Nua Propriedade + Usufruto Vitalício", "Um investimento à sua medida"],
    title2: ["Uma oportunidade de", "investimento sólido"],
    businessIntro:
      "Este tipo de investimento decorre da possibilidade de imobilizar capital que só estará disponível a médio/longo prazo, dependendo da idade do usufrutuário.",
    costsIntro:
      "No caso específico deste negócio, a proposta vem com pequenas alterações processuais a pedido do atual proprietário e futuro usufrutuário, como sejam, ficar do lado dele os seguintes custos:",
    costs: [
      "IMI",
      "Condomínio",
      "Seguro Multirriscos",
      "Água, luz, energia e comunicações",
      "Manutenção do apartamento",
    ],
    notes: [
      "Inexistência de qualquer renda a pagar.",
      "Usufruto vitalício, isto é, a posse do imóvel só passará para o futuro proprietário após o falecimento do usufrutuário.",
    ],
    valuation: {
      marketIntro:
        "Para imóveis de Tipologia T3/T4 remodelados na zona da Av. das Escolas, na Portela:",
      market: [
        "Valor de mercado conservador: **500.000 €**",
        "Valor de mercado provável: **525.000 € – 575.000 €**",
        "Valor premium (bem remodelado): **600.000 € ou mais**",
      ],
      scenarioIntro: "Cenário de valorização estimado **(15 anos)**",
      scenario: [
        "Conservador (3,3%/ano): **800.000 €**",
        "Provável (5,2%/ano): **950.000 € – 1.100.000 €**",
        "Muito favorável (6,7%/ano): **1.200.000 € – 1.400.000 €**",
      ],
    },
  },

  /* ============ HABITAÇÃO PRÓPRIA ============ */
  housing: {
    title1: ["Sofisticação e centralidade", "Apartamento T3 de Prestígio com vista rio"],
    title2: "A sua casa",
    business: [
      "Aquisição do imóvel com transmissão e posse após a escritura.",
      "CPCV de imediato com **10%** de sinal.",
      "Escritura a 90 dias com possibilidade de estender a mais 30 dias na forma de comodato.",
    ],
    valuation: {
      marketIntro:
        "Para imóveis de Tipologia T3/T4 remodelados na zona da Av. das Escolas, na Portela:",
      market: [
        "Valor de mercado conservador: **500.000 €**",
        "Valor de mercado provável: **525.000 € a 575.000 €**",
        "Valor premium (bem remodelado): **600.000 € ou mais**",
      ],
      scenarioIntro: "Cenário Valor estimado (15 anos)",
      scenario: [
        "Conservador (3,3%/ano): **800.000 €**",
        "Provável (5,2%/ano): **950.000 € – 1.100.000 €**",
        "Muito favorável (6,7%/ano): **1.200.000 € – 1.400.000 €**",
      ],
    },
    quality: [
      "Qualidade e valorização contínua.",
      "Sistema de climatização Mitsubishi Electric com 2 unidades (em garantia).",
      "Caixilharia com vidro duplo para conforto térmico e acústico superior.",
      "Canalização e componente elétrica totalmente atualizadas.",
      "Pintura e impermeabilização recentemente intervencionadas.",
    ],
  },

  /* ============ DIFERENCIAIS (ícones: lucide-react) ============ */
  amenities: [
    { icon: Waves, label: "Vista Rio" },
    { icon: Sun, label: "Duas frentes" },
    { icon: Shield, label: "Segurança" },
    { icon: Wind, label: "Ar condicionado" },
    { icon: MoveVertical, label: "Elevadores" },
    { icon: TreePine, label: "Próximo ao Parque das Nações" },
    { icon: Car, label: "Box com mezzanine" },
    { icon: MapPin, label: "Localização Premium" },
  ],

  /* ============ GALERIA / VÍDEO / VIRTUAL TOUR ============ */
  gallery: { title: ["Cada ambiente,", "uma", "experiência"] }, // [antes, antes do itálico, itálico]
  video: { title: ["Conheça o imóvel", "em movimento"] },
  virtualTour: {
    title: ["Explore cada espaço", "como se lá estivesse"],
    url: "https://virtualhome360.pt/app/viewer/t3-portela",
  },

  /* ============ LOCALIZAÇÃO ============ */
  location: {
    title: ["Portela de Sacavém,", "junto ao Parque das Nações"],
    addressLines: ["Avenida das escolas, 12", "Portela de Sacavém, Loures - Portugal"],
    places: [
      { label: "Centro Comercial da Portela", dist: "3 min" },
      { label: "Parque Desportivo", dist: "3 min" },
      { label: "Escolas", dist: "1 min" },
      { label: "Auditório da Portela", dist: "1 min" },
    ],
    mapLabel: "Portela",
    mapUrl:
      "https://www.google.pt/maps/place/Av.+das+Escolas+12,+Portela/@38.7879317,-9.1197607,901a,35y,90h,39.19t/data=!3m1!1e3!4m15!1m8!3m7!1s0xd19321a9b24d53d:0xcadff7f30df23b9b!2sAv.+das+Escolas+12,+Portela!3b1!8m2!3d38.786229!4d-9.111899!16s%2Fg%2F11c5k_mdfb!3m5!1s0xd19321a9b24d53d:0xcadff7f30df23b9b!8m2!3d38.786229!4d-9.111899!16s%2Fg%2F11c5k_mdfb?entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D",
  },

  /* ============ CONTACTO / CONSULTOR ============ */
  contact: {
    title: ["Agende sua", "visita exclusiva"],
    text: "Estarei disponível para apresentar pessoalmente cada detalhe desta residência excepcional. Visitas com hora marcada, sete dias por semana.",
  },
  consultant: {
    name: "Carlos Barata",
    role: "Consultor imobiliário",
    photo: consultantPhoto,
    phoneDisplay: "(351) 924007954",
    phoneE164: "+351924007954",
    /** WhatsApp: só dígitos, com indicativo */
    whatsapp: "351924007954",
    email: "carlos.barata@century21.pt",
    social: {
      facebook: "https://www.facebook.com/carlos.barata.oficial",
      linkedin: "https://www.linkedin.com/in/carlos-barata-c21-oficial/",
      instagram: "https://www.instagram.com/carlos_barata_oficial",
      tiktok: "https://www.tiktok.com/@carlos_barata_ofi",
      youtube: "https://www.youtube.com/@carlosmbarata_oficial",
    },
  },

  /* ============ RODAPÉ ============ */
  footer: {
    licence: "Numodi - Mediação Imobiliária, Lda. | AMI 7002",
    copyright: "© 2026 Century 21 Imóveis de Luxo. Todos os direitos reservados.",
  },
};

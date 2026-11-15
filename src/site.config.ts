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
    heroTitle: "Duas moradias, uma oportunidade para criar o seu futuro!",
    heroSubtitle: "T1 + T3 | Marés, Abrigada | Alenquer",
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
    specs: { rooms: "4", bathrooms: "3", area: "587 m²", parking: "1" },
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

  /* ============ A RESIDÊNCIA (secção 02) ============ */
  residence: {
    title: ["A casa é o lugar onde vive", "O lugar é a forma como vive."],
    text: "A qualidade deste projeto começa na ideia de base: duas moradias com identidade própria, numa propriedade pensada para viver ao ar livre. \nA T1 e a T3 não são iguais, e isso é uma vantagem, porque cada uma responde a uma necessidade diferente. \nA T1 dá uma entrada simples e imediata. \nA T3, com três quartos, tem espaço para uma família crescer e para necessidades diferentes ao longo do tempo. Numa remodelação futura, a T3 permite fazer bem desde o início: repensar a distribuição, escolher materiais de qualidade e modernizar os acabamentos, sem as limitações de uma casa já terminada. Essa liberdade é rara e é o que permite criar uma casa com carácter próprio, em vez de uma casa igual a tantas outras. \nEm resumo, a propriedade junta uma localização residencial, duas moradias, espaço exterior e margem para o comprador a moldar, e dá a quem a escolhe a oportunidade de fazer diferente, passo a passo.",
    tagline: "Localização privilegiada – Tudo à distância de uma caminhada",
    slogan: "DUAS MORADIAS. \nUMA OPORTUNIDADE.",
    addressStreet: "Rua José Malhado, 3",
    addressHighlight: "Marés, Abrigada, Alenquer",
    price: "299.000 €",
    /** Link do anúncio (abre ao clicar na planta) – TROCAR */
    listingUrl: "https://carlos-barata.century21.pt/comprar/C0222-07447",
  },

  /* ============ INVESTIMENTO ============ */
  investment: {
    title1: ["Nua Propriedade + Usufruto Vitalício", "Um investimento à sua medida"],
    title2: ["Uma oportunidade de", "investimento sólido"],
    /** Texto do cartão "O Negócio" – um parágrafo por linha */
    business: [
      "Nas Marés, Abrigada, a compra não é de uma casa, é de duas. A T1 e a T3 estão na mesma propriedade, mas têm estados diferentes e permitem caminhos diferentes. Com a mesma aquisição, o comprador fica com mais metros, mais flexibilidade e mais liberdade para decidir como e quando avança.",
      "O primeiro caminho é mudar-se já para a T1, que reúne as condições mínimas de habitabilidade, e remodelar a T3 com calma. Obra e vida acontecem no mesmo sítio, sem rendas a pagar noutro lado e com o projeto sempre à vista. Dá para fazer a remodelação por fases, ao ritmo do orçamento, e a T3 passa a ser a casa definitiva da família quando estiver pronta.",
      "O segundo caminho é remodelar as duas antes de entrar. Quem quer partir de uma base totalmente sua pode modernizar a T1 e transformar a T3 de raiz, escolhendo acabamentos, distribuição dos espaços e estilo. Fica uma propriedade coerente do princípio ao fim, pensada à medida de quem a vai habitar.",
      "Há ainda um terceiro caminho: viver numa moradia e preparar a outra para acolher familiares ou para um projeto de investimento. A brochura indica que estas soluções estão sempre sujeitas à verificação das condições legais e urbanísticas aplicáveis, por isso convém confirmar esse ponto antes de decidir.",
    ],
    /** Texto do cartão "A Valorização" – um parágrafo por linha */
    valuation: [
      "Este projeto valoriza-se por dois lados: pelo que já tem e pelo que o comprador lhe pode acrescentar. Ter duas moradias na mesma propriedade, com espaços exteriores, é uma combinação pouco comum. Essa característica já pesa por si só, porque o imóvel serve vários perfis de comprador e várias formas de utilização.",
      "A margem de valorização mais clara está na T3. Ao comprar uma moradia que precisa de remodelação, quem investe fica com o valor criado pela obra. Repensar os espaços interiores, modernizar os acabamentos e adaptar a casa ao estilo de vida dos proprietários transforma um imóvel por remodelar numa casa de três quartos pronta a habitar. A T1 acompanha esse processo: pode ser habitada desde o primeiro dia e melhorada gradualmente, o que a valoriza sem obrigar a parar a vida.",
      "Os espaços exteriores contam muito neste conjunto. Quando são tratados, com zonas de estar, de refeições ao ar livre, jardim ou pátio, passam a ser uma extensão da casa e um argumento forte numa futura venda ou arrendamento. A localização, numa zona residencial de Alenquer e fora dos centros urbanos mais movimentados, junta-se a isto e dá a quem a procura espaço, tranquilidade e identidade própria.",
      "A flexibilidade de uso também valoriza. Duas moradias independentes permitem acolher a família, ter uma casa de apoio ou estudar uma solução de rendimento, sempre sujeito às condições legais e urbanísticas aplicáveis. Um imóvel que se adapta às várias",
    ],
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

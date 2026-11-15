/**
 * Dados editáveis da landing page.
 * Para um novo imóvel: altera este ficheiro, substitui as imagens em src/assets/
 * (mantendo os nomes, ou atualiza os imports abaixo) e edita index.html + src/locales.
 */
import heroImage from "./assets/panoramica.jpg";
import galleryCover from "./assets/primeirapagina.jpg";
import sala1 from "./assets/sala1.jpg";
import cozinha2 from "./assets/cozinha2.jpg";
import is1 from "./assets/is1.jpg";
import sala8 from "./assets/sala8.jpg";
import quarto1 from "./assets/quarto1.jpg";
import consultantPhoto from "./assets/profile.png";

export const site = {
  /** Imóvel */
  property: {
    addressStreet: "Av. das Escolas, 12,",
    addressHighlight: "Portela", // aparece em itálico
    /** Preço da opção Investimento (nua propriedade) */
    priceInvestment: "232.000 €",
    /** Preço da opção Habitação Própria */
    priceHousing: "495.000 €",
    /** Links dos anúncios (abrem ao clicar na imagem de cada opção) */
    listingInvestmentUrl: "https://carlos-barata.century21.pt/comprar/C0222-07203",
    listingHousingUrl: "https://carlos-barata.century21.pt/comprar/C0222-07202",
    /** Números mostrados no topo da página */
    specs: {
      rooms: "3",
      bathrooms: "2",
      area: "104 m²",
      parking: "1",
    },
  },

  /** Imagens */
  images: {
    hero: heroImage,
    heroAlt: "Fachada do imóvel",
    gallery: [
      { src: sala1, alt: "Sala de estar com sofá amplo e janelas do piso ao teto" },
      { src: cozinha2, alt: "Cozinha" },
      { src: is1, alt: "Mesa de jantar com design contemporâneo" },
      { src: sala8, alt: "Sala de estar" },
      { src: quarto1, alt: "Quarto com vista para o jardim" },
      { src: galleryCover, alt: "Vista do imóvel" },
    ],
  },

  /** Consultor */
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

  /** Rodapé */
  footer: {
    licence: "Numodi - Mediação Imobiliária, Lda. | AMI 7002",
    copyright: "© 2026 Century 21 Imóveis de Luxo. Todos os direitos reservados.",
  },
};

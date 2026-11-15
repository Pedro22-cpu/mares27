import { type FormEvent, useEffect, useRef, useState } from "react";
import {
  Bed,
  Bath,
  Maximize2,
  Car,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  Wifi,
  Zap,
  Shield,
  Wind,
  Waves,
  TreePine,
  X,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  House,
  Italic,
  Sun,
  MoveVertical,
  LocateIcon,
  Menu
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { site } from "../site.config";

import { AutomaticTranslation } from "./components/AutomaticTranslation";

const HERO_IMG = site.images.hero;

const GALLERY = site.images.gallery;

const AMENITIES = site.amenities;

type ContactFormData = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

/** Converte **texto** em negrito */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, i) =>
        i % 2 ? <strong key={i}>{part}</strong> : part
      )}
    </>
  );
}

const images = site.images;

export default function App() {
  const [isEnglish, setIsEnglish] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [formData, setFormData] = useState<ContactFormData>({ nome: "", email: "", telefone: "", mensagem: "" });
  const [sent, setSent] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!videoRef.current) return;

      if (entry.isIntersecting) {
        videoRef.current
        .play()
        .catch(() => {});
      } else {
        videoRef.current.pause();
      }
    },
    {
      threshold: 0.5,
    }
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => observer.disconnect();
}, []);

function handleSubmit(e: FormEvent<HTMLFormElement>) {
  e.preventDefault();

  const numero = site.consultant.whatsapp;
  const linkDoImovel = window.location.href;

  const mensagem = `Nome: ${formData.nome}

Email: ${formData.email}

Telefone: ${formData.telefone}

Mensagem:
${formData.mensagem}

Link do imóvel:
${linkDoImovel}`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
}

  function toggleLanguage() {
    const googleCombo = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    
    if (googleCombo) {
      googleCombo.value = isEnglish ? "pt" : "en";
      googleCombo.dispatchEvent(new Event("change"));
      setIsEnglish(!isEnglish);
    } else {
      const elem = document.querySelector(isEnglish ? '.notranslate' : '.translate') as HTMLElement;
      if (elem) {
        elem.click();
        setIsEnglish(!isEnglish);
      } else {
        alert("O tradutor automático está a carregar, por favor tenta novamente dentro de 2 segundos.");
      }
    }
  }

  return (
            <div className="app-shell min-h-screen bg-background text-foreground">
    <AutomaticTranslation />
    <div id="google_translate_element" style={{ display: "none" }} />

    <nav className="nav-gradient fixed top-0 left-0 right-0 z-50 px-8 py-5">

              {/* DESKTOP */}
              <div className="hidden md:flex items-center justify-between">

                <div className="w-40" />

                <div className="flex items-center gap-8 text-xs tracking-widest uppercase text-muted-foreground">
                  <a href="#" className="text-primary hover:text-white transition-colors">
                    <House size={25} strokeWidth={1.3} />
                  </a>

                  <a href="#detalhes">Sobre Mim</a>
                  <a href="#galeria">Galeria</a>
                  <a href="#video">Vídeo</a>
                  <a href="#virtualtour">Virtual Tour</a>
                  <a href="#localizacao">Localização</a>
                  <a href="#contato">Contacto</a>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href="#contato"
                    className=" text-xs tracking-widest uppercase px-5 py-2.5  text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    Agendar visita
                  </a>

                  <button
                    type="button"
                    data-no-translate
                    onClick={toggleLanguage}
                    className="h-[38px] min-w-[54px] px-3  text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center gap-1.5"
                  >
                    <span>{isEnglish ? "🇵🇹" : "🇬🇧"}</span>
                    
                  </button>
                </div>

              </div>

              {/* MOBILE */}
              <div className="grid grid-cols-3 items-center md:hidden">

                <div className="justify-self-start flex items-center gap-3">
                  <button
                    type="button"
                    data-no-translate
                    onClick={toggleLanguage}
                    className="text-primary hover:text-white transition-colors duration-300 flex items-center justify-center"
                  >
                    <span className="text-xl">
                      {isEnglish ? "🇵🇹" : "🇬🇧"}
                    </span>
                  </button>

                  <a href="#">
                    <House className="text-primary" size={24} />
                  </a>
                </div>

                <div className="justify-self-center">
                  {/* vazio */}
                </div>

                <div className="justify-self-end">
                  <button onClick={() => setMobileMenuOpen(true)}>
                    <Menu className="text-primary" size={24} />
                  </button>
                </div>

              </div>

            </nav> 

              {/* Menu Mobile */}
        <div
          className={`fixed top-0 right-0 h-screen w-72 bg-background border-l border-border z-[100] transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          <div className="flex justify-end p-6 ml-15">
            <button onClick={() => setMobileMenuOpen(false)}>
              <X className="text-primary" />
            </button>
          </div>

          <div className="flex flex-col px-8 gap-8 text-sm uppercase tracking-widest">

            <a href="#detalhes" onClick={() => setMobileMenuOpen(false)}>
              Sobre Mim
            </a>

            <a href="#galeria" onClick={() => setMobileMenuOpen(false)}>
              Galeria
            </a>

            <a href="#video" onClick={() => setMobileMenuOpen(false)}>
              Vídeo
            </a>

            <a href="#virtualtour" onClick={() => setMobileMenuOpen(false)}>
              Virtual Tour
            </a>

            <a href="#localizacao" onClick={() => setMobileMenuOpen(false)}>
              Localização
            </a>

            <a href="#contato" onClick={() => setMobileMenuOpen(false)}>
              Contacto
            </a>

          </div>

        </div>

      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[#0C0B09]">
          <img
            src={HERO_IMG}
            alt={site.images.heroAlt}
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 px-8 md:px-16 pb-20 w-full max-w-7xl mx-auto">
          {/*<p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-5">
            Place holder - metes o que quiseres aqui 
          </p> */}
          <img
            src={images.emblem}
            alt="Emblema"
            className="mx-auto my-18 w-100 -translate-y-4 md:translate-y-28"
          />
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-normal leading-none mb-6 max-w-5xl mx-auto text-center translate-y-10">
            {site.property.heroTitle}
            {/*<br />
            <em className="text-primary not-italic">T3</em>
            <br /> */}
            </h1>
            
            <br />
            <br />
            <h1 className="font-display text-3xl md:text-5xl lg:text-4xl font-normal leading-none mb-6 max-w-3xl mx-auto text-center text-primary">
            {site.property.heroSubtitle}
          </h1>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 mt-8">
            {[
              { icon: Bed, val: site.property.specs.rooms, label: "Quartos" },
              { icon: Bath, val: site.property.specs.bathrooms, label: "WC" },
              { icon: Maximize2, val: site.property.specs.area, label: "Área total" },
              { icon: Car, val: site.property.specs.parking, label: "Vaga" },
            ].map(({ icon: Icon, val, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon size={16} className="text-primary" />
                <span className="text-foreground font-medium">{val}</span>
                <span className="font-mono text-muted-foreground text-xs tracking-widest uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-10">
  <div className="flex items-center gap-4">
  <a
    href="#investimento"
    className="mx-auto flex items-center gap-2 text-xs tracking-widest uppercase px-7 py-3.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
  >
    Investimento
  </a>

  <a
    href="#habitacao"
    className="mx-auto flex items-center gap-2 whitespace-nowrap text-xs tracking-widest uppercase px-7 py-3.5 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
  >
    Habitação Própria
</a>
</div>

</div>
</div>
      </section>

      {/* Detalhes */}
      <section id="detalhes" className="py-28 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-6">
              01 — Sobre Mim
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight mb-8">
            {site.about.title[0]}
            <br />
            <em>{site.about.title[1]}</em>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-light">
              {site.about.paragraphs[0]}
            </p>
            <p className="text-muted-foreground leading-relaxed font-light">
              {site.about.paragraphs[1]}
            </p>
            <div className="mt-10 pt-10 border-t border-border grid grid-cols-2 gap-6 items-center">
              <img
                src={images.aboutLogos[0]}
                alt="Logo 1"
                className="w-full max-w-[300px] h-auto object-contain mx-auto"
              />

              <img
                src={images.aboutLogos[1]}
                alt="Logo 2"
                className="w-full max-w-[300px] h-auto object-contain mx-auto"
              />
            </div>
          </div>
          <div className="relative">
            <div className="bg-secondary aspect-[4/5] overflow-hidden">
              <img
                src={images.aboutPhoto}
                alt="Homem de negócios sorridente em um escritório moderno, representing o consultor imobiliário"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          
          </div>
        </div>
      </section>

      
    {/* Investimento */}
<section
  id="investimento"
  className="py-28 bg-secondary border-y border-border scroll-mt-28"
>
<div className="max-w-7xl mx-auto px-8 md:px-16">
  <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-6">
      02 — A Residência
    </p>

    <div className="flex flex-col md:flex-row md:items-start gap-40 mb-8">
  <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight">
    {site.residence.title[0]}
    <br />
    <em className="text-primary md:text-4xl md:ml-12">{site.residence.title[1]}</em>
  </h2>
    </div>

  <div className="grid lg:grid-cols-2 gap-24 lg:gap-20 items-start">
    <div>
      <div className="mt-22 max-w-5xl mx-auto px-6">
  <p className="text-lg leading-relaxed text-foreground mb-8 whitespace-pre-line">
    {site.residence.text}
  </p>

  <p className="text-lg leading-relaxed text-foreground whitespace-pre-line">
    {site.residence.tagline}
    <br />
    <br /> <em className="text-primary md:text-4xl">
      {site.residence.slogan.includes("\n") ? (
        <>
          <span className="not-italic">{site.residence.slogan.split("\n")[0]}</span>
          {"\n"}
          {site.residence.slogan.split("\n").slice(1).join("\n")}
        </>
      ) : (
        site.residence.slogan
      )}
    </em>
  </p>
</div>

      <div className="mt-10 flex items-center justify-center gap-4">

  <img
    src={images.qr}
    alt="QR Code"
    className="w-24 h-24 object-contain scale-130"
  />

  <div className="text-left">
    <h3 className="font-display text-4xl font-normal mb-2">
      {site.residence.addressStreet} <em>{site.residence.addressHighlight}</em>
    </h3>

    <p className="text-5xl font-display text-primary">
      {site.residence.price}
    </p>
  </div>

</div>
    </div>
    <div className="mt-0 lg:mt-20 flex justify-center">
  <a
    href={site.residence.listingUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-3/4"
  >
    <img
      src={images.plan}
      alt="Planta do apartamento"
      className="w-full object-contain border border-border cursor-pointer transition-opacity hover:opacity-90 scale-130 lg:translate-y-18"
    />
  </a>
</div>
  </div>
  </div>
</section>

      {/* Investimento 2 */}
<section
  id="investimento2"
  className="py-28"
>
  <div className="max-w-7xl mx-auto px-8 md:px-16">
    <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-6">
      03 — Investimento
    </p>

    <div className="flex flex-col md:flex-row md:items-start gap-40 mb-8">
  <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight">
    {site.investment.title2[0]}
    <br />
    <em>{site.investment.title2[1]}</em>
  </h2>
  <a
    href={site.property.listingInvestmentUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
  <img
    src={images.investmentView}
    alt="Vista da sala de estar com janelas panorâmicas e vista para a natureza"
    className="w-full max-w-xs mx-auto md:w-52 lg:w-100 object-contain"
  />
  </a>
  </div>
  </div>

    

<div className="grid md:grid-cols-2 gap-10">

  <div className="border border-border p-10 bg-secondary">
    <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-6">
      O Negócio
    </p>

    <div className="text-muted-foreground leading-8 space-y-6">
      {site.investment.business.map((t) => (
        <p key={t}><Rich text={t} /></p>
      ))}
    </div>
  </div>

  <div className="border border-border p-10 bg-secondary">
  <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-6">
    A Valorização
  </p>

  <div className="text-muted-foreground leading-8 space-y-6">
    {site.investment.valuation.map((t) => (
      <p key={t}><Rich text={t} /></p>
    ))}
  </div>
</div>

</div>
</section>

{/* Habitação Própria */}
<section
  id="habitacao"
  className="py-28 bg-secondary border-y border-border scroll-mt-28"
>
  <div className="max-w-7xl mx-auto px-8 md:px-16">

    <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-6">
      04 — Habitação Própria
    </p>

    <div className="flex flex-col md:flex-row md:items-start gap-40 mb-8">
      <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight">
        {site.housing.title1[0]}
        <br />
        <em>{site.housing.title1[1]}</em>
      </h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-20 items-start">

      {/* ESQUERDA - Planta */}
      <div className="mt-20">
        <img
          src={images.plan}
          alt="Planta do apartamento"
          className="w-full object-contain border border-border"
        />
      </div>

      {/* DIREITA - Fotografia */}
      <div>

        <div className="mt-42">
          <img
            src={images.housingPhoto}
            alt="Fachada do prédio"
            className="w-full aspect-[16/9] object-cover"
          />
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">

          <div className="text-right">
            <h3 className="font-display text-4xl font-normal mb-2">
              {site.property.addressStreet} <em>{site.property.addressHighlight}</em>
            </h3>

            <p className="text-5xl font-display text-primary">
              {site.property.priceHousing}
            </p>
          </div>

          <img
            src={images.qr}
            alt="QR Code"
            className="w-24 h-24 object-contain"
          />

        </div>

      </div>

    </div>

  </div>
</section>

   {/* Habitacao Propria 2 */}
<section
  id="habitacao2"
  className="py-28"
>
  <div className="max-w-7xl mx-auto px-8 md:px-16">
    <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-6">
      05 — Habitação Própria
    </p>

    <div className="flex flex-col md:flex-row md:items-start gap-40 mb-8">
  <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight">
    {site.housing.title2}
  </h2>
  <a
    href={site.property.listingHousingUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
  <img
    src={images.housingView}
    alt="Vista da sala de estar com janelas panorâmicas e vista para a natureza"
    className="w-full max-w-xs mx-auto md:w-52 lg:w-100 lg:ml-70 object-contain"
  />
  </a>
  </div>
  </div>

    

<div className="grid md:grid-cols-3 gap-10">

  {/* O NEGÓCIO */}
  <div className="border border-border p-10 bg-secondary">
    <h3 className="text-3xl font-serif text-center uppercase mb-8">
      O Negócio
    </h3>

    <ul className="list-disc pl-6 space-y-6 text-muted-foreground leading-8">
      {site.housing.business.map((t) => (
        <li key={t}><Rich text={t} /></li>
      ))}
    </ul>
  </div>

  {/* A VALORIZAÇÃO */}
  <div className="border border-border p-10 bg-secondary">
    <h3 className="text-3xl font-serif text-center uppercase mb-8">
      A Valorização
    </h3>

    <div className="space-y-8 text-muted-foreground leading-8">
      <div>
        <p className="mb-4">
          {site.housing.valuation.marketIntro}
        </p>

        <ul className="list-disc pl-6 space-y-2">
          {site.housing.valuation.market.map((t) => (
            <li key={t}><Rich text={t} /></li>
          ))}
        </ul>
      </div>

      <div>
        <p className="mb-4">
          <Rich text={site.housing.valuation.scenarioIntro} />
        </p>

        <ul className="list-disc pl-6 space-y-2">
          {site.housing.valuation.scenario.map((t) => (
            <li key={t}><Rich text={t} /></li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  {/* A QUALIDADE */}
  <div className="border border-border p-10 bg-secondary">
    <h3 className="text-3xl font-serif text-center uppercase mb-8">
      A Qualidade
    </h3>

    <ul className="list-disc pl-6 space-y-4 text-muted-foreground leading-8">
      {site.housing.quality.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  </div>
</div>
</section>

      {/* Amenidades */}
      <section className="py-20 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-10">
            06 — Diferenciais
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {AMENITIES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-secondary flex flex-col items-center justify-center py-10 px-6 gap-4 hover:bg-card transition-colors duration-300 group"
              >
                <Icon size={22} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                <p className="font-mono text-xs tracking-widest uppercase text-center text-muted-foreground group-hover:text-foreground transition-colors">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="py-28 bg-background">
  <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">
              07 — Galeria
            </p>
            <h2 className="font-display text-4xl font-normal">
              {site.gallery.title[0]}<br />{site.gallery.title[1]} <em>{site.gallery.title[2]}</em>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm hidden md:block">
            {GALLERY.length} fotografias
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {GALLERY.map((img, i) => (
            <div
              key={i}
              className={`bg-secondary overflow-hidden cursor-pointer group relative ${
                i === 0 ? "md:col-span-2 md:row-span-2 aspect-[16/9]" : "aspect-[4/3]"
              }`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* Vídeo */}
{/* Vídeo */}
<section id="video" className="py-28 bg-secondary">
  <div className="max-w-7xl mx-auto px-8 md:px-16">

    <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-6">
      08 — Vídeo
    </p>

    <h2 className="font-display text-4xl md:text-5xl font-normal mb-8">
      {site.video.title[0]}
      <br />
      <em>{site.video.title[1]}</em>
    </h2>

    <div
      ref={sectionRef}
      className="aspect-video border border-border overflow-hidden bg-black"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover cursor-pointer"
        muted={!videoStarted}
        loop
        playsInline
        preload="metadata"
        controls={videoStarted}
        onClick={(e) => {
          if (!videoStarted) {
            const video = e.currentTarget;
            video.muted = false;
            video.controls = true;
            setVideoStarted(true);
          }
        }}
      >
        <source src={images.video} type="video/mp4" />
        O seu navegador não suporta vídeo.
      </video>
    </div>

  </div>
</section>

{/* Virtual Tour */}
<section
  id="virtualtour"
  className="py-28 bg-background border-t border-border"
>
  <div className="max-w-7xl mx-auto px-8 md:px-16">
    <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-6">
      09 — Virtual Tour
    </p>

    <h2 className="font-display text-4xl md:text-5xl font-normal leading-tight mb-8">
      {site.virtualTour.title[0]}
      <br />
      <em>{site.virtualTour.title[1]}</em>
    </h2>

    {/* Mobile */}
    <div className="block md:hidden">
      <a
        href={site.virtualTour.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block overflow-hidden rounded-xl border border-border shadow-xl"
      >
        <div className="relative">
          <img
            src={images.virtualTourPoster}
            alt="Visita Virtual"
            className="w-full"
          />

          <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs tracking-widest uppercase px-5 py-2.5 border border-primary bg-primary text-primary-foreground transition-all duration-300">
              Visita Virtual
            </span>
          </div>
          </div>
        </div>
      </a>
    </div>

    {/* Desktop */}
    <div className="hidden md:block relative w-full overflow-hidden rounded-xl border border-border shadow-xl">
      <iframe
        src={site.virtualTour.url}
        title="Visita Virtual"
        className="w-full"
        style={{
          aspectRatio: "16 / 9",
          border: 0,
          minHeight: "600px",
        }}
        allow="fullscreen"
        allowFullScreen
      />
    </div>
  </div>
</section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Fechar imagem ampliada"
            title="Fechar imagem ampliada"
            className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>
          <img
            src={GALLERY[lightbox].src.replace("w=900&h=600", "w=1400&h=900")}
            alt={GALLERY[lightbox].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Localização */}
      <section id="localizacao" className="py-28 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-6">
                10 — Localização
              </p>
              <h2 className="font-display text-4xl font-normal mb-8">
                {site.location.title[0]}
                <br />
                <em>{site.location.title[1]}</em>
              </h2>
              <div className="flex items-start gap-3 mb-6">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground font-light leading-relaxed">
                  {site.location.addressLines[0]}<br />
                  {site.location.addressLines[1]}
                </p>
              </div>
              <div className="mt-10 space-y-4">
                {site.location.places.map(({ label, dist }) => (
                  <div key={label} className="flex items-center justify-between py-3 border-b border-border">
                    <span className="text-sm text-muted-foreground">{label}</span>
                    <span className="font-mono text-primary text-xs tracking-widest">
                      {dist}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#1A1814] bg-muted aspect-square flex items-center justify-center relative overflow-hidden">
              
              <img
                src={images.map}
                alt="Ponte 25 de abril iluminada à noite, com vista para o rio Tejo e a cidade de Lisboa"
                className="w-full h-full object-cover opacity-50"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <a 
              href={site.location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
                      >
                  <MapPin size={32} className="text-primary mx-auto mb-3" />
                  <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                    {site.location.mapLabel}
                  </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-28 bg-background"
>

  <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div>
            <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-6">
              11 — Contacto
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-normal mb-8 leading-tight">
              {site.contact.title[0]}
              <br />
              <em>{site.contact.title[1]}</em>
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-12">
              {site.contact.text}
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 border border-border">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary flex-shrink-0">
                  <img
                    src={site.consultant.photo}
                    alt={`${site.consultant.name}, ${site.consultant.role}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">{site.consultant.name}</p>
                  <p className="font-mono text-primary text-xs tracking-widest uppercase mt-0.5">
                    {site.consultant.role}
                  </p>
                  <div className="mt-3 flex flex-col gap-1.5">
                    <a
                      href={`tel:${site.consultant.phoneE164}`}
                      className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      <Phone size={12} /> {site.consultant.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${site.consultant.email}`}
                      className="flex items-center gap-2 text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      <Mail size={12} /> {site.consultant.email}
                    </a>
                    <div className="mt-4 flex items-center gap-3">
                      <a
                        href={`https://api.whatsapp.com/send?phone=${site.consultant.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <FaWhatsapp size={16} />
                      </a>
                    
                      

                      <a
                        href={site.consultant.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Facebook size={16} />
                      </a>

                      <a
                        href={site.consultant.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>

                    <a
                        href={site.consultant.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Instagram size={16} />
                      </a>

                      <a
                        href={site.consultant.social.tiktok}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <SiTiktok size={16} />
                      </a>

                      <a
                        href={site.consultant.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Youtube size={16} />
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="border border-primary p-12 text-center">
                <p className="font-mono text-primary text-xs tracking-[0.3em] uppercase mb-4">
                  Mensagem enviada
                </p>
                <h3 className="font-display text-2xl font-normal">
                  Entraremos em contacto<br /><em>em breve</em>
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
  {[
    { id: "nome", label: "Nome completo", type: "text", placeholder: "Seu nome" },
    { id: "email", label: "E-mail", type: "email", placeholder: "seu@email.com" },
    { id: "telefone", label: "Telefone", type: "tel", placeholder: "(+351) 123 456 789" },
  ].map(({ id, label, type, placeholder }) => (
    <div key={id}>
      <label
        htmlFor={id}
        className="font-mono block text-xs tracking-widest uppercase text-muted-foreground mb-2"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        required
        value={formData[id as keyof typeof formData]}
        onChange={(e) =>
          setFormData((f: ContactFormData) => ({
            ...f,
            [id]: e.target.value,
          }))
        }
        className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-light"
              />
            </div>
          ))}

          <div>
            <label
              htmlFor="mensagem"
              className="font-mono block text-xs tracking-widest uppercase text-muted-foreground mb-2"
            >
              Mensagem
            </label>

            <textarea
              id="mensagem"
              rows={4}
              placeholder="Gostaria de agendar uma visita..."
              value={formData.mensagem}
              onChange={(e) =>
                setFormData((f: ContactFormData) => ({
                  ...f,
                  mensagem: e.target.value,
                }))
              }
              className="w-full bg-secondary border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-light resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase py-4 hover:opacity-90 transition-opacity font-medium"
          >
            Enviar mensagem
          </button>
        </form>
            )}
          </div>
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" border-border py-10 px-8 md:px-16 bg-background">
  <div className="max-w-7xl mx-auto grid md:grid-cols-3 items-center gap-6">

    {/* Esquerda - Logo */}
    <div className="flex justify-center md:justify-start">
      <img
        src={images.footerLogo}
        alt="Logo do footer"
        className="h-20 w-auto object-contain"
      />
    </div>

    {/* Centro - Frase */}
    <div className=" text-center -ml-25">
      <p className="text-sm text-muted-foreground italic text-xs">
          {site.footer.licence}
      </p>
    </div>

    {/* Direita - Copyright */}
    <div className="text-center md:text-right">
      <p className="text-muted-foreground text-xs">
        {site.footer.copyright}
      </p>
    </div>

  </div>
</footer>
    </div>
  );
}

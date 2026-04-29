'use client';
import { useState } from 'react';
import { Instagram, Send, Facebook, X, Car, Plane, MapPin, Images, Menu, Phone, ShieldCheck, Globe, Star } from 'lucide-react';
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('en'); 
  const [activeAlbum, setActiveAlbum] = useState<any>(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const t = LANGUAGES[lang];

  // Контент для секции About Us на всех языках
  const ABOUT_TEXT = {
    ru: {
      title: "О нас",
      founder: "Меня зовут Ахмед, я основатель Ahvan Tour и страстный организатор экскурсий с 2006 года. С многолетним опытом в туризме, я предлагаю индивидуальные поездки и незабываемые впечатления по всему Египту.",
      background: "Сейчас я живу в Германии, но я египтянин по происхождению. Этот уникальный опыт позволяет мне понимать обе культуры и предоставлять надежный, профессиональный и ориентированный на клиента сервис.",
      badge: "Опыт с 2006",
      slogan: "Ahvan Tour — это доверие, опыт и исключительный сервис."
    },
    en: {
      title: "About Us",
      founder: "My name is Ahmed, founder of Ahvan Tour and a passionate excursion planner since 2006. With many years of experience in tourism, I offer customized trips and unforgettable experiences across Egypt.",
      background: "I currently live in Germany but I am originally Egyptian. This unique background allows me to understand both cultures and provide a reliable, professional, and customer-focused service.",
      badge: "Since 2006",
      slogan: "Ahvan Tour stands for trust, experience, and exceptional service."
    },
    de: {
      title: "Über uns",
      founder: "Mein Name ist Ahmed, Gründer von Ahvan Tour und leidenschaftlicher Ausflugsplaner seit 2006. Mit langjähriger Erfahrung im Tourismus biete ich maßgeschneiderte Reisen und unvergessliche Erlebnisse in ganz Ägypten an.",
      background: "Ich lebe derzeit in Deutschland, bin aber ursprünglich Ägypter. Dieser einzigartige Hintergrund ermöglicht es mir, beide Kulturen zu verstehen und einen zuverlässigen, professionellen und kundenorientierten Service zu bieten.",
      badge: "Seit 2006",
      slogan: "Ahvan Tour steht für Vertrauen, Erfahrung und außergewöhnlichen Service."
    },
    pl: {
      title: "O nas",
      founder: "Nazywam się Ahmed, jestem założycielem Ahvan Tour i pasjonatem planowania wycieczek od 2006 roku. Dzięki wieloletniemu doświadczeniu w turystyce oferuję spersonalizowane wycieczki i niezapomniane wrażenia w całym Egipcie.",
      background: "Obecnie mieszkam w Niemczech, ale pochodzę z Egiptu. To wyjątkowe pochodzenie pozwala mi zrozumieć obie kultury i zapewnić niezawodną, profesjonalną i zorientowaną na klienta obsługę.",
      badge: "Od 2006",
      slogan: "Ahvan Tour to zaufanie, doświadczenie i wyjątkowa obsługa."
    },
    fr: {
      title: "À propos",
      founder: "Je m'appelle Ahmed, fondateur d'Ahvan Tour et planificateur d'excursions passionné depuis 2006. Avec de nombreuses années d'expérience dans le tourisme, je propose des voyages sur mesure et des expériences inoubliables à travers l'Égypte.",
      background: "Je vis actuellement en Allemagne mais je suis d'origine égyptienne. Ce parcours unique me permet de comprendre les deux cultures et de fournir un service fiable, professionnel et axé sur le client.",
      badge: "Depuis 2006",
      slogan: "Ahvan Tour est synonyme de confiance, d'expérience et de service exceptionnel."
    },
    ro: {
      title: "Despre noi",
      founder: "Numele meu este Ahmed, fondatorul Ahvan Tour și un pasionat planificator de excursii din 2006. Cu mulți ani de experiență în turism, ofer călătorii personalizate și experiențe de neuitat în tot Egiptul.",
      background: "În prezent locuiesc în Germania, dar sunt originar din Egipt. Acest context unic îmi permite să înțeleg ambele culturi și să ofer un serviciu de încredere, profesional și orientat către client.",
      badge: "Din 2006",
      slogan: "Ahvan Tour înseamnă încredere, experiență și servicii excepționale."
    }
  }[lang] || ABOUT_TEXT.en;

  const menu = {
    ru: { home: "Главная", trips: "Экскурсии", gallery: "Галерея", about: "О нас", transfer: "Трансфер", contact: "Контакты" },
    en: { home: "Home", trips: "Trips", gallery: "Gallery", about: "About Us", transfer: "Transfer", contact: "Contacts" },
    de: { home: "Startseite", trips: "Touren", gallery: "Galerie", about: "Über uns", transfer: "Transfer", contact: "Kontakte" },
    pl: { home: "Główna", trips: "Wycieczki", gallery: "Galeria", about: "O nas", transfer: "Transfer", contact: "Kontakt" },
    fr: { home: "Accueil", trips: "Excursions", gallery: "Galerie", about: "À propos", transfer: "Transfert", contact: "Contacts" },
    ro: { home: "Acasă", trips: "Tururi", gallery: "Galerie", about: "Despre noi", transfer: "Transfer", contact: "Contact" }
  }[lang];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* 1. NAVIGATION */}
      <nav className="bg-white/95 backdrop-blur-lg border-b sticky top-0 z-[100] px-4 h-20 flex justify-between items-center shadow-sm">
        <a href="#home" className="flex items-center h-full">
           <img src="/ahvan.svg" alt="AhVan Tour" className="h-12 md:h-16 w-auto" />
        </a>

        <div className="hidden lg:flex gap-8 items-center ml-auto">
          {Object.entries(menu).map(([key, label]) => (
            <a key={key} href={`#${key}`} className="text-[11px] uppercase font-black tracking-[0.2em] text-slate-600 hover:text-orange-600 transition-colors italic">{label}</a>
          ))}
          <div className="flex gap-1 ml-4 border-l pl-6">
            {Object.keys(LANGUAGES).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`text-[10px] font-bold px-2 py-1 rounded-md border ${lang === l ? 'bg-orange-600 text-white border-orange-600' : 'text-slate-400 border-transparent'}`}>{LANGUAGES[l].name}</button>
            ))}
          </div>
        </div>

        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}><Menu size={28} /></button>
      </nav>

      {/* HERO & TRIPS & GALLERY (Твой основной контент) */}
      {/* ... */}

      {/* 2. SECTION: ABOUT US */}
      <section id="about" className="py-24 bg-slate-50 scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* LOGO INSTEAD OF PHOTO */}
            <div className="relative flex justify-center items-center">
              <div className="relative z-10 w-full aspect-square max-w-[500px] bg-white rounded-[3rem] shadow-2xl border-8 border-white flex items-center justify-center p-12 overflow-hidden group">
                <img 
                  src="/ahvan.svg" 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110" 
                  alt="Ahvan Tour Logo" 
                />
                {/* Декоративный фон за логотипом */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent -z-10 opacity-50"></div>
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-8 rounded-3xl shadow-xl hidden md:block z-20">
                <div className="text-4xl font-black italic leading-none">2006</div>
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-80">{ABOUT_TEXT.badge}</div>
              </div>

              {/* Decorative Globe Icon Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-200 -z-0 opacity-10 hidden lg:block">
                <Globe size={600} />
              </div>
            </div>

            {/* TEXT CONTENT */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-orange-600 font-black uppercase text-xs tracking-[0.3em] mb-6">
                <ShieldCheck size={18} /> Reliable & Professional
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-slate-900 mb-8">
                {ABOUT_TEXT.title.split(' ')[0]} <span className="text-orange-600">{ABOUT_TEXT.title.split(' ')[1] || 'Us'}</span>
              </h2>

              <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed">
                <p>
                  {ABOUT_TEXT.founder}
                </p>
                <p>
                  {ABOUT_TEXT.background}
                </p>

                <div className="mt-10 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm italic text-slate-500 border-l-4 border-l-orange-600">
                  "{ABOUT_TEXT.slogan}"
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TRANSFER & FOOTER (Твой код) */}
      {/* ... */}
      
      {/* Кнопка Data Protection в футере */}
      <footer className="py-20 bg-slate-950 text-white flex flex-col items-center">
          <button 
            onClick={() => setIsPrivacyOpen(true)}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 hover:text-orange-600 transition-colors mb-6"
          >
            Data Protection
          </button>
          <p className="text-slate-800 text-[10px] uppercase tracking-[0.4em] font-bold italic">Ahvan Tour Egypt © 2026</p>
      </footer>
    </main>
  );
}
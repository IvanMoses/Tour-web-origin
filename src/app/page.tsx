'use client';
import { useState } from 'react';
import { Instagram, Send, Facebook, Phone } from 'lucide-react'; // Импортируем иконки
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('ru');
  const t = LANGUAGES[lang];

  const menu = {
    ru: { home: "Главная", trips: "Экскурсии", about: "О нас", contact: "Контакты" },
    en: { home: "Home", trips: "Trips", about: "About Us", contact: "Contacts" },
    de: { home: "Startseite", trips: "Touren", about: "Über uns", contact: "Kontakte" },
    pl: { home: "Główna", trips: "Wycieczki", about: "O nas", contact: "Kontakt" },
    fr: { home: "Accueil", trips: "Excursions", about: "À propos", contact: "Contacts" },
    ro: { home: "Acasă", trips: "Tururi", about: "Despre noi", contact: "Contact" }
  }[lang] || { home: "Home", trips: "Trips", about: "About Us", contact: "Contacts" };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-100 font-sans antialiased">
      
      {/* ПЛАВАЮЩИЙ БЛОК СОЦСЕТЕЙ (Справа) — ИСПРАВЛЕННЫЙ */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] hidden xl:flex flex-col gap-1 p-3 bg-white border border-slate-200 shadow-2xl rounded-l-2xl">
        {[
          { icon: Instagram, href: "#", name: "Instagram" },
          { icon: Send, href: "#", name: "Telegram" },
          { icon: Facebook, href: "#", name: "Facebook" },
          { icon: Phone, href: `tel:${CONTACTS.whatsapp}`, name: "Phone" }, // Добавили телефон
        ].map((soc, i) => (
          <a 
            key={i} 
            href={soc.href} 
            target="_blank"
            className="w-12 h-12 flex items-center justify-center text-slate-400 hover:text-white hover:bg-orange-600 rounded-xl transition-all group relative"
          >
            <soc.icon className="w-6 h-6 stroke-[1.5]" />
            {/* Тултип при наведении */}
            <span className="absolute right-full mr-4 px-3 py-1.5 bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
              {soc.name}
            </span>
          </a>
        ))}
      </div>

      {/* НАВИГАЦИЯ — Уменьшили высоту */}
      <nav className="bg-white/80 backdrop-blur-lg border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="font-black text-orange-600 leading-none shrink-0 cursor-pointer">
            <div className="text-2xl tracking-tighter italic uppercase">AhVan</div>
            <div className="text-[11px] tracking-[0.4em] text-slate-400 uppercase font-bold">Tour</div>
          </div>

          {/* MENU (Desktop) */}
          <div className="hidden lg:flex gap-10 items-center">
            {Object.entries(menu).map(([key, label]) => (
              <a key={key} href={`#${key}`} className="text-[11px] uppercase font-black tracking-[0.2em] text-slate-500 hover:text-orange-600 transition-colors">
                {label}
              </a>
            ))}
          </div>

          {/* LANGUAGES */}
          <div className="flex gap-1 bg-slate-100 p-1 rounded border border-slate-200/50">
            {Object.keys(LANGUAGES).map((l) => (
              <button 
                key={l}
                onClick={() => setLang(l)}
                className={`text-[10px] font-bold px-3 py-1.5 transition-all ${
                  lang === l ? 'bg-orange-600 text-white shadow rounded-sm' : 'text-slate-500 hover:text-orange-600'
                }`}
              >
                {LANGUAGES[l].name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO — Сделали более читаемым */}
      <section id="home" className="bg-slate-950 py-32 md:py-48 text-center text-white px-6 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1539129938914-f2990579ec44?q=80&w=2000')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-9xl font-black uppercase italic mb-6 tracking-tight leading-[0.9]">{t.heroTitle}</h1>
          <p className="text-orange-500 text-base md:text-xl max-w-2xl mx-auto font-black uppercase tracking-[0.4em]">{t.heroSub}</p>
        </div>
      </section>

      {/* TOURS */}
      <section id="trips" className="max-w-7xl mx-auto py-24 px-6 scroll-mt-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            {t.toursTitle}
          </h2>
          <div className="h-[2px] flex-grow bg-slate-200 mx-10 hidden lg:block"></div>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest whitespace-nowrap">Select your adventure</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          {TOURS.map((tour: any) => (
            <div key={tour.id} className="bg-white border border-slate-200/60 group flex flex-col transition-all duration-500 hover:border-orange-200 shadow-sm hover:shadow-2xl">
              <div className="h-72 w-full overflow-hidden relative bg-slate-100">
                <img src={tour.image} alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-orange-600 px-4 py-1.5 font-black text-xs text-white shadow-xl rounded-sm tracking-wider uppercase">${tour.price}</div>
              </div>
              <div className="p-9 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight leading-tight h-14 flex items-center">{tour.names[lang]}</h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-10 flex-grow line-clamp-3 font-medium">{tour.desc[lang]}</p>
                <a 
                  href={`https://wa.me/${CONTACTS.whatsapp}?text=${encodeURIComponent(t.waHello + tour.names[lang])}`}
                  target="_blank"
                  className="bg-slate-900 text-white text-center py-4 rounded-sm font-bold text-[11px] uppercase tracking-[0.25em] hover:bg-orange-600 transition-all shadow-lg active:scale-[0.97]"
                >
                  {t.btn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER — Чище и без лишних линий */}
      <footer id="contact" className="bg-white border-t border-slate-200 py-24 text-center px-6">
        <div className="max-w-7xl mx-auto">
          <div className="font-black text-orange-600 text-6xl italic mb-12 tracking-tight uppercase">AHVAN TOUR</div>
          <div className="flex flex-wrap justify-center gap-10 mb-12">
            {Object.entries(menu).map(([key, label]) => (
              <a key={key} href={`#${key}`} className="text-[11px] uppercase font-black tracking-[0.2em] text-slate-500 hover:text-orange-600 transition-colors">
                {label}
              </a>
            ))}
          </div>
          <div className="max-w-2xl mx-auto h-[1px] bg-slate-100 mb-12"></div>
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest leading-loose">
            Hurghada, Red Sea, Egypt<br />
            expert guide service since 2026<br />
            © AhVan Tour. Quality matters.
          </p>
        </div>
      </footer>
    </main>
  );
}
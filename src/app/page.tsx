'use client';
import { useState } from 'react';
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('ru');
  const t = LANGUAGES[lang];

  // Навигационное меню (перевод берем из объекта или прописываем тут для простоты)
  const menu = {
    ru: { home: "Главная", trips: "Экскурсии", about: "О нас", contact: "Контакты" },
    en: { home: "Home", trips: "Trips", about: "About Us", contact: "Contacts" },
    de: { home: "Startseite", trips: "Touren", about: "Über uns", contact: "Kontakte" },
    pl: { home: "Główna", trips: "Wycieczki", about: "O nas", contact: "Kontakt" },
    fr: { home: "Accueil", trips: "Excursions", about: "À propos", contact: "Contacts" },
    ro: { home: "Acasă", trips: "Tururi", about: "Despre noi", contact: "Contact" }
  }[lang] || { home: "Home", trips: "Trips", about: "About Us", contact: "Contacts" };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-100">
      
      {/* ПЛАВАЮЩИЕ СОЦСЕТИ (Вертикально справа) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] hidden xl:flex flex-col gap-6 items-center">
        <div className="w-[1px] h-20 bg-slate-300"></div>
        <a href="#" className="text-slate-400 hover:text-orange-600 transition-all -rotate-90 text-[10px] font-bold tracking-[0.2em] uppercase">Instagram</a>
        <a href="#" className="text-slate-400 hover:text-orange-600 transition-all -rotate-90 text-[10px] font-bold tracking-[0.2em] uppercase">Telegram</a>
        <a href="#" className="text-slate-400 hover:text-orange-600 transition-all -rotate-90 text-[10px] font-bold tracking-[0.2em] uppercase">Facebook</a>
        <div className="w-[1px] h-20 bg-slate-300"></div>
      </div>

      {/* НАВИГАЦИЯ */}
      <nav className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="font-black text-orange-600 leading-none shrink-0">
            <div className="text-2xl tracking-tighter italic uppercase">AhVan</div>
            <div className="text-[11px] tracking-[0.4em] text-slate-400 uppercase font-bold">Tour</div>
          </div>

          {/* MENU (Desktop) */}
          <div className="hidden md:flex gap-10 items-center">
            {Object.entries(menu).map(([key, label]) => (
              <a key={key} href={`#${key}`} className="text-[11px] uppercase font-bold tracking-widest text-slate-500 hover:text-orange-600 transition-colors">
                {label}
              </a>
            ))}
          </div>

          {/* LANGUAGES */}
          <div className="flex gap-1 bg-slate-100 p-1 rounded-sm border border-slate-200/50">
            {Object.keys(LANGUAGES).map((l) => (
              <button 
                key={l}
                onClick={() => setLang(l)}
                className={`text-[10px] font-bold px-3 py-1.5 transition-all ${
                  lang === l ? 'bg-orange-600 text-white shadow-sm' : 'text-slate-500 hover:text-orange-600'
                }`}
              >
                {LANGUAGES[l].name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="bg-slate-900 py-24 md:py-36 text-center text-white px-6 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1539129938914-f2990579ec44?q=80&w=2000')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-black uppercase italic mb-6 tracking-tighter leading-none">{t.heroTitle}</h1>
          <p className="text-orange-500 text-lg md:text-xl max-w-2xl mx-auto font-bold uppercase tracking-[0.3em]">{t.heroSub}</p>
        </div>
      </section>

      {/* TOURS */}
      <section id="trips" className="max-w-7xl mx-auto py-20 px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            {t.toursTitle}
          </h2>
          <div className="h-[2px] flex-grow bg-slate-200 mx-10 hidden lg:block"></div>
          <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Select your adventure</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOURS.map((tour: any) => (
            <div key={tour.id} className="bg-white border border-slate-200 group flex flex-col transition-all duration-500 hover:border-orange-200 shadow-sm hover:shadow-2xl">
              <div className="h-72 w-full overflow-hidden relative">
                <img src={tour.image} alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 font-black text-sm shadow-xl">${tour.price}</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-black mb-4 uppercase tracking-tight leading-none h-12 flex items-center">{tour.names[lang]}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow line-clamp-3 font-medium">{tour.desc[lang]}</p>
                <a 
                  href={`https://wa.me/${CONTACTS.whatsapp}?text=${encodeURIComponent(t.waHello + tour.names[lang])}`}
                  target="_blank"
                  className="bg-slate-900 text-white text-center py-4 font-bold text-xs uppercase tracking-[0.2em] hover:bg-orange-600 transition-all shadow-lg active:scale-95"
                >
                  {t.btn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-white border-t border-slate-200 py-20 text-center px-6">
        <div className="max-w-7xl mx-auto">
          <div className="font-black text-orange-600 text-5xl italic mb-10 tracking-tighter">AHVAN TOUR</div>
          <div className="flex flex-wrap justify-center gap-10 mb-10">
            {Object.entries(menu).map(([key, label]) => (
              <a key={key} href={`#${key}`} className="text-[10px] uppercase font-black tracking-widest text-slate-400 hover:text-orange-600 transition-colors">
                {label}
              </a>
            ))}
          </div>
          <div className="w-full h-[1px] bg-slate-100 mb-10"></div>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-loose">
            Hurghada, Red Sea, Egypt<br />
            © 2026 AhVan Tour. Quality matters.
          </p>
        </div>
      </footer>
    </main>
  );
}
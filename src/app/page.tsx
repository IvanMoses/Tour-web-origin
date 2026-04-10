'use client';
import { useState } from 'react';
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('ru');
  const t = LANGUAGES[lang];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Навигация */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="font-black text-orange-600 leading-none">
            <div className="text-2xl">HURGHADA</div>
            <div className="text-[11px] tracking-[0.3em] text-slate-400 uppercase font-bold">For You</div>
          </div>

          {/* Переключатель */}
          <div className="flex gap-1.5 bg-slate-100 p-1 rounded">
            {Object.keys(LANGUAGES).map((l) => (
              <button 
                key={l}
                onClick={() => setLang(l)}
                className={`text-[11px] font-bold px-3 py-1.5 rounded-sm transition ${
                  lang === l 
                    ? 'bg-orange-600 text-white' 
                    : 'text-slate-500 hover:bg-slate-200'
                }`}
              >
                {LANGUAGES[l].name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero блок */}
      <section className="bg-slate-900 py-16 md:py-24 text-center text-white px-6 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black uppercase mb-4 tracking-tighter leading-tight">{t.heroTitle}</h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium">{t.heroSub}</p>
        </div>
      </section>

      {/* Сетка туров */}
      <section className="max-w-7xl mx-auto py-12 md:py-16 px-6">
        <h2 className="text-2xl font-black mb-10 uppercase tracking-widest border-l-8 border-orange-600 pl-6">
          {t.toursTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {TOURS.map((tour: any) => (
            <div key={tour.id} className="bg-white overflow-hidden shadow-2xl shadow-slate-200/70 border border-slate-100 flex flex-col group transition-all duration-300 hover:shadow-orange-100/50 hover:-translate-y-1">
              <div className="h-48 sm:h-64 w-full overflow-hidden">
                <img 
                  src={tour.image} 
                  alt="" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 h-14 overflow-hidden leading-snug">{tour.names[lang]}</h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed flex-grow line-clamp-3">{tour.desc[lang]}</p>
                
                <div className="flex justify-between items-center mt-auto pt-6 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-slate-400 block font-medium uppercase tracking-wider mb-1">Price</span>
                    <span className="text-3xl font-black text-slate-950">${tour.price}</span>
                  </div>
                  <a 
                    href={`https://wa.me/${CONTACTS.whatsapp}?text=${encodeURIComponent(t.waHello + tour.names[lang])}`}
                    target="_blank"
                    className="bg-orange-600 text-white px-6 py-3 font-bold text-sm hover:bg-orange-700 transition"
                  >
                    {t.btn}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
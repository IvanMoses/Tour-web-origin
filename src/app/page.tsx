'use client';
import { useState } from 'react';
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('ru');
  const t = LANGUAGES[lang];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Навигация — Сделали "прилипающей" */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="font-black text-orange-600 leading-none">
            <div className="text-2xl">HURGHADA</div>
            <div className="text-[11px] tracking-[0.3em] text-slate-400 uppercase font-bold">For You</div>
          </div>

          {/* Языки — Более удобный переключатель */}
          <div className="flex gap-1.5 bg-slate-100 p-1.5 rounded-full border border-slate-200/50">
            {Object.keys(LANGUAGES).map((l) => (
              <button 
                key={l}
                onClick={() => setLang(l)}
                className={`text-[11px] font-bold px-3.5 py-2 rounded-full transition-all duration-300 ${
                  lang === l 
                    ? 'bg-orange-600 text-white shadow-md' 
                    : 'text-slate-500 hover:bg-slate-200'
                }`}
              >
                {LANGUAGES[l].name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero блок — Главный заголовок с эмоциями */}
      <section className="bg-slate-900 py-24 md:py-32 text-center text-white px-6 relative overflow-hidden">
        {/* Фоновый эффект, чтобы не было скучно */}
        <div className="absolute inset-0 bg-orange-950/20 opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black uppercase italic mb-6 tracking-tighter leading-tight">{t.heroTitle}</h1>
          <p className="text-slate-300 text-xl md:text-2xl max-w-2xl mx-auto font-medium">{t.heroSub}</p>
        </div>
      </section>

      {/* Сетка туров — Самое главное изменение! */}
      <section className="max-w-7xl mx-auto py-16 md:py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-black mb-12 uppercase tracking-widest border-l-8 border-orange-600 pl-6">
          {t.toursTitle}
        </h2>
        
        {/* Адаптивная сетка: 1 колонка на мобилках, 2 на планшетах, 3 на десктопе */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {TOURS.map((tour: any) => (
            <div key={tour.id} className="bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/70 border border-slate-100 flex flex-col group transition-all duration-500 hover:shadow-orange-100/50 hover:-translate-y-2">
              {/* Фиксированная высота картинки,object-cover и эффект при наведении */}
              <div className="h-72 w-full overflow-hidden">
                <img 
                  src={tour.image} 
                  alt="" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="p-10 flex-grow flex flex-col">
                {/* Жирный Montserrat */}
                <h3 className="text-2xl font-bold mb-4 h-16 overflow-hidden leading-snug">{tour.names[lang]}</h3>
                <p className="text-slate-500 text-base mb-10 leading-relaxed flex-grow line-clamp-3">{tour.desc[lang]}</p>
                
                {/* Блок цены и заказа */}
                <div className="flex justify-between items-center mt-auto pt-8 border-t border-slate-100">
                  <div>
                    <span className="text-sm text-slate-400 block font-medium uppercase tracking-wider mb-1">Price</span>
                    <span className="text-4xl font-black text-slate-950">${tour.price}</span>
                  </div>
                  <a 
                    href={`https://wa.me/${CONTACTS.whatsapp}?text=${encodeURIComponent(t.waHello + tour.names[lang])}`}
                    target="_blank"
                    className="bg-orange-600 text-white px-8 py-4 rounded-3xl font-bold text-base hover:bg-orange-700 transition-all duration-300 shadow-xl shadow-orange-200"
                  >
                    {t.btn}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-950 text-slate-600 py-16 text-center border-t border-slate-800 px-6">
        <p className="font-black text-orange-600 text-3xl mb-3">HURGHADA FOR YOU</p>
        <p className="text-sm">© 2026. All rights reserved. Let's make your trip perfect.</p>
      </footer>
    </main>
  );
}
'use client';
import { useState } from 'react';
import { Instagram, Send, Facebook, Phone, X, ImageIcon } from 'lucide-react'; // Добавил иконки
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('en'); // Сразу на английском
  const [activeAlbum, setActiveAlbum] = useState<any>(null); // Для модалки галереи
  const t = LANGUAGES[lang];

  const menu = {
    ru: { home: "Главная", trips: "Экскурсии", gallery: "Галерея", contact: "Контакты" },
    en: { home: "Home", trips: "Trips", gallery: "Gallery", contact: "Contacts" },
    // ... остальные языки
  }[lang] || { home: "Home", trips: "Trips", gallery: "Gallery", contact: "Contacts" };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-orange-100 font-sans antialiased">
      
      {/* МОДАЛЬНОЕ ОКНО ГАЛЕРЕИ */}
      {activeAlbum && (
        <div className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10">
          <button 
            onClick={() => setActiveAlbum(null)}
            className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors"
          >
            <X size={40} />
          </button>
          
          <div className="max-w-6xl w-full h-full overflow-y-auto custom-scrollbar">
            <h2 className="text-white text-3xl font-black uppercase italic mb-8 mt-10">{activeAlbum.names[lang]}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-20">
              {activeAlbum.gallery?.map((img: string, idx: number) => (
                <div key={idx} className="aspect-square overflow-hidden rounded-xl bg-slate-800 shadow-2xl">
                  <img src={img} className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* НАВИГАЦИЯ */}
      <nav className="bg-white/95 backdrop-blur-lg border-b sticky top-0 z-50 shadow-sm px-6 h-20 flex justify-between items-center">
          <div className="font-black text-orange-600 leading-none italic uppercase text-2xl">AhVan <span className="text-slate-400 text-[11px] not-italic tracking-[0.4em] block">Tour</span></div>
          
          <div className="hidden lg:flex gap-9 items-center">
            {Object.entries(menu).map(([key, label]) => (
              <a key={key} href={`#${key}`} className="text-[11px] uppercase font-black tracking-[0.25em] text-slate-600 hover:text-orange-600 transition-colors italic">{label}</a>
            ))}
          </div>

          <div className="flex gap-2">
            {Object.keys(LANGUAGES).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`text-[10px] font-bold px-3 py-2 rounded-full border ${lang === l ? 'bg-orange-600 text-white border-orange-600' : 'text-slate-500 border-slate-200'}`}>{LANGUAGES[l].name}</button>
            ))}
          </div>
      </nav>

      {/* HERO (Оставляем как было, с сочным фоном) */}
      <section id="home" className="py-40 md:py-60 relative flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544145945-f904253d0c71?q=80&w=2000')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          <div className="relative z-10 px-6">
            <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-4">{t.heroTitle}</h1>
            <p className="text-orange-500 font-black uppercase tracking-[0.5em] text-lg">{t.heroSub}</p>
          </div>
      </section>

      {/* ГАЛЕРЕЯ (Твой новый блок) */}
      <section id="gallery" className="max-w-7xl mx-auto py-24 px-6 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">{menu.gallery}</h2>
          <p className="text-slate-400 uppercase tracking-widest font-bold text-sm italic">Real moments from our trips</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOURS.map((tour: any) => (
            <div 
              key={tour.id} 
              onClick={() => setActiveAlbum(tour)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer shadow-xl transition-all hover:-translate-y-2"
            >
              <img src={tour.image} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <ImageIcon size={16} className="text-orange-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">8 Photos</span>
                </div>
                <h3 className="text-xl font-black uppercase italic tracking-tight">{tour.names[lang]}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRIPS (Сетка туров) */}
      <section id="trips" className="bg-white py-24 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-16 border-l-8 border-orange-600 pl-8">{t.toursTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 italic">
            {/* Твой код карточек туров, который мы сделали раньше */}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-20 text-center bg-slate-950 text-white">
          <div className="text-4xl font-black italic text-orange-600 mb-6 tracking-tighter uppercase">AhVan Tour</div>
          <p className="text-slate-500 text-xs uppercase tracking-[0.3em]">Quality matters. Since 2026.</p>
      </footer>

    </main>
  );
}
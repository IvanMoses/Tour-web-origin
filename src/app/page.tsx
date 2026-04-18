'use client';
import { useState } from 'react';
import { Instagram, Send, Facebook, X, ImageIcon } from 'lucide-react';
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('en'); 
  const [activeAlbum, setActiveAlbum] = useState<any>(null); 
  const t = LANGUAGES[lang];

  const menu = {
    ru: { home: "Главная", trips: "Экскурсии", gallery: "Галерея", contact: "Контакты" },
    en: { home: "Home", trips: "Trips", gallery: "Gallery", contact: "Contacts" },
    de: { home: "Startseite", trips: "Touren", gallery: "Galerie", contact: "Kontakte" },
    pl: { home: "Główna", trips: "Wycieczki", gallery: "Galeria", contact: "Kontakt" },
    fr: { home: "Accueil", trips: "Excursions", gallery: "Galerie", contact: "Contacts" },
    ro: { home: "Acasă", trips: "Tururi", gallery: "Galerie", contact: "Contact" }
  }[lang] || { home: "Home", trips: "Trips", gallery: "Gallery", contact: "Contacts" };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-orange-100 font-sans antialiased">
      
      {/* МОДАЛЬНОЕ ОКНО (Если нужно показать фото при клике) */}
      {activeAlbum && (
        <div className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10">
          <button onClick={() => setActiveAlbum(null)} className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors">
            <X size={40} />
          </button>
          <div className="max-w-6xl w-full h-full overflow-y-auto p-4">
            <h2 className="text-white text-3xl font-black uppercase italic mb-8 mt-10">{activeAlbum.names[lang]}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-20">
              {activeAlbum.gallery?.map((img: string, idx: number) => (
                <div key={idx} className="aspect-square overflow-hidden rounded-xl bg-slate-800 shadow-2xl">
                  <img src={img} className="w-full h-full object-cover" alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* НАВИГАЦИЯ */}
      <nav className="bg-white/95 backdrop-blur-lg border-b sticky top-0 z-50 shadow-sm px-6 h-20 flex justify-between items-center">
          <div className="font-black text-orange-600 leading-none italic uppercase text-2xl">
            AhVan <span className="text-slate-400 text-[11px] not-italic tracking-[0.4em] block">Tour</span>
          </div>
          
          <div className="hidden lg:flex gap-9 items-center">
            <a href="/" className="text-[11px] uppercase font-black tracking-[0.25em] text-slate-600 hover:text-orange-600 italic">{menu.home}</a>
            <a href="#trips" className="text-[11px] uppercase font-black tracking-[0.25em] text-slate-600 hover:text-orange-600 italic">{menu.trips}</a>
            <a href="/gallery" className="text-[11px] uppercase font-black tracking-[0.25em] text-slate-600 hover:text-orange-600 italic">{menu.gallery}</a>
            <a href="#contact" className="text-[11px] uppercase font-black tracking-[0.25em] text-slate-600 hover:text-orange-600 italic">{menu.contact}</a>
          </div>

          <div className="flex gap-2">
            {Object.keys(LANGUAGES).map((l) => (
              <button 
                key={l} 
                onClick={() => setLang(l)} 
                className={`text-[10px] font-bold px-3 py-2 rounded-full border ${lang === l ? 'bg-orange-600 text-white border-orange-600' : 'text-slate-500 border-slate-200'}`}
              >
                {LANGUAGES[l].name}
              </button>
            ))}
          </div>
      </nav>

      {/* HERO */}
      <section className="py-40 md:py-60 relative flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544145945-f904253d0c71?q=80&w=2000')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 px-6">
            <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-4">{t.heroTitle}</h1>
            <p className="text-orange-500 font-black uppercase tracking-[0.5em] text-lg">{t.heroSub}</p>
          </div>
      </section>

      {/* ТОЛЬКО ТУРЫ С ЦЕНАМИ (БЕЗ ЛИШНЕЙ ГАЛЕРЕИ) */}
      <section id="trips" className="max-w-7xl mx-auto py-24 px-6">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-slate-950">
            All Excursions
          </h2>
          <div className="h-2 w-24 bg-orange-600 mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOURS.map((tour: any) => (
            <div key={tour.id} className="group bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="h-72 w-full relative overflow-hidden">
                <img src={tour.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
                
                {/* ЦЕННИК */}
                <div className="absolute top-5 right-5 z-20 bg-orange-600 text-white px-5 py-2 rounded-full font-black text-xs shadow-xl tracking-widest">
                  ${tour.price}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight line-clamp-1">{tour.names[lang]}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2">{tour.desc[lang]}</p>
                
                <a 
                  href={`https://wa.me/${CONTACTS.whatsapp}?text=${encodeURIComponent(t.waHello + tour.names[lang])}`}
                  target="_blank"
                  className="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-orange-600 transition-all"
                >
                  {t.btn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-20 text-center bg-slate-950 text-white">
          <div className="text-4xl font-black italic text-orange-600 mb-6 tracking-tighter uppercase">AhVan Tour</div>
          <div className="flex justify-center gap-8 mb-8 opacity-50 text-white">
             <Instagram size={20} /> <Send size={20} /> <Facebook size={20} />
          </div>
          <p className="text-slate-500 text-xs uppercase tracking-[0.3em]">Quality matters. Since 2026.</p>
      </footer>

    </main>
  );
}
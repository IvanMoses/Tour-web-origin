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
    pl: { home: "Głównна", trips: "Wycieczki", gallery: "Galeria", contact: "Kontakt" },
    fr: { home: "Accueil", trips: "Excursions", gallery: "Galerie", contact: "Contacts" },
    ro: { home: "Acasă", trips: "Tururi", gallery: "Galerie", contact: "Contact" }
  }[lang] || { home: "Home", trips: "Trips", gallery: "Gallery", contact: "Contacts" };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-orange-100 font-sans antialiased">
      
      {/* МОДАЛЬНОЕ ОКНО ГАЛЕРЕИ */}
      {activeAlbum && (
        <div className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10">
          <button onClick={() => setActiveAlbum(null)} className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors">
            <X size={40} />
          </button>
          <div className="max-w-6xl w-full h-full overflow-y-auto custom-scrollbar p-4">
            <h2 className="text-white text-3xl font-black uppercase italic mb-8 mt-10">{activeAlbum.names[lang]}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-20">
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
              <button key={l} onClick={() => setLang(l)} className={`text-[10px] font-bold px-3 py-2 rounded-full border transition-all ${lang === l ? 'bg-orange-600 text-white border-orange-600' : 'text-slate-500 border-slate-200 hover:border-orange-300'}`}>{LANGUAGES[l].name}</button>
            ))}
          </div>
      </nav>

      {/* HERO SECTION — С ФОНОМ ИЗ URL */}
      <section 
        id="home" 
        className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden bg-slate-900"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1506929647638-498fe3003c02?q=80&w=2500')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
          <div className="relative z-10 px-6 max-w-5xl mx-auto">
            <div className="h-1.5 w-24 bg-orange-600 mx-auto mb-10 rounded-full"></div>
            <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-6 leading-none text-white drop-shadow-2xl">{t.heroTitle}</h1>
            <p className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm md:text-lg drop-shadow-md bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full inline-block">{t.heroSub}</p>
            <div className="mt-12">
               <a href="#trips" className="bg-white text-slate-900 px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-orange-600 hover:text-white transition-all active:scale-95 inline-block">Explore Tours</a>
            </div>
          </div>
      </section>

      {/* СЕКЦИЯ ДЛЯ ГЛАВНОЙ — ALL EXCURSIONS */}
      <section id="trips" className="max-w-7xl mx-auto py-24 px-6 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">All Excursions</h2>
          <p className="text-slate-400 uppercase tracking-widest font-bold text-sm italic">Choose your perfect adventure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOURS.map((tour: any) => (
            <div key={tour.id} className="group bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="h-72 w-full relative overflow-hidden" onClick={() => setActiveAlbum(tour)}>
                <img src={tour.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 cursor-pointer" alt="" />
                <div className="absolute top-5 right-5 z-20 bg-orange-600 text-white px-5 py-2 rounded-full font-black text-xs shadow-xl tracking-widest">${tour.price}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight">{tour.names[lang]}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2">{tour.desc[lang]}</p>
                <a href={`https://wa.me/${CONTACTS.whatsapp}?text=${encodeURIComponent(t.waHello + tour.names[lang])}`} target="_blank" className="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-lg">{t.btn}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-20 text-center bg-slate-950 text-white scroll-mt-20">
          <div className="text-4xl font-black italic text-orange-600 mb-6 tracking-tighter uppercase">AhVan Tour</div>
          <div className="flex justify-center gap-8 mb-8 opacity-50">
             <Instagram className="hover:text-orange-500 cursor-pointer transition-colors" size={20} />
             <Send className="hover:text-orange-500 cursor-pointer transition-colors" size={20} />
             <Facebook className="hover:text-orange-500 cursor-pointer transition-colors" size={20} />
          </div>
          <p className="text-slate-500 text-xs uppercase tracking-[0.3em]">Quality matters. Since 2026.</p>
      </footer>

    </main>
  );
}
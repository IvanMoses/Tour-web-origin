'use client';
import { useState } from 'react';
import { Instagram, Send, Facebook, Phone, X, ImageIcon } from 'lucide-react';
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
              <button 
                key={l} 
                onClick={() => setLang(l)} 
                className={`text-[10px] font-bold px-3 py-2 rounded-full border transition-all ${lang === l ? 'bg-orange-600 text-white border-orange-600' : 'text-slate-500 border-slate-200 hover:border-orange-300'}`}
              >
                {LANGUAGES[l].name}
              </button>
            ))}
          </div>
      </nav>

      {/* HERO SECTION — С СОЧНЫМ ФОНОМ И СЧАСТЛИВОЙ АТМОСФЕРОЙ */}
      <section className="py-48 md:py-64 relative flex items-center justify-center text-center text-white overflow-hidden">
          
          {/* ФОНОВОЕ ИЗОБРАЖЕНИЕ: Счастливые люди на яхте в Красном море */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1590515152865-c3d3e6480a4c?q=80&w=2500" 
              alt="Happy tourists on a yacht in Hurghada, Red Sea"
              className="w-full h-full object-cover grayscale-0 scale-100 transition-transform duration-[10000ms] ease-out group-hover:scale-110"
            />
          </div>
          
          {/* СЛОИ НАЛОЖЕНИЯ (OVERLAYS) ДЛЯ ЧИТАЕМОСТИ И ЦВЕТА */}
          {/* 1. Глубокий градиент снизу вверх (чтобы "Popular Excursions" не сливались с фоном) */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
          
          {/* 2. Тёмный оверлей поверх всего фото (для максимального контраста белого текста) */}
          <div className="absolute inset-0 z-10 bg-slate-950/40"></div>
          
          {/* 3. Фирменный оранжевый акцент (накладывает оранжевый оттенок) */}
          <div className="absolute inset-0 z-10 bg-orange-600/10 mix-blend-color"></div>

          {/* КОНТЕНТ (ТЕКСТ) — Обязательно z-20, чтобы быть над всеми слоями */}
          <div className="relative z-20 px-6 max-w-5xl mx-auto flex flex-col items-center">
            
            {/* Декоративный элемент над заголовком */}
            <div className="h-1 w-20 bg-orange-500 rounded-full mb-8"></div>
            
            {/* ГЛАВНЫЙ ЗАГОЛОВОК: Стал ещё крупнее и жирнее */}
<h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter mb-6 leading-[0.9] text-white drop-shadow-xl">
  {t.heroTitle}
</h1>
            {/* ПОДЗАГОЛОВОК: Оранжевый, на отдельной строке, с большим отступом между буквами */}
            <p className="text-orange-400 font-extrabold uppercase tracking-[0.4em] text-sm md:text-base bg-slate-950/30 px-6 py-2 rounded-full inline-block backdrop-blur-sm">
              {t.heroSub}
            </p>
            
            {/* КНОПКА ПРИЗЫВА К ДЕЙСТВИЮ (CTA) — Опционально, если хочешь, чтобы сразу бронировали */}
            <a 
              href="#trips" 
              className="mt-12 bg-white text-slate-900 px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-orange-600 hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              Explore Now
            </a>
          </div>
      </section>

      {/* ГАЛЕРЕЯ (То, что ты видишь на главной как плитку) */}
      <section id="gallery" className="max-w-7xl mx-auto py-24 px-6 scroll-mt-24">
        <div className="text-center mb-16">
          {/* ЗАМЕНЕНО: Теперь здесь всегда All Excursions */}
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">All The Trips</h2>
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

      {/* TRIPS (Сетка с ценами и WhatsApp) */}
      <section id="trips" className="bg-white py-24 px-6 border-y border-slate-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-16 border-l-8 border-orange-600 pl-8">{t.toursTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {TOURS.map((tour: any) => (
              <div key={tour.id} className="group bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="h-72 w-full relative overflow-hidden">
                  <img src={tour.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                  
                  <div className="absolute top-5 right-5 z-20 bg-orange-600 text-white px-5 py-2 rounded-full font-black text-xs shadow-xl tracking-widest">
                    ${tour.price}
                  </div>
                  
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight line-clamp-1">{tour.names[lang]}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2 font-medium">{tour.desc[lang]}</p>
                  
                  <a 
                    href={`https://wa.me/${CONTACTS.whatsapp}?text=${encodeURIComponent(t.waHello + tour.names[lang])}`}
                    target="_blank"
                    className="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-lg active:scale-95"
                  >
                    {t.btn}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
<footer id="contact" className="py-20 text-center bg-slate-950 text-white scroll-mt-20">
    <div className="text-4xl font-black italic text-orange-600 mb-6 tracking-tighter uppercase">AhVan Tour</div>
    <div className="flex justify-center gap-8 mb-8 opacity-50 text-white">
       <Instagram size={20} className="hover:text-orange-500 cursor-pointer transition-colors" /> 
       <Send size={20} className="hover:text-orange-500 cursor-pointer transition-colors" /> 
       <Facebook size={20} className="hover:text-orange-500 cursor-pointer transition-colors" />
    </div>
    <p className="text-slate-500 text-xs uppercase tracking-[0.3em]">Quality matters. Since 2026.</p>
</footer>

    </main>
  );
}
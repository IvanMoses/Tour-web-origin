'use client';
import { useState } from 'react';
import { Instagram, Send, Facebook, X, ShieldCheck, Star, Menu } from 'lucide-react';
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('en'); 
  const [activeAlbum, setActiveAlbum] = useState<any>(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const t = LANGUAGES[lang];

  const CONTENT_DATA: any = {
    ru: {
      aboutTitle: "О нас",
      galleryTitle: "Галерея",
      welcome: "Добро пожаловать в Ahvan Tour",
      founder: "Меня зовут Ахмед, я основатель Ahvan Tour и страстный организатор экскурсий с 2006 года. С многолетним опытом в туризме, я предлагаю индивидуально спланированные поездки и незабываемые впечатления в Египте.",
      background: "Я живу в Германии, но я египтянин по происхождению – именно эта комбинация позволяет мне понимать обе культуры и предоставлять моим клиентам надежный и профессиональный сервис.",
      list: ["Сафари-приключения в пустыне", "Морские прогулки и острова", "Частные туры в Каир или Луксор", "Трансферы и личные пожелания"],
      slogan: "Ahvan Tour — это доверие, опыт и незабываемые моменты.",
      badge: "Опыт с 2006",
      privacyTitle: "Защита данных",
      privacyBody: (
        <div className="space-y-4">
          <p>Лицом, ответственным в значении законов о защите данных, в частности Общего регламента ЕС по защите данных (GDPR), является: <strong>Ahmed (Ahvan Tour)</strong></p>
          <h4 className="font-bold border-b pb-2">Ваши права как субъекта данных</h4>
          <p>Вы можете в любое время реализовать следующие права:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Информация о ваших данных, хранящихся у нас (ст. 15 GDPR)</li>
            <li>Исправление неверных данных (ст. 16 GDPR)</li>
            <li>Удаление ваших данных (ст. 17 GDPR)</li>
            <li>Ограничение обработки (ст. 18 GDPR)</li>
            <li>Возражение против обработки (ст. 21 GDPR)</li>
          </ul>
          <h4 className="font-bold border-b pb-2">Сбор общей информации</h4>
          <p>При посещении нашего сайта автоматически записывается информация общего характера (лог-файлы сервера): тип браузера, ОС, IP-адрес и т.д. Это необходимо для обеспечения бесперебойного соединения и безопасности системы.</p>
          <h4 className="font-bold border-b pb-2">Cookies</h4>
          <p>Как и многие другие веб-сайты, мы также используем так называемые «куки» (cookies). Это небольшие текстовые файлы, которые сохраняются на вашем конечном устройстве.</p>
        </div>
      ),
      privacyClose: "Закрыть"
    },
    en: {
      aboutTitle: "About Us",
      galleryTitle: "Gallery",
      welcome: "Welcome to Ahvan Tour",
      founder: "My name is Ahmed, founder of Ahvan Tour and a passionate excursion planner since 2006.",
      background: "I live in Germany but am a native Egyptian – this combination allows me to provide professional service.",
      list: ["Desert safari adventures", "Boat trips & island excursions", "Private tours to Cairo or Luxor", "Transfers & individual wishes"],
      slogan: "Ahvan Tour stands for trust, experience, and unforgettable moments.",
      badge: "Since 2006",
      privacyTitle: "Data Protection",
      privacyBody: (
        <div className="space-y-4 text-slate-700">
          <p>The person responsible within the meaning of the data protection laws, in particular the EU General Data Protection Regulation (GDPR), is: <strong>Ahmed (Ahvan Tour)</strong></p>
          <h4 className="font-bold border-b pb-2 text-slate-900">Your data subject rights</h4>
          <p>You can exercise the following rights at any time:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Information about your data stored by us (Art. 15 GDPR)</li>
            <li>Correction of incorrect personal data (Art. 16 GDPR)</li>
            <li>Deletion of your data (Art. 17 GDPR)</li>
            <li>Restriction of data processing (Art. 18 GDPR)</li>
            <li>Objection to the processing of your data (Art. 21 GDPR)</li>
          </ul>
          <h4 className="font-bold border-b pb-2 text-slate-900">Collection of general information</h4>
          <p>If you access our website, information of a general nature (server log files) is automatically recorded. This includes browser type, OS, IP address, etc. This is processed to ensure a problem-free connection and system stability.</p>
          <h4 className="font-bold border-b pb-2 text-slate-900">Cookies</h4>
          <p>Like many other websites, we also use so-called “cookies”. Cookies are small text files that are stored on your end device (laptop, tablet, smartphone, etc.) when you visit our website.</p>
        </div>
      ),
      privacyClose: "Close"
    },
    de: {
      aboutTitle: "Über uns",
      galleryTitle: "Galerie",
      welcome: "Willkommen bei Ahvan Tour",
      founder: "Mein Name ist Ahmed, Gründer von Ahvan Tour und leidenschaftlicher Ausflugsplaner seit 2006.",
      background: "Ich lebe in Deutschland, bin aber gebürtiger Ägypter – diese Kombination ermöglicht einen vertrauensvollen Service.",
      list: ["Safari-Abenteuer", "Bootsausflüge", "Private Touren", "Transfers"],
      slogan: "Ahvan Tour steht für Vertrauen, Erfahrung und unvergessliche Momente.",
      badge: "Seit 2006",
      privacyTitle: "Datenschutz",
      privacyBody: (
        <div className="space-y-4">
          <p>Verantwortlich im Sinne der Datenschutzgesetze, insbesondere der EU-Datenschutzgrundverordnung (DSGVO), ist: <strong>Ahmed (Ahvan Tour)</strong></p>
          <h4 className="font-bold border-b pb-2">Ihre Betroffenenrechte</h4>
          <p>Sie können jederzeit folgende Rechte ausüben:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
            <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
            <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
          </ul>
          <h4 className="font-bold border-b pb-2">Erfassung allgemeiner Informationen</h4>
          <p>Beim Zugriff auf unsere Website werden automatisch Informationen allgemeiner Natur erfasst (Server-Logfiles). Diese Informationen sind technisch notwendig, um die von Ihnen angeforderten Inhalte korrekt auszuliefern.</p>
        </div>
      ),
      privacyClose: "Schließen"
    },
    pl: {
      aboutTitle: "O nas",
      galleryTitle: "Galeria",
      welcome: "Witamy w Ahvan Tour",
      founder: "Nazywam się Ahmed, założyciel Ahvan Tour. Planuję wycieczki od 2006 roku.",
      background: "Mieszkam w Niemczech, ale jestem rodowitym Egipcjaninem, co pozwala mi profesjonalnie łączyć obie kultury.",
      list: ["Pustynne safari", "Rejsy statkiem", "Prywatne wycieczki", "Transfery"],
      slogan: "Ahvan Tour to zaufanie, doświadczenie i niezapomniane chwile.",
      badge: "Od 2006",
      privacyTitle: "Ochrona danych",
      privacyBody: (
        <div className="space-y-4">
          <p>Osobą odpowiedzialną w rozumieniu przepisów o ochronie danych jest: <strong>Ahmed (Ahvan Tour)</strong></p>
          <h4 className="font-bold border-b pb-2">Twoje prawa</h4>
          <p>Masz prawo do informacji (art. 15 RODO), sprostowania (art. 16 RODO) oraz usunięcia danych (art. 17 RODO).</p>
        </div>
      ),
      privacyClose: "Zamknij"
    },
    fr: {
      aboutTitle: "À propos",
      galleryTitle: "Galerie",
      welcome: "Bienvenue chez Ahvan Tour",
      founder: "Je m'appelle Ahmed, fondateur d'Ahvan Tour et planificateur d'excursions depuis 2006.",
      background: "Je vis en Allemagne mais je suis Égyptien d'origine, ce qui me permet d'offrir un service professionnel.",
      list: ["Safari au désert", "Sorties en bateau", "Tours privés", "Transferts"],
      slogan: "Ahvan Tour, c'est la confiance, l'expérience et des moments inoubliables.",
      badge: "Depuis 2006",
      privacyTitle: "Protection des données",
      privacyBody: (
        <div className="space-y-4">
          <p>Le responsable au sens des lois sur la protection des données est : <strong>Ahmed (Ahvan Tour)</strong></p>
          <p>Vous avez un droit d'accès, de rectification et de suppression de vos données conformément au RGPD.</p>
        </div>
      ),
      privacyClose: "Fermer"
    },
    ro: {
      aboutTitle: "Despre noi",
      galleryTitle: "Galerie",
      welcome: "Bine ați venit la Ahvan Tour",
      founder: "Numele meu este Ahmed, fondatorul Ahvan Tour și planificator de excursii din 2006.",
      background: "Locuiesc în Germania, dar sunt egiptean la origine – combinația perfectă pentru servicii profesionale.",
      list: ["Aventuri safari", "Excursii cu barca", "Tururi private", "Transferuri"],
      slogan: "Ahvan Tour înseamnă încredere, experiență și momente de neuitat.",
      badge: "Din 2006",
      privacyTitle: "Protecția datelor",
      privacyBody: (
        <div className="space-y-4">
          <p>Persoana responsabilă în sensul legilor privind protecția datelor este: <strong>Ahmed (Ahvan Tour)</strong></p>
          <p>Aveți dreptul la informare, rectificare și ștergere a datelor dumneavoastră conform GDPR.</p>
        </div>
      ),
      privacyClose: "Închide"
    }
  };

  const cur = CONTENT_DATA[lang] || CONTENT_DATA.en;

  const menu: any = {
    ru: { home: "Главная", trips: "Экскурсии", gallery: "Галерея", about: "О нас", transfer: "Трансфер", contact: "Контакты" },
    en: { home: "Home", trips: "Trips", gallery: "Gallery", about: "About Us", transfer: "Transfer", contact: "Contacts" },
    de: { home: "Startseite", trips: "Touren", gallery: "Galerie", about: "Über uns", transfer: "Transfer", contact: "Kontakte" },
    pl: { home: "Główna", trips: "Wycieczki", gallery: "Galeria", about: "O nas", transfer: "Transfer", contact: "Kontakt" },
    fr: { home: "Accueil", trips: "Excursions", gallery: "Galerie", about: "À propos", transfer: "Transfert", contact: "Contacts" },
    ro: { home: "Acasă", trips: "Tururi", gallery: "Galerie", about: "Despre noi", transfer: "Transfer", contact: "Contact" }
  }[lang];

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* MODAL DATA PROTECTION */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[300] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[85vh] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-8 border-b flex justify-between items-center bg-slate-50">
              <span className="font-black uppercase italic tracking-tighter text-xl">{cur.privacyTitle}</span>
              <button onClick={() => setIsPrivacyOpen(false)} className="hover:rotate-90 transition-transform"><X /></button>
            </div>
            <div className="p-8 overflow-y-auto text-sm text-slate-600 space-y-4 custom-scrollbar text-left">
              {cur.privacyBody}
            </div>
            <div className="p-6 bg-slate-50 border-t">
              <button onClick={() => setIsPrivacyOpen(false)} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-orange-600 transition-colors">
                {cur.privacyClose}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL ALBUM */}
      {activeAlbum && (
        <div className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4">
            <button onClick={() => setActiveAlbum(null)} className="absolute top-6 right-6 text-white z-[210] hover:scale-110 transition-transform"><X size={40} /></button>
            <div className="max-w-6xl w-full h-full overflow-y-auto p-4 custom-scrollbar">
              <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic mb-10 mt-16 tracking-tighter">{activeAlbum.names[lang]}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {activeAlbum.gallery?.map((img: string, idx: number) => (
                  <div key={idx} className="aspect-square overflow-hidden rounded-2xl border border-white/5"><img src={img} className="w-full h-full object-cover" alt="" /></div>
                ))}
              </div>
              <div className="max-w-4xl bg-white/5 rounded-[2.5rem] p-8 md:p-12 mb-20 border border-white/10 backdrop-blur-sm">
                <p className="text-white text-xl md:text-2xl leading-relaxed opacity-90 whitespace-pre-line">{activeAlbum.desc[lang]}</p>
                <div className="mt-10">
                  <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(t.waHello + activeAlbum.names[lang])}`} className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl inline-block">{t.btn} — ${activeAlbum.price}</a>
                </div>
              </div>
            </div>
        </div>
      )}

      {/* NAVIGATION */}
      <nav className="bg-white/95 backdrop-blur-lg border-b sticky top-0 z-[100] px-4 h-20 flex justify-between items-center shadow-sm">
        <a href="#home" className="flex items-center gap-3 h-full group">
            <img src="logo.svg" alt="Logo" className="h-10 md:h-14 w-auto object-contain transition-transform group-hover:rotate-12" />
            <span className="font-black uppercase italic tracking-tighter text-xl md:text-2xl">Ahvan <span className="text-orange-600">Tour</span></span>
        </a>
        <div className="hidden lg:flex gap-7 items-center ml-auto mr-8">
          {Object.entries(menu).map(([key, label]: any) => (
            <a key={key} href={`#${key}`} className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-600 hover:text-orange-600 transition-colors italic">{label}</a>
          ))}
          <div className="flex gap-1 ml-4 border-l pl-6">
            {Object.keys(LANGUAGES).map((l) => (
              <button key={l} onClick={() => setLang(l)} className={`text-[10px] font-bold px-2 py-1 rounded-md border ${lang === l ? 'bg-orange-600 text-white border-orange-600' : 'text-slate-400 border-transparent'}`}>{LANGUAGES[l].name}</button>
            ))}
          </div>
        </div>
        <button className="lg:hidden p-2 text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}><Menu size={28} /></button>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b shadow-2xl lg:hidden flex flex-col p-6 gap-4 animate-in slide-in-from-top z-[150]">
            {Object.entries(menu).map(([key, label]: any) => (
              <a key={key} href={`#${key}`} onClick={() => setIsMenuOpen(false)} className="text-lg uppercase font-black tracking-widest text-slate-900 border-b pb-2 italic">{label}</a>
            ))}
            <button onClick={() => { setIsPrivacyOpen(true); setIsMenuOpen(false); }} className="text-sm text-left uppercase font-black tracking-widest text-orange-600 border-b pb-2 italic">{cur.privacyTitle}</button>
            <div className="flex flex-wrap gap-2 pt-2">
              {Object.keys(LANGUAGES).map((l) => (
                <button key={l} onClick={() => { setLang(l); setIsMenuOpen(false); }} className={`flex-1 min-w-[60px] text-xs font-bold py-3 rounded-xl border ${lang === l ? 'bg-orange-600 text-white' : 'bg-slate-50 text-slate-500'}`}>{LANGUAGES[l].name}</button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden bg-slate-900" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://i2.wp.com/see.news/images/2024/03/-1711659992-0.jpg?resize=750,500&ssl=1')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="relative z-10 px-6 max-w-5xl mx-auto text-white">
            <div className="h-1.5 w-24 bg-orange-600 mx-auto mb-10 rounded-full"></div>
            <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-6 leading-none">{t.heroTitle}</h1>
            <p className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm md:text-lg bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full inline-block">{t.heroSub}</p>
          </div>
      </section>

      {/* TRIPS */}
      <section id="trips" className="max-w-7xl mx-auto py-24 px-6 scroll-mt-24">
        <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-16 text-center">{t.toursTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOURS.map((tour: any) => (
            <div key={tour.id} className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="h-80 w-full relative overflow-hidden cursor-pointer" onClick={() => setActiveAlbum(tour)}>
                <img src={tour.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                <div className="absolute top-5 right-5 z-20 bg-orange-600 text-white px-5 py-2 rounded-full font-black text-xs">${tour.price}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight">{tour.names[lang]}</h3>
                <p className="text-slate-500 text-sm mb-8 h-12 line-clamp-2">{tour.desc[lang]}</p>
                <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(t.waHello + tour.names[lang])}`} target="_blank" className="block w-full bg-slate-900 text-white text-center py-4 rounded-2xl font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-orange-600 shadow-lg">{t.btn}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-white scroll-mt-20 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-16">{cur.galleryTitle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {TOURS.map((tour: any) => (
              <div key={tour.id} onClick={() => setActiveAlbum(tour)} className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg border-4 border-slate-50">
                <img src={tour.gallery?.[0] || tour.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 text-white">
                   <h3 className="font-black uppercase italic tracking-tight text-xl leading-none">{tour.names[lang]}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFER */}
      <section id="transfer" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 text-slate-900 leading-none">
                {t.transTitle} <span className="text-orange-600">{t.transName}</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8">{t.transDesc}</p>
              <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}?text=Hello! I want to book a transfer.`} target="_blank" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-orange-600 transition-all inline-block">{t.btn}</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <img src="/images/transfer/car1.jpeg" className="rounded-[2.5rem] shadow-xl aspect-[3/4] object-cover border-4 border-white" alt="Transfer 1" />
                <div className="space-y-4">
                  <img src="/images/transfer/car2.jpeg" className="rounded-[2.5rem] shadow-xl aspect-square object-cover border-4 border-white" alt="Transfer 2" />
                  <img src="/images/transfer/car5.jpeg" className="rounded-[2.5rem] shadow-xl aspect-square object-cover border-4 border-white" alt="Transfer 5" />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="py-24 bg-slate-50 scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center items-center">
              <div className="relative z-10 w-full aspect-square max-w-[500px] bg-white rounded-[3.5rem] shadow-2xl border-8 border-white flex items-center justify-center p-12 overflow-hidden group">
                <img src="logo.svg" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" alt="Logo" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-8 rounded-3xl shadow-xl hidden md:block z-20">
                <div className="text-4xl font-black italic leading-none">2006</div>
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-80">{cur.badge}</div>
              </div>
            </div>
            <div className="relative z-10 text-left">
              <div className="flex items-center gap-2 text-orange-600 font-black uppercase text-xs tracking-[0.3em] mb-6"><ShieldCheck size={18} /> Reliable & Professional</div>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-slate-900 mb-8">{cur.aboutTitle}</h2>
              <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed">
                <p className="font-bold text-slate-900">{cur.welcome}</p>
                <p>{cur.founder}</p>
                <p>{cur.background}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {cur.list?.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] font-black uppercase text-slate-800 tracking-wider"><Star size={12} className="text-orange-600 fill-orange-600" /> {item}</div>
                  ))}
                </div>
                <div className="mt-10 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm italic text-slate-500 border-l-8 border-l-orange-600">"{cur.slogan}"</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="py-24 bg-slate-950 text-white flex flex-col items-center">
          <div className="flex items-center gap-3 mb-8 opacity-80 group cursor-pointer">
            <img src="logo.svg" alt="Logo" className="h-12 w-auto transition-transform group-hover:scale-110" />
            <span className="font-black uppercase italic tracking-tighter text-2xl">Ahvan Tour</span>
          </div>
          <a href={`tel:${CONTACTS.phone}`} className="text-2xl font-bold mb-12 tracking-widest hover:text-orange-500 transition-colors">{CONTACTS.phone}</a>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 mb-16 opacity-80">
            <a href={CONTACTS.instagram} target="_blank" className="flex flex-col items-center gap-2 group"><Instagram size={24} className="group-hover:text-orange-500 transition-colors" /><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">Instagram</span></a>
            <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}`} target="_blank" className="flex flex-col items-center gap-2 group"><div className="font-black text-xl group-hover:text-orange-500 transition-colors">WA</div><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">WhatsApp</span></a>
            <a href={CONTACTS.telegram} target="_blank" className="flex flex-col items-center gap-2 group"><Send size={24} className="group-hover:text-orange-500 transition-colors" /><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">Telegram</span></a>
            <a href={CONTACTS.tiktok} target="_blank" className="flex flex-col items-center gap-2 group"><div className="font-black text-xl group-hover:text-orange-500 transition-colors">TT</div><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">TikTok</span></a>
            <a href={CONTACTS.facebook} target="_blank" className="flex flex-col items-center gap-2 group"><Facebook size={24} className="group-hover:text-orange-500 transition-colors" /><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">Facebook</span></a>
          </div>
          <div className="h-px w-20 bg-orange-600/30 mb-8"></div>
          <button onClick={() => setIsPrivacyOpen(true)} className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-orange-600 transition-colors mb-6">{cur.privacyTitle}</button>
          <p className="text-slate-800 text-[10px] uppercase tracking-[0.4em] font-bold italic">Ahvan Tour Egypt © 2026</p>
      </footer>
    </main>
  );
}
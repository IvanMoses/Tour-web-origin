'use client';
import { useState } from 'react';
import { Instagram, Send, Facebook, X, Car, Plane, MapPin, Images, Menu, ShieldCheck, Globe, Star } from 'lucide-react';
import { TOURS, CONTACTS, LANGUAGES } from './tours-data';

export default function Home() {
  const [lang, setLang] = useState('en'); 
  const [activeAlbum, setActiveAlbum] = useState<any>(null); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const t = LANGUAGES[lang];

  const ABOUT_TEXT: any = {
    ru: {
      title: "О нас",
      founder: "Меня зовут Ахмед, я основатель Ahvan Tour и страстный организатор экскурсий с 2006 года. С многолетним опытом в туризме, я предлагаю индивидуальные поездки и незабываемые впечатления по всему Египту.",
      background: "Я живу в Германии, но я египтянин по происхождению. Именно эта комбинация позволяет мне понимать обе культуры и предоставлять моим клиентам доверительный и профессиональный сервис.",
      list: ["Сафари в пустыне", "Морские прогулки", "Частные туры в Каир/Луксор", "Трансферы и инд. запросы"],
      badge: "Опыт с 2006",
      slogan: "Ahvan Tour — это доверие, опыт и исключительный сервис."
    },
    en: {
      title: "About Us",
      founder: "My name is Ahmed, founder of Ahvan Tour and a passionate excursion planner since 2006. With many years of experience in tourism, I offer customized trips and unforgettable experiences across Egypt.",
      background: "I live in Germany but I am originally Egyptian. This unique background allows me to understand both cultures and provide a reliable, professional, and customer-focused service.",
      list: ["Desert safari adventures", "Boat trips & island excursions", "Private tours to Cairo/Luxor", "Transfers & custom requests"],
      badge: "Since 2006",
      slogan: "Ahvan Tour stands for trust, experience, and exceptional service."
    },
    de: {
      title: "Über uns",
      founder: "Mein Name ist Ahmed, Gründer von Ahvan Tour und leidenschaftlicher Ausflugsplaner seit 2006. Mit jahrelanger Erfahrung im Tourismus biete ich individuell geplante Erlebnisse und unvergessliche Ausflüge in Ägypten an.",
      background: "Ich lebe in Deutschland, bin aber gebürtiger Ägypter – genau diese Kombination ermöglicht es mir, beide Kulturen zu verstehen und meinen Kunden einen besonders vertrauensvollen und professionellen Service zu bieten.",
      list: ["Safari-Abenteuer", "Bootsausflüge & Inseltrips", "Private Touren Kairo/Luxor", "Transfers & Wünsche"],
      badge: "Seit 2006",
      slogan: "Ahvan Tour steht für Vertrauen, Erfahrung und unvergessliche Momente."
    }
    // ... другие языки берутся из шаблона en, если не указаны
  }[lang] || { title: "About Us", founder: "Ahmed...", background: "Egypt/Germany", list: [], badge: "2006", slogan: "" };

  const menu: any = {
    ru: { home: "Главная", trips: "Экскурсии", gallery: "Галерея", about: "О нас", transfer: "Трансфер", contact: "Контакты" },
    en: { home: "Home", trips: "Trips", gallery: "Gallery", about: "About Us", transfer: "Transfer", contact: "Contacts" },
    de: { home: "Startseite", trips: "Touren", gallery: "Galerie", about: "Über uns", transfer: "Transfer", contact: "Kontakte" }
  }[lang] || { home: "Home", trips: "Trips", gallery: "Gallery", about: "About Us", transfer: "Transfer", contact: "Contacts" };

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* 1. MODAL DATA PROTECTION */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[300] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
            <div className="p-8 border-b flex justify-between items-center bg-slate-50">
              <span className="font-black uppercase italic tracking-tighter text-xl">Data Protection</span>
              <button onClick={() => setIsPrivacyOpen(false)} className="hover:rotate-90 transition-transform"><X /></button>
            </div>
            <div className="p-8 overflow-y-auto text-sm text-slate-600 space-y-6 leading-relaxed custom-scrollbar text-left">
              <p className="font-bold border-l-4 border-orange-600 pl-4">Verantwortlich: Ahmed (Ahvan Tour)</p>
              <p>Data Protection

The person responsible within the meaning of the data protection laws, in particular the EU General Data Protection Regulation (GDPR), is:

Basem Hakim

Your data subject rights

You can exercise the following rights at any time using the contact details provided for our data protection officer:

Information about your data stored by us and their processing (Article 15 GDPR),
Correction of incorrect personal data (Article 16 GDPR),
Deletion of your data stored by us (Article 17 GDPR),
Restriction of data processing if we are not yet allowed to delete your data due to legal obligations (Article 18 GDPR),
Objection to the processing of your data by us (Article 21 GDPR) and
Data transferability if you have consented to data processing or have concluded a contract with us (Article 20 GDPR).
If you have given us your consent, you can revoke this at any time with effect for the future.

You can contact a supervisory authority at any time with a complaint, e.g. B. to the competent supervisory authority of the federal state of your place of residence or to the authority responsible for us as the responsible body.

Collection of general information when visiting our website

Type and purpose of processing:

If you access our website, ie if you do not register or otherwise submit information, information of a general nature is automatically recorded. This information (server log files) includes, for example, the type of web browser, the operating system used, the domain name of your Internet service provider, your IP address and the like.

In particular, they are processed for the following purposes:

Ensuring a problem-free connection to the website,
ensuring smooth use of our website,
Evaluation of system security and stability as well
to optimize our website.
We do not use your data to draw conclusions about your person. Information of this type is statistically evaluated by us, if necessary anonymously, in order to optimize our website and the technology behind it.

Legal basis and legitimate interest:

The processing takes place in accordance with Article 6 Paragraph 1 Letter f GDPR on the basis of our legitimate interest in improving the stability and functionality of our website.

Recipient:

Recipients of the data may be technical service providers who act as processors for the operation and maintenance of our website.

Storage duration:

The data will be deleted as soon as they are no longer required for the purpose of collection. This is generally the case for the data used to provide the website when the respective session has ended.

If the data is stored in log files, this is the case after 14 days at the latest. Storage beyond this is possible. In this case, the IP addresses of the users are anonymized so that it is no longer possible to assign the calling client.

Provision prescribed or required:

The provision of the aforementioned personal data is neither required by law nor by contract. Without the IP address, however, the service and functionality of our website cannot be guaranteed. In addition, individual services may not be available or may be restricted. For this reason, an objection is excluded.

Cookies

Like many other websites, we also use so-called “cookies”. Cookies are small text files that are stored on your end device (laptop, tablet, smartphone, etc.) when you visit our website.</p>
            </div>
            <div className="p-6 bg-slate-50 border-t">
              <button onClick={() => setIsPrivacyOpen(false)} className="w-full bg-slate-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs">Schließen / Close</button>
            </div>
          </div>
        </div>
      )}

      {/* --- Остальные модалки (Album) --- */}
      {activeAlbum && (
        <div className="fixed inset-0 z-[200] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4">
           <button onClick={() => setActiveAlbum(null)} className="absolute top-6 right-6 text-white z-[210] hover:scale-110 transition-transform"><X size={40} /></button>
           <div className="max-w-6xl w-full h-full overflow-y-auto p-4 custom-scrollbar">
             <h2 className="text-white text-4xl md:text-6xl font-black uppercase italic mb-10 mt-16 tracking-tighter">{activeAlbum.names[lang]}</h2>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
               {activeAlbum.gallery?.map((img: string, idx: number) => (
                 <div key={idx} className="aspect-square overflow-hidden rounded-2xl border border-white/5 shadow-2xl"><img src={img} className="w-full h-full object-cover" alt="" /></div>
               ))}
             </div>
             <div className="max-w-4xl bg-white/5 rounded-[2.5rem] p-8 md:p-12 mb-20 border border-white/10 backdrop-blur-sm">
               <p className="text-white text-xl md:text-2xl leading-relaxed font-medium opacity-90 whitespace-pre-line">{activeAlbum.desc[lang]}</p>
               <div className="mt-10">
                 <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(t.waHello + activeAlbum.names[lang])}`} className="bg-orange-600 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl inline-block">{t.btn} — ${activeAlbum.price}</a>
               </div>
             </div>
           </div>
        </div>
      )}

      {/* --- NAVIGATION --- */}
      <nav className="bg-white/95 backdrop-blur-lg border-b sticky top-0 z-[100] px-4 h-20 flex justify-between items-center shadow-sm">
        <a href="#home" className="flex items-center h-full shrink-0">
          <img src="/ahvan.svg" alt="AhVan Tour" className="h-10 md:h-14 w-auto object-contain" />
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

        {/* MOBILE BURGER MENU */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b shadow-2xl lg:hidden flex flex-col p-6 gap-4 animate-in slide-in-from-top z-[150]">
            {Object.entries(menu).map(([key, label]: any) => (
              <a key={key} href={`#${key}`} onClick={() => setIsMenuOpen(false)} className="text-lg uppercase font-black tracking-widest text-slate-900 border-b pb-2 italic">{label}</a>
            ))}
            {/* Кнопка Data Protection в Бургере */}
            <button 
              onClick={() => { setIsPrivacyOpen(true); setIsMenuOpen(false); }}
              className="text-sm text-left uppercase font-black tracking-widest text-orange-600 border-b pb-2 italic"
            >
              Data Protection
            </button>
            <div className="flex flex-wrap gap-2 pt-2">
              {Object.keys(LANGUAGES).map((l) => (
                <button key={l} onClick={() => { setLang(l); setIsMenuOpen(false); }} className={`flex-1 min-w-[60px] text-xs font-bold py-3 rounded-xl border ${lang === l ? 'bg-orange-600 text-white' : 'bg-slate-50 text-slate-500'}`}>{LANGUAGES[l].name}</button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO --- */}
      <section id="home" className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden bg-slate-900" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://i2.wp.com/see.news/images/2024/03/-1711659992-0.jpg?resize=750,500&ssl=1')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="relative z-10 px-6 max-w-5xl mx-auto">
            <div className="h-1.5 w-24 bg-orange-600 mx-auto mb-10 rounded-full"></div>
            <h1 className="text-6xl md:text-9xl font-black uppercase italic tracking-tighter mb-6 leading-none text-white drop-shadow-2xl">{t.heroTitle}</h1>
            <p className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm md:text-lg drop-shadow-md bg-black/20 backdrop-blur-sm px-6 py-2 rounded-full inline-block">{t.heroSub}</p>
          </div>
      </section>

      {/* --- TRIPS --- */}
      <section id="trips" className="max-w-7xl mx-auto py-24 px-6 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-4 text-slate-900">{t.toursTitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {TOURS.map((tour: any) => (
            <div key={tour.id} className="group bg-white border border-slate-100 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="h-80 w-full relative overflow-hidden cursor-pointer" onClick={() => setActiveAlbum(tour)}>
                <img src={tour.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="" />
                <div className="absolute top-5 right-5 z-20 bg-orange-600 text-white px-5 py-2 rounded-full font-black text-xs shadow-xl tracking-widest">${tour.price}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black uppercase italic mb-4 tracking-tight text-slate-900">{tour.names[lang]}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 h-12 line-clamp-2">{tour.desc[lang]}</p>
                <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(t.waHello + tour.names[lang])}`} target="_blank" className="block w-full bg-slate-900 text-white text-center py-4 rounded-2xl font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-orange-600 transition-all shadow-lg">{t.btn}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- ABOUT US (НЕМЕЦКИЙ ТЕКСТ + ЛОГО) --- */}
      <section id="about" className="py-24 bg-slate-50 scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative flex justify-center items-center">
              <div className="relative z-10 w-full aspect-square max-w-[500px] bg-white rounded-[3.5rem] shadow-2xl border-8 border-white flex items-center justify-center p-12 overflow-hidden group">
                <img src="/ahvan.svg" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" alt="Logo" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white p-8 rounded-3xl shadow-xl hidden md:block z-20">
                <div className="text-4xl font-black italic leading-none">2006</div>
                <div className="text-[10px] uppercase font-bold tracking-widest opacity-80">{ABOUT_TEXT.badge}</div>
              </div>
            </div>
            <div className="relative z-10 text-left">
              <div className="flex items-center gap-2 text-orange-600 font-black uppercase text-xs tracking-[0.3em] mb-6">
                <ShieldCheck size={18} /> Reliable & Professional
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none text-slate-900 mb-8">
                {ABOUT_TEXT.title.split(' ')[0]} <span className="text-orange-600">{ABOUT_TEXT.title.split(' ')[1] || 'Us'}</span>
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p className="font-bold text-slate-900">Willkommen bei Ahvan Tour</p>
                <p>{ABOUT_TEXT.founder}</p>
                <p>{ABOUT_TEXT.background}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  {ABOUT_TEXT.list?.map((item: string, i: number) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-black uppercase text-slate-800 tracking-wider">
                      <Star size={12} className="text-orange-600 fill-orange-600" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-10 p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm italic text-slate-500 border-l-8 border-l-orange-600">
                  "{ABOUT_TEXT.slogan}"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- GALLERY --- */}
      <section id="gallery" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TOURS.map((tour: any) => (
              <div key={tour.id} onClick={() => setActiveAlbum(tour)} className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer shadow-lg border-4 border-slate-50">
                <img src={tour.gallery?.[0] || tour.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6">
                   <h3 className="text-white font-black uppercase italic tracking-tight text-xl leading-none">{tour.names[lang]}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRANSFER --- */}
      <section id="transfer" className="py-24 bg-slate-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-left">
              <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-none text-slate-900">
                {t.transTitle} <span className="text-orange-600">{t.transName}</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8">{t.transDesc}</p>
              <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}?text=Hello! I want to book a transfer.`} target="_blank" className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl hover:bg-orange-600 transition-all inline-block">{t.btn}</a>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <img src="/images/transfer/car1.jpeg" className="rounded-[2.5rem] shadow-xl aspect-[3/4] object-cover border-4 border-white" alt="" />
                <div className="space-y-4">
                  <img src="/images/transfer/car2.jpeg" className="rounded-[2.5rem] shadow-xl aspect-square object-cover border-4 border-white" alt="" />
                  <div className="bg-orange-600 rounded-[2.5rem] p-8 text-white font-black italic uppercase text-lg leading-tight">Fast. Safe. <br />Direct Prices.</div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER (DESKTOP DATA PROTECTION) --- */}
      <footer id="contact" className="py-24 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <img src="/ahvan.svg" alt="Logo" className="h-16 w-auto mb-8 invert opacity-80" />
          <a href={`tel:${CONTACTS.phone}`} className="text-2xl font-bold mb-12 tracking-widest">{CONTACTS.phone}</a>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 mb-16 opacity-80">
            <a href={CONTACTS.instagram} target="_blank" className="flex flex-col items-center gap-2 group"><Instagram size={24} /><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">Instagram</span></a>
            <a href={`https://wa.me/${CONTACTS.whatsapp.replace(/\+/g, '')}`} target="_blank" className="flex flex-col items-center gap-2 group"><div className="font-black text-xl">WA</div><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">WhatsApp</span></a>
            <a href={CONTACTS.telegram} target="_blank" className="flex flex-col items-center gap-2 group"><Send size={24} /><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">Telegram</span></a>
            <a href={CONTACTS.tiktok} target="_blank" className="flex flex-col items-center gap-2 group"><div className="font-black text-xl">TT</div><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">TikTok</span></a>
            <a href={CONTACTS.facebook} target="_blank" className="flex flex-col items-center gap-2 group"><Facebook size={24} /><span className="text-[9px] uppercase font-bold tracking-widest opacity-50">Facebook</span></a>
          </div>

          <div className="h-px w-20 bg-orange-600/30 mb-8"></div>
          
          {/* Всегда видимая кнопка в футере */}
          <button 
            onClick={() => setIsPrivacyOpen(true)} 
            className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-orange-600 transition-colors mb-6"
          >
            Data Protection
          </button>
          
          <p className="text-slate-800 text-[10px] uppercase tracking-[0.4em] font-bold">Quality matters. Since 2026.</p>
        </div>
      </footer>
    </main>
  );
}
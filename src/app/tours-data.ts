export const CONTACTS = {
  whatsapp: "201556464007", // Номер без + для корректной работы API
  instagram: "ahvantour",
  telegram: "ahvantour"
};

export const LANGUAGES: any = {
  en: { 
    name: "EN", 
    brand: "AhWan Tour",
    heroTitle: "Hurghada is Waiting", 
    heroSub: "Best excursions from direct organizers",
    toursTitle: "Popular Excursions", 
    btn: "Book Now", 
    waHello: "Hello! I want to book a tour with AhVan Tour: ",
    transTitle: "Comfortable",
    transName: "Transfer",
    transDesc: "We ensure your comfort from the first minutes in Egypt. We will meet you at the airport, help with luggage, and deliver you anywhere in the country in modern cars."
  },
  ru: { 
    name: "RU", 
    brand: "AhWan Tour",
    heroTitle: "Хургада ждет тебя", 
    heroSub: "Лучшие экскурсии от прямых организаторов",
    toursTitle: "Популярные экскурсии", 
    btn: "Заказать", 
    waHello: "Здравствуйте! Хочу забронировать тур в AhVan Tour: ",
    transTitle: "Комфортный",
    transName: "Трансфер",
    transDesc: "Мы обеспечим ваш комфорт с первых минут пребывания в Египте. Встретим вас в аэропорту, поможем с багажом и доставим в любую точку страны на современных автомобилях."
  },
  de: { 
    name: "DE", 
    brand: "AhWan Tour", 
    heroTitle: "Hurghada Wartet", 
    heroSub: "Beste Ausflüge", 
    toursTitle: "Beliebte Touren", 
    btn: "Buchen", 
    waHello: "Hallo! Ich möchte buchen: ",
    transTitle: "Komfortabler",
    transName: "Transfer",
    transDesc: "Wir sorgen für Ihren Komfort ab den ersten Minuten in Ägypten. Wir holen Sie am Flughafen ab, helfen beim Gepäck und bringen Sie in modernen Autos überall hin."
  },
  pl: { 
    name: "PL", 
    brand: "AhWan Tour", 
    heroTitle: "Hurghada Czeka", 
    heroSub: "Najlepsze wycieczki", 
    toursTitle: "Popularne wycieczki", 
    btn: "Rezerwuj", 
    waHello: "Dzień dobry! Chcę zarezerwować: ",
    transTitle: "Wygodny",
    transName: "Transfer",
    transDesc: "Zapewniamy komfort od pierwszych minut w Egipcie. Odbierzemy Cię z lotniska, pomożemy z bagażem i dowieziemy w dowolne miejsce w kraju nowoczesnymi samochodami."
  },
  fr: { 
    name: "FR", 
    brand: "AhWan Tour", 
    heroTitle: "Hurghada vous Attend", 
    heroSub: "Meilleures excursions", 
    toursTitle: "Excursions Populaires", 
    btn: "Réserver", 
    waHello: "Bonjour! Je veux réserver: ",
    transTitle: "Confortable",
    transName: "Transfert",
    transDesc: "Nous assurons votre confort dès les premières minutes en Égypte. Nous vous accueillerons à l'aéroport, vous aiderons avec vos bagages et vous transporterons partout."
  },
  ro: { 
    name: "RO", 
    brand: "AhWan Tour", 
    heroTitle: "Hurghada te Așteaptă", 
    heroSub: "Cele mai bune excursii", 
    toursTitle: "Excursii Populare", 
    btn: "Rezervă", 
    waHello: "Bună! Vreau să rezerv: ",
    transTitle: "Confortabil",
    transName: "Transfer",
    transDesc: "Vă asigurăm confortul încă din primele minute în Egipt. Vă vom întâmpina la aeroport, vă vom ajuta cu bagajele și vă vom transporta oriunde în țară."
  }
};

export const TOURS: any = [
  {
    id: 1,
    image: "https://dynamic-media.tacdn.com/media/photo-o/2e/f1/e0/e0/caption.jpg?w=1400&h=1000&s=1",
    price: 25,
    names: { ru: "Оранжевый остров", en: "Orange Bay Island", de: "Insel Orange Bay", pl: "Pomarańczowa Zatoka", fr: "Île d'Orange Bay", ro: "Insula Orange Bay" },
    desc: { ru: "Египетские Мальдивы: белоснежный песок и лазурная вода.", en: "Egyptian Maldives: white sand and azure water.", de: "Ägyptische Malediven: weißer Sand.", pl: "Egipskie Malediwy: biały piasek.", fr: "Maldives égyptiennes.", ro: "Maldivele Egiptului." },
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/65/6f/c7/caption.jpg?w=1400&h=800&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/64/5d/7a/caption.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/64/58/fa/caption.jpg?w=1100&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/4a/d7/e5/caption.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/ba/35/d4/caption.jpg?w=1100&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/b1/25/11/caption.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/b1/25/0f/caption.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/95/d8/c4/lindo.jpg?w=1100&h=-1&s=1"
    ]
  },
  {
    id: 2,
    image: "https://thumbs.dreamstime.com/b/off-road-vehicles-driving-sahara-sand-desert-23312292.jpg?w=992",
    price: 20,
    names: { ru: "Сафари", en: "Safari", de: "Safari", pl: "Safari", fr: "Safari", ro: "Safari" },
    desc: { ru: "Экстрим в пустыне: квадроциклы, багги и ужин у бедуинов.", en: "Desert extreme: quads, buggies and Bedouin dinner.", de: "Wüstenextrem.", pl: "Ekstremalna pustynia.", fr: "Extrême désert.", ro: "Extrem în deșert." },
    gallery: [
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/9c/25/b9.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/8f/88/9b.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/8f/8a/6f.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/8f/8a/85.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/8f/8a/aa.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/9c/25/bc.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0e/9c/25/bf.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/b7/93/60/caption.jpg?w=1400&h=-1&s=1"
    ]
  },
  {
    id: 3,
    image: "https://media.istockphoto.com/id/175526084/photo/entrance-of-luxor-temple-egypt.jpg?s=2048x2048&w=is&k=20&c=b2UTpXEiPQras1FjAaGNPlYCZAdJVsXu3F-7sE_GsJU=",
    price: 50,
    names: { ru: "Луксор", en: "Luxor", de: "Luxor", pl: "Luksor", fr: "Louxor", ro: "Luxor" },
    desc: { ru: "Путешествие в историю: Карнакский храм и Долина Царей.", en: "A journey into history: Karnak Temple and Valley of the Kings.", de: "Reise in die Geschichte.", pl: "Podróż do historii.", fr: "Voyage en histoire.", ro: "Călătorie în istorie." },
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/60/dc/f5/temple-of-karnak.jpg?w=900&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/2d/bc/a9/photo2jpg.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/2c/94/17/habu-temple.jpg?w=600&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/2c/94/33/the-boys.jpg?w=600&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/1b/80/ef/muzeum-luksorskie.jpg?w=2000&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/ac/55/97/misc-bits-of-the-jigsaw.jpg?w=2400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/8c/4f/8f/luxor-temple.jpg?w=2400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f2/16/6b/caption.jpg?w=600&h=-1&s=1"
    ]
  },
  {
    id: 4,
    image: "https://media.istockphoto.com/id/1360323358/photo/scuba-divers-couple-near-beautiful-coral-reef-surrounded-with-shoal-of-coral-fish-and-three.jpg?s=2048x2048&w=is&k=20&c=VqzcWcAPNbzeEUMBLehWqe1OEUqSqODdq8FkdY8ne2E=",
    price: 45,
    names: { ru: "Дайвинг", en: "Diving", de: "Tauchen", pl: "Nurkowanie", fr: "Plongée", ro: "Scufundări" },
    desc: { ru: "Два погружения на рифах. Красота Красного моря.", en: "Two dives on reefs. Red Sea beauty.", de: "Zwei Tauchgänge.", pl: "Dwa nurkowania.", fr: "Deux plongées.", ro: "Două scufundări." },
    gallery: [
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/a5/5e/43.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/a5/5e/0e.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/a5/5e/11.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/a3/fc/3f/2018-04-12-06-largejpg.jpg?w=800&h=-1&s=1",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/74/6d/53.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/a5/5e/47.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/e4/7b/8f.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/08/3b/23/fa.jpg"
    ]
  },
  {
    id: 5,
    image: "https://media.istockphoto.com/id/1303043820/photo/mother-and-calf-dolphin-swimming-by.jpg?s=2048x2048&w=is&k=20&c=ROwzQl41EC0WuC93Fu2Ur2aWl5J9o1qcOeJKf1lqQ-c=",
    price: 35,
    names: { ru: "Дом Дельфинов", en: "Dolphin House", de: "Delfinhaus", pl: "Dom Delfinów", fr: "Maison des Dauphins", ro: "Casa Delfinilor" },
    desc: { ru: "Плавание с дельфинами в открытом море.", en: "Swimming with dolphins in the open sea.", de: "Schwimmen mit Delfinen.", pl: "Pływanie z delfinami.", fr: "Nager avec les dauphins.", ro: "Înot cu delfinii." },
    gallery: [
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/73/37/ea.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/25/1f/b5.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/25/1f/dd.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/7b/a1/fd.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/98/7e/f2/caption.jpg?w=1100&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/94/c9/16/dolphin-house.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/49/78/db/caption.jpg?w=1100&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/29/87/79/dolphin-house.jpg?w=1400&h=-1&s=1"
    ]
  },
  {
    id: 6,
    image: "https://as1.ftcdn.net/v2/jpg/02/79/09/84/1000_F_279098467_wy75eVNsfvhmqULOxzoFvGsjJwtSLyx8.jpg",
    price: 80,
    names: { ru: "Каир и Пирамиды", en: "Cairo & Pyramids", de: "Kairo & Pyramiden", pl: "Kair i Piramidy", fr: "Le Caire et les Pyramides", ro: "Cairo și Piramidele" },
    desc: { ru: "Пирамиды Гизы и Египетский музей.", en: "Giza Pyramids and Egyptian Museum.", de: "Gizeh-Pyramiden.", pl: "Piramidy w Gizie.", fr: "Pyramides de Gizeh.", ro: "Piramidele din Giza." },
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/7e/7d/2c/pyramids-of-giza.jpg?w=1600&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/7e/e9/36/pyramids-of-giza.jpg?w=2000&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/30/1b/d2/pyramiden-von-gizeh.jpg?w=2000&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/2b/9d/61/caption.jpg?w=1100&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/19/09/14/pyramids-of-giza.jpg?w=2000&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/48/46/2b/piramides-de-gize.jpg?w=2000&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/f4/bf/10/pyramids-of-giza.jpg?w=1000&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/4f/9c/21/pyramids-of-giza.jpg?w=2000&h=-1&s=1"
    ]
  },
  {
    id: 7,
    image: "https://scontent.fcai19-2.fna.fbcdn.net/v/t39.30808-6/486048372_10162247642253632_8650868296540325819_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=bPO_K3hePSYQ7kNvwHW6aIk&_nc_oc=AdqbvNZRg9FXHDH6czonIKjk1WBM9jA9hm8Z_EUOaaFmbuK2yW7IG8PLgDP3dThaY6g&_nc_zt=23&_nc_ht=scontent.fcai19-2.fna&_nc_gid=iE3vNxdBZXxGqZFD-Zusfg&_nc_ss=7a389&oh=00_Af2x1NmC0tyUhifa4mIT1nzVCYdQ44qvsf7gAR7McvW9bQ&oe=69E97DCF",
    price: 30,
    names: { ru: "Подводная лодка", en: "Submarine", de: "U-Boot", pl: "Łódź podwodna", fr: "Sous-marin", ro: "Submarin" },
    desc: { ru: "Погружение на глубину для всей семьи.", en: "Safe deep dive for the whole family.", de: "Sicherer Tieftauchgang.", pl: "Bezpieczne nurkowanie.", fr: "Plongée profonde.", ro: "Scufundare sigură." },
    gallery: [
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/07/72/00/b1.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/0e/06/8e.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/0e/06/94.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/5c/ee/db.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/11/51/06/fd.jpg",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/2f/d8/97/caption.jpg?w=1100&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/2f/d8/91/caption.jpg?w=1100&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/2f/d8/8d/caption.jpg?w=1400&h=-1&s=1"
    ]
  },
  {
    id: 8,
    image: "https://freebirdtravel.net/ImageBank/sea%20trip/-ImageBank-sea-trip-5833-jpg_856x450_5833.jpg",
    price: 25,
    names: { ru: "Парасейлинг", en: "Parasailing", de: "Parasailing", pl: "Parasailing", fr: "Parachute ascensionnel", ro: "Parasailing" },
    desc: { ru: "Полет на парашюте над морем.", en: "Parachute flight over the sea.", de: "Fallschirmflug.", pl: "Lot spadochronem.", fr: "Parachute ascensionnel.", ro: "Zbor cu parașuta." },
    gallery: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbBtKgMB0hp7IN7RMGuTYighurrr0iGp08xQ&s",
      "https://cdn.getyourguide.com/img/tour/3a7106359bddd890.jpeg/68.jpg",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/11/c7/27/8d.jpg",
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/17/0c/e4/85.jpg",
      "https://hurghadaforyou.com/sites/default/files/styles/medium/public/listings-gallery/Parasailing%20hurghada%20for%20you%204.jpg?itok=Tpz8sivL",
      "https://d3rr2gvhjw0wwy.cloudfront.net/uploads/activity_teasers/301242/600x400-1-50-572d58cfe12d354b8ef89bf2b7fe481a.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9rQvjyF_XniRKAt30mBZnzWVfP1GAnFfwQ&s",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/30/15/06/b2/caption.jpg?w=500&h=400&s=1"
    ]
  },
  {
    id: 9,
    image: "https://thumbs.dreamstime.com/b/red-sea-egypt-5455908.jpg?w=992",
    price: 30,
    names: { ru: "Морская прогулка", en: "Sea Trip", de: "Seereise", pl: "Wycieczka morska", fr: "Voyage en mer", ro: "Călătorie pe mare" },
    desc: { ru: "День на яхте: снорклинг, рыбалка и обед.", en: "Day on a yacht: snorkeling and fishing.", de: "Tag auf einer Yacht.", pl: "Dzień na jachcie.", fr: "Journée sur un yacht.", ro: "Zi pe un iaht." },
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/7e/7e/6a/caption.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/72/73/99/private-trip.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/72/73/93/private-trip.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/85/ab/59/caption.jpg?w=500&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/a1/99/b8/private-trip.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/7a/34/3a/koral.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/7a/34/18/na-na-na-na-chytam-chytam.jpg?w=1100&h=-1&s=1",
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/73/37/f5.jpg"
    ]
  }
];
export const CONTACTS = {
  whatsapp: "1234567890", // Замени на свой номер без +
};

export const LANGUAGES: any = {
  en: { 
    name: "EN", 
    brand: "AhVan Tour",
    heroTitle: "Hurghada is Waiting", 
    heroSub: "Best excursions from direct organizers",
    toursTitle: "Popular Excursions", 
    btn: "Book Now", 
    waHello: "Hello! I want to book a tour with AhVan Tour: " 
  },
  ru: { 
    name: "RU", 
    brand: "AhVan Tour",
    heroTitle: "Хургада ждет тебя", 
    heroSub: "Лучшие экскурсии от прямых организаторов",
    toursTitle: "Популярные экскурсии", 
    btn: "Заказать", 
    waHello: "Здравствуйте! Хочу забронировать тур в AhVan Tour: " 
  },
  de: { name: "DE", brand: "AhVan Tour", heroTitle: "Hurghada Wartet", heroSub: "Beste Ausflüge", toursTitle: "Beliebte Touren", btn: "Buchen", waHello: "Hallo! Ich möchte buchen: " },
  pl: { name: "PL", brand: "AhVan Tour", heroTitle: "Hurghada Czeka", heroSub: "Najlepsze wycieczki", toursTitle: "Popularne wycieczki", btn: "Rezerwuj", waHello: "Dzień dobry! Chcę zarezerwować: " },
  fr: { name: "FR", brand: "AhVan Tour", heroTitle: "Hurghada vous Attend", heroSub: "Meilleures excursions", toursTitle: "Excursions Populaires", btn: "Réserver", waHello: "Bonjour! Je veux réserver: " },
  ro: { name: "RO", brand: "AhVan Tour", heroTitle: "Hurghada te Așteaptă", heroSub: "Cele mai bune excursii", toursTitle: "Excursii Populare", btn: "Rezervă", waHello: "Bună! Vreau să rezerv: " }
};

// Генератор заглушек для галереи (чтобы не раздувать код, но ты можешь вписать свои ссылки)
const getDummyGallery = (topic: string) => [
  `https://images.unsplash.com/photo-${topic}-1?auto=format&fit=crop&q=60&w=500`,
  `https://images.unsplash.com/photo-${topic}-2?auto=format&fit=crop&q=60&w=500`,
  `https://images.unsplash.com/photo-${topic}-3?auto=format&fit=crop&q=60&w=500`,
  `https://images.unsplash.com/photo-${topic}-4?auto=format&fit=crop&q=60&w=500`,
  `https://images.unsplash.com/photo-${topic}-5?auto=format&fit=crop&q=60&w=500`,
  `https://images.unsplash.com/photo-${topic}-6?auto=format&fit=crop&q=60&w=500`,
  `https://images.unsplash.com/photo-${topic}-7?auto=format&fit=crop&q=60&w=500`,
  `https://images.unsplash.com/photo-${topic}-8?auto=format&fit=crop&q=60&w=500`,
];

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
    names: { ru: "Супер Сафари", en: "Super Safari", de: "Super Safari", pl: "Super Safari", fr: "Super Safari", ro: "Super Safari" },
    desc: { ru: "Экстрим в пустыне: квадроциклы, багги и ужин у бедуинов.", en: "Desert extreme: quads, buggies and Bedouin dinner.", de: "Wüstenextrem.", pl: "Ekstremalna pustynia.", fr: "Extrême désert.", ro: "Extrem în deșert." },
    gallery: getDummyGallery("1509233725247-49e657c54213")
  },
  {
    id: 3,
    image: "https://media.istockphoto.com/id/175526084/photo/entrance-of-luxor-temple-egypt.jpg?s=2048x2048&w=is&k=20&c=b2UTpXEiPQras1FjAaGNPlYCZAdJVsXu3F-7sE_GsJU=",
    price: 50,
    names: { ru: "Луксор", en: "Luxor", de: "Luxor", pl: "Luksor", fr: "Louxor", ro: "Luxor" },
    desc: { ru: "Путешествие в историю: Карнакский храм и Долина Царей.", en: "A journey into history: Karnak Temple and Valley of the Kings.", de: "Reise in die Geschichte.", pl: "Podróż do historii.", fr: "Voyage en histoire.", ro: "Călătorie în istorie." },
    gallery: getDummyGallery("1503177119275-0aa32b3a9368")
  },
  {
    id: 4,
    image: "https://media.istockphoto.com/id/1360323358/photo/scuba-divers-couple-near-beautiful-coral-reef-surrounded-with-shoal-of-coral-fish-and-three.jpg?s=2048x2048&w=is&k=20&c=VqzcWcAPNbzeEUMBLehWqe1OEUqSqODdq8FkdY8ne2E=",
    price: 45,
    names: { ru: "Дайвинг", en: "Diving", de: "Tauchen", pl: "Nurkowanie", fr: "Plongée", ro: "Scufundări" },
    desc: { ru: "Два погружения на рифах. Красота Красного моря.", en: "Two dives on reefs. Red Sea beauty.", de: "Zwei Tauchgänge.", pl: "Dwa nurkowania.", fr: "Deux plongées.", ro: "Două scufundări." },
    gallery: getDummyGallery("1544551763-47a0159c92b2")
  },
  {
    id: 5,
    image: "https://media.istockphoto.com/id/1303043820/photo/mother-and-calf-dolphin-swimming-by.jpg?s=2048x2048&w=is&k=20&c=ROwzQl41EC0WuC93Fu2Ur2aWl5J9o1qcOeJKf1lqQ-c=",
    price: 35,
    names: { ru: "Дом Дельфинов", en: "Dolphin House", de: "Delfinhaus", pl: "Dom Delfinów", fr: "Maison des Dauphins", ro: "Casa Delfinilor" },
    desc: { ru: "Плавание с дельфинами в открытом море.", en: "Swimming with dolphins in the open sea.", de: "Schwimmen mit Delfinen.", pl: "Pływanie z delfinami.", fr: "Nager avec les dauphins.", ro: "Înot cu delfinii." },
    gallery: getDummyGallery("1570481662006-a3a1374699e8")
  },
  {
    id: 6,
    image: "https://as1.ftcdn.net/v2/jpg/02/79/09/84/1000_F_279098467_wy75eVNsfvhmqULOxzoFvGsjJwtSLyx8.jpg",
    price: 80,
    names: { ru: "Каир и Пирамиды", en: "Cairo & Pyramids", de: "Kairo & Pyramiden", pl: "Kair i Piramidy", fr: "Le Caire et les Pyramides", ro: "Cairo și Piramidele" },
    desc: { ru: "Пирамиды Гизы и Египетский музей.", en: "Giza Pyramids and Egyptian Museum.", de: "Gizeh-Pyramiden.", pl: "Piramidy w Gizie.", fr: "Pyramides de Gizeh.", ro: "Piramidele din Giza." },
    gallery: getDummyGallery("1566112905121-15b9924404df")
  },
  {
    id: 7,
    image: "https://scontent.fcai19-2.fna.fbcdn.net/v/t39.30808-6/486048372_10162247642253632_8650868296540325819_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e06c5d&_nc_ohc=bPO_K3hePSYQ7kNvwHW6aIk&_nc_oc=AdqbvNZRg9FXHDH6czonIKjk1WBM9jA9hm8Z_EUOaaFmbuK2yW7IG8PLgDP3dThaY6g&_nc_zt=23&_nc_ht=scontent.fcai19-2.fna&_nc_gid=iE3vNxdBZXxGqZFD-Zusfg&_nc_ss=7a389&oh=00_Af2x1NmC0tyUhifa4mIT1nzVCYdQ44qvsf7gAR7McvW9bQ&oe=69E97DCF",
    price: 30,
    names: { ru: "Подводная лодка", en: "Submarine", de: "U-Boot", pl: "Łódź podwodna", fr: "Sous-marin", ro: "Submarin" },
    desc: { ru: "Погружение на глубину для всей семьи.", en: "Safe deep dive for the whole family.", de: "Sicherer Tieftauchgang.", pl: "Bezpieczne nurkowanie.", fr: "Plongée profonde.", ro: "Scufundare sigură." },
    gallery: getDummyGallery("1544644181-1484b3fdfc62")
  },
  {
    id: 8,
    image: "https://freebirdtravel.net/ImageBank/sea%20trip/-ImageBank-sea-trip-5833-jpg_856x450_5833.jpg",
    price: 25,
    names: { ru: "Парасейлинг", en: "Parasailing", de: "Parasailing", pl: "Parasailing", fr: "Parachute ascensionnel", ro: "Parasailing" },
    desc: { ru: "Полет на парашюте над морем.", en: "Parachute flight over the sea.", de: "Fallschirmflug.", pl: "Lot spadochronem.", fr: "Parachute ascensionnel.", ro: "Zbor cu parașuta." },
    gallery: getDummyGallery("1590523277543-a94d2e4eb00b")
  },
  {
    id: 9,
    image: "https://thumbs.dreamstime.com/b/red-sea-egypt-5455908.jpg?w=992",
    price: 30,
    names: { ru: "Морская прогулка", en: "Sea Trip", de: "Seereise", pl: "Wycieczka morska", fr: "Voyage en mer", ro: "Călătorie pe mare" },
    desc: { ru: "День на яхте: снорклинг, рыбалка и обед.", en: "Day on a yacht: snorkeling and fishing.", de: "Tag auf einer Yacht.", pl: "Dzień na jachcie.", fr: "Journée sur un yacht.", ro: "Zi pe un iaht." },
    gallery: getDummyGallery("1559136555-9303baea8ebd")
  }
];
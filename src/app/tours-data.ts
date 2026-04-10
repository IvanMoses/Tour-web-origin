export const CONTACTS = {
  whatsapp: "201", // ЗАМЕНИ НА СВОЙ НОМЕР БЕЗ ПЛЮСА
};

export const LANGUAGES: any = {
  ru: { 
    name: "RU", heroTitle: "Хургада ждет тебя", heroSub: "Лучшие экскурсии от прямых организаторов",
    toursTitle: "Популярные экскурсии", btn: "Заказать", waHello: "Здравствуйте! Хочу забронировать тур: " 
  },
  en: { 
    name: "EN", heroTitle: "Hurghada is Waiting", heroSub: "Best excursions from direct organizers",
    toursTitle: "Popular Excursions", btn: "Book Now", waHello: "Hello! I want to book a tour: " 
  },
  de: { 
    name: "DE", heroTitle: "Hurghada wartet", heroSub: "Beste Ausflüge von direkten Organisatoren",
    toursTitle: "Beliebte Ausflüge", btn: "Buchen", waHello: "Hallo! Ich möchte eine Tour buchen: " 
  },
  pl: { 
    name: "PL", heroTitle: "Hurghada czeka", heroSub: "Najlepsze wycieczki od bezpośrednich organizatorów",
    toursTitle: "Popularne wycieczki", btn: "Zarezerwuj", waHello: "Dzień dobry! Chcę zarezerwować wycieczkę: " 
  },
  fr: { 
    name: "FR", heroTitle: "Hurghada vous attend", heroSub: "Les meilleures excursions d'organisateurs directs",
    toursTitle: "Excursions populaires", btn: "Réserver", waHello: "Bonjour! Je souhaite réserver une excursion: " 
  },
  ro: { 
    name: "RO", heroTitle: "Hurghada te așteaptă", heroSub: "Cele mai bune excursii de la organizatori direcți",
    toursTitle: "Excursii populare", btn: "Rezervă", waHello: "Bună ziua! Vreau să rezerv un tur: " 
  }
};

export const TOURS: any = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&q=80&w=800",
    price: 25,
    names: { ru: "Оранжевый остров", en: "Orange Bay Island", de: "Insel Orange Bay", pl: "Pomarańczowa Zatoka", fr: "Île d'Orange Bay", ro: "Insula Orange Bay" },
    desc: { ru: "Египетские Мальдивы: белоснежный песок и лазурная вода.", en: "Egyptian Maldives: white sand and azure water.", de: "Ägyptische Malediven: weißer Sand und azurblaues Wasser.", pl: "Egipskie Malediwy: biały piasek i lazurowa woda.", fr: "Maldives égyptiennes : sable blanc et eau azur.", ro: "Maldivele Egiptului: nisip alb și apă de azur." }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&q=80&w=800",
    price: 20,
    names: { ru: "Супер Сафари", en: "Super Safari", de: "Super Safari", pl: "Super Safari", fr: "Super Safari", ro: "Super Safari" },
    desc: { ru: "Гонки на квадроциклах, багги и ужин в деревне бедуинов.", en: "Quads, buggy racing and dinner in a Bedouin village.", de: "Quads, Buggy-Rennen und Abendessen in einem Beduinendorf.", pl: "Quady, wyścigi buggy i kolacja w wiosce Beduinów.", fr: "Quads, course de buggys et dîner dans un village bédouin.", ro: "Quads, curse de buggy și cină într-un sat de beduini." }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800",
    price: 50,
    names: { ru: "Луксор", en: "Luxor", de: "Luxor", pl: "Luksor", fr: "Louxor", ro: "Luxor" },
    desc: { ru: "Величие древнего Египта: Карнакский храм и Долина Царей.", en: "The greatness of ancient Egypt: Karnak Temple and Valley of the Kings.", de: "Die Größe des alten Ägypten: Karnak-Tempel und Tal der Könige.", pl: "Wielkość starożytnego Egiptu: Świątynia Karnak i Dolina Królów.", fr: "La grandeur de l'Égypte ancienne : temple de Karnak et vallée des Rois.", ro: "Măreția Egiptului antic: Templul Karnak și Valea Regilor." }
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1544551763-47a0159c92b2?auto=format&fit=crop&q=80&w=800",
    price: 45,
    names: { ru: "Дайвинг", en: "Diving", de: "Tauchen", pl: "Nurkowanie", fr: "Plongée", ro: "Scufundări" },
    desc: { ru: "Погружение в Красное море с профессиональным инструктором.", en: "Diving in the Red Sea with a professional instructor.", de: "Tauchen im Roten Meer mit einem professionellen Tauchlehrer.", pl: "Nurkowanie w Morzu Czerwonym z profesjonalnym instruktorem.", fr: "Plongée en Mer Rouge avec un instructeur professionnel.", ro: "Scufundări în Marea Roșie cu un instructor profesionist." }
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&q=80&w=800",
    price: 35,
    names: { ru: "Дом Дельфинов", en: "Dolphin House", de: "Delfinhaus", pl: "Dom Delfinów", fr: "Maison des Dauphins", ro: "Casa Delfinilor" },
    desc: { ru: "Прогулка на яхте и плавание с дельфинами в открытом море.", en: "Yacht trip and swimming with dolphins in the open sea.", de: "Yachtausflug und Schwimmen mit Delfinen auf offener See.", pl: "Rejs jachtem i pływanie z delfinami na otwartym morzu.", fr: "Sortie en yacht et baignade avec les dauphins en pleine mer.", ro: "Excursie cu iahtul și înot cu delfinii în marea liberă." }
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1566112905121-15b9924404df?auto=format&fit=crop&q=80&w=800",
    price: 80,
    names: { ru: "Каир и Пирамиды", en: "Cairo & Pyramids", de: "Kairo & Pyramiden", pl: "Kair i Piramidy", fr: "Le Caire et les Pyramides", ro: "Cairo și Piramidele" },
    desc: { ru: "Главное чудо света, Сфинкс и Египетский музей.", en: "The main wonder of the world, the Sphinx and the Egyptian Museum.", de: "Das Weltwunder, die Sphinx und das Ägyptische Museum.", pl: "Cud świata, Sfinks i Muzeum Egipskie.", fr: "La merveille du monde, le Sphinx et le Musée égyptien.", ro: "Minunea lumii, Sfinxul și Muzeul Egiptean." }
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
    price: 30,
    names: { ru: "Подводная лодка", en: "Submarine", de: "U-Boot", pl: "Łódź podwodna", fr: "Sous-marin", ro: "Submarin" },
    desc: { ru: "Обзор рифов через панорамные окна на глубине 25 метров.", en: "Reef viewing through panoramic windows at 25 meters deep.", de: "Riffbesichtigung durch Panoramafenster in 25 Metern Tiefe.", pl: "Oglądanie raf przez panoramiczne okna na głębokości 25 metrów.", fr: "Vue sur le récif à travers des fenêtres panoramiques à 25 m de profondeur.", ro: "Vizualizarea recifului prin ferestre panoramice la 25 de metri adâncime." }
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800",
    price: 25,
    names: { ru: "Парасейлинг", en: "Parasailing", de: "Parasailing", pl: "Parasailing", fr: "Parachute ascensionnel", ro: "Parasailing" },
    desc: { ru: "Полет над морем на парашюте за катером. Адреналин и вид!", en: "Flight over the sea on a parachute behind a boat. Adrenaline!", de: "Flug über das Meer an einem Fallschirm hinter einem Boot.", pl: "Lot nad morzem na spadochronie za łodzią. Adrenalina!", fr: "Vol au-dessus de la mer en parachute derrière un bateau.", ro: "Zbor deasupra mării cu o parașută în spatele unei bărci." }
  }
];
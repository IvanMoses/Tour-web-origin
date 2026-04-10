export const CONTACTS = {
  whatsapp: "+201556464007", // ЗАМЕНИ НА СВОЙ НОМЕР БЕЗ ПЛЮСА
};

export const LANGUAGES: any = {
  ru: { 
    name: "RU", brand: "AhVan Tour", heroTitle: "Хургада ждет тебя", heroSub: "Лучшие экскурсии от прямых организаторов",
    toursTitle: "Популярные экскурсии", btn: "Заказать", waHello: "Здравствуйте! Хочу забронировать тур: " 
  },
  en: { 
    name: "EN", brand: "AhVan Tour", heroTitle: "Hurghada is Waiting", heroSub: "Best excursions from direct organizers",
    toursTitle: "Popular Excursions", btn: "Book Now", waHello: "Hello! I want to book a tour: " 
  },
  de: { 
    name: "DE", brand: "AhVan Tour", heroTitle: "Hurghada wartet", heroSub: "Beste Ausflüge von direkten Organisatoren",
    toursTitle: "Beliebte Ausflüge", btn: "Buchen", waHello: "Hallo! Ich möchte eine Tour buchen: " 
  },
  pl: { 
    name: "PL", brand: "AhVan Tour", heroTitle: "Hurghada czeka", heroSub: "Najlepsze wycieczki od bezpośrednich organizatorów",
    toursTitle: "Popularne wycieczki", btn: "Zarezerwuj", waHello: "Dzień dobry! Chcę zarezerwować wycieczkę: " 
  },
  fr: { 
    name: "FR", brand: "AhVan Tour", heroTitle: "Hurghada vous attend", heroSub: "Les meilleures excursions d'organisateurs directs",
    toursTitle: "Excursions populaires", btn: "Réserver", waHello: "Bonjour! Je souhaite réserver une excursion: " 
  },
  ro: { 
    name: "RO", brand: "AhVan Tour", heroTitle: "Hurghada te așteaptă", heroSub: "Cele mai bune excursii de la organizatori direcți",
    toursTitle: "Excursii populare", btn: "Rezervă", waHello: "Bună ziua! Vreau să rezerv un tur: " 
  }
};

export const TOURS: any = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1544145945-f904253d0c71?auto=format&fit=crop&q=80&w=800",
    price: 25,
    names: { ru: "Оранжевый остров", en: "Orange Bay Island", de: "Insel Orange Bay", pl: "Pomarańczowa Zatoka", fr: "Île d'Orange Bay", ro: "Insula Orange Bay" },
    desc: { ru: "Египетские Мальдивы: белоснежный песок, лазурная вода и отдых на стильном пляже.", en: "Egyptian Maldives: white sand, azure water and relaxation on a stylish beach.", de: "Ägyptische Malediven: weißer Sand, azurblaues Wasser und Entspannung an einem stilvollen Strand.", pl: "Egipskie Malediwy: biały piasek, lazurowa woda i relaks na stylowej plaży.", fr: "Maldives égyptiennes : sable blanc, eau azur et détente sur une plage élégante.", ro: "Maldivele Egiptului: nisip alb, apă de azur și relaxare pe o plajă elegantă." }
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?auto=format&fit=crop&q=80&w=800",
    price: 20,
    names: { ru: "Супер Сафари", en: "Super Safari", de: "Super Safari", pl: "Super Safari", fr: "Super Safari", ro: "Super Safari" },
    desc: { ru: "Экстрим в пустыне: квадроциклы, багги, джипы и ужин с шоу у бедуинов.", en: "Desert extreme: quads, buggies, jeeps and dinner with a show at the Bedouins.", de: "Wüstenextrem: Quads, Buggys, Jeeps und Abendessen mit Show bei den Beduinen.", pl: "Ekstremalna pustynia: quady, buggy, jeepy i kolacja z pokazem u Beduinów.", fr: "Extrême désert : quads, buggys, jeeps et dîner avec spectacle chez les Bédouins.", ro: "Extrem în deșert: quad-uri, buggy-uri, jeep-uri și cină cu spectacol la beduini." }
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&q=80&w=800",
    price: 50,
    names: { ru: "Луксор", en: "Luxor", de: "Luxor", pl: "Luksor", fr: "Louxor", ro: "Luxor" },
    desc: { ru: "Путешествие в историю: Карнакский храм, Долина Царей и колоссы Мемнона.", en: "A journey into history: Karnak Temple, Valley of the Kings and Colossi of Memnon.", de: "Eine Reise in die Geschichte: Karnak-Tempel, Tal der Könige und Memnonkolosse.", pl: "Podróż do historii: Świątynia Karnak, Dolina Królów i Kolosy Memnona.", fr: "Un voyage dans l'histoire : temple de Karnak, vallée des Rois et colosses de Memnon.", ro: "O călătorie în istorie: Templul Karnak, Valea Regilor și Coloșii lui Memnon." }
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1544551763-47a0159c92b2?auto=format&fit=crop&q=80&w=800",
    price: 45,
    names: { ru: "Дайвинг", en: "Diving", de: "Tauchen", pl: "Nurkowanie", fr: "Plongée", ro: "Scufundări" },
    desc: { ru: "Два погружения на разных рифах. Красота подводного мира Красного моря.", en: "Two dives on different reefs. The beauty of the underwater world of the Red Sea.", de: "Zwei Tauchgänge an verschiedenen Riffen. Die Schönheit der Unterwasserwelt des Roten Meeres.", pl: "Dwa nurkowania na różnych rafach. Piękno podwodnego świata Morza Czerwonego.", fr: "Deux plongées sur différents récifs. La beauté du monde sous-marin de la mer Rouge.", ro: "Două scufundări pe recife diferite. Frumusețea lumii subacvatice a Mării Roșii." }
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1570481662006-a3a1374699e8?auto=format&fit=crop&q=80&w=800",
    price: 35,
    names: { ru: "Дом Дельфинов", en: "Dolphin House", de: "Delfinhaus", pl: "Dom Delfinów", fr: "Maison des Dauphins", ro: "Casa Delfinilor" },
    desc: { ru: "Уникальная возможность поплавать с дельфинами в их природной среде обитания.", en: "A unique opportunity to swim with dolphins in their natural habitat.", de: "Eine einzigartige Gelegenheit, mit Delfinen in ihrem natürlichen Lebensraum zu schwimmen.", pl: "Wyjątkowa okazja do pływania z delfinami w ich naturalnym środowisku.", fr: "Une occasion unique de nager avec les dauphins dans leur habitat naturel.", ro: "O ocazie unică de a înota cu delfinii în habitatul lor natural." }
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1566112905121-15b9924404df?auto=format&fit=crop&q=80&w=800",
    price: 80,
    names: { ru: "Каир и Пирамиды", en: "Cairo & Pyramids", de: "Kairo & Pyramiden", pl: "Kair i Piramidy", fr: "Le Caire et les Pyramides", ro: "Cairo și Piramidele" },
    desc: { ru: "Великие пирамиды Гизы, Сфинкс и сокровища Египетского музея в Каире.", en: "Great Pyramids of Giza, the Sphinx and treasures of the Egyptian Museum in Cairo.", de: "Große Pyramiden von Gizeh, der Sphinx und Schätze des Ägyptischen Museums in Kairo.", pl: "Wielkie Piramidy w Gizie, Sfinks i skarby Muzeum Egipskiego w Kairze.", fr: "Grandes pyramides de Gizeh, le Sphinx et trésors du Musée égyptien du Caire.", ro: "Marile Piramide din Giza, Sfinxul și comorile Muzeului Egiptean din Cairo." }
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&q=80&w=800",
    price: 30,
    names: { ru: "Подводная лодка", en: "Submarine", de: "U-Boot", pl: "Łódź podwodna", fr: "Sous-marin", ro: "Submarin" },
    desc: { ru: "Безопасное погружение на глубину для всей семьи. Все краски рифов как на ладони.", en: "Safe deep dive for the whole family. All the colors of the reefs at a glance.", de: "Sicherer Tieftauchgang für die ganze Familie. Alle Farben der Riffe auf einen Blick.", pl: "Bezpieczne głębokie nurkowanie dla całej rodziny. Wszystkie kolory raf w zasięgu wzroku.", fr: "Plongée profonde sécurisée pour toute la famille. Toutes les couleurs des récifs en un coup d'œil.", ro: "Scufundare sigură pentru întreaga familie. Toate culorile recifelor dintr-o privire." }
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&q=80&w=800",
    price: 25,
    names: { ru: "Парасейлинг", en: "Parasailing", de: "Parasailing", pl: "Parasailing", fr: "Parachute ascensionnel", ro: "Parasailing" },
    desc: { ru: "Захватывающий полет на парашюте над морем. Лучший вид на город и рифы.", en: "Breathtaking parachute flight over the sea. Best view of the city and reefs.", de: "Atemberaubender Fallschirmflug über das Meer. Beste Aussicht auf die Stadt und die Riffe.", pl: "Zierający dech w piersiach lot spadochronem nad morzem. Najlepszy widok na miasto i rafy.", fr: "Vol en parachute à couper le souffle au-dessus de la mer. Meilleure vue sur la ville et les récifs.", ro: "Zbor cu parașuta care îți taie răsuflarea deasupra mării. Cea mai bună vedere a orașului și a recifelor." }
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    price: 30,
    names: { ru: "Морская прогулка", en: "Sea Trip", de: "Seereise", pl: "Wycieczka morska", fr: "Voyage en mer", ro: "Călătorie pe mare" },
    desc: { ru: "День на роскошной яхте: снорклинг, рыбалка и вкусный обед из морепродуктов.", en: "Day on a luxury yacht: snorkeling, fishing and a delicious seafood lunch.", de: "Tag auf einer Luxusyacht: Schnorcheln, Angeln und ein köstliches Mittagessen mit Meeresfrüchten.", pl: "Dzień na luksusowym jachcie: snorkeling, wędkarstwo i pyszny lunch z owocami morza.", fr: "Journée sur un yacht de luxe : snorkeling, pêche et délicieux déjeuner de fruits de mer.", ro: "Zi pe un iaht de lux: snorkeling, pescuit și un prânz delicios cu fructe de mare." }
  }
];
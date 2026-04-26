export const CONTACTS = {
  whatsapp: "201556464007",
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
    heroSub: "Beste Ausflüge direkt vom Veranstalter", 
    toursTitle: "Beliebte Touren", 
    btn: "Buchen", 
    waHello: "Hallo! Ich möchte buchen: ",
    transTitle: "Bequemer",
    transName: "Transfer",
    transDesc: "Wir sorgen für Ihren Komfort ab der ersten Minute. Wir holen Sie am Flughafen ab и bringen Sie in modernen Autos an jeden Ort in Ägypten."
  },
  pl: { 
    name: "PL", 
    brand: "AhWan Tour", 
    heroTitle: "Hurghada Czeka", 
    heroSub: "Najlepsze wycieczki bezpośrednio", 
    toursTitle: "Popularne wycieczki", 
    btn: "Rezerwuj", 
    waHello: "Dzień dobry! Chcę zarezerwować: ",
    transTitle: "Wygodny",
    transName: "Transfer",
    transDesc: "Zapewniamy komfort od pierwszych minut w Egipcie. Odbierzemy Cię z lotniska i dowieziemy w dowolne miejsce nowoczesnymi samochodami."
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
    transDesc: "Nous assurons votre confort dès votre arrivée. Nous vous accueillerons à l'aéroport et vous transporterons partout en Égypte."
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
    transDesc: "Vă asigurăm confortul încă din primele minute în Egipt. Vă întâmpinăm la aeroport și vă transportăm oriunde în țară."
  }
};

export const TOURS: any = [
  {
    id: 1,
    image: "https://dynamic-media.tacdn.com/media/photo-o/2e/f1/e0/e0/caption.jpg?w=1400&h=1000&s=1",
    price: 25,
    names: { ru: "Оранжевый остров", en: "Orange Bay Island", de: "Insel Orange Bay", pl: "Pomarańczowa Zatoka", fr: "Île d'Orange Bay", ro: "Insula Orange Bay" },
    desc: { 
      de: `Ganztägige Kreuzfahrt zur Orange Bay Insel bei Hurghada. Inklusive Transfer, Schnorcheln an Korallenriffen, Mittagessen an Bord und Entspannung am Strand mit den berühmten Holzschaukeln.`,
      ru: `Отправьтесь в незабываемый круиз на целый день на сказочный остров Оранж-Бэй. В программу входят две остановки для снорклинга, обед на яхте (шведский стол) и отдых на знаменитом пляже.`,
      en: `Full-day cruise to Orange Bay Island. Includes snorkeling stops, buffet lunch on board, and relaxation on the beach with its iconic wooden swings.`,
      pl: `Całodniowy rejs na wyspę Orange Bay. Snorkeling, pyszny lunch na pokładzie i relaks na rajskiej plaży.`,
      fr: `Croisière d'une journée à Orange Bay. Snorkeling, déjeuner buffet et détente sur la plage paradisiaque.`,
      ro: `Croazieră de o zi pe insula Orange Bay. Include snorkeling, prânz bufet și relaxare pe plaja cu nisip alb.`
    },
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
    names: { ru: "Супер Сафари", en: "Super Safari", de: "Jeep Safari Ausflug", pl: "Super Safari", fr: "Super Safari", ro: "Super Safari" },
    desc: { 
      de: `Wüstensafari mit Quads, Jeeps und Buggys. Besuch eines Beduinendorfes, Kamelreiten, Barbecue-Abendessen und eine orientalische Show bei Sonnenuntergang.`,
      ru: `Почувствуйте драйв пустыни! Квадроциклы, багги, поездка на джипах в деревню бедуинов, катание на верблюдах, ужин-барбекю и яркое восточное шоу на закате.`,
      en: `Experience the desert thrill! Quads, buggies, jeep trip to a Bedouin village, camel riding, BBQ dinner, and a vibrant oriental show at sunset.`,
      pl: `Poczuj dreszcz pustyni! Quady, buggy, wyprawa jeepem do wioski Beduinów, kolacja BBQ i show o zachodzie słońca.`,
      fr: `Vivez l'adrénaline du désert ! Quads, buggys, village bédouin, dîner barbecue et spectacle oriental.`,
      ro: `Adrenalina în deșert! Quad-uri, buggy, sat beduin, cină BBQ și spectacol oriental la apus.`
    },
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
    desc: { 
      ru: "Путешествие в великое прошлое: Карнакский храм, Долина Царей, храм Хатшепсут и Колоссы Мемнона. Узнайте тайны фараонов.",
      en: "A journey into the great past: Karnak Temple, Valley of the Kings, Hatshepsut Temple, and Colossi of Memnon.",
      de: "Eine Reise in die Vergangenheit: Karnak-Tempel, Tal der Könige, Hatschepsut-Tempel und Memnonkolosse.",
      pl: "Podróż do przeszłości: Świątynia Karnak, Dolina Królów i Świątynia Hatszepsut.",
      fr: "Un voyage dans le passé : temple de Karnak, vallée des Rois et temple d'Hatchepsout.",
      ro: "O călătorie în trecut: Templul Karnak, Valea Regilor și Templul Hatshepsut."
    },
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
    desc: { 
      de: `Zwei Tauchgänge an den besten Plätzen des Roten Meeres. Inklusive Ausrüstung, professionelle Instruktoren und Mittagessen.`,
      ru: `Погрузитесь в красоту Красного моря! Две остановки для дайвинга, профессиональные инструкторы, полное снаряжение и вкусный обед на борту.`,
      en: `Discover the underwater world with two impressive dives. Includes equipment, buffet lunch, and certified instructors.`,
      pl: `Odkryj podwodny świat podczas dwóch nurkowań. Sprzęt, lunch i opieka instruktorów w cenie.`,
      fr: `Découvrez le monde sous-marin avec deux plongées. Équipement et déjeuner inclus.`,
      ro: `Descoperiți lumea subacvatică cu două scufundări. Echipament și prânz inclus.`
    },
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
    desc: { 
      de: `Bootstour zu den natürlichen Lebensräumen der Delfine. Schnorcheln an Korallenriffen и Entspannung auf dem Deck.`,
      ru: `Уникальная возможность увидеть дельфинов в открытом море! Прогулка на яхте, две остановки для снорклинга на ярких рифах и вкусный обед.`,
      en: `A unique chance to see dolphins in the open sea! Boat trip, two snorkeling stops on vibrant reefs, and a delicious lunch.`,
      pl: `Wyjątkowa okazja, aby zobaczyć delfiny! Rejs, snorkeling na rafach i pyszny lunch.`,
      fr: `Une chance unique de voir des dauphins ! Sortie en bateau, snorkeling et déjeuner inclus.`,
      ro: `O șansă unică de a vedea delfinii! Excursie cu barca, snorkeling și prânz inclus.`
    },
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
    desc: { 
      de: `Besuchen Sie die Pyramiden von Gizeh, die Sphinx und das Ägyptische Museum in Kairo. Ein ganzer Tag voller Geschichte.`,
      ru: `Великие Пирамиды Гизы, величественный Сфинкс и Египетский музей в Каире. Весь день в сопровождении гида-историка.`,
      en: `The Great Pyramids of Giza, the majestic Sphinx, and the Egyptian Museum in Cairo. Full day with an expert guide.`,
      pl: `Wielkie Piramidy w Gizie, Sfinks i Muzeum Egipskie w Kairze. Cały dzień z egiptologiem.`,
      fr: `Les Grandes Pyramides de Gizeh, le Sphinx et le Musée égyptien du Caire.`,
      ro: `Marile Piramide din Giza, Sfinxul și Muzeul Egiptean din Cairo.`
    },
    gallery: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/7e/7d/2c/pyramids-of-giza.jpg?w=1600&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/7e/e9/36/pyramids-of-giza.jpg?w=2000&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/24/0e/e5/the-cairo-museum.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/6d/8d/46/pyramids-of-giza.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/00/39/3c/egyptian-museum.jpg?w=1100&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/90/fc/fc/the-sphinx.jpg?w=1100&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/0c/3a/0c/caption.jpg?w=1400&h=-1&s=1",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/2a/39/78/caption.jpg?w=600&h=-1&s=1"
    ]
  },
  {
    id: 8,
    image: "https://freebirdtravel.net/ImageBank/sea%20trip/-ImageBank-sea-trip-5833-jpg_856x450_5833.jpg",
    price: 25,
    names: { ru: "Парасейлинг", en: "Parasailing", de: "Parasailing", pl: "Parasailing", fr: "Parachute ascensionnel", ro: "Parasailing" },
    desc: { 
      de: `Fliegen Sie mit dem Fallschirm über das Rote Meer und genießen Sie den Panoramablick auf Hurghada. Sicher und aufregend.`,
      ru: `Полет на парашюте над морем на высоте 30-40 метров. Ощутите невероятную свободу и насладитесь панорамным видом.`,
      en: `Fly 30-40 meters above the sea. Feel incredible freedom and enjoy panoramic views of the coast.`,
      pl: `Lot spadochronem nad morzem. Poczuj wolność i podziwiaj panoramę wybrzeża.`,
      fr: `Vol en parachute au-dessus de la mer. Vivez une liberté incroyable.`,
      ro: `Zbor cu parașuta deasupra mării. Simțiți libertatea și bucurați-vă de priveliște.`
    },
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
  }
];
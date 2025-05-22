import { PopularDestination } from "./ui/PopularDestination";

const destinations = {
  1: {
    id: "dest-1",
    image: "/images/destinos/mundial/turquia.webp",
    title: "Paquete Vacacional Turquía",
    description: "Visita Estambul, Capadocia y más con tours guiados.",
    days: "7 Días / 6 Noches",
    rating: 4.7,
    modalDetails: {
      destinationName: "Turquía",
      mainImage: "/images/destinos/mundial/turquia.webp",
      galleryImages: [
        "/images/destinos/mundial/turquia.webp",
        "/images/destinos/mundial/turquia.webp",
        "/images/destinos/mundial/turquia.webp",
      ],
      catchyPhrase:
        "¡Donde Oriente se encuentra con Occidente, una tierra de maravillas eternas!",
      price: "Desde $1,899 USD",
      duration: "7 Días / 6 Noches",
      overview:
        "Descubre la magia de Turquía, un puente entre continentes, con maravillas antiguas, paisajes impresionantes y una cultura vibrante que cautivará tus sentidos.",
      itineraryHighlights: [
        "Explora la Mezquita Azul, Santa Sofía y el Gran Bazar en Estambul.",
        "Maravíllate con las 'chimeneas de hadas' y ciudades subterráneas de Capadocia.",
        "Visita las antiguas ruinas de Éfeso, Patrimonio de la Humanidad por la UNESCO.",
        "Relájate en las playas vírgenes de la Costa Turquesa.",
      ],
      packageIncludes: [
        "Vuelos internacionales de ida y vuelta.",
        "Alojamiento en hoteles 4 estrellas.",
        "Desayuno diario y algunas cenas locales.",
        "Tours guiados con expertos locales.",
        "Entradas a todas las atracciones programadas.",
      ],
      optionalAddons: [
        "Paseo en globo aerostático en Capadocia.",
        "Experiencia tradicional de baño turco.",
      ],
      bookingContact: "Llama al 1-800-EXPLORA-TR o visita nuestro sitio web.",
    },
  },
  2: {
    id: "dest-2",
    image: "/images/destinos/mundial/italia.webp",
    title: "Viaje Todo Incluido Italia",
    description:
      "Disfruta Roma, Venecia y Florencia con experiencias seleccionadas.",
    days: "7 Días / 6 Noches",
    rating: 4.9,
    modalDetails: {
      destinationName: "Italia",
      mainImage: "/images/destinos/mundial/italia.webp",
      galleryImages: [
        "/images/destinos/mundial/italia.webp",
        "/images/destinos/mundial/italia.webp",
        "/images/destinos/mundial/italia.webp",
      ],
      catchyPhrase: "¡Vive 'La Dolce Vita': Arte, Historia y Pasión!",
      price: "Desde $2,450 USD",
      duration: "7 Días / 6 Noches",
      overview:
        "Sumérgete en el romance y la belleza de Italia. Desde las maravillas antiguas de Roma hasta el corazón artístico de Florencia y los encantadores canales de Venecia, este viaje es un festín para el alma.",
      itineraryHighlights: [
        "Admira el Coliseo, el Foro Romano y la Fontana di Trevi en Roma.",
        "Descubre obras maestras del Renacimiento en Florencia, incluido el David de Miguel Ángel.",
        "Disfruta de un clásico paseo en góndola por los canales de Venecia.",
        "Saborea auténtica cocina italiana y vinos de clase mundial.",
      ],
      packageIncludes: [
        "Vuelos internacionales a Italia.",
        "Alojamiento en hoteles boutique céntricos.",
        "Desayuno diario, cata de vinos y cena de despedida.",
        "Boletos de tren de alta velocidad entre ciudades principales.",
        "Tours guiados por la ciudad y entradas a museos.",
      ],
      optionalAddons: [
        "Clase de cocina toscana.",
        "Excursión de un día a Pompeya.",
      ],
      bookingContact: "Reserva tu sueño italiano al 1-800-CIAO-BELLA.",
    },
  },
  3: {
    id: "dest-3",
    image: "/images/destinos/mundial/japon.webp",
    title: "Tour Cultural Japón",
    description: "Explora Tokio, Kioto y templos en una aventura guiada.",
    days: "7 Días / 6 Noches",
    rating: 4.8,
    modalDetails: {
      destinationName: "Japón",
      mainImage: "/images/destinos/mundial/japon.webp",
      galleryImages: [
        "/images/destinos/mundial/japon.webp",
        "/images/destinos/mundial/japon.webp",
        "/images/destinos/mundial/japon.webp",
      ],
      catchyPhrase:
        "Donde la tradición milenaria se encuentra con la innovación futurista.",
      price: "Desde $3,100 USD",
      duration: "7 Días / 6 Noches",
      overview:
        "Sumérgete en la cultura única de Japón. Vive la energía de Tokio, la belleza serena de los templos de Kioto y la armonía respetuosa de la vida japonesa.",
      itineraryHighlights: [
        "Recorre el cruce de Shibuya y el Santuario Meiji en Tokio.",
        "Participa en una ceremonia tradicional del té en Kioto.",
        "Visita Kinkaku-ji (Pabellón Dorado) y Fushimi Inari en Kioto.",
        "Viaja en el famoso Shinkansen (tren bala).",
      ],
      packageIncludes: [
        "Vuelos internacionales de ida y vuelta.",
        "Alojamiento en hoteles cómodos.",
        "Desayuno diario y algunas comidas japonesas auténticas.",
        "Japan Rail Pass para rutas especificadas.",
        "Tours culturales guiados en Tokio y Kioto.",
      ],
      optionalAddons: [
        "Excursión al Monte Fuji.",
        "Experiencia de sumo (según temporada).",
      ],
      bookingContact: "Descubre Japón: 1-888-ZEN-TOUR.",
    },
  },
  4: {
    id: "dest-4",
    image: "/images/destinos/mundial/grecia.webp",
    title: "Escapada a Islas Griegas",
    description: "Navega el mar Egeo y descubre la antigua Atenas.",
    days: "8 Días / 7 Noches",
    rating: 4.6,
    modalDetails: {
      destinationName: "Grecia",
      mainImage: "/images/destinos/mundial/grecia.webp",
      galleryImages: [
        "/images/destinos/mundial/grecia.webp",
        "/images/destinos/mundial/grecia.webp",
        "/images/destinos/mundial/grecia.webp",
      ],
      catchyPhrase: "¡Tierras míticas y sueños bañados por el sol del Egeo!",
      price: "Desde $2,200 USD",
      duration: "8 Días / 7 Noches",
      overview:
        "Viaja a la cuna de la civilización occidental. Explora la antigua Acrópolis en Atenas y navega por las impresionantes islas del Egeo, cada una con su propio encanto y belleza.",
      itineraryHighlights: [
        "Visita la Acrópolis y el Partenón en la histórica Atenas.",
        "Islas: Mykonos por su ambiente vibrante y playas.",
        "Vive los atardeceres y vistas de la caldera en Santorini.",
        "Descubre ruinas antiguas y pueblos encantadores.",
      ],
      packageIncludes: [
        "Vuelos internacionales a Atenas.",
        "Alojamiento en Atenas y en las islas.",
        "Desayuno diario y algunas cenas locales.",
        "Transporte en ferry entre islas.",
        "Tour guiado por los principales sitios históricos de Atenas.",
      ],
      optionalAddons: [
        "Tour en barco al volcán en Santorini.",
        "Excursión a Delfos desde Atenas.",
      ],
      bookingContact: "Tu odisea griega te espera: 1-800-MYTHOS-GO.",
    },
  },
  5: {
    id: "dest-5",
    image: "/images/destinos/mundial/bali.webp",
    title: "Paquete de Retiro en Bali",
    description: "Relájate en Ubud, playas y terrazas de arroz incluidas.",
    days: "10 Días / 9 Noches",
    rating: 4.9,
    modalDetails: {
      destinationName: "Bali",
      mainImage: "/images/destinos/mundial/bali.webp",
      galleryImages: [
        "/images/destinos/mundial/bali.webp",
        "/images/destinos/mundial/bali.webp",
        "/images/destinos/mundial/bali.webp",
      ],
      catchyPhrase: "Encuentra tu serenidad en la Isla de los Dioses.",
      price: "Desde $1,550 USD",
      duration: "10 Días / 9 Noches",
      overview:
        "Escápate a la encantadora isla de Bali, famosa por su ambiente espiritual, arrozales, playas y vibrante escena artística. Un retiro perfecto para relajación e inmersión cultural.",
      itineraryHighlights: [
        "Explora el corazón artístico de Ubud y sus terrazas de arroz.",
        "Visita templos sagrados como Tanah Lot y Uluwatu.",
        "Relájate en las hermosas playas de Seminyak o Nusa Dua.",
        "Disfruta de un masaje balinés tradicional y tratamientos de bienestar.",
      ],
      packageIncludes: [
        "Vuelos internacionales de ida y vuelta.",
        "Alojamiento en resorts y villas serenas.",
        "Desayuno diario y opciones de cocina local saludable.",
        "Traslados al aeropuerto y algunos transportes locales.",
        "Excursiones culturales guiadas y una sesión de yoga.",
      ],
      optionalAddons: [
        "Clases de surf.",
        "Caminata al amanecer en el Monte Batur.",
      ],
      bookingContact: "Rejuvenece en Bali: 1-877-ISLAND-ZEN.",
    },
  },
  6: {
    id: "dest-6",
    image: "/images/destinos/mundial/egipto.webp",
    title: "Explorador de Egipto",
    description: "Recorre pirámides, la Esfinge y navega el Nilo.",
    days: "9 Días / 8 Noches",
    rating: 4.5,
    modalDetails: {
      destinationName: "Egipto",
      mainImage: "/images/destinos/mundial/egipto.webp",
      galleryImages: [
        "/images/destinos/mundial/egipto.webp",
        "/images/destinos/mundial/egipto.webp",
        "/images/destinos/mundial/egipto.webp",
      ],
      catchyPhrase: "¡Descubre los misterios de los antiguos faraones!",
      price: "Desde $2,800 USD",
      duration: "9 Días / 8 Noches",
      overview:
        "Viaja al pasado en una épica aventura por Egipto. Contempla las colosales Pirámides de Giza, la enigmática Esfinge y navega el legendario Nilo, descubriendo templos y tumbas ancestrales.",
      itineraryHighlights: [
        "Admira las Pirámides de Giza y la Esfinge.",
        "Explora los tesoros del Museo Egipcio en El Cairo.",
        "Disfruta de un crucero de lujo por el Nilo de Luxor a Asuán.",
        "Visita el Templo de Karnak, Luxor y el Valle de los Reyes.",
      ],
      packageIncludes: [
        "Vuelos internacionales a El Cairo.",
        "Vuelos domésticos dentro de Egipto.",
        "Alojamiento en hotel y crucero por el Nilo (pensión completa).",
        "Todas las comidas durante el crucero, desayuno diario en otros lugares.",
        "Guías egiptólogos expertos para todos los tours.",
        "Entradas a todos los sitios históricos programados.",
      ],
      optionalAddons: [
        "Excursión a Abu Simbel.",
        "Paseo en globo sobre la ribera oeste de Luxor.",
      ],
      bookingContact: "Tu aventura egipcia: 1-800-NILE-KING.",
    },
  },
};

export const Carousel = () => {
  return <PopularDestination destinations={destinations} />;
};

import { StarIcon } from "@heroicons/react/20/solid";
import { useState, useRef, useEffect } from "react";

export const PopularDestination = () => {
  const [startIndex, setStartIndex] = useState(0);
  const sliderRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  // Determinar cuántas tarjetas mostrar según el ancho de la pantalla
  const getVisibleCards = () => {
    if (windowSize.width < 768) return 1; // móvil
    if (windowSize.width < 1024) return 2; // tablet
    return 3; // desktop
  };

  const destinations = {
    1: {
      image: "/Hero.webp",
      title: "Turkey Vacation Package",
      description: "Visit Istanbul, Cappadocia & more with guided tours.",
      days: "7 Days / 6 Nights",
      rating: 4.7,
    },
    2: {
      image: "/Hero.webp",
      title: "Italy All-Inclusive Trip",
      description: "Enjoy Rome, Venice & Florence with curated experiences.",
      days: "7 Days / 6 Nights",
      rating: 4.9,
    },
    3: {
      image: "/Hero.webp",
      title: "Japan Cultural Tour",
      description: "Explore Tokyo, Kyoto & temples in a guided adventure.",
      days: "7 Days / 6 Nights",
      rating: 4.8,
    },
    4: {
      image: "/Hero.webp",
      title: "Greece Island Escape",
      description: "Sail the Aegean Sea and discover ancient Athens.",
      days: "8 Days / 7 Nights",
      rating: 4.6,
    },
    5: {
      image: "/Hero.webp",
      title: "Bali Retreat Package",
      description: "Relax in Ubud, beaches & rice terraces included.",
      days: "10 Days / 9 Nights",
      rating: 4.9,
    },
    6: {
      image: "/Hero.webp",
      title: "Egypt Explorer Trip",
      description: "Tour pyramids, the Sphinx & cruise the Nile River.",
      days: "9 Days / 8 Nights",
      rating: 4.5,
    },
  };

  const destinosES = {
    1: {
      image: "/Hero.webp",
      title: "Paquete a Turquía",
      description: "Descubre Estambul, Capadocia y más con tours guiados.",
      days: "7 Días / 6 Noches",
      rating: 4.7,
    },
    2: {
      image: "/Hero.webp",
      title: "Viaje Todo Incluido a Italia",
      description: "Conoce Roma, Venecia y Florencia con experiencias únicas.",
      days: "7 Días / 6 Noches",
      rating: 4.9,
    },
    3: {
      image: "/Hero.webp",
      title: "Tour Cultural en Japón",
      description: "Visita Tokio, Kioto y templos en un viaje guiado.",
      days: "7 Días / 6 Noches",
      rating: 4.8,
    },
    4: {
      image: "/Hero.webp",
      title: "Escapada a las Islas Griegas",
      description: "Navega el mar Egeo y descubre la antigua Atenas.",
      days: "8 Días / 7 Noches",
      rating: 4.6,
    },
    5: {
      image: "/Hero.webp",
      title: "Retiro en Bali",
      description: "Relájate en Ubud, playas y arrozales incluidos.",
      days: "10 Días / 9 Noches",
      rating: 4.9,
    },
    6: {
      image: "/Hero.webp",
      title: "Exploración por Egipto",
      description: "Conoce las pirámides, la Esfinge y navega por el Nilo.",
      days: "9 Días / 8 Noches",
      rating: 4.5,
    },
  };

  const totalDestinations = Object.keys(destinations).length;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      if (prevIndex === 0) {
        return Math.max(0, totalDestinations - getVisibleCards());
      }
      return Math.max(0, prevIndex - 1);
    });
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      const visibleCards = getVisibleCards();
      if (prevIndex >= totalDestinations - visibleCards) {
        return 0;
      }
      return Math.min(totalDestinations - visibleCards, prevIndex + 1);
    });
  };

  const visibleDestinations = Object.entries(destinations).slice(
    startIndex,
    startIndex + getVisibleCards()
  );

  return (
    <section className="w-5/6 mx-auto mt-10 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="header-text">Your Dream Vacation Awaits!</h2>
          <p className="sub-text">
            Discover top destinations and unforgettable experiences.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            className="rounded-button bg-transparent text-gray-900 border-none font-stretch-ultra-condensed font-normal text-2xl"
            onClick={handlePrev}
          >
            {"<"}
          </button>
          <button
            className="rounded-button bg-gray-900 text-white border-gray-900 font-stretch-ultra-condensed font-normal text-2xl"
            onClick={handleNext}
          >
            {">"}
          </button>
        </div>
      </div>
      <div>
        <div
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4"
        >
          {visibleDestinations.map(([key, destination]) => (
            <div key={key} className="flex flex-col items-left gap-5">
              <a
                href="#"
                className="hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-60 object-cover rounded-4xl"
                  />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-indigo-600 text-white rounded-4xl px-4 py-1 border-5 border-white">
                    {destination.days}
                  </div>
                </div>
              </a>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-semibold mt-2">
                    {destination.title}
                  </h3>
                  <p className="sub-text">{destination.description}</p>
                </div>
                <div className="flex items-center gap-1 mt-2 bg-indigo-600 w-fit h-fit py-2 px-4 text-center rounded-4xl">
                  <StarIcon className="size-5 text-white" aria-hidden="true" />
                  <p className="text-white">{destination.rating}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { StarIcon } from "@heroicons/react/20/solid";
import { useState, useRef, useEffect } from "react";

export const PopularDestination = () => {
  // Estado para controlar el índice inicial visible
  const [startIndex, setStartIndex] = useState(0);
  // Referencia al contenedor del slider para los eventos touch
  const sliderRef = useRef(null);
  // Estado para el tamaño de la ventana
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  // Determinar cuántas tarjetas mostrar según el ancho de la pantalla
  const getVisibleCards = () => {
    if (windowSize.width < 768) return 1; // móvil
    if (windowSize.width < 1024) return 2; // tablet
    return 3; // desktop
  };

  // Destinos ampliados con 3 nuevos
  const destinations = {
    1: {
      image: "/Hero.webp", // Corregida la ruta (eliminar "public/")
      title: "Pack to Turkey",
      description:
        "Explore the beautiful landscapes and rich culture of Turkey.",
      days: "7 Days/6 Nights",
      rating: 4.7,
    },
    2: {
      image: "/Hero.webp",
      title: "Pack to Italy",
      description: "Experience the art, history, and cuisine of Italy.",
      days: "7 Days/6 Nights",
      rating: 4.9,
    },
    3: {
      image: "/Hero.webp",
      title: "Pack to Japan",
      description: "Discover the blend of tradition and modernity in Japan.",
      days: "7 Days/6 Nights",
      rating: 4.8,
    },
    // Nuevos destinos añadidos
    4: {
      image: "/Hero.webp",
      title: "Pack to Greece",
      description: "Immerse yourself in ancient history and stunning islands.",
      days: "8 Days/7 Nights",
      rating: 4.6,
    },
    5: {
      image: "/Hero.webp",
      title: "Pack to Bali",
      description:
        "Relax on pristine beaches and explore lush tropical jungles.",
      days: "10 Days/9 Nights",
      rating: 4.9,
    },
    6: {
      image: "/Hero.webp",
      title: "Pack to Egypt",
      description:
        "Marvel at ancient pyramids and cruise along the Nile River.",
      days: "9 Days/8 Nights",
      rating: 4.5,
    },
  };

  // Total de destinos
  const totalDestinations = Object.keys(destinations).length;

  // Observer para el tamaño de la ventana
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

  // Variables para el touch slider
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Manejadores de eventos touch
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diffX = touchStartX.current - touchEndX.current;

    // Si el deslizamiento fue significativo
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // Deslizamiento a la izquierda -> mostrar siguiente
        handleNext();
      } else {
        // Deslizamiento a la derecha -> mostrar anterior
        handlePrev();
      }
    }
  };

  // Función para ir a la tarjeta anterior
  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      // Si estamos en el primer grupo, ir al último grupo
      if (prevIndex === 0) {
        return Math.max(0, totalDestinations - getVisibleCards());
      }
      // De lo contrario, retroceder una tarjeta
      return Math.max(0, prevIndex - 1);
    });
  };

  // Función para ir a la tarjeta siguiente
  const handleNext = () => {
    setStartIndex((prevIndex) => {
      const visibleCards = getVisibleCards();
      // Si estamos en el último grupo, volver al primero
      if (prevIndex >= totalDestinations - visibleCards) {
        return 0;
      }
      // De lo contrario, avanzar una tarjeta
      return Math.min(totalDestinations - visibleCards, prevIndex + 1);
    });
  };

  // Calcula las tarjetas visibles actuales
  const visibleDestinations = Object.entries(destinations).slice(
    startIndex,
    startIndex + getVisibleCards()
  );

  return (
    <section className="w-5/6 mx-auto mt-10 flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">
            Your Dream Vacation Awaits!
          </h2>
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

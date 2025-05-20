import { StarIcon } from "@heroicons/react/20/solid";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion"; // Solo necesitamos motion, no AnimatePresence para esto

export const PopularDestination = () => {
  // 'page' determinará el desplazamiento. Cada 'página' es el ancho de UNA tarjeta.
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

  const constraintsRef = useRef(null); // Para el contenedor viewport
  const [cardWidth, setCardWidth] = useState(0); // Ancho de una tarjeta individual
  const [gap, setGap] = useState(0); // Espacio del grid-gap

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  // No necesitamos getVisibleCardsCount para esta lógica de desplazamiento
  // pero lo usamos para el startIndex de los datos si no hacemos bucle completo abajo

  const destinations = {
    1: {
      id: "dest-1",
      image: "/turquia.jpg",
      title: "Turkey Vacation Package",
      description: "Visit Istanbul, Cappadocia & more with guided tours.",
      days: "7 Days / 6 Nights",
      rating: 4.7,
    },
    2: {
      id: "dest-2",
      image: "/italia.webp",
      title: "Italy All-Inclusive Trip",
      description: "Enjoy Rome, Venice & Florence with curated experiences.",
      days: "7 Days / 6 Nights",
      rating: 4.9,
    },
    3: {
      id: "dest-3",
      image: "/japon.jpg",
      title: "Japan Cultural Tour",
      description: "Explore Tokyo, Kyoto & temples in a guided adventure.",
      days: "7 Days / 6 Nights",
      rating: 4.8,
    },
    4: {
      id: "dest-4",
      image: "/grecia.webp",
      title: "Greece Island Escape",
      description: "Sail the Aegean Sea and discover ancient Athens.",
      days: "8 Days / 7 Nights",
      rating: 4.6,
    },
    5: {
      id: "dest-5",
      image: "/bali.webp",
      title: "Bali Retreat Package",
      description: "Relax in Ubud, beaches & rice terraces included.",
      days: "10 Days / 9 Nights",
      rating: 4.9,
    },
    6: {
      id: "dest-6",
      image: "/egipto.jpg",
      title: "Egypt Explorer Trip",
      description: "Tour pyramids, the Sphinx & cruise the Nile River.",
      days: "9 Days / 8 Nights",
      rating: 4.5,
    },
  };
  const destinationArray = Object.values(destinations);
  const totalDestinations = destinationArray.length;

  // Efecto para calcular el ancho de la tarjeta y el gap
  useEffect(() => {
    const calculateCardWidth = () => {
      if (constraintsRef.current) {
        const gridComputedStyle = window.getComputedStyle(
          constraintsRef.current.firstChild
        ); // el motion.div (grid)
        const firstCard = constraintsRef.current.firstChild?.firstChild; // la primera tarjeta
        if (firstCard) {
          const cardStyle = window.getComputedStyle(firstCard);
          const cardMargin =
            parseFloat(cardStyle.marginLeft) +
            parseFloat(cardStyle.marginRight);
          setCardWidth(firstCard.offsetWidth + cardMargin);
        }
        setGap(parseFloat(gridComputedStyle.gap) || 0); // Asumiendo que 'gap' es uniforme
      }
    };

    calculateCardWidth(); // Calcular al montar
    // Podríamos necesitar un ResizeObserver para recalcular si el layout es muy dinámico
    window.addEventListener("resize", calculateCardWidth);
    return () => window.removeEventListener("resize", calculateCardWidth);
  }, [destinationArray]); // Recalcular si los destinos cambian

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setPage((prevPage) => {
      const newPage = prevPage + newDirection;
      // Lógica de bucle (simplificada por ahora, sin duplicación de items)
      // Esto hará que "salte" al final/principio si el bucle no está bien implementado
      // Para un bucle real con este método, se duplican items al principio/final del array.
      const maxPage =
        totalDestinations -
        (windowSize.width < 768 ? 1 : windowSize.width < 1024 ? 2 : 3);

      if (newPage < 0) return 0; // Detener al principio
      if (newPage > maxPage) return maxPage; // Detener al final

      // Para bucle simple visual (no perfecto sin duplicados):
      // if (newPage < 0) return maxPage;
      // if (newPage > maxPage) return 0;

      return newPage;
    });
  };

  const handlePrev = () => paginate(-1);
  const handleNext = () => paginate(1);

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
      if (diffX > 0) handleNext();
      else handlePrev();
    }
  };

  // Calculamos el desplazamiento X basado en 'page', 'cardWidth' y 'gap'
  // El desplazamiento es por el ancho de una tarjeta más el gap entre tarjetas.
  const xOffset = -page * (cardWidth + (page > 0 ? gap : 0));
  // El (page > 0 ? gap : 0) es una simplificación, el gap real aplicado es más complejo con grid.
  // Una forma más robusta para el offset si el gap es consistente:
  // const xOffset = -page * (cardWidth + gap) + (page > 0 ? gap : 0); // si cada tarjeta tiene gap a su derecha
  // O más simple y a menudo suficiente:
  const finalXOffset =
    -page *
    (cardWidth +
      gap / (windowSize.width < 768 ? 1 : windowSize.width < 1024 ? 2 : 3));
  // La forma más precisa es que cada 'page' avance el ancho de una columna del grid.
  // Si el grid tiene 3 columnas, cada columna tiene (ancho_contenedor - 2*gap) / 3.
  // Por ahora, asumimos que cardWidth incluye su "espacio" proporcional.

  const dragConstraints = {
    right: 0,
    // El left constraint es el ancho total del contenido menos el ancho del viewport
    // Esto es complejo de calcular dinámicamente sin saber el ancho exacto del contenedor de tarjetas
    // y cuántas tarjetas hay. Por ahora, lo dejamos más abierto.
    // left: -(totalDestinations * (cardWidth + gap) - constraintsRef.current?.offsetWidth + gap),
    left: -(
      (totalDestinations -
        (windowSize.width < 768 ? 1 : windowSize.width < 1024 ? 2 : 3)) *
      (cardWidth + gap)
    ),
  };

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
            // disabled={page === 0} // Deshabilitar si no hay bucle
          >
            {"<"}
          </button>
          <button
            className="rounded-button bg-gray-900 text-white border-gray-900 font-stretch-ultra-condensed font-normal text-2xl"
            onClick={handleNext}
            // disabled={page >= totalDestinations - (windowSize.width < 768 ? 1 : windowSize.width < 1024 ? 2 : 3)} // Deshabilitar si no hay bucle
          >
            {">"}
          </button>
        </div>
      </div>

      {/* Contenedor "Viewport" con overflow: hidden */}
      <div
        ref={constraintsRef}
        className="relative mt-4 overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Contenedor Deslizable que tiene todas las tarjetas.
            Se anima su propiedad 'x'.
            El grid se aplica aquí. */}
        <motion.div
          className="grid gap-10" // El gap se define aquí
          style={{
            // El grid se configura para tener N columnas, pero fluirá horizontalmente
            gridAutoFlow: "column",
            gridTemplateColumns: `repeat(${totalDestinations}, calc((100% - ${
              (windowSize.width < 768 ? 1 : windowSize.width < 1024 ? 2 : 3) - 1
            } * ${gap}px) / ${
              windowSize.width < 768 ? 1 : windowSize.width < 1024 ? 2 : 3
            }))`, // Esto es complejo, más fácil:
            // gridTemplateColumns: `repeat(${totalDestinations}, minmax(280px, 1fr))`, // O un ancho fijo
            gridTemplateColumns: `repeat(${totalDestinations}, calc( (100% / ${
              windowSize.width < 768 ? 1 : windowSize.width < 1024 ? 2 : 3
            }) - ${
              (((windowSize.width < 768 ? 1 : windowSize.width < 1024 ? 2 : 3) -
                1) /
                (windowSize.width < 768
                  ? 1
                  : windowSize.width < 1024
                  ? 2
                  : 3)) *
              gap
            }px ))`,
          }}
          animate={{ x: -page * (cardWidth + gap) }} // El desplazamiento real
          transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          drag="x"
          dragConstraints={dragConstraints}
          onDragEnd={(event, info) => {
            // info.offset.x es cuánto se arrastró
            // info.velocity.x es la velocidad
            const dragThreshold = (cardWidth + gap) / 3; // Umbral para cambiar de página
            if (Math.abs(info.offset.x) > dragThreshold) {
              if (info.offset.x < -dragThreshold) {
                // Arrastre hacia la izquierda
                paginate(1);
              } else if (info.offset.x > dragThreshold) {
                // Arrastre hacia la derecha
                paginate(-1);
              }
            } else {
              // Si no se supera el umbral, volver a la posición actual (animado)
              // Esto requiere que 'animate' se actualice si 'page' no cambia
              // Forzamos una re-animación a la posición actual
              const currentPage = page;
              setPage(-1000); // Valor temporal inválido
              setTimeout(() => setPage(currentPage), 0); // Volver al valor real
            }
          }}
        >
          {destinationArray.map((destination) => (
            // Las tarjetas son divs normales aquí.
            // El estilo de cada tarjeta (ancho) es manejado por el grid-template-columns.
            <div
              key={destination.id}
              className="flex flex-col items-left gap-5 shrink-0"
              // El width de la tarjeta individual debe ser consistente
              // Lo mejor es que el grid se encargue del ancho
            >
              <a href="#" className="block">
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
        </motion.div>
      </div>
    </section>
  );
};

import { StarIcon } from "@heroicons/react/20/solid";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, animate as framerAnimate } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "./animated-modal";

const ModalCloseButtonInFooter = ({ children, className }) => {
  const { setOpen } = useModal();
  return (
    <button onClick={() => setOpen(false)} className={className}>
      {children}
    </button>
  );
};

export const PopularDestination = ({ destinations }) => {
  const [page, setPage] = useState(0);
  const constraintsRef = useRef(null);
  const draggableContainerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  const destinationArray = useMemo(
    () => Object.values(destinations),
    [destinations]
  );
  const totalDestinations = destinationArray.length;

  const getVisibleCardsInViewport = useCallback(() => {
    if (windowWidth < 768) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  }, [windowWidth]);

  // Optimized resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate card width and gap only when needed
  useEffect(() => {
    const calculateCardWidth = () => {
      if (
        draggableContainerRef.current &&
        draggableContainerRef.current.firstChild
      ) {
        const firstCard = draggableContainerRef.current.firstChild;
        setCardWidth(firstCard.offsetWidth);
        const gridComputedStyle = window.getComputedStyle(
          draggableContainerRef.current
        );
        setGap(parseFloat(gridComputedStyle.gap) || 0);
      }
    };
    calculateCardWidth();
  }, [windowWidth, totalDestinations]);

  const changePage = useCallback(
    (newDirection) => {
      if (document.body.classList.contains("modal-is-open")) return;
      setPage((prevPage) => {
        let nextPage = prevPage + newDirection;
        const numVisible = getVisibleCardsInViewport();
        const maxPage = totalDestinations - numVisible;
        nextPage = Math.max(0, nextPage);
        nextPage = Math.min(maxPage, nextPage);
        return nextPage;
      });
    },
    [getVisibleCardsInViewport, totalDestinations]
  );

  const handlePrev = useCallback(() => changePage(-1), [changePage]);
  const handleNext = useCallback(() => changePage(1), [changePage]);

  // Touch handlers
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = useCallback((e) => {
    if (document.body.classList.contains("modal-is-open")) return;
    touchStartX.current = e.targetTouches[0].clientX;
    if (draggableContainerRef.current) {
      const currentX =
        draggableContainerRef.current.style.transform.match(
          /translateX\(([^px]+)px\)/
        )?.[1] || 0;
      framerAnimate(
        draggableContainerRef.current,
        { x: parseFloat(currentX) },
        { duration: 0 }
      );
    }
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (document.body.classList.contains("modal-is-open")) return;
    touchEndX.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (document.body.classList.contains("modal-is-open") || cardWidth === 0)
      return;
    const dragDistance = touchStartX.current - touchEndX.current;
    const swipeThreshold = cardWidth / 4;
    if (Math.abs(dragDistance) > swipeThreshold) {
      changePage(dragDistance > 0 ? 1 : -1);
    } else {
      if (draggableContainerRef.current) {
        framerAnimate(
          draggableContainerRef.current,
          { x: -page * (cardWidth + gap) },
          { type: "spring", stiffness: 300, damping: 30 }
        );
      }
    }
    touchEndX.current = 0;
  }, [cardWidth, gap, page, changePage]);

  const numVisibleForConstraints = getVisibleCardsInViewport();
  const dragConstraints = useMemo(
    () => ({
      right: 0,
      left:
        cardWidth > 0
          ? -(
              (totalDestinations - numVisibleForConstraints) *
              (cardWidth + gap)
            )
          : 0,
    }),
    [cardWidth, gap, totalDestinations, numVisibleForConstraints]
  );

  const onDragEndHandler = useCallback(
    (event, info) => {
      if (document.body.classList.contains("modal-is-open") || cardWidth === 0)
        return;
      const { offset, velocity } = info;
      const swipePowerThreshold = 500;
      const swipeDistanceThreshold = cardWidth / 3;
      let newPage = page;
      if (Math.abs(offset.x) > swipeDistanceThreshold) {
        if (
          offset.x < -swipeDistanceThreshold / 2 ||
          velocity.x < -swipePowerThreshold / 20
        ) {
          newPage = page + 1;
        } else if (
          offset.x > swipeDistanceThreshold / 2 ||
          velocity.x > swipePowerThreshold / 20
        ) {
          newPage = page - 1;
        }
      }
      const maxPage = totalDestinations - numVisibleForConstraints;
      newPage = Math.max(0, Math.min(newPage, maxPage));
      setPage(newPage);
    },
    [cardWidth, page, totalDestinations, numVisibleForConstraints]
  );

  const handleBookNow = useCallback((destinationTitle, price) => {
    const phoneNumber = "15551234567"; // Reemplaza con el número real cuando lo tengas
    const messageText = `Hola! Estoy interesado en recibir más información sobre el paquete "${destinationTitle}" (${price}). ¿Podrían proporcionarme detalles?`;
    const encodedMessage = encodeURIComponent(messageText);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
  }, []);

  return (
    <section
      id="popular-destination-section"
      className="w-5/6 mx-auto mt-10 flex flex-col gap-5"
    >
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="header-text">¡Tu viaje soñado te espera!</h2>
          <p className="sub-text">
            Descubre destinos top y experiencias inolvidables.
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

      <div
        ref={constraintsRef}
        className="relative mt-4 overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          ref={draggableContainerRef}
          className="grid gap-10"
          style={{
            gridAutoFlow: "column",
            gridTemplateColumns: `repeat(${totalDestinations}, calc( (100% / ${numVisibleForConstraints}) - ${
              ((numVisibleForConstraints - 1) / numVisibleForConstraints) * gap
            }px ))`,
          }}
          animate={{ x: cardWidth > 0 ? -page * (cardWidth + gap) : 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 40 }}
          drag="x"
          dragConstraints={dragConstraints}
          onDragEnd={onDragEndHandler}
        >
          {destinationArray.map((destination) => (
            <div
              key={destination.id}
              className="flex flex-col items-left gap-5 shrink-0"
            >
              <Modal>
                <ModalTrigger
                  asChild
                  className="block cursor-pointer w-full rounded-4xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                >
                  <div className="relative pb-6">
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="w-full h-60 object-cover rounded-4xl"
                      loading="lazy"
                    />
                    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-blue-500 text-white rounded-4xl px-4 py-1 border-5 border-white line-clamp-1">
                      {destination.days}
                    </div>
                  </div>
                </ModalTrigger>

                <div className="flex justify-between items-end mt-2">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {destination.title}
                    </h3>
                    <p className="sub-text text-gray-600">
                      {destination.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 bg-blue-500 w-fit h-fit py-2 px-4 text-center rounded-4xl">
                    <StarIcon
                      className="size-5 text-white"
                      aria-hidden="true"
                    />
                    <p className="text-white">{destination.rating}</p>
                  </div>
                </div>

                <ModalTrigger className="w-full bg-blue-500 text-white py-3 px-4 rounded-4xl hover:bg-blue-500 transition-colors duration-300 mt-auto text-sm font-semibold">
                  Ver detalles del paquete
                </ModalTrigger>

                <ModalBody data={destination.modalDetails}>
                  {(dataFromProp) => (
                    <>
                      <ModalContent>
                        {dataFromProp ? (
                          <>
                            <img
                              src={dataFromProp.mainImage}
                              alt={dataFromProp.destinationName}
                              className="w-full h-48 md:h-64 object-cover rounded-4xl mb-4"
                              loading="lazy"
                            />
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                              Aventura en {dataFromProp.destinationName}
                            </h3>
                            <p className="text-gray-500 mb-1 text-sm">
                              {dataFromProp.duration}
                            </p>
                            <p className="text-lg font-semibold text-blue-500 mb-4">
                              {dataFromProp.price}
                            </p>
                            {dataFromProp.galleryImages &&
                              dataFromProp.galleryImages.length > 0 && (
                                <div className="mb-6">
                                  <h4 className="font-semibold text-md text-gray-700 mb-2">
                                    Galería
                                  </h4>
                                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {dataFromProp.galleryImages.map(
                                      (image, idx) => (
                                        <img
                                          key={`gallery-${idx}`}
                                          src={image}
                                          alt={`${
                                            dataFromProp.destinationName
                                          } galería ${idx + 1}`}
                                          className="w-full h-24 object-cover rounded-2xl"
                                          loading="lazy"
                                        />
                                      )
                                    )}
                                  </div>
                                </div>
                              )}
                            <p className="text-gray-700 mb-6 leading-relaxed">
                              {dataFromProp.overview}
                            </p>
                            <div className="mb-6">
                              <h4 className="font-semibold text-md text-gray-700 mb-2">
                                Lo más destacado del itinerario:
                              </h4>
                              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                                {dataFromProp.itineraryHighlights.map(
                                  (item, idx) => (
                                    <li key={`highlight-${idx}`}>{item}</li>
                                  )
                                )}
                              </ul>
                            </div>
                            <div className="mb-6">
                              <h4 className="font-semibold text-md text-gray-700 mb-2">
                                El paquete incluye:
                              </h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                                {dataFromProp.packageIncludes.map(
                                  (item, idx) => (
                                    <div
                                      key={`include-${idx}`}
                                      className="flex items-center gap-2 bg-gray-50 rounded-3xl px-3 py-2 shadow-sm transition-all duration-300"
                                    >
                                      <CheckCircleIcon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                                      <span className="text-gray-700 text-sm">
                                        {item}
                                      </span>
                                    </div>
                                  )
                                )}
                              </div>
                            </div>
                            {dataFromProp.optionalAddons &&
                              dataFromProp.optionalAddons.length > 0 && (
                                <div className="mb-6">
                                  <h4 className="font-semibold text-md text-gray-700 mb-2">
                                    Opcionales:
                                  </h4>
                                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                                    {dataFromProp.optionalAddons.map(
                                      (item, idx) => (
                                        <li key={`addon-${idx}`}>{item}</li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )}
                            <p className="text-xs text-center text-gray-500 mt-4">
                              Contáctanos para reservar:{" "}
                              {dataFromProp.bookingContact}
                            </p>
                          </>
                        ) : (
                          <p>Cargando detalles...</p>
                        )}
                      </ModalContent>
                      <ModalFooter className="gap-3">
                        <ModalCloseButtonInFooter className="px-4 py-2 bg-gray-200 text-gray-700 rounded-4xl hover:bg-gray-300 transition-colors text-sm font-medium">
                          Cerrar
                        </ModalCloseButtonInFooter>
                        <button
                          onClick={() =>
                            handleBookNow(
                              dataFromProp.destinationName,
                              dataFromProp.price
                            )
                          }
                          className="px-4 py-2 bg-blue-500 text-white rounded-4xl hover:bg-blue-500 transition-colors text-sm font-medium"
                        >
                          Reservar este viaje
                        </button>
                      </ModalFooter>
                    </>
                  )}
                </ModalBody>
              </Modal>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

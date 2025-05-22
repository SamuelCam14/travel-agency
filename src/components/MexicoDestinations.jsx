import React, { useState, useRef } from "react";
import { destinosNacionales } from "../lib/objects";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modalv2";
import {
  PlaneIcon,
  VacationIcon,
  ElevatorIcon,
  FoodIcon,
  MicIcon,
  ParachuteIcon,
} from "./ui/ModalIcons";

const destinations = destinosNacionales;

export const MexicoDestinations = () => {
  // Mobile carousel state
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const numDest = destinations.length;
  const [imageLoaded, setImageLoaded] = useState(true); // true para evitar parpadeo inicial
  const [selectedDest, setSelectedDest] = useState(null);

  // Carousel handlers
  const handlePrev = () => {
    if (animating) return;
    setDirection(-1);
    setAnimating(true);
    setImageLoaded(false);
    setTimeout(() => {
      setIndex((prev) => (prev === 0 ? numDest - 1 : prev - 1));
      setAnimating(false);
    }, 300);
  };
  const handleNext = () => {
    if (animating) return;
    setDirection(1);
    setAnimating(true);
    setImageLoaded(false); // Oculta imagen hasta que cargue la siguiente
    setTimeout(() => {
      setIndex((prev) => (prev === numDest - 1 ? 0 : prev + 1));
      setAnimating(false);
    }, 300);
  };
  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    const dragDistance = touchStartX.current - touchEndX.current;
    const swipeThreshold = 40;
    if (Math.abs(dragDistance) > swipeThreshold) {
      if (dragDistance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchEndX.current = 0;
  };

  // Modal info (puedes expandir con más info real de cada destino)
  const getModalInfo = (dest) => ({
    ...dest,
    images: [dest.image, dest.image, dest.image],
    vuelos: "2 vuelos directos",
    hoteles: "5 hoteles disponibles",
    spots: "10 atractivos turísticos",
    comida: "Gastronomía local e internacional",
    microfono: "Eventos culturales",
    paracaidas: "Actividades de aventura",
  });

  return (
    <section className="w-5/6 mx-auto px-4 my-10 md:my-16">
      <h2 className="header-text text-3xl md:text-4xl mb-8 text-center text-gray-900">
        Destinos imperdibles en México
      </h2>
      {/* Mobile carousel */}
      <div className="block md:hidden">
        <div className="relative w-full max-w-xs mx-auto">
          <Modal>
            <ModalTrigger asChild>
              <div
                className="relative aspect-[3/4] rounded-4xl overflow-hidden shadow-lg flex items-end cursor-pointer"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onClick={() => setSelectedDest(destinations[index])}
              >
                {!imageLoaded && (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10 bg-white/60 backdrop-blur-md animate-pulse" />
                )}
                <img
                  src={destinations[index].image}
                  alt={destinations[index].name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-20 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  } ${
                    animating
                      ? direction === 1
                        ? "animate-slide-left"
                        : "animate-slide-right"
                      : ""
                  }`}
                  loading="lazy"
                  style={{ pointerEvents: animating ? "none" : "auto" }}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageLoaded(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-30" />
                <div className="relative z-40 w-full flex flex-col items-center justify-end pb-6">
                  <h3 className="text-white text-xl font-bold drop-shadow-lg mb-2 text-center">
                    {destinations[index].name}
                  </h3>
                  <div className="flex items-center gap-1 bg-black/60 px-3 py-1 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-5 h-5 text-yellow-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                    <span className="text-white text-lg font-semibold">
                      {destinations[index].rating}
                    </span>
                  </div>
                </div>
              </div>
            </ModalTrigger>
            <ModalBody>
              {selectedDest && (
                <ModalContent>
                  <h4 className="text-lg md:text-2xl text-blue-700 font-bold text-center mb-8">
                    Descubre{" "}
                    <span className="px-1 py-0.5 rounded-md bg-blue-50 border border-blue-200">
                      {selectedDest.name}
                    </span>
                  </h4>
                  <div className="flex justify-center items-center flex-wrap gap-2 mb-4">
                    {getModalInfo(selectedDest).images.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={selectedDest.name + " galería " + (idx + 1)}
                        className="rounded-lg h-20 w-20 md:h-32 md:w-32 object-cover shrink-0 border border-blue-100 bg-white"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div className="py-6 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                    <div className="flex items-center justify-center">
                      <PlaneIcon className="mr-1 text-blue-700 h-4 w-4" />
                      <span className="text-blue-700 text-sm">
                        {getModalInfo(selectedDest).vuelos}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ElevatorIcon className="mr-1 text-blue-700 h-4 w-4" />
                      <span className="text-blue-700 text-sm">
                        {getModalInfo(selectedDest).hoteles}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <VacationIcon className="mr-1 text-blue-700 h-4 w-4" />
                      <span className="text-blue-700 text-sm">
                        {getModalInfo(selectedDest).spots}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <FoodIcon className="mr-1 text-blue-700 h-4 w-4" />
                      <span className="text-blue-700 text-sm">
                        {getModalInfo(selectedDest).comida}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <MicIcon className="mr-1 text-blue-700 h-4 w-4" />
                      <span className="text-blue-700 text-sm">
                        {getModalInfo(selectedDest).microfono}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ParachuteIcon className="mr-1 text-blue-700 h-4 w-4" />
                      <span className="text-blue-700 text-sm">
                        {getModalInfo(selectedDest).paracaidas}
                      </span>
                    </div>
                  </div>
                </ModalContent>
              )}
              <ModalFooter className="gap-4">
                <button className="px-2 py-1 bg-gray-200 text-black border border-gray-300 rounded-md text-sm w-28">
                  Cerrar
                </button>
              </ModalFooter>
            </ModalBody>
          </Modal>
          {/* Carousel controls */}
          <div className="flex justify-between items-center mt-4">
            <button
              className="rounded-full bg-blue-600 text-white w-10 h-10 flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors"
              onClick={handlePrev}
              aria-label="Anterior"
              disabled={animating}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="flex gap-2">
              {destinations.map((_, idx) => (
                <span
                  key={idx}
                  className={`inline-block w-2 h-2 rounded-full transition-all duration-200 ${
                    idx === index ? "bg-blue-600 scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              className="rounded-full bg-blue-600 text-white w-10 h-10 flex items-center justify-center shadow-md hover:bg-blue-700 transition-colors"
              onClick={handleNext}
              aria-label="Siguiente"
              disabled={animating}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-2 grid-rows-3 md:grid-cols-4 md:grid-rows-2 gap-2 md:gap-6 lg:gap-10">
        {destinations.map((dest, idx) => (
          <Modal key={dest.name}>
            <ModalTrigger asChild>
              <div
                className="relative group aspect-[3/4] rounded-4xl overflow-hidden shadow-lg flex items-end cursor-pointer"
                onClick={() => setSelectedDest(dest)}
                tabIndex={0}
                aria-label={`Destino ${dest.name}`}
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                <div className="relative z-20 w-full flex flex-col items-center justify-end pb-6">
                  <h3 className="text-white text-xl md:text-2xl font-bold drop-shadow-lg mb-2 text-center">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-1 bg-black/60 px-3 py-1 rounded-2xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      className="w-5 h-5 text-yellow-400"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                    <span className="text-white text-lg font-semibold">
                      {dest.rating}
                    </span>
                  </div>
                </div>
              </div>
            </ModalTrigger>
            <ModalBody>
              {selectedDest && selectedDest.name === dest.name && (
                <ModalContent>
                  <h4 className="text-lg md:text-2xl text-blue-700 font-bold text-center mb-8">
                    Descubre{" "}
                    <span className="px-1 py-0.5 rounded-md bg-blue-50 border border-blue-200">
                      {selectedDest.name}
                    </span>
                  </h4>
                  <div className="flex justify-center items-center flex-wrap gap-2 mb-4">
                    {getModalInfo(selectedDest).images.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={selectedDest.name + " galería " + (idx + 1)}
                        className="rounded-lg h-20 w-20 md:h-32 md:w-32 object-cover shrink-0 border border-blue-100 bg-white"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div className="py-6 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
                    <div className="flex items-center justify-center">
                      <PlaneIcon className="mr-1 text-blue-700 h-4 w-4" />
                      <span className="text-blue-700 text-sm">
                        {getModalInfo(selectedDest).vuelos}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ElevatorIcon className="mr-1 text-blue-700 h-4 w-4" />
                      <span className="text-blue-700 text-sm">
                        {getModalInfo(selectedDest).hoteles}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <VacationIcon className="mr-1 text-blue-700 h-4 w-4" />
                      <span className="text-blue-700 text-sm">
                        {getModalInfo(selectedDest).spots}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <FoodIcon className="mr-1 text-blue-700 h-4 w-4" />
                      <span className="text-blue-700 text-sm">
                        {getModalInfo(selectedDest).comida}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <MicIcon className="mr-1 text-blue-700 h-4 w-4" />
                      <span className="text-blue-700 text-sm">
                        {getModalInfo(selectedDest).microfono}
                      </span>
                    </div>
                    <div className="flex items-center justify-center">
                      <ParachuteIcon className="mr-1 text-blue-700 h-4 w-4" />
                      <span className="text-blue-700 text-sm">
                        {getModalInfo(selectedDest).paracaidas}
                      </span>
                    </div>
                  </div>
                </ModalContent>
              )}
              <ModalFooter className="gap-4">
                <button className="px-2 py-1 bg-gray-200 text-black border border-gray-300 rounded-md text-sm w-28">
                  Cerrar
                </button>
              </ModalFooter>
            </ModalBody>
          </Modal>
        ))}
      </div>
    </section>
  );
};

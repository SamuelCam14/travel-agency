import { StarIcon } from "@heroicons/react/20/solid";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "./ui/animated-modal";

const ModalCloseButtonInFooter = ({ children, className }) => {
  const { setOpen } = useModal();
  return (
    <button onClick={() => setOpen(false)} className={className}>
      {children}
    </button>
  );
};

export const PopularDestination = () => {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const constraintsRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [gap, setGap] = useState(0);

  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  });

  const destinations = {
    1: {
      id: "dest-1",
      image: "/turquia.jpg",
      title: "Turkey Vacation Package",
      description: "Visit Istanbul, Cappadocia & more with guided tours.",
      days: "7 Days / 6 Nights",
      rating: 4.7,
      modalDetails: {
        destinationName: "Turkey",
        mainImage: "/turquia.jpg",
        galleryImages: ["/turquia.jpg", "/turquia.jpg", "/turquia.jpg"],
        catchyPhrase: "Where East Meets West, A Land of Timeless Wonders!",
        price: "From $1,899 USD",
        duration: "7 Days / 6 Nights",
        overview:
          "Discover the magic of Turkey, a bridge between continents, offering ancient marvels, stunning landscapes, and a vibrant culture that will captivate your senses.",
        itineraryHighlights: [
          "Explore Istanbul's Blue Mosque, Hagia Sophia, and Grand Bazaar.",
          "Witness Cappadocia's surreal 'fairy chimneys' and underground cities.",
          "Visit the ancient ruins of Ephesus, a UNESCO World Heritage site.",
          "Relax on the pristine beaches of the Turquoise Coast.",
        ],
        packageIncludes: [
          "Round-trip international flights.",
          "4-star hotel accommodations.",
          "Daily breakfast and select local dinners.",
          "Guided tours with expert local guides.",
          "All entrance fees for scheduled attractions.",
        ],
        optionalAddons: [
          "Hot air balloon ride in Cappadocia.",
          "Traditional Turkish bath experience.",
        ],
        bookingContact: "Call 1-800-EXPLORE-TR or visit our website.",
      },
    },
    2: {
      id: "dest-2",
      image: "/italia.webp",
      title: "Italy All-Inclusive Trip",
      description: "Enjoy Rome, Venice & Florence with curated experiences.",
      days: "7 Days / 6 Nights",
      rating: 4.9,
      modalDetails: {
        destinationName: "Italy",
        mainImage: "/italia.webp",
        galleryImages: ["/italia.webp", "/italia.webp", "/italia.webp"],
        catchyPhrase: "Experience 'La Dolce Vita' – Art, History, and Passion!",
        price: "From $2,450 USD",
        duration: "7 Days / 6 Nights",
        overview:
          "Indulge in the romance and beauty of Italy. From the ancient wonders of Rome to the artistic heart of Florence and the enchanting canals of Venice, this journey is a feast for the soul.",
        itineraryHighlights: [
          "Marvel at Rome's Colosseum, Roman Forum, and Trevi Fountain.",
          "Discover Renaissance masterpieces in Florence, including Michelangelo's David.",
          "Enjoy a classic gondola ride through Venice's picturesque canals.",
          "Savor authentic Italian cuisine and world-class wines.",
        ],
        packageIncludes: [
          "International flights to Italy.",
          "Centrally located boutique hotel stays.",
          "Daily breakfast, wine tasting, and a farewell dinner.",
          "High-speed train tickets between major cities.",
          "Guided city tours and museum entries.",
        ],
        optionalAddons: ["Tuscan cooking class.", "Day trip to Pompeii."],
        bookingContact: "Book your Italian dream at 1-800-CIAO-BELLA.",
      },
    },
    3: {
      id: "dest-3",
      image: "/japon.jpg",
      title: "Japan Cultural Tour",
      description: "Explore Tokyo, Kyoto & temples in a guided adventure.",
      days: "7 Days / 6 Nights",
      rating: 4.8,
      modalDetails: {
        destinationName: "Japan",
        mainImage: "/japon.jpg",
        galleryImages: ["/japon.jpg", "/japon.jpg", "/japon.jpg"],
        catchyPhrase: "Where Ancient Tradition Meets Futuristic Innovation.",
        price: "From $3,100 USD",
        duration: "7 Days / 6 Nights",
        overview:
          "Immerse yourself in the unique culture of Japan. Experience the bustling energy of Tokyo, the serene beauty of Kyoto's temples, and the respectful harmony of Japanese life.",
        itineraryHighlights: [
          "Navigate Tokyo's vibrant Shibuya crossing and tranquil Meiji Shrine.",
          "Experience a traditional tea ceremony in Kyoto.",
          "Visit Kinkaku-ji (Golden Pavilion) and Fushimi Inari Shrine in Kyoto.",
          "Ride the world-famous Shinkansen (bullet train).",
        ],
        packageIncludes: [
          "Round-trip international airfare.",
          "Comfortable hotel accommodations.",
          "Daily breakfast and select authentic Japanese meals.",
          "Japan Rail Pass for specified routes.",
          "Guided cultural tours in Tokyo and Kyoto.",
        ],
        optionalAddons: [
          "Mount Fuji day trip.",
          "Sumo wrestling experience (seasonal).",
        ],
        bookingContact: "Discover Japan: 1-888-ZEN-TOUR.",
      },
    },
    4: {
      id: "dest-4",
      image: "/grecia.webp",
      title: "Greece Island Escape",
      description: "Sail the Aegean Sea and discover ancient Athens.",
      days: "8 Days / 7 Nights",
      rating: 4.6,
      modalDetails: {
        destinationName: "Greece",
        mainImage: "/grecia.webp",
        galleryImages: ["/grecia.webp", "/grecia.webp", "/grecia.webp"],
        catchyPhrase: "Mythical Lands and Sun-Kissed Aegean Dreams!",
        price: "From $2,200 USD",
        duration: "8 Days / 7 Nights",
        overview:
          "Journey to the cradle of Western civilization. Explore the ancient Acropolis in Athens, then set sail for the breathtaking islands of the Aegean, each with its unique charm and beauty.",
        itineraryHighlights: [
          "Visit the Acropolis and Parthenon in historic Athens.",
          "Island hopping to Mykonos for its vibrant atmosphere and beaches.",
          "Experience the iconic sunsets and caldera views of Santorini.",
          "Discover ancient ruins and charming villages.",
        ],
        packageIncludes: [
          "International flights to Athens.",
          "Hotel stays in Athens and on the islands.",
          "Daily breakfast and some local specialty dinners.",
          "Ferry transportation between islands.",
          "Guided tour of Athens' major historical sites.",
        ],
        optionalAddons: [
          "Volcano boat tour in Santorini.",
          "Delphi day trip from Athens.",
        ],
        bookingContact: "Your Greek odyssey awaits: 1-800-MYTHOS-GO.",
      },
    },
    5: {
      id: "dest-5",
      image: "/bali.webp",
      title: "Bali Retreat Package",
      description: "Relax in Ubud, beaches & rice terraces included.",
      days: "10 Days / 9 Nights",
      rating: 4.9,
      modalDetails: {
        destinationName: "Bali",
        mainImage: "/bali.webp",
        galleryImages: ["/bali.webp", "/bali.webp", "/bali.webp"],
        catchyPhrase: "Find Your Serenity on the Island of Gods.",
        price: "From $1,550 USD",
        duration: "10 Days / 9 Nights",
        overview:
          "Escape to the enchanting island of Bali, known for its spiritual ambiance, lush rice paddies, stunning beaches, and vibrant arts scene. A perfect retreat for relaxation and cultural immersion.",
        itineraryHighlights: [
          "Explore the artistic heart of Ubud and its surrounding rice terraces.",
          "Visit sacred temples like Tanah Lot and Uluwatu.",
          "Relax on the beautiful beaches of Seminyak or Nusa Dua.",
          "Experience a traditional Balinese massage and wellness treatments.",
        ],
        packageIncludes: [
          "Round-trip international flights.",
          "Accommodation in serene resorts and villas.",
          "Daily breakfast and healthy local cuisine options.",
          "Airport transfers and some local transportation.",
          "Guided cultural excursions and a yoga session.",
        ],
        optionalAddons: ["Surfing lessons.", "Mount Batur sunrise trek."],
        bookingContact: "Rejuvenate in Bali: 1-877-ISLAND-ZEN.",
      },
    },
    6: {
      id: "dest-6",
      image: "/egipto.jpg",
      title: "Egypt Explorer Trip",
      description: "Tour pyramids, the Sphinx & cruise the Nile River.",
      days: "9 Days / 8 Nights",
      rating: 4.5,
      modalDetails: {
        destinationName: "Egypt",
        mainImage: "/egipto.jpg",
        galleryImages: ["/egipto.jpg", "/egipto.jpg", "/egipto.jpg"],
        catchyPhrase: "Unravel the Mysteries of Ancient Pharaohs!",
        price: "From $2,800 USD",
        duration: "9 Days / 8 Nights",
        overview:
          "Step back in time on an epic journey through Egypt. Witness the colossal Pyramids of Giza, the enigmatic Sphinx, and cruise the legendary Nile River, discovering ancient temples and tombs along the way.",
        itineraryHighlights: [
          "Marvel at the Great Pyramids of Giza and the Sphinx.",
          "Explore the treasures of the Egyptian Museum in Cairo.",
          "Enjoy a luxurious multi-day Nile cruise from Luxor to Aswan.",
          "Visit Karnak Temple, Luxor Temple, and the Valley of the Kings.",
        ],
        packageIncludes: [
          "International flights to Cairo.",
          "Domestic flights within Egypt.",
          "Hotel accommodation and Nile cruise ship (full board).",
          "All meals during the Nile cruise, daily breakfast elsewhere.",
          "Expert Egyptologist guides for all tours.",
          "Entrance fees to all scheduled historical sites.",
        ],
        optionalAddons: [
          "Abu Simbel excursion.",
          "Hot air balloon over Luxor's West Bank.",
        ],
        bookingContact: "Your Egyptian adventure: 1-800-NILE-KING.",
      },
    },
  };
  const destinationArray = Object.values(destinations);
  const totalDestinations = destinationArray.length;

  useEffect(() => {
    const calculateCardWidth = () => {
      if (constraintsRef.current && constraintsRef.current.firstChild) {
        const gridComputedStyle = window.getComputedStyle(
          constraintsRef.current.firstChild
        );
        const firstCard = constraintsRef.current.firstChild.firstChild;
        if (firstCard) {
          const cardStyle = window.getComputedStyle(firstCard);
          const cardMargin =
            parseFloat(cardStyle.marginLeft) +
            parseFloat(cardStyle.marginRight);
          setCardWidth(firstCard.offsetWidth + cardMargin);
        }
        setGap(parseFloat(gridComputedStyle.gap) || 0);
      }
    };
    calculateCardWidth();
    window.addEventListener("resize", calculateCardWidth);
    return () => window.removeEventListener("resize", calculateCardWidth);
  }, [destinationArray, windowSize.width]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const paginate = (newDirection) => {
    if (document.body.classList.contains("modal-is-open")) return;
    setDirection(newDirection);
    setPage((prevPage) => {
      const newPage = prevPage + newDirection;
      const maxPage =
        totalDestinations -
        (windowSize.width < 768 ? 1 : windowSize.width < 1024 ? 2 : 3);
      if (newPage < 0) return 0;
      if (newPage > maxPage) return maxPage;
      return newPage;
    });
  };

  const handlePrev = () => paginate(-1);
  const handleNext = () => paginate(1);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    if (document.body.classList.contains("modal-is-open")) return;
    touchStartX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    if (document.body.classList.contains("modal-is-open")) return;
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (document.body.classList.contains("modal-is-open")) return;
    const diffX = touchStartX.current - touchEndX.current;
    const dragThreshold =
      cardWidth > 0 && gap >= 0 ? (cardWidth + gap) / 3 : 50;
    if (Math.abs(diffX) > dragThreshold) {
      if (diffX > 0) handleNext();
      else handlePrev();
    } else {
      const currentPage = page;
      setPage(-1000);
      setTimeout(() => setPage(currentPage), 0);
    }
  };

  const numVisibleForConstraints =
    windowSize.width < 768 ? 1 : windowSize.width < 1024 ? 2 : 3;
  const dragConstraints = {
    right: 0,
    left:
      cardWidth > 0
        ? -((totalDestinations - numVisibleForConstraints) * (cardWidth + gap))
        : 0,
  };

  const handleBookNow = (destinationTitle, price) => {
    const phoneNumber = "15551234567";
    const messageText = `Hola! Estoy interesado en recibir más información sobre el paquete "${destinationTitle}" (${price}). ¿Podrían proporcionarme detalles?`;
    const encodedMessage = encodeURIComponent(messageText);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
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
          className="grid gap-10"
          style={{
            gridAutoFlow: "column",
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
          animate={{ x: cardWidth > 0 ? -page * (cardWidth + gap) : 0 }}
          transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
          drag="x"
          dragConstraints={dragConstraints}
          onDragEnd={(event, info) => {
            if (document.body.classList.contains("modal-is-open")) return;
            const dragThreshold =
              cardWidth > 0 && gap >= 0 ? (cardWidth + gap) / 3 : 50;
            if (Math.abs(info.offset.x) > dragThreshold && cardWidth > 0) {
              if (info.offset.x < -dragThreshold) {
                paginate(1);
              } else {
                paginate(-1);
              }
            } else {
              const currentPage = page;
              setPage(-1000);
              setTimeout(() => setPage(currentPage), 0);
            }
          }}
        >
          {destinationArray.map((destination) => (
            <div
              key={destination.id}
              className="flex flex-col items-left gap-5 shrink-0"
            >
              <Modal>
                <ModalTrigger className="block cursor-pointer w-full">
                  {/* El div que contiene la imagen y el badge de los días es ahora el hijo directo del Trigger */}
                  <div className="relative">
                    {" "}
                    {/* Este div necesita ser relative para el posicionamiento del badge */}
                    <img
                      src={destination.image}
                      alt={destination.title}
                      className="w-full h-60 object-cover rounded-4xl"
                    />
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-indigo-600 text-white rounded-4xl px-4 py-1 border-5 border-white line-clamp-1">
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
                  <div className="flex items-center gap-1 bg-indigo-600 w-fit h-fit py-2 px-4 text-center rounded-4xl">
                    <StarIcon
                      className="size-5 text-white"
                      aria-hidden="true"
                    />
                    <p className="text-white">{destination.rating}</p>
                  </div>
                </div>

                <ModalTrigger className="w-full bg-indigo-600 text-white py-3 px-4 rounded-4xl hover:bg-indigo-700 transition-colors duration-300 mt-auto text-sm font-semibold">
                  View Package Details
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
                            />
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                              {dataFromProp.destinationName} Adventure
                            </h3>
                            <p className="text-gray-500 mb-1 text-sm">
                              {dataFromProp.duration}
                            </p>
                            <p className="text-lg font-semibold text-indigo-600 mb-4">
                              {dataFromProp.price}
                            </p>
                            {dataFromProp.galleryImages &&
                              dataFromProp.galleryImages.length > 0 && (
                                <div className="mb-6">
                                  <h4 className="font-semibold text-md text-gray-700 mb-2">
                                    Gallery
                                  </h4>
                                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                                    {dataFromProp.galleryImages.map(
                                      (image, idx) => (
                                        <img
                                          key={`gallery-${idx}`}
                                          src={image}
                                          alt={`${
                                            dataFromProp.destinationName
                                          } gallery ${idx + 1}`}
                                          className="w-full h-24 object-cover rounded-2xl"
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
                                Itinerary Highlights:
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
                                Package Includes:
                              </h4>
                              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm">
                                {dataFromProp.packageIncludes.map(
                                  (item, idx) => (
                                    <li key={`include-${idx}`}>{item}</li>
                                  )
                                )}
                              </ul>
                            </div>
                            {dataFromProp.optionalAddons &&
                              dataFromProp.optionalAddons.length > 0 && (
                                <div className="mb-6">
                                  <h4 className="font-semibold text-md text-gray-700 mb-2">
                                    Optional Add-ons:
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
                              Contact us to book: {dataFromProp.bookingContact}
                            </p>
                          </>
                        ) : (
                          <p>Loading details...</p>
                        )}
                      </ModalContent>
                      <ModalFooter className="gap-3">
                        {" "}
                        {/* Añadido gap-3 aquí */}
                        <ModalCloseButtonInFooter className="px-4 py-2 bg-gray-200 text-gray-700 rounded-4xl hover:bg-gray-300 transition-colors text-sm font-medium">
                          Close
                        </ModalCloseButtonInFooter>
                        <button
                          onClick={() =>
                            handleBookNow(
                              dataFromProp.destinationName,
                              dataFromProp.price
                            )
                          }
                          className="px-4 py-2 bg-indigo-600 text-white rounded-4xl hover:bg-indigo-700 transition-colors text-sm font-medium"
                        >
                          Book This Trip
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

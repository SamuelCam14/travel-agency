import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [selected, setSelected] = useState("1");

  const contentData = {
    1: {
      subtitle: "TAILORED TRAVEL PACKAGES",
      title: "Your Next Adventure Starts Here",
      buttonText: "Book A Plan Now",
    },
    2: {
      subtitle: "EXPLORE WORLDWIDE DESTINATIONS",
      title: "Unforgettable Trips, Designed For You",
      buttonText: "Find Your Destination",
    },
    3: {
      subtitle: "PREMIUM & PERSONALIZED EXPERIENCES",
      title: "Luxury, Comfort, and Custom Travel Plans",
      buttonText: "Explore Premium Packages",
    },
  };

  const contentDataES = {
    1: {
      subtitle: "PAQUETES DE VIAJE PERSONALIZADOS",
      title: "Tu Próxima Aventura Comienza Aquí",
      buttonText: "Planear Mi Viaje",
    },
    2: {
      subtitle: "DESTINOS POR TODO EL MUNDO",
      title: "Viajes Inolvidables, Hechos a Tu Medida",
      buttonText: "Buscar Destinos",
    },
    3: {
      subtitle: "EXPERIENCIAS PREMIUM Y A TU MEDIDA",
      title: "Lujo, Comodidad y Planes de Viaje Personalizados",
      buttonText: "Explorar Paquetes Premium",
    },
  };

  const handleSelector = (value) => {
    setSelected(value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prevSelected) => {
        if (prevSelected === "1") return "2";
        if (prevSelected === "2") return "3";
        return "1";
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentContent = contentData[selected];

  const selectorButtonBaseClass =
    "cursor-pointer transition-all duration-300 font-bold";
  const selectorButtonDesktopSize =
    "px-4 py-3 leading-none rounded-full text-lg";
  const selectorButtonMobileSize =
    "p-2 text-sm rounded-full w-8 h-8 flex items-center justify-center";

  const selectorButtonDesktopActive = "bg-white text-gray-900 scale-150";
  const selectorButtonDesktopInactive = "text-white hover:scale-120";

  const selectorButtonMobileActive = "bg-white text-gray-900 scale-125";
  const selectorButtonMobileInactive = "text-white bg-black/30 hover:scale-110";

  return (
    <div className="relative mt-28 md:mt-32">
      {" "}
      <div
        className="flex flex-col bg-[url(/Hero.webp)] bg-cover bg-no-repeat 
                   h-[500px] sm:h-[600px] md:h-[calc(155*0.25rem)]
                   mx-4 md:mx-10 rounded-4xl
                   relative overflow-hidden"
      >
        <div className="backdrop-blur-[3px] backdrop-brightness-90 h-full">
          <div className=" md:hidden absolute top-8 left-0 right-0 flex justify-center items-center gap-x-3 z-20">
            {["1", "2", "3"].map((num) => (
              <button
                key={num}
                className={`${selectorButtonBaseClass} ${selectorButtonMobileSize} ${
                  selected === num
                    ? selectorButtonMobileActive
                    : selectorButtonMobileInactive
                }`}
                onClick={() => handleSelector(num)}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Contenido del Hero */}
          <div
            className="flex flex-col w-full h-full items-center justify-center text-center pt-20 pb-8 px-4 sm:px-6 /* Móvil */
                        md:pt-0 md:pb-0 md:px-0 md:flex-row md:justify-start md:items-stretch md:text-left z-10 /* Escritorio */"
          >
            {/* Selectores para Escritorio (Izquierda) */}
            <div className="hidden md:flex md:flex-col justify-around items-center font-semibold md:w-1/6 lg:w-1/12 h-auto md:h-full py-4 md:py-12 md:pl-6 lg:pl-12 shrink-0">
              {["1", "2", "3"].map((num) => (
                <button
                  key={num}
                  className={`${selectorButtonBaseClass} ${selectorButtonDesktopSize} ${
                    selected === num
                      ? selectorButtonDesktopActive
                      : selectorButtonDesktopInactive
                  }`}
                  onClick={() => handleSelector(num)}
                >
                  {num}
                </button>
              ))}
            </div>

            <div
              className="flex flex-col items-center justify-center /* Alineación interna del contenido del bloque de texto */
                          md:items-start 
                          text-gray-200 gap-3 md:gap-4 
                          w-full max-w-lg md:max-w-none /* En móvil, limita el ancho para mejor lectura */
                          md:w-5/6 lg:w-7/12 md:pl-8 lg:pl-12 xl:pl-16 md:pr-8"
            >
              <p className="text-base sm:text-lg md:text-xl font-medium text-shadow-xs text-shadow-gray-600">
                {currentContent.subtitle}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-10 font-semibold text-shadow-sm text-shadow-gray-600">
                {currentContent.title}
              </h1>
              <div>
                <a
                  href="#"
                  className="blue-button text-sm sm:text-base md:text-lg px-6 py-3 md:px-8 md:py-4"
                >
                  {currentContent.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Selectores para móvil - Arriba del Hero, posicionados absolutamente */}
      </div>
      {/* Botón "Know More" y decoraciones - Solo para Escritorio */}
      <div className="hidden md:block absolute bottom-0 right-10 border-t-8 border-l-8 border-white bg-white rounded-tl-4xl">
        <button className="relative blue-button flex items-center w-3xs px-6 justify-between bg-gray-100 text-gray-900 cursor-pointer">
          <span>Know More</span>
          <span>{">"}</span>
        </button>
        <div className="inverted-rounded-hero top-6 right-full border-r-8 rounded-br-3xl"></div>
        <div className="inverted-rounded-hero top-6 right-full border-r-8 rounded-br-4xl"></div>
      </div>
      <div className="hidden md:block inverted-rounded-hero rounded-br-3xl right-8 bottom-14 border-r-8"></div>
      <div className="hidden md:block inverted-rounded-hero rounded-br-4xl right-8 bottom-14 border-r-8"></div>
    </div>
  );
};

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

  const handleSelector = (e) => {
    const selectedValue = e.target.innerText;
    setSelected(selectedValue);
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

  return (
    <div>
      <div className="relative">
        <div className="flex flex-col justify-center bg-[url(/Hero.webp)] h-175 mx-10 bg-cover bg-no-repeat rounded-4xl">
          <div className="flex w-1/2 gap-12 pl-12">
            <div className="flex flex-col justify-between font-bold">
              <button
                className={`rounded-button hover:scale-120 cursor-pointer transition duration-300 ${
                  selected === "1"
                    ? "bg-white text-gray-900 border-white scale-150 transition-transform duration-300"
                    : "text-white"
                }`}
                onClick={handleSelector}
              >
                1
              </button>
              <button
                className={`rounded-button hover:scale-120 cursor-pointer transition duration-300 ${
                  selected === "2"
                    ? "bg-white text-gray-900 border-white scale-150 transition-transform duration-300"
                    : "text-white"
                }`}
                onClick={handleSelector}
              >
                2
              </button>
              <button
                className={`rounded-button hover:scale-120 cursor-pointer transition duration-300 ${
                  selected === "3"
                    ? "bg-white text-gray-900 border-white scale-150 transition-transform duration-300"
                    : "text-white"
                }`}
                onClick={handleSelector}
              >
                3
              </button>
            </div>
            <div className="flex flex-col text-gray-200 gap-2">
              <p className="text-xl font-medium text-shadow-xs text-shadow-gray-600">
                {currentContent.subtitle}
              </p>
              <h1 className="text-7xl mb-12 font-semibold text-shadow-sm text-shadow-gray-600">
                {currentContent.title}
              </h1>
              <div>
                <a href="#" className="blue-button">
                  {currentContent.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-10 border-t-8 border-l-8 border-white bg-white rounded-tl-4xl">
          <button className="relative blue-button flex items-center w-3xs px-6 justify-between bg-gray-100 text-gray-900 cursor-pointer">
            <span>Know More</span>
            <span>{">"}</span>
          </button>
          <div className="inverted-rounded-hero top-6 right-full border-r-8 rounded-br-3xl"></div>
          <div className="inverted-rounded-hero top-6 right-full border-r-8 rounded-br-4xl"></div>
        </div>
        <div className="inverted-rounded-hero rounded-br-3xl right-8 bottom-14 border-r-8"></div>
        <div className="inverted-rounded-hero rounded-br-4xl right-8 bottom-14 border-r-8"></div>
      </div>
    </div>
  );
};

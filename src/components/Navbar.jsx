import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

// Icono de Menú (Hamburguesa)
const IconMenuBurger = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    width={size}
    height={size}
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

// Icono de Cierre (X)
const IconX = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    width={size}
    height={size}
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClasses =
    "block py-2 hover:text-blue-600 transition-colors duration-200";
  const mainButtonClass = "black-button"; // Asume que esta clase está definida globalmente

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
                 ${isScrolled ? "p-2 md:px-0" : "p-0"}`}
    >
      {/* Contenedor principal de la Navbar que se estiliza al hacer scroll */}
      <div
        className={`
          mx-auto transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? "w-full md:w-5/6 max-w-[1500px] bg-white/90 backdrop-blur-xs rounded-4xl shadow-xl"
              : "w-full bg-white"
          }
        `}
      >
        <div
          className={`flex justify-between items-center text-gray-900
                     transition-all duration-300 ease-in-out
                     ${
                       isScrolled
                         ? "py-3 sm:py-4 px-6 md:px-4"
                         : "py-6 md:py-8 px-4 md:px-0"
                     }
                     ${!isScrolled ? "md:w-5/6 mx-auto" : "w-full"} 
                     `}
        >
          <div>
            <a href="#" className="font-bold text-xl">
              LOGO
            </a>{" "}
            {/* Enlace en el LOGO */}
          </div>

          {/* Menú para Escritorio */}
          <div className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-4 text-sm font-medium">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "hover:text-blue-600 transition-colors"
                  }
                >
                  INICIO
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "hover:text-blue-600 transition-colors"
                  }
                >
                  CONTACTO
                </NavLink>
              </li>
            </ul>
            <a
              href="https://wa.me/5215512345678?text=Hola%2C%20quiero%20cotizar%20un%20viaje%20con%20SkyWings%21"
              target="_blank"
              rel="noopener noreferrer"
              className={mainButtonClass}
            >
              <ChatBubbleLeftRightIcon className="w-5 h-5 mr-2 inline-block align-text-bottom" />
              WhatsApp
            </a>
          </div>

          {/* Botón de Hamburguesa para Móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none p-1" // Añadido p-1 para mejor área de toque
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <IconX size={26} /> : <IconMenuBurger size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Panel del Menú Móvil */}
      <div
        className={`
          transition-all duration-300 ease-in-out overflow-hidden
          ${
            isOpen
              ? "max-h-[calc(100vh-80px)] opacity-100"
              : "max-h-0 opacity-0"
          } 
          md:hidden 
          mx-auto
          ${isScrolled ? "w-full mt-2" : "w-full md:w-5/6 mt-0"} 
          ${isScrolled ? "w-full mt-2" : !isScrolled && "md:w-5/6 mt-0 w-full"}
        `}
      >
        {/* El contenedor del menú móvil debe reflejar el ancho del navbar visible */}
        <div className={` ${isScrolled ? "w-full" : "w-full"} `}>
          <div
            className={`bg-white rounded-b-4xl shadow-2xl p-5 text-center ${
              isScrolled ? "rounded-t-4xl" : "mx-0"
            }`}
          >
            {" "}
            {/* mx-2 en movil si no scrolleado para dar espacio al padding del nav */}
            <ul className="flex flex-col space-y-2 text-gray-900">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "hover:text-blue-600 transition-colors"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  INICIO
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "hover:text-blue-600 transition-colors"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  CONTACTO
                </NavLink>
              </li>
              <li>
                <a
                  href="https://wa.me/5215512345678?text=Hola%2C%20quiero%20cotizar%20un%20viaje%20con%20SkyWings%21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-green-500 hover:bg-green-600 text-white font-semibold rounded-4xl mt-4 text-center w-full py-2.5 transition-colors duration-200 flex items-center justify-center gap-2`}
                >
                  <ChatBubbleLeftRightIcon className="w-6 h-6" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

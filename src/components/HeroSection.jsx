import { useEffect, useState } from "react";

export const HeroSection = () => {
  // Hero fijo, sin estados ni intervalos
  return (
    <div className="relative mt-28 md:mt-32">
      <div
        className="flex flex-col bg-[url(/images/destinos/mundial/Hero.webp)] bg-cover bg-no-repeat 
                   h-[500px] sm:h-[600px] md:h-[calc(155*0.25rem)]
                   mx-4 md:mx-10 rounded-4xl
                   relative overflow-hidden"
      >
        <div className="backdrop-blur-[3px] backdrop-brightness-90 h-full">
          {/* Contenido del Hero */}
          <div
            className="flex flex-col w-full h-full items-center justify-center text-center pt-20 pb-8 px-4 sm:px-6 /* Móvil */
                        md:pt-0 md:pb-0 md:px-0 md:flex-row md:justify-start md:items-stretch md:text-left z-10 /* Escritorio */"
          >
            <div
              className="flex flex-col items-center justify-center /* Alineación interna del contenido del bloque de texto */
                          md:items-start 
                          text-gray-200 gap-3 md:gap-4 
                          w-full max-w-lg md:max-w-none /* En móvil, limita el ancho para mejor lectura */
                          md:w-5/6 lg:w-7/12 md:pl-8 lg:pl-12 xl:pl-16 md:pr-8"
            >
              <p className="text-base sm:text-lg md:text-xl font-medium text-shadow-xs text-shadow-gray-600">
                PAQUETES DE VIAJE PERSONALIZADOS
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 md:mb-10 font-semibold text-shadow-sm text-shadow-gray-600">
                Tu Próxima Aventura Comienza Aquí
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Botón "Conoce más" y decoraciones - Solo para Escritorio */}
      <div className="hidden md:block absolute bottom-0 right-10 border-t-8 border-l-8 border-white bg-white rounded-tl-4xl">
        <button
          className="relative blue-button flex items-center w-3xs px-6 justify-between bg-gray-100 text-gray-900 cursor-pointer"
          onClick={() => {
            const el = document.getElementById("popular-destination-section");
            if (el) {
              const y =
                el.getBoundingClientRect().top + window.pageYOffset - 100;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }}
        >
          <span>Conoce más</span>
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

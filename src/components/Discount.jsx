export const Discount = () => {
  return (
    <section className="mt-18 md:flex md:justify-between md:items-center w-5/6 mx-auto gap-8 lg:h-80">
      <div className="md:w-1/4 flex flex-col justify-between h-80">
        <img
          src="/images/vacaciones.webp"
          alt="Foto de una maleta y palmeras referentes a unas vacaciones"
          className="rounded-4xl w-full h-full"
        />
        <div className="mt-4 flex bg-gray-50 border border-gray-100 py-6 px-4 rounded-4xl items-center gap-2 justify-between">
          <h3 className="text-indigo-600 text-3xl font-semibold">20% MENOS</h3>
          <p className="sub-text text-gray-500 font-normal">
            Hasta el 28 de septiembre de 2025
          </p>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between md:2/4">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center gap-2">
            <h3 className="header-text text-4xl md:text-5xl lg:text-6xl">
              VIVE
            </h3>
            <p className="sub-text text-gray-600 text-sm leading-4 md:text-lg">
              Viajar es una forma maravillosa de explorar nuevos lugares,
              conocer diferentes culturas y vivir experiencias únicas.
            </p>
          </div>
          <div className="text-center">
            <h3 className="header-text text-4xl italic tracking-widest md:text-6xl">
              NUEVAS AVENTURAS
            </h3>
          </div>
          <div className="flex justify-between items-center gap-2">
            <p className="sub-text text-gray-600 text-sm leading-4 md:text-lg">
              Viaja con nosotros y descubre los destinos más impresionantes del
              mundo
            </p>
            <h3 className="header-text text-4xl md:text-5xl lg:text-6xl">
              INOLVIDABLES
            </h3>
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="#"
            className="bg-indigo-600 w-full text-center text-white py-4 px-4 rounded-4xl"
          >
            Reserva tu viaje ahora
          </a>
        </div>
      </div>
      <div className="hidden lg:flex justify-center h-full w-1/4">
        <img
          className="rounded-4xl w-full object-cover"
          src="/verticalplaya"
          alt="familia en la playa disfrutando"
        />
      </div>
    </section>
  );
};

export const LogoClouds = () => {
  return (
    <div className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="header-text text-center">
          Las mejores marcas confían en nuestra agencia de viajes para descubrir
          el mundo
        </h2>
        <p className="sub-text text-center mt-2">
          Expertos en experiencias únicas, destinos inolvidables y atención
          personalizada. Viaja seguro con los líderes en turismo.
        </p>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Marriot International Logo"
            src="/images/hoteles/marriot.webp"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            loading="lazy"
          />
          <img
            alt="Riu Hotels Logo"
            src="/images/hoteles/riu.webp"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            loading="lazy"
          />
          <img
            alt="Oasis Hotels Logo"
            src="/images/hoteles/oasis.webp"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            loading="lazy"
          />
          <img
            alt="Fiesta Americana Logo"
            src="/images/hoteles/fiestaame.webp"
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            loading="lazy"
          />
          <img
            alt="Palace Resorts Logo"
            src="/images/hoteles/palace.webp"
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

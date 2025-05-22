import {
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Elige tu destino",
    description:
      "Explora paquetes seleccionados o comparte tu viaje soñado. Te guiamos a los mejores lugares y experiencias.",
    icon: MapPinIcon,
  },
  {
    name: "Habla con un experto",
    description:
      "Chatea con nuestro equipo por WhatsApp. Recibe ayuda rápida y personalizada para planear tu escapada perfecta.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Prepara tus maletas y viaja",
    description:
      "Nosotros nos encargamos de la logística. Tú solo relájate y disfruta cada momento, ¡nosotros te respaldamos!",
    icon: PaperAirplaneIcon,
  },
];

export const Steps = () => {
  return (
    <section className="flex justify-center my-12 flex-col gap-5 w-11/12 sm:w-5/6 mx-auto">
      <div className="text-center px-4">
        <small className="text-blue-600 text-base font-semibold">
          ¿Cómo funciona?
        </small>
        <h3 className="header-text mt-1 text-3xl md:text-4xl">
          Planea tu viaje en 3 pasos sencillos
        </h3>
        <p className="mt-3 text-lg text-gray-600">
          Descubre, personaliza y viaja por el mundo con facilidad.
        </p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-8 md:items-stretch">
        {/* Tarjetas en columna, sin efectos ni estados */}
        <div className="flex flex-col gap-6 flex-1">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="flex flex-col justify-between p-6 rounded-4xl bg-gray-50 border border-gray-100 text-left transition-transform duration-200 hover:scale-y-105"
            >
              <feature.icon
                className="h-8 w-8 text-blue-600 mb-4 self-start"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-gray-900 self-start">
                {feature.name}
              </h3>
              <p className="mt-3 text-sm text-gray-600 flex-grow self-start w-full">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        {/* Imagen vertical solo en desktop/tablet, más ancha */}
        <div className="hidden md:flex flex-col justify-center items-center flex-shrink-0">
          <img
            src="/images/vacaciones.webp"
            alt="Viaje soñado"
            className="rounded-4xl object-cover h-full max-h-[500px] w-96 shadow-xl"
            style={{ minHeight: 280 }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

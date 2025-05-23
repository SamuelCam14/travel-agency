import { useState } from "react";

const faqs = [
  {
    question: "¿Cómo reservo un paquete de viaje?",
    answer:
      "Puedes reservar directamente en nuestra web o contactarnos por WhatsApp para atención personalizada. Elige tu destino, personaliza tu viaje y confirma tu reserva en minutos.",
  },
  {
    question: "¿Puedo personalizar mi itinerario?",
    answer:
      "¡Por supuesto! Todos nuestros paquetes son flexibles. Puedes agregar o quitar actividades, elegir hoteles y ajustar fechas según tus preferencias.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos tarjetas de crédito, transferencias bancarias y pagos por plataformas digitales seguras. Consulta con nuestro equipo para más opciones.",
  },
  {
    question: "¿Qué pasa si necesito cancelar o cambiar mi viaje?",
    answer:
      "Contamos con políticas flexibles de cambios y cancelaciones. Te recomendamos revisar los términos de cada paquete o consultarnos para más detalles.",
  },
  {
    question: "¿Los precios incluyen vuelos y hospedaje?",
    answer:
      "Sí, la mayoría de nuestros paquetes incluyen vuelos, hospedaje y actividades principales. Revisa la descripción de cada paquete para conocer los detalles exactos.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-11/12 sm:w-5/6 mx-auto my-12">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <h2 className="header-text text-3xl md:text-4xl mb-2">
          Preguntas Frecuentes
        </h2>
        <p className="sub-text text-gray-600">
          Resuelve tus dudas antes de viajar con nosotros.
        </p>
      </div>
      <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start lg:auto-rows-auto">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="rounded-4xl bg-gray-50 border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none group"
              onClick={() => handleToggle(idx)}
              aria-expanded={openIndex === idx}
              style={{ minHeight: "64px" }}
            >
              <span className="text-lg md:text-xl font-semibold text-gray-900">
                {faq.question}
              </span>
              <span
                className={`ml-4 transition-transform duration-300 text-blue-500 ${
                  openIndex === idx ? "rotate-180" : "rotate-0"
                }`}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>
            <div
              className={`px-6 pb-5 text-gray-700 text-base transition-all duration-300 ease-in-out grid ${
                openIndex === idx
                  ? "grid-rows-[1fr] opacity-100 visible"
                  : "grid-rows-[0fr] opacity-0 invisible"
              } overflow-hidden`}
              style={{ minHeight: 0 }}
            >
              <div className="overflow-hidden">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

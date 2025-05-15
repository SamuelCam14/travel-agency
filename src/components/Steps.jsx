import {
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  ClipboardDocumentCheckIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const features = [
  {
    name: "Choose Your Destination",
    description:
      "Explore curated packages or share your dream trip. We’ll guide you to the best places and experiences.",
    icon: MapPinIcon,
  },
  {
    name: "Talk to a Travel Expert",
    description:
      "Chat with our team on WhatsApp. Get fast, personalized help to plan the perfect getaway.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Customize & Confirm",
    description:
      "Adjust your trip to match your style. Enjoy flexible options, transparent pricing, and expert guidance.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Pack & Travel",
    description:
      "We handle the logistics. You relax and enjoy every moment—knowing we’ve got your back.",
    icon: PaperAirplaneIcon,
  },
];

export const Steps = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex justify-center mt-12 flex-col gap-5 w-11/12 sm:w-5/6 mx-auto">
      <div className="text-center px-4">
        <small className="text-indigo-600 text-base font-semibold">
          How it works
        </small>
        <h3 className="text-3xl font-bold mt-1 text-gray-900 sm:text-4xl">
          Plan Your Trip In 4 Simple Steps
        </h3>
        <p className="mt-3 text-lg text-gray-600">
          Discover, customize and travel the world with ease.
        </p>
      </div>

      <div className="mt-10 md:h-[300px]">
        {" "}
        {/* Ajuste de altura */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full md:items-start">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`
                group flex flex-col justify-between
                transition-all duration-300 ease-out p-6 rounded-[2rem] cursor-pointer text-left {/* Redondeo cambiado a 2rem (equivalente a 4xl) */}
                ${
                  index === activeIndex
                    ? "bg-indigo-600 text-white scale-105 z-10 min-h-[280px] md:h-full" // Ajuste de altura para el elemento activo
                    : "bg-gray-100 hover:bg-indigo-600 hover:text-white min-h-[180px] md:h-[250px] z-0" // Ajuste de altura para los elementos inactivos
                }
              `}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
            >
              {index === activeIndex ? (
                <>
                  <feature.icon
                    className="h-8 w-8 transition-colors duration-300 text-white mb-4 self-start"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold text-white self-start">
                    {feature.name}
                  </h3>
                  <p className="mt-3 text-sm text-indigo-100 flex-grow self-start w-full">
                    {feature.description}
                  </p>
                  <a
                    href="https://wa.me/YOURPHONENUMBER?text=I'm%20interested%20in%20planning%20my%20trip!"
                    className="mt-auto pt-4 text-white font-bold tracking-wider uppercase flex items-center gap-2 group/cta transition-colors duration-200 self-start text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                    <span className="inline-block transition-transform duration-300 group-hover/cta:translate-x-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 5L12 10L7 15"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </>
              ) : (
                <>
                  <feature.icon
                    className="h-10 w-10 transition-colors duration-300 text-indigo-600 group-hover:text-white self-start border-2 border-indigo-200 group-hover:border-indigo-500 rounded-full p-2"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white self-start mt-auto">
                    {feature.name}
                  </h3>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
      "Browse our curated travel packages or tell us your dream destination. Our expert team will help you discover the best places, hidden gems, and unique experiences tailored to your interests. Start planning your next adventure with confidence and ease, knowing you'll get the most out of your journey.",
    icon: MapPinIcon,
  },
  {
    name: "Talk to a Travel Expert",
    description:
      "Connect instantly with our experienced travel consultants who are ready to answer your questions, provide personalized recommendations, and design a trip that fits your budget, schedule, and style. Enjoy a seamless planning process with real human support every step of the way.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Customize & Confirm",
    description:
      "Fine-tune your itinerary, select your favorite activities, and confirm your booking with total peace of mind. We offer flexible options and transparent pricing, so you can create the perfect trip that matches your expectations and needs.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    name: "Pack & Travel",
    description:
      "Relax and get ready for your trip! We handle all the details, from reservations to support during your journey, so you can focus on enjoying every moment. Travel with confidence, knowing our team is always available for assistance.",
    icon: PaperAirplaneIcon,
  },
];

export const Steps = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="flex justify-center mt-12 flex-col gap-5 w-5/6 mx-auto">
      <div className="text-center">
        <small className="text-indigo-600 text-base">How it works</small>
        <h3 className="header-text">Plan Your Trip In 4 Simple Steps</h3>
        <p className="sub-text">
          Discover, customize and travel the world with ease.
        </p>
      </div>
      <div style={{ height: "420px" }} className="relative w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-4 items-end h-full">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className={`group flex flex-col justify-between transition-all duration-300 ease-out p-10 rounded-t-4xl cursor-pointer origin-bottom text-left absolute md:static lg:static w-full md:w-auto lg:w-auto
                ${
                  index === activeIndex
                    ? "bg-indigo-600 text-white scale-105 -translate-y-2 rounded-4xl h-full z-10"
                    : "bg-gray-100 hover:bg-indigo-600 hover:text-white h-2/3 z-0"
                }`}
              style={{
                bottom: 0,
                height: index === activeIndex ? "100%" : "66%",
              }}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {index !== activeIndex ? (
                <>
                  <div className="flex flex-col h-full justify-between">
                    <feature.icon
                      className="h-10 w-10 transition-colors duration-300 text-indigo-600 group-hover:text-white mb-0 self-start border-2 rounded-full p-2"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-semibold mt-auto self-start">
                      {feature.name}
                    </h3>
                  </div>
                </>
              ) : (
                <>
                  <feature.icon
                    className="h-8 w-8 transition-colors duration-300 text-white mb-2"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold mt-2">{feature.name}</h3>
                  <p className="mt-2">{feature.description}</p>
                  <a
                    href="#"
                    className="mt-6 text-white font-bold tracking-widest uppercase flex items-center gap-2 group/cta transition-colors duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                    <span className="inline-block transition-transform duration-300 translate-x-0 opacity-0 group-hover/cta:translate-x-2 group-hover/cta:opacity-100">
                      {/* Flecha derecha SVG */}
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7 5L12 10L7 15"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

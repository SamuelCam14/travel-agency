import {
  MapPinIcon,
  MapIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Discover Your Dream Destination",
    description:
      "Explore breathtaking locations and uncover hidden gems tailored to your wanderlust. Your adventure begins here.",
    icon: MapPinIcon,
  },
  {
    name: "Effortless Trip Booking",
    description:
      "Seamlessly plan your journey with our user-friendly booking system. Your next adventure is just a click away.",
    icon: GlobeEuropeAfricaIcon,
  },
  {
    name: "Embark on Your Adventure",
    description:
      "]]Pack your bags and set off on a journey of a lifetime. Memories await at every destination.",
    icon: MapIcon,
  },
];

export const Steps = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto w-5/6 px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            Our Steps
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Journey To The Skies Made Simple!
          </p>
          <p className="mt-2 sub-text">
            Traveling is a wonderful way to explore new cultures, meet new
            people, and create lasting memories.
          </p>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
          <div className="lg:pt-4 lg:pr-8 self-center">
            <div className="lg:max-w-lg">
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <img
            alt="Picture of a Tourist Destination"
            src="/Turismo.png"
            className="h-[30rem] rounded-4xl sm:h-[30rem] md:-ml-4 lg:-ml-0 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

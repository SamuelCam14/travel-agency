import React from "react";

// Helper component for Star Icons
const StarIcon = ({ className = "w-5 h-5" }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.446a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.368-2.446a1 1 0 00-1.175 0l-3.368 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.28 9.385c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

// Testimonial Card Component
const TestimonialCard = ({ review, name, title, avatar, isHighlighted }) => {
  const cardBaseClasses =
    "flex flex-col items-center text-center w-full max-w-xs mx-auto rounded-lg";
  const cardSpecificClasses = isHighlighted
    ? "bg-blue-500 text-white p-8 shadow-xl transform lg:scale-105 z-10"
    : "bg-white text-gray-700 p-6 shadow-lg";

  const reviewTextClasses = isHighlighted ? "text-blue-100" : "text-gray-600";
  const nameClasses = isHighlighted ? "text-white" : "text-gray-900";
  const titleClasses = isHighlighted ? "text-blue-200" : "text-gray-500";

  return (
    <div className={`${cardBaseClasses} ${cardSpecificClasses}`}>
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-5 h-5" />
        ))}
      </div>
      <p className={`text-sm mb-6 leading-relaxed ${reviewTextClasses}`}>
        "{review}"
      </p>
      <img
        className="w-14 h-14 rounded-full mb-3 object-cover"
        src={avatar}
        alt={name}
      />
      <h3 className={`font-semibold text-lg ${nameClasses}`}>{name}</h3>
      <p className={`text-xs ${titleClasses}`}>{title}</p>
    </div>
  );
};

// Main Component
const LovedByTravelersSection = () => {
  const testimonials = [
    {
      review:
        "I Just Returned From The Most Amazing Trip To Europe, All Thanks To This Travel Agency! From The Moment I Contacted Them, They Were Incredibly Helpful And Made Sure To Create An Itinerary That Suited My Interests And Budget. I Can't Wait To Book My Next Adventure With Them!",
      name: "Arefin Shuvo",
      title: "Product Designer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80", // Placeholder Avatar 1
      isHighlighted: false,
    },
    {
      review:
        "I Just Returned From The Most Amazing Trip To Europe, All Thanks To This Travel Agency! From The Moment I Contacted Them, They Were Incredibly Helpful And Made Sure To Create An Itinerary That Suited My Interests And Budget. I Can't Wait To Book My Next Adventure With Them!",
      name: "Arefin Shuvo",
      title: "Product Designer",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80", // Placeholder Avatar 2 (different for highlighted)
      isHighlighted: true,
    },
    {
      review:
        "I Just Returned From The Most Amazing Trip To Europe, All Thanks To This Travel Agency! From The Moment I Contacted Them, They Were Incredibly Helpful And Made Sure To Create An Itinerary That Suited My Interests And Budget. I Can't Wait To Book My Next Adventure With Them!",
      name: "Arefin Shuvo",
      title: "Product Designer",
      avatar:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80", // Placeholder Avatar 3
      isHighlighted: false,
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="container mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-12 md:mb-16">
          Loved By Over Thousand Travelers
        </h2>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-center relative">
          {/* The relative positioning is for the z-index of the highlighted card to work if there were any overlap possibilities */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 md:mt-24 flex flex-col lg:flex-row justify-around items-center gap-12 lg:gap-8">
          {/* Left Item */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img
              className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover mb-5 shadow-lg border-4 border-white"
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" // Placeholder Scenic 1
              alt="Scenic view of boats on a lake near mountains"
            />
            <h3 className="text-xl font-semibold text-gray-800 leading-tight">
              Explore The Skies
              <br />
              With Confidence!
            </h3>
          </div>

          {/* Middle Decorative Circle */}
          {/* Note: The text "• MORE • EXPLORE • MORE • EXPLORE" arranged in a circular path as in the image is complex
              and ideally requires SVG for an exact match. This is a simplified version. */}
          <div className="flex-shrink-0 w-36 h-36 md:w-40 md:h-40 rounded-full border-2 border-gray-300 bg-white shadow-md flex items-center justify-center p-1.5">
            <div className="w-full h-full rounded-full border border-dashed border-gray-400 flex items-center justify-center">
              <span className="text-gray-500 font-semibold text-xs sm:text-sm text-center uppercase leading-none">
                Explore
                <br />
                More
              </span>
            </div>
          </div>

          {/* Right Item */}
          <div className="flex flex-col items-center text-center max-w-xs">
            <img
              className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover mb-5 shadow-lg border-4 border-white"
              src="https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" // Placeholder Scenic 2
              alt="Feet on a sandy beach with ocean waves"
            />
            <p className="text-sm text-gray-700 leading-relaxed">
              Travelling Is A Wonderful Way To Explore New Places, Learn About
              Different Cultures, And Gain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LovedByTravelersSection;

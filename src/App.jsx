import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { PopularDestination } from "./components/PopularDestination";
import { Steps } from "./components/Steps";

export const App = () => {
  return (
    <div className="text-gray-900">
      <Navbar />
      <HeroSection />
      <PopularDestination />
      <Steps />
    </div>
  );
};

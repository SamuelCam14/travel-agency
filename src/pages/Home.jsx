import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { Steps } from "../components/Steps";
import { PopularDestination } from "../components/PopularDestination";
import { LogoClouds } from "../components/LogoClouds";
import { Discount } from "../components/Discount";
import { Stats } from "../components/Stats";
import { InfiniteGallery } from "../components/InfiniteGallery";

export const Home = () => {
  return (
    <main className="relative max-w-[1800px] mx-auto">
      <Navbar />
      <HeroSection />
      <LogoClouds />
      <PopularDestination />
      <InfiniteGallery />
      <Steps />
      <Discount />
      <Stats />
    </main>
  );
};

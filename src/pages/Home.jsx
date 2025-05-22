import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { Steps } from "../components/Steps";
import { LogoClouds } from "../components/LogoClouds";
import { Discount } from "../components/Discount";
import { Stats } from "../components/Stats";
import { Carousel } from "../components/Carousel";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { MexicoDestinations } from "../components/MexicoDestinations";

export const Home = () => {
  return (
    <main className="relative max-w-[1800px] mx-auto">
      <Navbar />
      <HeroSection />
      <LogoClouds />
      <Carousel />
      <Steps />
      <MexicoDestinations />
      <Discount />
      <Stats />
      <FAQ />
      <Footer />
    </main>
  );
};

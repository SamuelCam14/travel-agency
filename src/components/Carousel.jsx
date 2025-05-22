import { PopularDestination } from "./ui/PopularDestination";
import { destinosInternacionales } from "../lib/objects";

export const Carousel = () => {
  return <PopularDestination destinations={destinosInternacionales} />;
};

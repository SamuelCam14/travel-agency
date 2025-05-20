import InfiniteMenu from "./ui/InfiniteMenu";

const items = [
  {
    image: "/images/destinos/mexico/cancun.jpg",

    link: "https://google.com/",

    title: "Cancún",

    description: "This is pretty cool, right?",
  },

  {
    image: "/images/destinos/mexico/chichenitza.jpg",

    link: "https://google.com/",

    title: "Chichen Itza",

    description: "This is pretty cool, right?",
  },

  {
    image: "/images/destinos/mexico/loscabos.jpg",

    link: "https://google.com/",

    title: "Los Cabos",

    description: "This is pretty cool, right?",
  },

  {
    image: "/images/destinos/mexico/puertovallarta.jpg",

    link: "https://google.com/",

    title: "Puerto Vallarta",

    description: "This is pretty cool, right?",
  },
];
export const InfiniteGallery = () => {
  return (
    <div
      className="mt-12 w-5/6 mx-auto"
      style={{ height: "600px", position: "relative" }}
    >
      <InfiniteMenu items={items} />
    </div>
  );
};

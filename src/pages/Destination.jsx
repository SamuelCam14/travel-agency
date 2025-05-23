import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { destinosNacionales } from "../lib/objects";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalTrigger,
} from "../components/ui/animated-modal";
import { FAQ } from "../components/FAQ";
import { ChatBubbleLeftRightIcon, StarIcon } from "@heroicons/react/24/solid";

const mockConditions = [
  { condicion: "Incluye vuelos", detalle: "Vuelos redondos desde CDMX" },
  { condicion: "Hospedaje", detalle: "Hoteles 4 estrellas o superior" },
  { condicion: "Alimentos", detalle: "Desayunos incluidos, cenas opcionales" },
  {
    condicion: "Transporte local",
    detalle: "Traslados aeropuerto-hotel y tours",
  },
  {
    condicion: "Seguro de viaje",
    detalle: "Cobertura médica básica internacional",
  },
  {
    condicion: "Política de cancelación",
    detalle: "Flexible hasta 7 días antes",
  },
];

const mockAtractivos = [
  "Playas de arena blanca y aguas turquesa",
  "Ruinas arqueológicas y sitios históricos",
  "Gastronomía local e internacional",
  "Vida nocturna y actividades culturales",
  "Tours de aventura y ecoturismo",
];

const mockInfoCompleta = `Disfruta de un destino único con playas espectaculares, cultura vibrante y una oferta turística inigualable. Descubre atractivos naturales, sitios históricos, gastronomía de primer nivel y actividades para toda la familia. ¡Vive experiencias inolvidables en cada rincón!`;

const Destination = () => {
  const { name } = useParams();
  const destino = destinosNacionales.find(
    (d) => d.name.toLowerCase() === decodeURIComponent(name || "").toLowerCase()
  );
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  if (!destino) {
    return (
      <div className="text-center py-20 text-2xl">Destino no encontrado</div>
    );
  }

  // Galería de imágenes (puedes expandir con más imágenes si las tienes)
  const gallery = [destino.image, destino.image, destino.image, destino.image];
  const culturalImg = destino.image;

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 flex flex-col gap-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-500 mb-2 flex gap-2 items-center">
          <Link to="/" className="hover:text-blue-500">
            Inicio
          </Link>
          <span>/</span>
          <span className="text-blue-500 font-semibold">{destino.name}</span>
        </nav>

        {/* Galería de fotos */}
        <section className="w-full flex flex-col md:flex-row gap-6">
          {/* Mosaico para PC */}
          <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-4 w-1/2">
            {gallery.map((img, idx) => (
              <Modal key={idx}>
                <ModalTrigger asChild>
                  <img
                    src={img}
                    alt={`Foto ${idx + 1} de ${destino.name}`}
                    className="w-full h-40 object-cover rounded-4xl cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => {
                      setSelectedImg(img);
                      setOpen(true);
                    }}
                    loading="lazy"
                  />
                </ModalTrigger>
                <ModalBody>
                  <img
                    src={img}
                    alt="Grande"
                    className="w-full h-auto rounded-4xl"
                  />
                </ModalBody>
              </Modal>
            ))}
          </div>
          {/* Carrusel para móvil */}
          <div className="md:hidden w-full">
            <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-2">
              {gallery.map((img, idx) => (
                <Modal key={idx}>
                  <ModalTrigger asChild>
                    <img
                      src={img}
                      alt={`Foto ${idx + 1} de ${destino.name}`}
                      className="w-72 h-44 object-cover rounded-4xl cursor-pointer snap-center flex-shrink-0 hover:scale-105 transition-transform"
                      onClick={() => {
                        setSelectedImg(img);
                        setOpen(true);
                      }}
                      loading="lazy"
                    />
                  </ModalTrigger>
                  <ModalBody>
                    <img
                      src={img}
                      alt="Grande"
                      className="w-full h-auto rounded-4xl"
                    />
                  </ModalBody>
                </Modal>
              ))}
            </div>
          </div>
          {/* Info principal */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-2">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-500 mb-1 text-center md:text-left">
              {destino.name}
            </h1>
            <div className="flex items-center gap-2 mb-2">
              <StarIcon className="w-6 h-6 text-yellow-400" />
              <span className="text-lg font-semibold text-gray-800">
                {destino.rating}
              </span>
            </div>
            <p className="text-lg text-gray-700 text-center md:text-left mb-4">
              {destino.description}
            </p>
            {/* Ofertas del destino */}
            <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-3 mb-2">
              {mockAtractivos.map((atr, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl px-4 py-3 text-blue-600 font-medium text-sm shadow-sm"
                >
                  {atr}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Conoce un poco más */}
        <section className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-blue-500 mb-2">
              Conoce un poco más
            </h2>
            <details
              className="rounded-4xl border border-gray-100 bg-gray-50 p-6 shadow-md group"
              open
            >
              <summary className="text-lg font-semibold text-gray-900 cursor-pointer flex items-center justify-between">
                Información completa
                <span className="ml-2 text-blue-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="mt-4 text-gray-700 text-base leading-relaxed">
                {mockInfoCompleta}
              </div>
              <ul className="mt-4 list-disc list-inside text-blue-500 text-sm space-y-1">
                {mockAtractivos.map((atr, idx) => (
                  <li key={idx}>{atr}</li>
                ))}
              </ul>
            </details>
          </div>
          <div className="w-full md:w-72 flex-shrink-0">
            <img
              src={culturalImg}
              alt="Atractivo cultural"
              className="rounded-4xl w-full h-56 object-cover shadow-md"
              loading="lazy"
            />
          </div>
        </section>

        {/* Divider */}
        <div className="w-full border-t border-gray-200 my-8" />

        {/* Condiciones del viaje */}
        <section>
          <h2 className="text-2xl font-bold text-blue-500 mb-4">
            Condiciones del viaje
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-4xl overflow-hidden shadow-md">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase bg-white">
                    Condición
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase bg-white">
                    Detalle
                  </th>
                </tr>
              </thead>
              <tbody>
                {mockConditions.map((cond, idx) => (
                  <tr key={idx} className="border-b border-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {cond.condicion}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      {cond.detalle}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Preguntas frecuentes */}
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Destination;

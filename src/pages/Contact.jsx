import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const AGENCY_ADDRESS = "Av. Siempre Viva 123, Ciudad de México, CDMX, México";
const AGENCY_PHONE = "+52 55 1234 5678";
const AGENCY_EMAIL = "contacto@skywings.com";
const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.123456789!2d-99.1332086846875!3d19.4326071868856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff3b1234567%3A0x123456789abcdef!2sAv.+Siempre+Viva+123,+Ciudad+de+México!5e0!3m2!1ses-419!2smx!4v1680000000000!5m2!1ses-419!2smx";

const Contact = () => {
  return (
    <div className="mt-24 bg-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-5/6 mx-auto max-w-5xl py-10 flex flex-col gap-12">
        <section className="text-center mb-8">
          <h1 className="header-text text-3xl md:text-5xl mb-2 text-blue-500">
            Contáctanos
          </h1>
          <p className="sub-text text-gray-700 max-w-2xl mx-auto">
            ¿Listo para tu próxima aventura? Escríbenos, llámanos o visítanos.
            Nuestro equipo está listo para ayudarte a planear el viaje de tus
            sueños.
          </p>
        </section>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Formulario de contacto */}
          <form
            className="bg-gray-50 border border-gray-100 rounded-4xl p-8 flex flex-col gap-5 shadow-md"
            autoComplete="off"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Envíanos un mensaje
            </h2>
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              className="rounded-3xl border border-gray-200 px-5 py-3 text-base focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="rounded-3xl border border-gray-200 px-5 py-3 text-base focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono (opcional)"
              className="rounded-3xl border border-gray-200 px-5 py-3 text-base focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <textarea
              name="message"
              placeholder="¿En qué podemos ayudarte?"
              rows={4}
              className="rounded-3xl border border-gray-200 px-5 py-3 text-base focus:ring-2 focus:ring-blue-400 outline-none resize-none"
              required
            />
            <button
              type="submit"
              className="blue-button px-8 py-3 rounded-4xl text-white bg-blue-500 hover:bg-blue-500 font-semibold text-lg shadow-md transition-colors mt-2"
            >
              Enviar mensaje
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Nos pondremos en contacto contigo lo antes posible.
            </p>
          </form>
          {/* Información de contacto y mapa */}
          <div className="flex flex-col gap-6">
            <div className="bg-gray-50 border border-gray-100 rounded-4xl p-8 shadow-md flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Información
              </h2>
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-6 h-6 text-blue-500" />
                <span className="text-gray-700 text-base">
                  {AGENCY_ADDRESS}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-blue-500" />
                <a
                  href={`tel:${AGENCY_PHONE.replace(/\s+/g, "")}`}
                  className="text-blue-500 hover:underline text-base"
                >
                  {AGENCY_PHONE}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-500" />
                <a
                  href={`mailto:${AGENCY_EMAIL}`}
                  className="text-blue-500 hover:underline text-base"
                >
                  {AGENCY_EMAIL}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="w-6 h-6 text-blue-500" />
                <span className="text-gray-700 text-base">
                  Lunes a Viernes: 9:00 - 19:00
                </span>
              </div>
            </div>
            <div className="rounded-4xl overflow-hidden border border-gray-100 shadow-md">
              <iframe
                src={MAP_EMBED}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Agencia de Viajes"
                className="w-full h-72 min-h-[200px]"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

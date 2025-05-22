export const Footer = () => {
  return (
    <footer className="mt-16 py-8">
      <div className="mx-auto flex flex-col items-center gap-6 px-4">
        <nav className="flex flex-wrap justify-center gap-6 text-gray-700 text-sm font-medium">
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Inicio
          </a>
          <a
            href="#popular-destination-section"
            className="hover:text-indigo-600 transition-colors"
          >
            Destinos
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Paquetes
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            FAQ
          </a>
          <a href="#" className="hover:text-indigo-600 transition-colors">
            Contacto
          </a>
        </nav>
        <p className="text-gray-500 text-xs text-center mt-2">
          Av. Siempre Viva 123, Ciudad de México · contacto@skywings.com · +52
          55 1234 5678
        </p>
        <p className="text-gray-500 text-sm text-center">
          © {new Date().getFullYear()} Skywings Travel. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

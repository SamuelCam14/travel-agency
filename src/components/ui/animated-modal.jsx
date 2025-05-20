// src/components/ui/animated-modal.jsx
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion"; // Usamos framer-motion directamente
import { cn } from "../../lib/utils"; // Ajusta esta ruta si tu utils.js está en otro lugar
import { useOutsideClick } from "../../hooks/useOutsideClick"; // Ajusta esta ruta

const ModalContext = createContext(undefined);

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null); // Para pasar datos al modal

  // Modificamos setOpen para aceptar datos opcionales
  const openModal = (data = null) => {
    setModalData(data);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    // Opcional: limpiar modalData al cerrar si es necesario
    // setModalData(null);
  };

  return (
    <ModalContext.Provider
      value={{ open, setOpen: openModal, closeModal, modalData }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

// Modal ahora solo envuelve el Provider.
// Necesitaremos un <Modal> por cada modal que queramos abrir con datos distintos,
// O una sola instancia global si el contenido se actualiza dinámicamente.
// Para el caso de múltiples triggers en un carrusel, cada uno necesitará su propio <Modal>
// O, una estrategia más avanzada: un único Modal global y pasamos los datos al abrirlo.
// Vamos a intentar con la estrategia de que <Modal> sea solo el Provider por ahora
// y el <ModalTrigger> pase los datos al contexto.
export function Modal({ children }) {
  return <ModalProvider>{children}</ModalProvider>;
}

export const ModalTrigger = ({ children, className, data }) => {
  // `data` es la nueva prop
  const { setOpen } = useModal(); // setOpen ahora es nuestra función `openModal`
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-md text-black dark:text-white text-center relative overflow-hidden",
        className
      )}
      onClick={() => setOpen(data)} // Pasamos `data` al abrir
    >
      {children}
    </button>
  );
};

export const ModalBody = ({ children, className }) => {
  const { open, closeModal, modalData } = useModal(); // modalData disponible aquí

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup en desmontaje o cuando `open` cambia a false
    return () => {
      if (!open) {
        // Asegurarse de que se restaure si el modal se desmonta estando abierto
        document.body.style.overflow = "auto";
      }
    };
  }, [open]);

  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => closeModal());

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          className="fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full flex items-center justify-center z-50"
        >
          <Overlay /> {/* Usamos el Overlay definido abajo */}
          <motion.div
            ref={modalRef}
            className={cn(
              "min-h-[50%] w-[90%] md:w-auto max-h-[90%] md:max-w-[60%] lg:max-w-[50%] bg-white dark:bg-neutral-950 border border-transparent dark:border-neutral-800 md:rounded-2xl relative z-50 flex flex-col flex-1 overflow-hidden",
              className
            )}
            initial={{ opacity: 0, scale: 0.5, rotateX: 40, y: 40 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: 10 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }} // Ajustado damping
          >
            <CloseIcon /> {/* Usamos CloseIcon definido abajo */}
            {/* Renderizamos children, que podría ser una función para acceder a modalData */}
            {typeof children === "function" ? children(modalData) : children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const ModalContent = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col flex-1 p-6 md:p-8 overflow-y-auto",
        className
      )}
    >
      {" "}
      {/* Añadido overflow-y-auto */}
      {children}
    </div>
  );
};

export const ModalFooter = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex justify-end p-4 bg-gray-100 dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800",
        className
      )}
    >
      {children}
    </div>
  );
};

// Componentes internos (Overlay, CloseIcon)
const Overlay = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
      exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
      className={cn(
        "fixed inset-0 h-full w-full bg-black bg-opacity-50 z-40",
        className
      )} // z-index menor que el modal
    ></motion.div>
  );
};

const CloseIcon = () => {
  const { closeModal } = useModal();
  return (
    <button
      onClick={() => closeModal()}
      className="absolute top-4 right-4 p-1 rounded-full group hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors z-50"
      aria-label="Close modal"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-black dark:text-white h-5 w-5 group-hover:scale-110 transition-transform"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  );
};

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import ReactDOM from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const ModalContext = createContext(undefined);

export const ModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <ModalContext.Provider value={{ open, setOpen }}>
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

export function Modal({ children }) {
  return <ModalProvider>{children}</ModalProvider>;
}

export const ModalTrigger = ({ children, className }) => {
  const { setOpen } = useModal();
  return (
    <button
      className={cn(
        "text-black text-center relative overflow-hidden",
        className
      )}
      onClick={() => setOpen(true)}
    >
      {children}
    </button>
  );
};

export const ModalBody = ({ children, className, data: modalDataProp }) => {
  const { open, setOpen } = useModal();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (open) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-is-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("modal-is-open");
    }
    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("modal-is-open");
    };
  }, [open]);

  const modalRef = useRef(null);
  useOutsideClick(modalRef, () => setOpen(false));

  const modalContentRender = (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, backdropFilter: "blur(15px)" }}
          exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="fixed [perspective:800px] [transform-style:preserve-3d] inset-0 h-full w-full flex items-center justify-center z-50"
        >
          <Overlay />
          <motion.div
            ref={modalRef}
            className={cn(
              "min-h-[50%] w-[90%] md:w-auto max-h-[90%] md:max-w-[60%] lg:max-w-[50%] bg-white border border-gray-200 rounded-4xl relative z-50 flex flex-col flex-1 overflow-hidden shadow-2xl",
              className
            )}
            initial={{ opacity: 0, scale: 0.92, rotateX: 24, y: 32 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, rotateX: 8, y: 12 }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 22,
              mass: 0.7,
            }}
            onMouseDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <CloseIcon />
            {typeof children === "function"
              ? children(modalDataProp)
              : children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!isMounted) {
    return null;
  }
  return ReactDOM.createPortal(modalContentRender, document.body);
};

export const ModalContent = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col flex-1 p-6 md:p-8 overflow-y-auto text-gray-700",
        className
      )}
    >
      {" "}
      {children}
    </div>
  );
};

export const ModalFooter = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex justify-end p-4 bg-gray-50 border-t border-gray-200 rounded-b-4xl",
        className
      )}
    >
      {" "}
      {children}
    </div>
  );
};

const Overlay = ({ className }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className={cn(
        "fixed inset-0 h-full w-full bg-black bg-opacity-50 z-40",
        className
      )}
    ></motion.div>
  );
};

const CloseIcon = () => {
  const { setOpen } = useModal();
  return (
    <button
      onClick={() => setOpen(false)}
      className="absolute top-4 right-4 p-1 rounded-full group hover:bg-gray-100 transition-colors z-50"
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
        className="text-gray-600 h-5 w-5 group-hover:scale-110 transition-transform"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 6l-12 12" />
        <path d="M6 6l12 12" />
      </svg>
    </button>
  );
};

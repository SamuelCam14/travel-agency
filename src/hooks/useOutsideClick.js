// src/hooks/useOutsideClick.js
import { useEffect } from "react";

export const useOutsideClick = (ref, callback) => {
    useEffect(() => {
        const listener = (event) => {
            // NO HACER NADA si el elemento clickeado es el ref o sus hijos
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            callback(event);
        };

        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};
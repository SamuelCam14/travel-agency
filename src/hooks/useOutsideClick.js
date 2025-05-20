import { useEffect, useRef } from "react";

export const useOutsideClick = (ref, callback) => {
    const isDraggingRef = useRef(false);

    useEffect(() => {
        const handlePointerDown = () => {
            isDraggingRef.current = false;
        };

        const handlePointerMove = () => {
            isDraggingRef.current = true;
        };

        const listener = (event) => {
            if (isDraggingRef.current) {
                return;
            }
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            callback(event);
        };

        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);

        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("pointermove", handlePointerMove);
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, callback]);
};
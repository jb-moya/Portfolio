import { useRef, useEffect } from "react";

export const SectionIntersectionObserver = ({
    callback,
    options,
}: {
    callback: (entry: IntersectionObserverEntry) => void;
    options?: IntersectionObserverInit;
}) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    callback(entry);
                }
            });
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options, callback]);

    return ref;
};

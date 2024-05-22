// hooks/useSectionObserver.js
"use client";
import { useDispatch } from "react-redux";
import { setMenuState, resetMenuState } from "../../lib/features/navbarSlice";
import { SectionIntersectionObserver } from "./SectionIntersectionObserver";

export function useSectionObserver({
    sectionName,
    options = { threshold: 1 },
}: {
    sectionName: string;
    options?: {};
}) {
    const dispatch = useDispatch();

    const handleIntersection = () => {
        dispatch(resetMenuState());
        dispatch(
            setMenuState({
                name: sectionName,
                value: true,
            })
        );
    };

    const sectionRef = SectionIntersectionObserver({
        callback: handleIntersection,
        options: options,
    });

    return sectionRef;
}

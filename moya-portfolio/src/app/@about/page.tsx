"use client";
import React, { useRef, useEffect } from "react";
import { useSectionObserver } from "../_components/navbarSectionObserver";

export default function AboutPage() {
    const sectionRef = useSectionObserver({
        sectionName: "About",
    });

    return (
        <section id="about" className="border-4" ref={sectionRef}>
            <h1 className="text-3xl text-center py-4">About Me</h1>
            <p>
                I am a dedicated software developer with a strong passion for
                creating innovative solutions for the web. With a focus on
                building high-quality, user-friendly applications, I thrive on
                transforming ideas into functional, efficient, and visually
                appealing web experiences.
            </p>
        </section>
    );
}

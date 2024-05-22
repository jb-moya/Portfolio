"use client";
import React from "react";
import { DiJavascript1, DiCss3, DiNodejsSmall } from "react-icons/di";
import {
    SiTypescript,
    SiSass,
    SiTailwindcss,
    SiNextdotjs,
    SiMongodb,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { useSectionObserver } from "../_components/navbarSectionObserver";

export default function SkillsPage() {
    const sectionRef = useSectionObserver({
        sectionName: "Skills",
    });

    return (
        <section
            id="skills"
            className="transition-colors h-96"
            ref={sectionRef}
        >
            <h1 className="text-3xl text-center py-4">Skills</h1>
            <div className="w-full p-2 flex text-center justify-center text-3xl text-custom-content-2 space-x-4 flex-wrap">
                <SiMongodb className="animate-wiggle" />
                <SiTypescript className="animate-wiggle" />
                <SiSass className="animate-wiggle" />
                <SiTailwindcss className="animate-wiggle" />
                <SiNextdotjs className="animate-wiggle" />
                <AiFillHtml5 className="animate-wiggle" />
                <FaReact className="animate-wiggle" />
                <DiNodejsSmall className="animate-wiggle" />
                <DiJavascript1 className="animate-wiggle" />
                <DiCss3 className="animate-wiggle" />
            </div>
        </section>
    );
}

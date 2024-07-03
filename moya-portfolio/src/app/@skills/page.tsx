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
import { IconType } from "react-icons";
import { sectionHeading } from "../_components/sectionHeading";

const SkillIcon = ({ Icon, name }: { Icon: IconType; name: String }) => (
    <div className="flex flex-col">
        <Icon className="bg-clip-text text-[100px] bg-gradient-to-r from-pink-500 to-violet-500" />
        <div className="mt-2">{name}</div>
    </div>
);

const skills = [
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiTypescript, name: "Typescript" },
    { icon: SiSass, name: "Sass" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiNextdotjs, name: "NextJs" },
    { icon: AiFillHtml5, name: "Html" },
    { icon: FaReact, name: "React" },
    { icon: DiNodejsSmall, name: "NodeJs" },
    { icon: DiJavascript1, name: "Javascript" },
    { icon: DiCss3, name: "Css3" },
];

export default function SkillsPage() {
    const sectionRef = useSectionObserver({
        sectionName: "Skills",
    });

    return (
        <section className="transition-colors h-96">
            {sectionHeading({
                id: "skills",
                sectionName: "Skills",
                sectionRef: sectionRef,
            })}
            <div className="w-full p-2 flex text-center justify-center text-custom-content-2 space-x-4 flex-wrap">
                {skills.map((item, index) => (
                    <SkillIcon key={index} Icon={item.icon} name={item.name} />
                ))}
            </div>
        </section>
    );
}

"use client";
import React, { useEffect, useRef, useState } from "react";
import { SiChakraui } from "react-icons/si";
import { useSectionObserver } from "../_components/navbarSectionObserver";
import { IconType } from "react-icons";
import { sectionHeading } from "../_components/sectionHeading";
import NextjsIcon from "../assets/nextJS.svg";
import TypeScriptIcon from "../assets/typeScript.svg";
import MongoDbIcon from "../assets/mongoDB.svg";
import SassIcon from "../assets/sass.svg";
import TailwindIcon from "../assets/tailwind.svg";
import HtmlIcon from "../assets/html.svg";
import NodeJsIcon from "../assets/nodejs.svg";
import JavaScriptIcon from "../assets/javascript.svg";
import ReactIcon from "../assets/react.svg";
import CssIcon from "../assets/css.svg";
import FirebaseIcon from "../assets/firebase.svg";
import PythonIcon from "../assets/python.svg";
import Vercel from "../assets/vercel.svg";
import CPlusPlus from "../assets/cplusplus.svg";
import Github from "../assets/github.svg";
import Docker from "../assets/docker.svg";
import Postman from "../assets/postman.svg";
import PostgreSql from "../assets/postgresql.svg";
import Image from "next/image";
import classNames from "classnames";

// const SkillIcon = ({
//     Icon,
//     SvgIcon,
//     name,
//     SvgIconClassName,
//     IconClassName,
// }: {
//     Icon?: IconType;
//     SvgIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
//     name: String;
//     SvgIconClassName?: String;
//     IconClassName?: string;
// }) => (
//     <div className="w-20 h-20 mx-2 flex flex-col justify-center items-center mt-4">
//         {Icon && <Icon className={classNames(`w-14 h-14 ${IconClassName}`)} />}

//         {SvgIcon && <SvgIcon className={`w-14 h-14 ${SvgIconClassName}`} />}
//         <div className="mt-2 text-sm">{name}</div>
//     </div>
// );

const SkillIcon = ({
    Icon,
    SvgIcon,
    name,
    SvgIconClassName,
    IconClassName,
    delay,
    isVisible,
}: {
    Icon?: IconType;
    SvgIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
    name: String;
    SvgIconClassName?: String;
    IconClassName?: string;
    delay?: number;
    isVisible?: boolean;
}) => (
    <div
        className={classNames(
            "w-20 h-20 mx-2 flex flex-col justify-center items-center mt-4 opacity-0",
            {
                "animate-[fadeInRight_400ms_cubic-bezier(.3,0,0,1)_25ms_forwards]":
                    isVisible,
            }
        )}
        style={{
            animationDelay: `${delay ?? 0}ms`,
            animationFillMode: "forwards",
        }}
    >
        {Icon && <Icon className={classNames(`w-14 h-14 ${IconClassName}`)} />}
        {SvgIcon && <SvgIcon className={`w-14 h-14 ${SvgIconClassName}`} />}
        <div className="mt-2 text-sm">{name}</div>
    </div>
);

interface SkillBase {
    name: string;
    SvgIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
    Icon?: IconType;
    SvgIconClassName?: String;
    IconClassName?: string;
}

type Skill = SkillBase;

const skills: Skill[] = [
    { SvgIcon: HtmlIcon, name: "Html" },
    { SvgIcon: CssIcon, name: "Css3" },
    { SvgIcon: JavaScriptIcon, name: "Javascript" },
    { SvgIcon: TypeScriptIcon, name: "Typescript" },
    { SvgIcon: ReactIcon, name: "React" },
    { SvgIcon: NodeJsIcon, name: "NodeJs" },
    { SvgIcon: PythonIcon, name: "Python" },
    { SvgIcon: CPlusPlus, name: "C++" },
    { SvgIcon: NextjsIcon, name: "NextJs" },
    { SvgIcon: MongoDbIcon, name: "MongoDB" },
    { SvgIcon: SassIcon, name: "Sass" },
    { SvgIcon: Docker, name: "Docker" },
    { SvgIcon: Postman, name: "Postman" },
    { SvgIcon: PostgreSql, name: "PostgreSQL" },
    { Icon: SiChakraui, IconClassName: "w-14 text-teal-300", name: "ChakraUI" },
    { SvgIcon: TailwindIcon, name: "Tailwind" },
    { SvgIcon: FirebaseIcon, name: "Firebase" },
    { SvgIcon: Vercel, name: "Vercel" },
    { SvgIcon: Github, name: "Github" },
];

export default function SkillsPage() {
    const sectionRef = useSectionObserver({
        sectionName: "Skills",
    });

    const iconsContainerRef = useRef<HTMLDivElement>(null);
    const [iconsVisible, setIconsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIconsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (iconsContainerRef.current) {
            observer.observe(iconsContainerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="transition-colors">
            {sectionHeading({
                id: "skills",
                firstSectionName: "My",
                secondSectionName: "Skills",
                sectionRef: sectionRef,
            })}

            <div
                ref={iconsContainerRef}
                className="w-full p-2 flex text-center justify-center text-custom-content-2 flex-wrap"
            >
                {skills.map((item, index) => (
                    <SkillIcon
                        key={index}
                        SvgIcon={item.SvgIcon}
                        Icon={item.Icon}
                        name={item.name}
                        IconClassName={item.IconClassName}
                        SvgIconClassName={item.SvgIconClassName}
                        delay={Math.pow(index, 1.5) * 40} // ease-in delay
                        isVisible={iconsVisible}
                    />
                ))}
            </div>
        </section>
    );
}
"use client";
import React, { FC } from "react";
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
import ChakraIcon from "../assets/chakra.svg";
import Vercel from "../assets/vercel.svg";
import CPlusPlus from "../assets/cplusplus.svg";
import Github from "../assets/github.svg";
import Image from "next/image";
import classNames from "classnames";

const SkillIcon = ({
    Icon,
    SvgIcon,
    name,
    SvgIconClassName,
    IconClassName,
}: {
    Icon?: IconType;
    SvgIcon?: React.FC<React.SVGProps<SVGSVGElement>>;
    name: String;
    SvgIconClassName?: String;
    IconClassName?: string;
}) => (
    <div className="w-20 h-20 mx-2 flex flex-col justify-center items-center mt-4">
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
    // { SvgIcon: NextjsIcon, name: "NextJs" },
    { SvgIcon: MongoDbIcon, name: "MongoDB" },
    { SvgIcon: SassIcon, name: "Sass" },
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

    return (
        <section className="transition-colors">
            {sectionHeading({
                id: "skills",
                firstSectionName: "My",
                secondSectionName: "Skills",
                sectionRef: sectionRef,
            })}
            <div className="w-full p-2 flex text-center justify-center text-custom-content-2 flex-wrap">
                {skills.map((item, index) => (
                    <SkillIcon
                        key={index}
                        SvgIcon={item.SvgIcon}
                        Icon={item.Icon}
                        name={item.name}
                        IconClassName={item.IconClassName}
                    />
                ))}
            </div>
        </section>
    );
}

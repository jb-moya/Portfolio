"use client";

import classNames from "classnames";
import Image from "next/image";
import profile from "./assets/cherry.jpg";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useSectionObserver } from "./_components/navbarSectionObserver";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { RiArrowDownWideFill } from "react-icons/ri";
import { RiArrowRightUpLine } from "react-icons/ri";
import { IoDocumentSharp } from "react-icons/io5";

export default function Home() {
    const scrollDownIndicator = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const span = scrollDownIndicator.current;
            const scrollTop = document.documentElement.scrollTop;

            if (!span) return;

            if (scrollTop > 0) {
                span.classList.add("opacity-0");
                span.classList.remove("opacity-1");
            } else {
                span.classList.add("opacity-1");
                span.classList.remove("opacity-0");
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const sectionRef = useSectionObserver({
        sectionName: "Home",
    });

    const { theme } = useSelector((state: RootState) => state.theme);

    useEffect(() => {
        console.log("ANOOOOOOOOO theme", theme);
    }, [theme]);

    const words = [
        {
            text: "JB",
            className: "text-4xl md:text-5xl lg:text-7xl drop-shadow-lg",
        },
        {
            text: "Vhert",
            className: "text-4xl md:text-5xl lg:text-7xl drop-shadow-lg",
        },
        {
            text: "Moya",
            className: "text-4xl md:text-5xl lg:text-7xl drop-shadow-lg",
        },
    ];

    const linkButtons = [
        {
            text: "Github",
            icon: <FaGithub />,
            url: "https://github.com/jbvhert",
            classNames:
                "px-3 shadow-md bg-custom-content-1 text-custom-opp-content-1",
            openPageIcon: false,
        },
        {
            icon: <FaLinkedin size={20} />,
            url: "https://www.linkedin.com/in/jbvhert/",
            classNames: "border gradient-border",
        },
        {
            icon: <SiIndeed size={20} />,
            url: "https://www.indeed.com/career-advice/career-development/how-to-become-a-full-stack-developer",
            classNames: "border gradient-border",
        },
        {
            text: "get my resume",
            url: "https://www.indeed.com/career-advice/career-development/how-to-become-a-full-stack-developer",
            classNames: "",
            openPageIcon: true,
        },
    ];

    const shadowedWord =
        // "[text-shadow:_-1px_1px_0_rgb(79_54_42_/_100%),_1px_-1px_0_rgb(79_54_42_/_100%)]";
        "";

    return (
        <section
            id="home"
            className="flex h-[920px] text-custom-content-1 flex-col items-center justify-between mx-auto"
            ref={sectionRef}
        >
            <div className="w-full my-auto flex flex-col space-x-4 space-y-4 justify-center">
                <div className="text-center flex flex-col">
                    <div className="flex">
                        <div className="w-7/12 pr-10 text-left">
                            <h1
                                // className={`font-bold text-2xl text-stroke`}
                                className={`font-bold text-2xl text-custom-content-2 ${shadowedWord}`}
                            >
                                Hi, I'm JB Moya
                            </h1>
                            <p className="text-custom-content-2">
                                I am currently a final year undergraduate
                                student aspiring to be a
                            </p>
                            <p
                                // className={`font-extrabold text-6xl pt-2 text-stroke `}
                                className={`font-extrabold text-6xl pt-2 ${shadowedWord}`}
                            >
                                Full-Stack Developer
                            </p>

                            <div className="w-full flex flex-wrap mt-6">
                                {linkButtons.map((item, index) => (
                                    <a
                                        key={index}
                                        className={classNames(
                                            "mr-2 mt-3 text-custom-content-1 flex-wrap px-1 py-2 cursor-pointer flex items-center md:text-base text-sm justify-center",
                                            "duration-500 ease-in-out transition-all hover:scale-105",
                                            item.classNames
                                        )}
                                        href={item.url}
                                    >
                                        <span>{item.icon}</span>
                                        <span>{item.text}</span>
                                        {item.openPageIcon && (
                                            <span className="">
                                                <RiArrowRightUpLine />
                                            </span>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="w-5/12 aspect-square box-border self-center p-4 gradient-border border shadow-md">
                            <Image
                                src={profile}
                                className="w-full h-full object-cover"
                                width={1000}
                                height={1000}
                                quality={100}
                                alt="profile"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <span
                ref={scrollDownIndicator}
                className="animate-customBounce text-custom-static-6 transition-opacity duration-500 ease-in-out"
            >
                <RiArrowDownWideFill size={20} />
            </span>
        </section>
    );
}

"use client";

import classNames from "classnames";
import Image from "next/image";
import profile from "./assets/cherry.jpg";
import profile2 from "./assets/profile.png";

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
import { PiDotsThreeVerticalThin } from "react-icons/pi";

export default function Home() {
    const scrollDownIndicator = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const { current: span } = scrollDownIndicator;
            const { scrollTop } = document.documentElement;

            if (span) {
                span.classList.toggle("opacity-0", scrollTop > 0);
                span.classList.toggle("opacity-1", scrollTop === 0);
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
            url: "https://github.com/jb-moya",
            classNames:
                "px-7 font-bold shadow-md gradient-background text-custom-static-1",
            iconClassNames: "mr-1",
            openPageIcon: false,
        },
        {
            text: "linkedIn",
            icon: <FaLinkedin size={20} />,
            url: "https://www.linkedin.com/in/jb-vhert-moya-b939182b9",
            classNames: "px-2 border hover:bg-custom-bg-2 gradient-border",
            iconClassNames: "mr-1",
        },
        // {
        //     text: "indeed",
        //     icon: <SiIndeed size={20} />,
        //     url: "https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage",
        //     classNames: "px-2 border hover:bg-custom-bg-2 gradient-border",
        //     iconClassNames: "mr-1",
        // },
        {
            text: "get my resume",
            downloadable: true,
            url: "/moya-resume.pdf",
            classNames:
                "p-0 m-0 hover:border-b border-b-custom-bg-2 border-opacity-0 hover:border-opacity-100",
            openPageIcon: true,
        },
    ];

    return (
        <section className="flex flex-col text-custom-content-1 items-center justify-between mx-auto">
            <div id="home" ref={sectionRef}></div>
            <div className="w-full  h-[720px] items-center  my-auto flex space-x-4 space-y-4 justify-center">
                <div className="text-center flex">
                    <div className="flex sm:flex-row flex-col">
                        <div className="sm:w-7/12 px-5 pt-5 text-center w-12/12 sm:pr-10 sm:text-left sm:order-1 order-2">
                            <h1
                                // className={`font-bold text-2xl text-stroke`}
                                className={`font-bold text-2xl text-custom-content-2 opacity-0 animate-[fadeInRight_1700ms_cubic-bezier(.9,.1,.1,.9)_100ms_forwards]`}
                            >
                                Hi, I&apos;m JB Moya
                            </h1>
                            <p className="text-custom-content-2 animate-[fadeInRight_1700ms_cubic-bezier(.9,.1,.1,.9)_150ms_forwards]">
                                I am currently a final year undergraduate
                                student aspiring to be a
                            </p>
                            <p
                                className={`font-extrabold text-6xl pt-2 gradient-text opacity-0 animate-[fadeInRight_1700ms_cubic-bezier(.9,.1,.1,.9)_200ms_forwards]`}
                            >
                                Full-Stack Developer
                            </p>

                            <div className="w-full flex flex-wrap mt-4 justify-center sm:justify-normal animate-[fadeInRight_1700ms_cubic-bezier(.9,.1,.1,.9)_250ms_forwards]">
                                {linkButtons.map((item, index) => (
                                    <a
                                        key={index}
                                        className={classNames(
                                            "text-custom-content-2 mt-2 flex-wrap mx-1 py-2 cursor-pointer flex items-center md:text-base text-sm justify-center",
                                            "duration-500 ease-in-out transition-all hover:scale-105",
                                            item.classNames
                                        )}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download={item?.downloadable || false}
                                        href={item.url}
                                    >
                                        <span className={item.iconClassNames}>
                                            {item.icon}
                                        </span>
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

                        <div className="sm:w-5/12 mr-0 sm:mr-5 sm:mt-0 mt-10 w-8/12 sm:order-1 aspect-square box-border self-center p-4 gradient-border border shadow-md opacity-0 animate-[fadeInRight_2000ms_cubic-bezier(.9,.1,.1,.9)_300ms_forwards]">
                            <Image
                                src={profile2}
                                className={classNames(
                                    "w-full h-full object-cover gradient-border border overflow-hidden relative"
                                    // "after:content-none after:absolute after:bottom-0 after:left-0 after:bg-faded-border after:rounded-bl-3xl after:pointer-events-none after:w-32 after:h-32"
                                )}
                                width={1000}
                                height={1000}
                                quality={100}
                                alt="profile"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                ref={scrollDownIndicator}
                className="flex-grow animate-customBounce border-b border-custom-bg-2 bottom-32 flex translate-x-4 text-custom-content-1 transition-opacity duration-500 ease-in-out"
            >
                <div className="text-center mx-auto w-fit">
                    <RiArrowDownWideFill size={20} />
                </div>
            </div>
        </section>
    );
}

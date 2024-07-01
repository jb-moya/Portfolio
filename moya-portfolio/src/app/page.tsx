"use client";

import classNames from "classnames";
import Image from "next/image";
import profile from "./assets/cherry.jpg";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useSectionObserver } from "./_components/navbarSectionObserver";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function Home() {
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

    return (
        <section
            id="home"
            className="flex h-[920px] text-custom-content-2 flex-col items-center justify-between mx-auto"
            ref={sectionRef}
        >
            <div className="w-full my-auto flex flex-col space-x-4 space-y-4 justify-center">
                <div className="text-center text-custom-content-2 flex flex-col">
                    <div className="pb-20 flex">
                        <div className="w-7/12 pr-10 pt-2 text-left">
                            <h1 className="font-bold text-2xl leading-10 gradient-text">
                                Hi, I'm JB Moya
                            </h1>
                            <p>
                                I am currently a final year undergraduate
                                student
                            </p>
                            <p className="font-extrabold text-6xl pt-6 gradient-text">
                                Full-Stack Developer
                            </p>

                            <div className="flex space-x-4 pt-10">
                                <div
                                    className={classNames("gradient-border border", {
                                        "text-custom-static-6": theme === "dark",
                                        "text-custom-static-4 shadow-md": theme !== "dark",
                                    })}
                                >
                                    <a className="px-3 py-2 cursor-pointer flex w-full h-full items-center md:text-base text-sm justify-center">
                                        <FaGithub size={30} className="mr-2" />{" "}
                                        GitHub
                                    </a>
                                </div>
                                <div
                                    className={classNames("gradient-border border", {
                                        "text-custom-static-6": theme === "dark",
                                        "text-custom-static-4 shadow-md": theme !== "dark",
                                    })}
                                >
                                    <a className="px-3 py-2 cursor-pointer flex w-full h-full items-center md:text-base text-sm justify-center">
                                        <FaLinkedin
                                            size={30}
                                            className="mr-2"
                                        />{" "}
                                        LinkedIn
                                    </a>
                                </div>
                                <div
                                    className={classNames("gradient-border border", {
                                        "text-custom-static-6": theme === "dark",
                                        "text-custom-static-4 shadow-md": theme !== "dark",
                                    })}
                                >
                                    <a className="px-3 py-2 cursor-pointer flex w-full h-full items-center md:text-base text-sm justify-center">
                                        <SiIndeed size={30} className="mr-2" />{" "}
                                        Indeed
                                    </a>
                                </div>
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
        </section>
    );
}

"use client";

import { dancingScript, firaCode, inter } from "./fonts";
import classNames from "classnames";
import {
    TypewriterEffectSmooth,
    TypewriterEffect,
} from "./_components/ui/typewrite-effect";
import Image from "next/image";
import profile from "./assets/cherry.jpg";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { useSectionObserver } from "./_components/navbarSectionObserver";
import { Button } from "./_components/ui/moving-border";
import { FaLinkedin } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";

import Link from "next/link";

export default function Home() {
    const sectionRef = useSectionObserver({
        sectionName: "Home",
    });

    const pathname = usePathname();

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

    // useEffect(() => {
    //     console.log("pathname", pathname);
    // }, [pathname]);

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
                                <div className="gradient-border">
                                    <a className="px-3 py-2 cursor-pointer flex w-full h-full items-center md:text-base text-sm justify-center text-custom-static-6">
                                        <FaGithub size={30} className="mr-2" />{" "}
                                        GitHub
                                    </a>
                                </div>
                                <div className="gradient-border">
                                    <a className="px-3 py-2 cursor-pointer flex w-full h-full items-center md:text-base text-sm justify-center text-custom-static-6">
                                        <FaLinkedin
                                            size={30}
                                            className="mr-2"
                                        />{" "}
                                        LinkedIn
                                    </a>
                                </div>
                                <div className="gradient-border">
                                    <a className="px-3 py-2 cursor-pointer flex w-full h-full items-center md:text-base text-sm justify-center text-custom-static-6">
                                        <SiIndeed size={30} className="mr-2" />{" "}
                                        Indeed
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="w-5/12 aspect-square box-border self-center p-4 gradient-border">
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

                    {/* <div>
                        <span className="text-lg md:text-2xl font-medium">
                            Hi, I&apos;m
                        </span>
                        <span
                            className={classNames(
                                "text-custom-accent-1 mt-10 -z-50",
                                inter.className
                            )}
                        >
                            <TypewriterEffect
                                words={words}
                                className="justify-center lg:my-6 md:my-4 my-4 font-extrabold"
                            />
                        </span>
                    </div>
                    <div
                        className={classNames(
                            "text-lg md:text-2xl mb-5 font-medium w-fit flex self-center px-10",
                            inter.className
                        )}
                    >
                        I am currently a final year undergraduate student
                    </div> */}
                </div>
            </div>
        </section>
    );
}

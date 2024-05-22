"use client";

import { dancingScript, firaCode, inter } from "./fonts";
import classNames from "classnames";
import {
    TypewriterEffectSmooth,
    TypewriterEffect,
} from "./_components/ui/typewrite-effect";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSectionObserver } from "./_components/navbarSectionObserver";

export default function Home() {
    const sectionRef = useSectionObserver({
        sectionName: "Home",
    });

    const pathname = usePathname();

    const words = [
        {
            text: "<JB ",
            className: "text-7xl drop-shadow-lg -z-50",
        },
        {
            text: "Vhert ",
            className: "text-7xl drop-shadow-lg",
        },
        {
            text: "Moya ",
            className: "text-7xl drop-shadow-lg",
        },
        {
            text: "/>",
            className: "text-7xl drop-shadow-lg",
        },
    ];
    useEffect(() => {
        console.log("pathname", pathname);
    }, [pathname]);

    return (
        <section
            id="home"
            className="flex h-[850px] text-custom-content-2 flex-col items-center justify-between mx-auto"
            ref={sectionRef}
        >
            <div className="w-full my-auto flex flex-col space-x-4 space-y-4 justify-center">
                <div className="bg-custom-bg-2 aspect-4/3-y w-2/12 box-border self-center rounded shadow-md">
                    <Image
                        src="/images/logo.png"
                        width={100}
                        height={100}
                        alt="profile"
                    />
                </div>
                <div className="text-center text-custom-content-2">
                    <div>
                        <span className="text-2xl font-medium">
                            Hi, I&apos;m
                        </span>
                        <span
                            className={classNames(
                                "text-custom-accent-1 -z-50",
                                inter.className
                            )}
                        >
                            <TypewriterEffect
                                words={words}
                                className="justify-center font-extrabold"
                            />
                        </span>
                    </div>
                    <div
                        className={classNames(
                            "text-2xl font-medium mt-4",
                            inter.className
                        )}
                    >
                        I am currently a final year undergraduate student
                    </div>
                </div>
            </div>
        </section>
    );
}

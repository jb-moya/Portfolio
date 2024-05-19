"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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

export default function Home() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <main className="flex min-h-screen text-nature-text-content flex-col items-center justify-between max-w-7xl mx-auto">
            <button onClick={toggleTheme} className="drop-shadow-accent-1 text-3xl">
                {theme === "dark"? <MdDarkMode /> : <MdOutlineLightMode />}
            </button>
            <div className="bg-nature-bg-2 aspect-4/3-y w-2/12">
                <Image
                    src="/images/logo.png"
                    width={100}
                    height={100}
                    alt="profile"
                />
            </div>

            <div className="w-full p-2 flex text-center text-3xl space-x-4 flex-wrap bg-nature-bg-1">
                <SiMongodb className="animate-wiggle drop-shadow-accent-1" />
                <SiTypescript className="animate-wiggle drop-shadow-accent-1" />
                <SiSass className="animate-wiggle drop-shadow-accent-1" />
                <SiTailwindcss className="animate-wiggle drop-shadow-accent-1" />
                <SiNextdotjs className="animate-wiggle drop-shadow-accent-1" />
                <AiFillHtml5 className="animate-wiggle drop-shadow-accent-1" />
                <FaReact className="animate-wiggle drop-shadow-accent-1" />
                <DiNodejsSmall className="animate-wiggle drop-shadow-accent-1" />
                <DiJavascript1 className="animate-wiggle drop-shadow-accent-1" />
                <DiCss3 className="animate-wiggle drop-shadow-accent-1" />
            </div>
        </main>
    );
}

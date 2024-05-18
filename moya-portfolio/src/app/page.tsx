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
        <main className="flex min-h-screen text-zest-950 flex-col items-center justify-between max-w-7xl mx-auto">
            <button onClick={toggleTheme}>dark</button>
            <div className="bg-black aspect-4/3-y w-2/12">
                <Image
                    src="/images/logo.png"
                    width={100}
                    height={100}
                    alt="profile"
                />
            </div>

            <div className="w-full p-2 flex text-center text-2xl space-x-4 flex-wrap bg-zest-50">
                <SiMongodb />
                <SiTypescript />
                <SiSass />
                <SiTailwindcss />
                <SiNextdotjs />
                <AiFillHtml5 />
                <FaReact />
                <DiNodejsSmall />
                <DiJavascript1 />
                <DiCss3 />
            </div>
        </main>
    );
}

"use client";
import React, { useRef, useEffect } from "react";
import { useSectionObserver } from "../_components/navbarSectionObserver";
import Image from "next/image";
import profile from "../assets/cherry.jpg";
import { sectionHeading } from "../_components/sectionHeading";

export default function AboutPage() {
    const sectionRef = useSectionObserver({
        sectionName: "About",
    });

    return (
        <section>
            {sectionHeading({
                id: "about",
                sectionName: "About",
                sectionRef: sectionRef,
            })}
            <div className="flex">
                <div className="text-lg w-8/12 px-4 content-center">
                    <p className="mr-32">
                        Hi, I'm JB Vhert Moya, a passionate and driven junior
                        web developer with a love for creating dynamic and
                        interactive web experiences. My projects reflect my keen
                        interest in blending the beauty of nature with the
                        precision of code, creating websites that are both
                        aesthetically pleasing and highly functional. I'm
                        continuously learning and eager to take on new
                        challenges, whether it's building responsive layouts,
                        optimizing web performance, or exploring new front-end
                        technologies. I'm excited to collaborate and grow in the
                        tech community, bringing my unique perspective and
                        enthusiasm to every project I work on.
                    </p>
                </div>
                <div className="bg-custom-bg-2 w-4/12 aspect-square box-border self-center rounded-full shadow-md">
                    <Image
                        src={profile}
                        className="w-full h-full rounded-full object-cover"
                        width={100}
                        height={100}
                        alt="profile"
                    />
                </div>
                {/* <div className="text-center text-custom-content-2"> */}
            </div>
        </section>
    );
}

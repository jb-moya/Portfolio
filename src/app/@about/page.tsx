"use client";
import { useRef, useEffect } from "react";
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
                firstSectionName: "A little bit",
                secondSectionName: "About me",
                sectionRef: sectionRef,
            })}
            <div className="px-4">
                <div className="content-center">
                    <p className="">
                        Hi, I&apos;m JB Vhert Moya, a passionate and driven
                        junior web developer with a love for creating dynamic
                        and interactive web experiences. My projects reflect my
                        keen interest in blending the beauty of nature with the
                        precision of code, creating websites that are both
                        aesthetically pleasing and highly functional. I&apos;m
                        continuously learning and eager to take on new
                        challenges, whether it&apos;s building responsive layouts,
                        optimizing web performance, or exploring new front-end
                        technologies. I&apos;m excited to collaborate and grow in the
                        tech community, bringing my unique perspective and
                        enthusiasm to every project I work on.
                    </p>
                </div>
                <div className="flex mt-6">
                    <div className="mr-3">Education</div>
                    <div className="flex flex-col">
                        <div>
                            <span className="font-bold text-custom-content-1">
                                Technological University of the Philippines -
                                Manila
                            </span>
                            <span className="ml-3 text-sm">
                                Aug 2022 - Aug 2025
                            </span>
                        </div>
                        <span className="">Bachelor - Computer Science</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

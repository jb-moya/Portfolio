"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import TechBadge from "./TechBadge";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import Carousel from "./ui/carousel";
import clsx from "clsx";

const Card = ({
    title,
    description,
    tech,
    websiteLink,
    githubLink,
    images,
}: {
    title?: String;
    description?: String;
    tech?: String[];
    websiteLink?: string;
    githubLink?: string;
    images?: string[];
}) => {
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const containerRefCurrent = containerRef.current;

        if (containerRefCurrent) {
            observer.observe(containerRefCurrent);
        }

        return () => {
            if (containerRefCurrent) observer.unobserve(containerRefCurrent);
        };
    }, []);

    const fadeInClass = isVisible
        ? "animate-[fadeInRight_800ms_cubic-bezier(.5,0,.5,1)_25ms_forwards]"
        : "";

    return (
        <>
            {/* <article className="w-full opacity-0"> */}
            <article
                className={clsx(fadeInClass, "w-full opacity-0")}
                ref={containerRef}
            >
                <div className="relative h-96 overflow-visible">
                    <Carousel
                        images={images || []}
                        containerClassName="relative "
                    />
                </div>
                <div className="">
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                            <h1 className="font-bold text-lg">
                                {title ? title : ""}
                            </h1>
                            <div className="flex gap-2 flex-wrap justify-end pb-1">
                                {tech
                                    ? tech.map((tech) => (
                                          <>
                                              <TechBadge name={tech} />
                                          </>
                                      ))
                                    : ""}
                            </div>
                        </div>
                        <p>{description && description}</p>
                    </div>
                    <div className="flex justify-end gap-4 px-4 pt-2">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={githubLink || "#"}
                            className="px-3 py-2 flex items-center hover:bg-custom-bg-1 text-custom-content-1 border-custom-bg-2 border"
                        >
                            <FaGithub size={20} className="mr-2" /> github repo
                        </a>

                        {websiteLink && (
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={websiteLink || "#"}
                                className="px-6 py-2 flex items-center font-bold shadow-md gradient-background text-custom-opp-content-2"
                            >
                                <LiaExternalLinkAltSolid
                                    size={20}
                                    className="mr-2"
                                />{" "}
                                demo
                            </a>
                        )}
                    </div>
                </div>
            </article>
        </>
    );
};

export default Card;

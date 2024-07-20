"use client";

import Image from "next/image";
import TechBadge from "./TechBadge";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkAltSolid } from "react-icons/lia";

const Card = ({
    title,
    description,
    tech,
    websiteLink,
    githubLink,
}: {
    title?: String;
    description?: String;
    tech?: String[];
    websiteLink?: string;
    githubLink?: string;
}) => {
    return (
        <>
            <article className="bg-white bg-opacity-5 border-custom-content-2 shadow-md">
                <div className="relative w-full h-96">
                    <Image
                        src="https://placehold.co/600x200"
                        fill
                        className="w-full border border-custom-content-2 border-opacity-10"
                        alt="sample image of the project"
                    />
                </div>
                <div className="p-4">
                    <h1 className="font-bold text-lg">{title ? title : ""}</h1>
                    <p>{description && description}</p>
                </div>
                <div className="flex justify-start gap-4 px-4 pt-2">
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={githubLink || "#"}
                        className="px-3 py-2 flex items-center hover:bg-custom-bg-1 text-custom-content-1 border-custom-bg-2 border"
                    >
                        <FaGithub size={20} className="mr-2" /> github
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={websiteLink || "#"}
                        className="px-6 py-2 flex items-center font-bold shadow-md gradient-background text-custom-opp-content-2"
                    >
                        <LiaExternalLinkAltSolid size={20} className="mr-2" />{" "}
                        website
                    </a>
                </div>
                <div className="flex flex-wrap pb-1 px-4 my-3">
                    {tech
                        ? tech.map((tech) => (
                              <>
                                  <TechBadge name={tech} />
                              </>
                          ))
                        : ""}
                </div>
            </article>
        </>
    );
};

export default Card;

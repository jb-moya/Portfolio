"use client";

import Image from "next/image";
import TechBadge from "./TechBadge";
import React from "react";

const Card = ({
    title,
    description,
    tech,
}: {
    title?: String;
    description?: String;
    tech?: String[];
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
                    <p>
                        {description && description}
                    </p>
                </div>
                <div className="flex flex-wrap px-4 pb-1 my-3">

                    {tech
                        ? tech.map((tech) => (
                              <>
                                  <TechBadge name={tech} />
                              </>
                          ))
                        : ""}
                    {/* <TechBadge name="NextJs" />
                    <TechBadge name="HTML" />
                    <TechBadge name="Tailwind" />
                    <TechBadge name="TypeScript" />
                    <TechBadge name="SCSS" /> */}
                </div>
            </article>
        </>
    );
};

export default Card;

"use client";

import Image from "next/image";
import TechBadge from "./TechBadge";

const Card = ({
    title,
    description,
}: {
    title?: String;
    description?: String;
}) => {
    return (
        <>
            <article className="bg-white bg-opacity-5 border-custom-content-2 rounded-lg shadow-md">
                <div className="relative w-full h-96">
                    <Image
                        src="https://placehold.co/600x200"
                        fill
                        className="w-full border border-custom-content-2 border-opacity-10 rounded-t-lg"
                        alt="sample image of the project"
                    />
                </div>
                <div className="p-4">
                    <h1 className="font-bold text-lg">{title ? title : ""}</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore, harum? Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Distinctio architecto officia ut, sint
                        ratione magni id? Eos tempore odio eligendi fugiat amet
                        nostrum perferendis, nobis autem beatae illo sequi
                        maiores.
                    </p>
                </div>
                <div className="flex p-4 space-x-3">
                    <TechBadge name="Javascript" />
                    <TechBadge name="Css" />
                    <TechBadge name="NextJs" />
                    {/* <TechBadge name="HTML" /> */}
                    {/* <TechBadge name="Tailwind" /> */}
                </div>
            </article>
        </>
    );
};

export default Card;

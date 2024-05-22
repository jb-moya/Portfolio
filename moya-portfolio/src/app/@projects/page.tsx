"use client";
import React from "react";
import ProjectArticle from "../_components/ProjectArticle.js";
import { StickyScroll } from "../_components/ui/sticky-scroll-reveal";
import { useSectionObserver } from "../_components/navbarSectionObserver";

export default function ProjectPage() {
    const sectionRef = useSectionObserver({
        sectionName: "Projects",
    });

    return (
        <section id="projects" ref={sectionRef} className="bg-green-300">
            <h1 className="text-3xl text-center py-4">Projects</h1>

            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                repellendus ratione adipisci, ut reprehenderit sapiente pariatur
                perferendis quaerat nulla, nobis enim laborum modi officiis
                dolores nemo velit non maxime, corporis officia et distinctio
                mollitia consequatur dignissimos! Labore earum tempora
                laboriosam vel commodi animi magnam corporis, ratione est? Ex
                magni laudantium suscipit magnam laboriosam reprehenderit,
                itaque animi? Dolorem, minus explicabo suscipit culpa totam nam
                facilis saepe ullam vitae sapiente neque. Tenetur esse maiores
                in voluptates nobis aut atque necessitatibus iure error.
                Veritatis ea vero aspernatur odit cupiditate facere ad iure
                impedit dolores earum! Molestias quisquam ipsa cumque ea
                quibusdam, ratione mollitia.
            </div>
        </section>
    );
}

"use client";
import React from "react";
import ProjectArticle from "../_components/ProjectArticle.js";
import { StickyScroll } from "../_components/ui/sticky-scroll-reveal";
import { useSectionObserver } from "../_components/navbarSectionObserver";
import Card from "../_components/ProjectCard";

export default function ProjectPage() {
    const sectionRef = useSectionObserver({
        sectionName: "Projects",
    });

    return (
        <section className="">
            <h1
                id="projects"
                ref={sectionRef}
                className="text-3xl text-center py-4"
            >
                Projects
            </h1>

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4 px-10">
                <Card title="Ecommerce" />
                <Card title="Example Landing Page" />
                <Card title="Web Scraping" />
                <Card title="A Game" />
            </div>
        </section>
    );
}

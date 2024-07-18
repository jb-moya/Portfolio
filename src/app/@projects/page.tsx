"use client";
import React from "react";
import ProjectArticle from "../_components/ProjectArticle.js";
import { StickyScroll } from "../_components/ui/sticky-scroll-reveal";
import { useSectionObserver } from "../_components/navbarSectionObserver";
import Card from "../_components/ProjectCard";
import { sectionHeading } from "../_components/sectionHeading";

export default function ProjectPage() {
    const sectionRef = useSectionObserver({
        sectionName: "Projects",
    });

    return (
        <section className="">
            {sectionHeading({
                id: "projects",
                firstSectionName: "Featured",
                secondSectionName: "Projects",
                sectionRef: sectionRef,
            })}

            <div className=" grid grid-cols-1 gap-4">
                <Card title="Ecommerce" />
                <Card title="Example Landing Page" />
                <Card title="Web Scraping" />
                <Card title="A Game" />
            </div>
        </section>
    );
}

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

    const SwishToDoApp = {
        title: "Swish: ToDo App",
        description: `Swish: ToDo App is a dynamic and secure Todo application built with Firebase that utilizes ChakraUI for its attractive design. It enables users to create, read, 
        update, and delete tasks, while ensuring that each user's data is kept private and 
        accessible only to them through Firebase's authentication services.`,

        tech: ["React", "ChakraUI", "Firebase"],
    };

    return (
        <section className="">
            {sectionHeading({
                id: "projects",
                firstSectionName: "Featured",
                secondSectionName: "Projects",
                sectionRef: sectionRef,
            })}

            <div className=" grid grid-cols-1 gap-4">
                <Card
                    title={SwishToDoApp.title}
                    description={SwishToDoApp.description}
                    tech={SwishToDoApp.tech}
                />
                <Card title="Example Landing Page" />
                <Card title="Web Scraping" />
                <Card title="A Game" />
            </div>
        </section>
    );
}

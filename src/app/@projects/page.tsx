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

    const projects = [
        {
            title: "BHNHS School Timetabling System",
            description: `An automated school timetabling system for Batasan Hills National High School, powered by the Artificial Bee Colony (ABC) Algorithm, 
            efficiently streamlines the scheduling process, replacing the manual and often time-consuming approach`,
            tech: [
                "Tailwind CSS",
                "React",
                "Redux",
                "IndexedDB",
                "Firebase",
                "DaisyUI",
                "Emscripten",
                "C++",
            ],
            images: [
                "/timetabling/timetable-1.gif",
                "/timetabling/timetable-2.png",
                "/timetabling/timetable-3.png",
            ],
            githubLink: "https://github.com/jb-moya/abcSchoolTimeTabler",
        },
        {
            title: "TUP E-commerce",
            description: `A campus online store for the Technological University of the Philippines - Manila to help schools accredited clubs and organizations to advertise and sell their merchandises.,
            enabling players to compete against an AI opponent enhanced with a Markov Chain decision-making algorithm`,
            tech: [
                "Tailwind CSS",
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Axios",
            ],
            images: [
                "/tup-ecommerce-images/tup-1.png",
                "/tup-ecommerce-images/tup-2.png",
                "/tup-ecommerce-images/tup-3.png",
                "/tup-ecommerce-images/tup-4.png",
                "/tup-ecommerce-images/tup-5.png",
                "/tup-ecommerce-images/tup-6.png",
                "/tup-ecommerce-images/tup-7.png",
            ],
            githubLink:
                "https://github.com/jb-moya/RPS-hand-gesture-detection-game",
        },
        {
            title: "Swish: ToDo App",
            description: `Swish: ToDo App is a dynamic and secure Todo application built with Firebase authentication that utilizes ChakraUI for its attractive design. It enables users to create, read, 
            update, and delete tasks, integrated with Gemini AI for automated task management.`,
            tech: ["React", "ChakraUI", "Firebase"],
            images: [
                "/swiss-todo-app-images/todo-1.gif",
                "/swiss-todo-app-images/todo-2.gif",
                "/swiss-todo-app-images/todo-3.gif",
                "/swiss-todo-app-images/todo-4.gif",
            ],
            websiteLink: "https://swish-to-do.vercel.app/",
            githubLink: "https://github.com/jb-moya/Swish--ToDoApp",
        },
        {
            title: "2D predator-prey fish simulator game",
            description: `A 2D schooling fish simulation game implementing the Boid Algorithm to replicate
            realistic fish behavior, including schooling dynamics, prey (the player) avoidance, and food attraction. With parametirized configuration to influence emergent behaviors`,
            tech: ["Unity (WebGL)", "C#"],
            images: [
                "/fish-game-images/fish-1.gif",
                "/fish-game-images/fish-2.gif",
                "/fish-game-images/fish-3.gif",
                "/fish-game-images/fish-4.gif",
            ],
            websiteLink:
                "https://schooling-predator-fish-simulator-game.vercel.app/",
            githubLink:
                "https://github.com/jb-moya/Schooling-Predator-Fish-Simulator-Game",
        },
        {
            title: "YOLOv8 AI hand gesture detection Rock-paper-scissors game",
            description: `A React-based web game integrating YOLOv8 AI model to detect hand gestures using web camera,
            enabling players to compete against an AI opponent enhanced with a Markov Chain decision-making algorithm`,
            tech: ["React", "SCSS", "Python", "YOLOv8"],
            images: ["/rps-images/janken-1.gif"],
            githubLink: "github.com/jb-moya/RPS-hand-gesture-detection-game",
        },
    ];

    return (
        <section className="">
            {sectionHeading({
                id: "projects",
                firstSectionName: "Featured",
                secondSectionName: "Projects",
                sectionRef: sectionRef,
            })}

            <div className="grid grid-cols-1 gap-20">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        title={project.title}
                        description={project.description}
                        tech={project.tech}
                        websiteLink={project.websiteLink}
                        githubLink={project.githubLink}
                        images={project.images}
                    />
                ))}
            </div>
        </section>
    );
}

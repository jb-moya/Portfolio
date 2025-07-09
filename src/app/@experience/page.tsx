"use client";
import { useSectionObserver } from "../_components/navbarSectionObserver";
import { sectionHeading } from "../_components/sectionHeading";
import { MdOutlineLocationOn } from "react-icons/md";

export default function ExperiencePage() {
    const sectionRef = useSectionObserver({
        sectionName: "Experience",
    });

    return (
        <section>
            {sectionHeading({
                id: "experience",
                firstSectionName: "My",
                secondSectionName: "Work Experience",
                sectionRef: sectionRef,
            })}
            <div className="px-4">
                <div className="content-center">
                    <div className="flex items-start justify-between mb-2">
                        <div>
                            <h2 className="font-semibold text-lg">
                                Full Stack Web Developer Intern
                            </h2>
                            <span className="font-bold flex gap-1 items-center text-custom-content-1">
                                <MdOutlineLocationOn />
                                Mabuhay Energy Corporation
                            </span>
                        </div>
                        <span className="ml-3 text-sm">
                            February 2025 - May 2025
                        </span>
                    </div>
                    <p className="">
                        Developed role-based access control with custom
                        authorization middleware to support new user type in a
                        web application.
                    </p>
                </div>
            </div>
        </section>
    );
}

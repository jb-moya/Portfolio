"use client";
import React from "react";
import { useSectionObserver } from "../_components/navbarSectionObserver";

export default function ContactsPage() {
    const sectionRef = useSectionObserver({
        sectionName: "Contacts",
    });

    return (
        <section id="contacts" ref={sectionRef}>
            <h1 className="text-3xl text-center py-4">Contacts</h1>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                eligendi magni obcaecati earum deleniti, iure, ipsum aliquam qui
                nemo nesciunt odit! Recusandae, numquam, fugiat repudiandae
            </div>
        </section>
    );
}

"use client";
import React from "react";
import { useSectionObserver } from "../_components/navbarSectionObserver";
import { sectionHeading } from "../_components/sectionHeading";

export default function ContactsPage() {
    const sectionRef = useSectionObserver({
        sectionName: "Contact",
    });

    return (
        <section>
            {sectionHeading({
                id: "contacts",
                sectionName: "Get in Touch!",
                sectionRef: sectionRef,
            })}
            <div className="h-[500px]">
                {/* make a contact form */}
                <form className="flex flex-col gap-4 border border-custom-opp-bg-1 p-10">
                    <div className="flex">
                        <div className="w-7/12">
                            <div className="relative pb-2">
                                <input
                                    type="text"
                                    className="w-full pt-8 bg-transparent border-b border-b-custom-opp-bg-1 border-opacity-30 px-4"
                                />
                                <div className="left-0 text-custom-content-2/50 -top-0 p-1 absolute">
                                    name
                                </div>
                            </div>
                            <div className="relative pb-2">
                                <input
                                    type="email"
                                    className="w-full pt-8 bg-transparent border-b border-b-custom-opp-bg-1 border-opacity-30 px-4"
                                />
                                <div className="left-0 text-custom-content-2/50 -top-0 p-1 absolute">
                                    email
                                </div>
                            </div>
                            <div className="relative pb-2">
                                <textarea className="w-full pt-8 bg-transparent border-b border-b-custom-opp-bg-1 border-opacity-30 px-4" />
                                <div className="left-0 text-custom-content-2/50 -top-0 p-1 absolute">
                                    message
                                </div>
                            </div>
                        </div>

                        <div className="w-5/12 px-6">
                            <h1 className="text-lg font-bold">Contact</h1>
                            <p>jbvhert2002@gmail.com</p>
                        </div>
                    </div>
                    <button className="bg-custom-primary text-white w-5/12 bg-custom-bg-2 shadow-md px-4 py-2">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

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
                firstSectionName: "Get",
                secondSectionName: "in Touch!",
                sectionRef: sectionRef,
            })}
            <div className="h-[500px] p-5">
                {/* make a contact form */}
                <form className="border border-custom-opp-bg-1 border-opacity-25 p-10">
                    <div className="flex sm:flex-row flex-col">
                        <div className="sm:w-7/12 w-full">
                            <div className="relative pb-2">
                                <input
                                    type="text"
                                    className="w-full bg-custom-bg-1/50 pt-8 border-b border-b-custom-opp-bg-1 border-opacity-30 px-4"
                                />
                                <div className="left-0 font-thin text-custom-opp-bg-1 -top-0 p-1 absolute">
                                    name
                                </div>
                            </div>
                            <div className="relative pb-2">
                                <input
                                    type="email"
                                    className="w-full bg-custom-bg-1/50 pt-8 border-b border-b-custom-opp-bg-1 border-opacity-30 px-4"
                                />
                                <div className="left-0 font-thin text-custom-opp-bg-1 -top-0 p-1 absolute">
                                    email
                                </div>
                            </div>
                            <div className="relative pb-2">
                                <textarea
                                    rows={1}
                                    className="w-full bg-custom-bg-1/50 pt-8 border-b border-b-custom-opp-bg-1 border-opacity-30 px-4"
                                />
                                <div className="left-0 font-thin text-custom-opp-bg-1 -top-0 p-1 absolute">
                                    what&apos;s on your mind?
                                </div>
                            </div>
                        </div>

                        <div className="w-5/12 sm:px-6 px-0">
                            <h1 className="text-lg font-bold">Contact</h1>
                            <p>jbvhert2002@gmail.com</p>
                        </div>
                    </div>
                    <button className="bg-custom-primary text-white w-5/12 bg-custom-bg-2 shadow-md px-4 py-2 mt-10">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}

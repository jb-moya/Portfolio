"use client";
import React, { useState } from "react";
import { useSectionObserver } from "../_components/navbarSectionObserver";
import { sectionHeading } from "../_components/sectionHeading";
import useContactForm from "../hooks/useContactForm";
import clsx from "clsx";

export default function ContactsPage() {
    const {
        formData,
        isSubmitting,
        responseMessage,
        handleChange,
        handleSubmit,
    } = useContactForm();

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
                <form
                    onSubmit={handleSubmit}
                    className="border border-custom-opp-bg-1 border-opacity-25 p-10"
                >
                    <div className="flex sm:flex-row flex-col">
                        <div className="sm:w-7/12 w-full">
                            <div className="relative pb-2">
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-transparent pt-8 border-b border-b-custom-opp-bg-1 border-opacity-30 px-4"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <div className="left-0 text-custom-opp-bg-1 -top-0 p-1 absolute">
                                    name
                                </div>
                            </div>
                            <div className="relative pb-2">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent pt-8 border-b border-b-custom-opp-bg-1 border-opacity-30 px-4"
                                />
                                <div className="left-0 text-custom-opp-bg-1 -top-0 p-1 absolute">
                                    email
                                </div>
                            </div>
                            <div className="relative pb-2">
                                <textarea
                                    rows={1}
                                    className="w-full bg-transparent pt-8 border-b border-b-custom-opp-bg-1 border-opacity-30 px-4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="left-0 text-custom-opp-bg-1 -top-0 p-1 absolute">
                                    what&apos;s on your mind?
                                </div>
                            </div>
                        </div>

                        <div className="w-5/12 sm:px-6 px-0">
                            <h1 className="text-lg font-bold">Contact</h1>
                            <p>jbvhert2002@gmail.com</p>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-custom-primary text-white w-5/12 bg-custom-bg-2 shadow-md px-4 py-2 mt-10"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {responseMessage && (
                        <div className="mt-5 border border-red-700 p-2 text-red-400">
                            <p>{responseMessage}</p>
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}

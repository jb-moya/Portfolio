"use client";
import { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
    return (
        <nav className="max-w-7xl mx-auto py-3 pb-6 text-custom-content-1 sticky top-0 h-fit">
            <div className="flex space-x-4 justify-start">
                <Link href="#contacts">Contacts</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#skills">Skills</Link>
                <Link href="#about">About</Link>
                <Link href="#home">Home</Link>
            </div>
        </nav>
    );
};

export default Footer;

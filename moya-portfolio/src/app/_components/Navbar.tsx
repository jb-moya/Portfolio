"use client";
import { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useTheme } from "./useTheme";
import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "@/lib/store";
import classNames from "classnames";

const Navbar = () => {
    const { menuStates } = useSelector((state: RootState) => state.navbar);

    const { theme, toggleTheme } = useTheme();

    const menus = {
        home: {
            name: "Home",
            href: "#home",
        },
        about: {
            name: "About",
            href: "#about",
        },
        skills: {
            name: "Skills",
            href: "#skills",
        },
        projects: {
            name: "Projects",
            href: "#projects",
        },
        contacts: {
            name: "Contacts",
            href: "#contacts",
        }
    };

    return (
        <>
            <nav className="max-w-7xl mx-auto py-3 text-custom-content-2 sticky top-0 h-fit">
                <div className="flex space-x-6 justify-center">
                    {Object.entries(menus).map(([key, menu]) => (
                        <Link
                            key={key}
                            href={menu.href}
                            className={classNames({
                                "border-2": menuStates[menu.name],
                            })}
                        >
                            {menu.name}
                        </Link>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="text-2xl text-custom-content-2"
                    >
                        {theme === "dark" ? (
                            <MdDarkMode />
                        ) : (
                            <MdOutlineLightMode />
                        )}
                    </button>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

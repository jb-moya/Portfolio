"use client";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { setTheme } from "../../lib/features/themeSlice";

import { useSelector } from "react-redux";
import Link from "next/link";
import { RootState } from "../../lib/store";
import classNames from "classnames";
import { RiArrowDropDownFill } from "react-icons/ri";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

const Navbar = ({ useFooter = false }: { useFooter?: boolean }) => {
    const scrollDownIndicator = useRef<HTMLSpanElement>(null);
    const { menuStates } = useSelector((state: RootState) => state.navbar);
    const { theme } = useSelector((state: RootState) => state.theme);
    const [dropDownShown, setDropDownShown] = useState(false);

    const getSelectedMenu = () => {
        return Object.entries(menuStates)
            .filter(([key, value]) => value)
            .map(([key, value]) => key);
    };

    useEffect(() => {
        const handleScroll = () => {
            const { current: navbarElement } = scrollDownIndicator;
            const { scrollTop } = document.documentElement;

            if (!navbarElement) return;

            const { classList } = navbarElement;
            const shouldAddClasses = scrollTop > 0;

            classList.toggle("bg-custom-bg-1/25", shouldAddClasses);
            classList.toggle("backdrop-blur-md", shouldAddClasses);
            classList.toggle("shadow-md", shouldAddClasses);
            classList.toggle("bg-transparent", !shouldAddClasses);
            classList.toggle("shadow-none", !shouldAddClasses);
            classList.toggle("backdrop-blur-0", !shouldAddClasses);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const dispatch = useDispatch();

    const toggleTheme = () => {
        dispatch(setTheme(theme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        console.log("theme", theme);
    }, [theme]);

    const menus = {
        home: {
            name: "Home",
            href: "#home",
        },
        experience: {
            name: "Experience",
            href: "#experience",
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
            name: "Contact",
            href: "#contacts",
        },
    };

    return (
        <>
            <div className="block sm:hidden w-32 text-center top-2 z-50 mx-auto sticky text-custom-content-2/85 shadow-md">
                <button
                    className="w-full flex items-center justify-between py-2 px-2 bg-custom-bg-1/55 backdrop-blur-md"
                    onClick={() => setDropDownShown(!dropDownShown)}
                >
                    {getSelectedMenu()}

                    <span className="">
                        {dropDownShown ? <BiCaretDown /> : <BiCaretUp />}
                    </span>
                </button>

                {/* make a dropdown */}
                <div
                    className={classNames(
                        "absolute w-full text-custom-content-2/85 flex flex-col",
                        { hidden: !dropDownShown }
                    )}
                >
                    {Object.entries(menus).map(([key, menu]) => (
                        <Link
                            key={key}
                            className="py-2 px-2 bg-custom-bg-1/55 hover:bg-custom-bg-3 backdrop-blur-md"
                            href={menu.href}
                            onClick={() => setDropDownShown(false)}
                        >
                            {menu.name}
                        </Link>
                    ))}
                </div>
            </div>

            <nav
                ref={scrollDownIndicator}
                className={classNames(
                    "sm:block hidden w-[30rem] mx-auto bg-custom-bg-1/85 text-custom-content-2/85 sticky top-2 z-50 px-2 transition-all duration-500 ease-in-out"
                )}
            >
                <div className="flex space-x-4 items-center">
                    {Object.entries(menus).map(([key, menu]) => (
                        <Link
                            key={key}
                            href={menu.href}
                            className={classNames(
                                "flex-1 w-full justify-center text-center hover:scale-105 hover:text-custom-content-1",
                                {
                                    "text-custom-content-1 border-b-custom-content-1 border-b transition-all duration-500 ease-in-out":
                                        menuStates[menu.name],
                                }
                            )}
                        >
                            <span>{menu.name}</span>
                        </Link>
                    ))}
                    <button
                        onClick={toggleTheme}
                        className="text-2xl gradient-text p-1 m-1"
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

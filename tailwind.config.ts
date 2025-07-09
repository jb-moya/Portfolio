const defaultTheme = require("tailwindcss/defaultTheme");

const svgToDataUri = require("mini-svg-data-uri");
const plugin = require("tailwindcss/plugin");

const colors = require("tailwindcss/colors");
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "moving-border":
                    "radial-gradient(rgb(var(--content-2)) 40%,transparent 60%)",
                "moving-border-2":
                    "radial-gradient(rgb(var(--bg-2)) 40%,transparent 60%)",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-background":
                    "linear-gradient(to bottom, #f3b699, #dfa790, #cb9986, #b78b7d, #a37e73)",
                "faded-border":
                    "linear-gradient(to top right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
            },
            background: {},
            aspectRatio: {
                "4/3-x": "4 / 3",
                "4/3-y": "3 / 4",
            },
            colors: {
                custom: {
                    "static-1": "rgb(var(--s-c-1))",
                    "static-2": "rgb(var(--s-c-2))",
                    "static-3": "rgb(var(--s-c-3))",
                    "static-4": "rgb(var(--s-c-4))",
                    "static-5": "rgb(var(--s-c-5))",

                    "bg-1": "rgb(var(--bg-1) / <alpha-value>)",
                    "bg-2": "rgb(var(--bg-2) / <alpha-value>)",
                    "bg-3": "rgb(var(--bg-3) / <alpha-value>)",
                    "content-1": "rgb(var(--content-1) / <alpha-value>)",
                    "content-2": "rgb(var(--content-2) / <alpha-value>)",
                    "accent-1": "rgb(var(--accent-1) / <alpha-value>)",

                    "opp-bg-1": "rgb(var(--opp-bg-1) / <alpha-value>)",
                    "opp-bg-2": "rgb(var(--opp-bg-2) / <alpha-value>)",
                    "opp-bg-3": "rgb(var(--opp-bg-3) / <alpha-value>)",
                    "opp-content-1":
                        "rgb(var(--opp-content-1) / <alpha-value>)",
                    "opp-content-2":
                        "rgb(var(--opp-content-2) / <alpha-value>)",
                    "opp-accent-1": "rgb(var(--opp-accent-1) / <alpha-value>)",
                },
            },
            dropShadow: {
                "bg-1": "0 15px 15px rgb(var(--bg-1))",
                "bg-2": "0 15px 15px rgb(var(--bg-2))",
                "bg-3": "0 15px 15px rgb(var(--bg-3))",
                "content-1": "0 15px 15px rgb(var(--content-1))",
                "content-2": "0 15px 15px rgb(var(--content-2))",
                "accent-1": "0 15px 15px rgb(var(--accent-1))",

                "opp-bg-1": "0 15px 15px rgb(var(--opp-bg-1))",
                "opp-bg-2": "0 15px 15px rgb(var(--opp-bg-2))",
                "opp-bg-3": "0 15px 15px rgb(var(--opp-bg-3))",
                "opp-content-1": "0 15px 15px rgb(var(--opp-content-1))",
                "opp-content-2": "0 15px 15px rgb(var(--opp-content-2))",
                "opp-accent-1": "0 15px 15px rgb(var(--opp-accent-1))",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-6deg)" },
                    "50%": { transform: "rotate(6deg)" },
                },

                customBounce: {
                    "0%, 100%": {
                        transform: "translateY(-45%)",
                        "animation-timing-function":
                            "cubic-bezier(0.8, 0, 1, 1)",
                        "border-color": "rgba(201, 115, 56, 0)",
                    },
                    "50%": {
                        transform: "translateY(0)",
                        "animation-timing-function":
                            "cubic-bezier(0, 0, 0.2, 1)",
                        "border-color": "rgba(201, 115, 56, 1)",
                    },
                },

                fadeInRight: {
                    "0%": {
                        opacity: "0",
                        transform: "translateX(50px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateX(0)",
                    },
                },

                fadeInTop: {
                    "0%": {
                        transform: "translateY(-10px)",
                        opacity: "0",
                    },
                    "100%": {
                        transform: "translateY(0)",
                        opacity: "1",
                    },
                },
            },

            animation: {
                wiggle: "wiggle 6s ease-in-out infinite",
                customBounce: "customBounce 2s ease-in-out infinite",
                fadeInRight: "fadeInRight 1.5s cubic-bezier(.9,.1,.1,.9) both",
                fadeInTop: "fadeInTop 1s cubic-bezier(.9,.1,.1,.9) both",
            },

            fontFamily: {
                cursive: ["Dancing Script", "cursive"],
            },
        },
    },
    plugins: [
        // addVariablesForColors,
        plugin(({ matchUtilities, theme }: any) => {
            matchUtilities(
                {
                    "animation-delay": (value: any) => {
                        return {
                            "animation-delay": value,
                        };
                    },
                },
                {
                    values: theme("transitionDelay"),
                }
            );
        }),
        function ({ matchUtilities, theme }: any) {
            // matchUtilities(
            //     {
            //         "bg-grid": (value: any) => ({
            //             backgroundImage: `url("${svgToDataUri(
            //                 `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            //             )}")`,
            //         }),
            //         "bg-grid-small": (value: any) => ({
            //             backgroundImage: `url("${svgToDataUri(
            //                 `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            //             )}")`,
            //         }),
            //         "bg-dot": (value: any) => ({
            //             backgroundImage: `url("${svgToDataUri(
            //                 `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            //             )}")`,
            //         }),
            //     },
            //     {
            //         values: flattenColorPalette(theme("backgroundColor")),
            //         type: "color",
            //     }
            // );
            // matchUtilities(
            //     {
            //         "animation-delay": (value: any) => {
            //             return {
            //                 "animation-delay": value,
            //             };
            //         },
            //     },
            //     {
            //         values: theme("transitionDelay"),
            //     }
            // );
        },
    ],
};

function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

export default config;

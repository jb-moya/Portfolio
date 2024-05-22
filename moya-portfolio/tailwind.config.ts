const defaultTheme = require("tailwindcss/defaultTheme");

const svgToDataUri = require("mini-svg-data-uri");

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
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            aspectRatio: {
                "4/3-x": "4 / 3",
                "4/3-y": "3 / 4",
            },
            colors: {
                custom: {
                    "bg-1": "rgb(var(--bg-1) / <alpha-value>)",
                    "bg-2": "rgb(var(--bg-2) / <alpha-value>)",
                    "bg-3": "rgb(var(--bg-3) / <alpha-value>)",
                    "content-1": "rgb(var(--content-1) / <alpha-value>)",
                    "content-2": "rgb(var(--content-2) / <alpha-value>)",
                    "accent-1": "rgb(var(--accent-1) / <alpha-value>)",
                },
            },
            dropShadow: {
                "bg-1": "0 1px 0px rgb(var(--bg-1))",
                "bg-2": "0 1px 0px rgb(var(--bg-2))",
                "bg-3": "0 1px 0px rgb(var(--bg-3))",
                "content-1": "0 1px 0px rgb(var(--content-1))",
                "content-2": "0 1px 0px rgb(var(--content-2))",
                "accent-1": "0 1px 0px rgb(var(--accent-1))",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-6deg)" },
                    "50%": { transform: "rotate(6deg)" },
                },
            },
            animation: {
                wiggle: "wiggle 2s ease-in-out infinite",
            },
            fontFamily: {
                cursive: ["Dancing Script", "cursive"],
            },
        },
    },
    plugins: [
        // addVariablesForColors,
        function ({ matchUtilities, theme }: any) {
            matchUtilities(
                {
                    "bg-grid": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    "bg-grid-small": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
                        )}")`,
                    }),
                    "bg-dot": (value: any) => ({
                        backgroundImage: `url("${svgToDataUri(
                            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
                        )}")`,
                    }),
                },
                {
                    values: flattenColorPalette(theme("backgroundColor")),
                    type: "color",
                }
            );
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

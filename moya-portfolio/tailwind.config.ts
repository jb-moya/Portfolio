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
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            aspectRatio: {
                "4/3-x": "4 / 3",
                "4/3-y": "3 / 4",
            },
            colors: {
                nature: {
                    "bg-1": "rgb(var(--bg-1) / <alpha-value>)",
                    "bg-2": "rgb(var(--bg-2) / <alpha-value>)",
                    "text-content": "rgb(var(--content) / <alpha-value>)",
                    "accent-1": "rgb(var(--accent-1) / <alpha-value>)",
                    "accent-2": "rgb(var(--accent-2) / <alpha-value>)",
                },
            },
            dropShadow: {
                "bg-1": "0 2px 0px rgb(var(--bg-1))",
                "bg-2": "0 2px 0px rgb(var(--bg-2))",
                "text-content": "0 2px 0px rgb(var(--content))",
                "accent-1": "0 2px 0px rgb(var(--accent-1))",
                "accent-2": "0 2px 0px rgb(var(--accent-2))",
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
        },
    },
    plugins: [],
};
export default config;

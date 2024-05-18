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
                // zest: {
                //     "50": "#fcf5ee",
                //     "100": "#f5e5d0",
                //     "200": "#eac89d",
                //     "300": "#e0a669",
                //     "400": "#d6853d",
                //     "500": "#cf6c31",
                //     "600": "#b75128",
                //     "700": "#983a25",
                //     "800": "#7d2e23",
                //     "900": "#672820",
                //     "950": "#3a120e",
                // },

                zest: {
                    "50": 'hsl(var(--color-zest-50) / <alpha-value>)',
                    "100": 'hsl(var(--color-zest-100) / <alpha-value>)',
                    "200": 'hsl(var(--color-zest-200) / <alpha-value>)',
                    "300": 'hsl(var(--color-zest-300) / <alpha-value>)',
                    "400": 'hsl(var(--color-zest-400) / <alpha-value>)',
                    "500": 'hsl(var(--color-zest-500) / <alpha-value>)',
                    "600": 'hsl(var(--color-zest-600) / <alpha-value>)',
                    "700": 'hsl(var(--color-zest-700) / <alpha-value>)',
                    "800": 'hsl(var(--color-zest-800) / <alpha-value>)',
                    "900": 'hsl(var(--color-zest-900) / <alpha-value>)',
                    "950": 'hsl(var(--color-zest-950) / <alpha-value>)',
                },
            },
        },
    },
    plugins: [],
};
export default config;

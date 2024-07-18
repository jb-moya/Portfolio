import { Inter, Fira_Code, Dancing_Script } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
export const inter = Inter({
    subsets: ["latin-ext"],
});

export const firaCode = Fira_Code({
    subsets: ["latin"],
});

export const dancingScript = Dancing_Script({
    weight: ["400"],
    subsets: ["latin"],
});

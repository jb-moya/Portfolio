"use client";
import { cn } from "@/../utils/cn";
import { useMotionValue, motion, useMotionTemplate } from "framer-motion";
import React from "react";

export const HeroHighlight = ({
    children,
    className,
    containerClassName,
}: {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        if (!currentTarget) return;
        let { left, top } = currentTarget.getBoundingClientRect();

        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return (
        <div
            className={cn(
                "relative h-[40rem] flex items-center bg-white dark:bg-black justify-center w-full group",
                containerClassName
            )}
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800  pointer-events-none" />
            <motion.div
                className="pointer-events-none bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500   absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                    maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
                }}
            />

            <div className={cn("relative z-20", className)}>{children}</div>
        </div>
    );
};

export const Highlight = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <motion.span
            initial={{
                backgroundSize: "0% 100%",
            }}
            animate={{
                backgroundSize: "100% 100%",
            }}
            transition={{
                duration: 1.5,
                ease: "easeInOut",
                delay: 1,
            }}
            style={{
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left center",
                display: "inline",
            }}
            className={cn(
                `relative inline-block pr-5 pl-2 pb-2 pt-3 md:pb-3 md:pt-7 lg:pb-5 lg:pt-12 rounded-2xl`,
                `bg-gradient-to-r shadow-sm from-custom-opp-bg-1 via-custom-opp-bg-2 to-custom-opp-bg-3`,
                className
            )}
        >
            {children}
        </motion.span>
    );
};

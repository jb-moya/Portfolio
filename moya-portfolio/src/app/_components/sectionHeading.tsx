import React from "react";

export const sectionHeading = ({
    firstSectionName,
    secondSectionName,
    sectionRef,
    id,
}: {
    firstSectionName: String;
    secondSectionName?: String;
    sectionRef?: any;
    id?: string;
}) => {
    return (
        <div
            id={id}
            className="text-3xl flex my-7 items-center"
            ref={sectionRef}
        >
            <span className="text-nowrap text-custom-content-2">
                {firstSectionName}
            </span>
            <span className="text-nowrap text-custom-content-1 gradient-text ml-3 font-extrabold">
                {secondSectionName}
            </span>
            <span className="border-b w-full ml-5 border-custom-content-1/50"></span>
        </div>
    );
};

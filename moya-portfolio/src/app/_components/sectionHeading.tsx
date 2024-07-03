import React from "react";

export const sectionHeading = ({
    sectionName,
    sectionRef,
    id
}: {
    sectionName: String;
    sectionRef?: any;
    id?: string
}) => {
    return (
        <div id={id} className="text-3xl flex my-7 items-center" ref={sectionRef}>
            <span className="border-b w-full mr-5 border-custom-content-1/50"></span>
            <span className="text-nowrap text-custom-bg-3">{sectionName}</span>
            <span className="border-b w-full ml-5 border-custom-content-1/50"></span>
        </div>
    );
};

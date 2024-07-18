

const TechBadge = ({ name }: { name: String }) => {
    return (
        <span className="item flex max-w-screen-sm items-center justify-center mr-1 mt-1">
            <span className="border border-custom-content-1/50">
                <span className="text-sm text-custom-content-2 px-2">
                    {name}
                </span>
            </span>
        </span>
    );
};

export default TechBadge;

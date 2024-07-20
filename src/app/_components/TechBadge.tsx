

const TechBadge = ({ name }: { name: String }) => {
    return (
        <span className="item flex max-w-screen-sm items-center justify-center mr-2 mt-1">
            <span className="border border-custom-content-2/50">
                <span className="text-sm text-custom-content-2 px-2">
                    {name}
                </span>
            </span>
        </span>
    );
};

export default TechBadge;

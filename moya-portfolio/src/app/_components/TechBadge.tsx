const TechBadge = ({ name }: { name: String }) => {
    return (
        <span className="item flex max-w-screen-sm items-center justify-center">
            <span className="rounded-sm shadow-sm bg-custom-opp-bg-2">
                <span className="font-bold text-sm text-custom-bg-1 px-1">
                    {name}
                </span>
            </span>
        </span>
    );
};

export default TechBadge;

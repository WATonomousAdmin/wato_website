interface IconProps {
    content: string;
}

const Icon = ({ content }: IconProps) => {
    return (
        <i className={`fa-solid fa-brands ${content} text-lg font-normal`} />
    );
};

export default Icon;

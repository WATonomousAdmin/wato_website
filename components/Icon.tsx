interface IconProps {
    content: string;
}

const Icon = ({ content } : IconProps) => {
    return <i className={`fa-solid fa-brands ${content}`} />;
};

export default Icon;

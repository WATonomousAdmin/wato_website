interface IconProps {
    content: string;
}

const Icon = ({ content }: IconProps) => {
    return (
        <i className={`fa-solid fa-brands ${content} inline-flex items-center translate-y-[-1px] text-lg font-normal`} />
    );
};

export default Icon;

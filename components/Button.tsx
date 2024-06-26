import Link from "next/link";
import { MouseEventHandler } from "react";

interface ButtonProps {
    text: string;
    outline?: boolean;
    src?: string;
    onClick?: MouseEventHandler;
}

const Button = ({ text, outline, src, onClick }: ButtonProps) => {
    const colors = outline
        ? "bg-transparent border-2 border-white"
        : "bg-wato-blue text-white";
    const buttonComponent = (
        <div
            className={`flex w-fit cursor-pointer rounded-md ${colors} px-5 py-2 text-xl font-medium`}
            onClick={onClick}
        >
            {text}
        </div>
    );

    return (
        <div>
            {src ? <Link href={src}>{buttonComponent}</Link> : buttonComponent}
        </div>
    );
};

export default Button;

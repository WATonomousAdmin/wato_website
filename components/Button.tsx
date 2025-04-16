import Link from "next/link";
import { MouseEventHandler } from "react";

interface ButtonProps {
    text: string;
    color?: string;
    outline?: boolean;
    src?: string;
    onClick?: MouseEventHandler;
}

const Button = ({ text, color, outline, src, onClick }: ButtonProps) => {
    const colors = color
        ? color
        : outline
        ? "bg-transparent border-2 border-white"
        : "bg-wato-blue text-white";
    const buttonComponent = (
        <div
            className={`flex w-fit cursor-pointer rounded-md ${colors} text-md px-5 py-2 font-medium`}
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

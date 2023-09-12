import Link from "next/link";
import { MouseEventHandler } from "react";

interface ButtonProps {
    text: string;
    src?: string;
    onClick?: MouseEventHandler;
}

const Button = ({ text, src, onClick }: ButtonProps) => {
    const textComponent = <div className="text-white">{text}</div>;
    return (
        <div
            className="flex w-fit cursor-pointer rounded-md bg-wato-blue px-5 py-2 text-xl font-medium"
            onClick={onClick}
        >
            {src ? (
                <Link href={`${src}`}>
                    {textComponent}
                </Link>
            ) : (
                <>{textComponent}</>
            )}
        </div>
    );
};

export default Button;

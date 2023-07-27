import Link from "next/link";
import { MouseEventHandler } from "react";

interface ButtonProps {
    text: string;
    link?: string;
    anchor?: string;
    onClick?: MouseEventHandler;
}

const Button = ({ text, link, anchor, onClick }: ButtonProps) => {
    const buttonElement = (
        <span className="flex w-fit cursor-pointer rounded-md bg-wato-blue px-5 py-2 text-xl font-medium text-zinc-100">
            {text}
        </span>
    );

    if (link) {
        return (
            <p>
                <Link href={`${link}`}>{buttonElement}</Link>
            </p>
        );
    } else if (anchor) {
        return (
            <p>
                <Link href={`${anchor}`}>{buttonElement}</Link>
            </p>
        );
    }

    return <div onClick={onClick}>{buttonElement}</div>;
};

export default Button;

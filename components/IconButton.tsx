import { MouseEventHandler } from "react";

interface IconButtonProps {
    content: string;
    onClick?: MouseEventHandler;
    blue? : boolean;
}

const IconButton = ({ content, onClick, blue } : IconButtonProps) => {
    return (
        <div
            className={`ml-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-md ${
                blue ? "bg-wato-blue-water" : "bg-wato-grey-clear"
            } bg-opacity-50 p-2 text-black`}
            onClick={onClick}
        >
            <i className={`fa-brands ${content} text-3xl`} />
        </div>
    );
};

export default IconButton;

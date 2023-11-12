import { MouseEventHandler } from "react";

interface IconButtonProps {
    content: string;
    onClick?: MouseEventHandler;
    blue? : boolean;
    empty? : boolean;
}

const IconButton = ({ content, onClick, blue, empty } : IconButtonProps) => {
    let color = "bg-wato-grey-clear";
    if (blue) {
        color = "bg-wato-blue-water"
    } else if (empty) {
        color = "text-wato-grey"
    }
    return (
        <div
            className={`ml-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-md ${color} bg-opacity-50 p-2`}
            onClick={onClick}
        >
            <i className={`fa-brands ${content} text-3xl`} />
        </div>
    );
};

export default IconButton;

import { ChangeEvent, useRef, useState } from "react";

interface FormFileProps {
    id: string;
    title: string;
    required?: boolean;
}

const FormFile = ({ id, title, required }: FormFileProps) => {
    const [fileName, setFileName] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const onFileUpload = (data: ChangeEvent<HTMLInputElement>) => {
        if (!data.target.files || !data.target.files[0]) return;
        let fn = data.target.files[0].name;
        if (fn.length > 20) {
            fn = `${fn.slice(0, 8)}...${fn.slice(-8)}`;
        }
        setFileName(fn);
    };

    const handleFileRemove = () => {
        setFileName("");
        if (inputRef.current) inputRef.current.value = "";
    };

    return (
        <div className="flex h-10 flex-col">
            <label className="w-full cursor-pointer p-1 text-base font-bold text-wato-white-bone">
                <input
                    className="hidden"
                    id={id}
                    accept=".pdf, .doc, .docx, .png, .jpg, .jpeg, .txt"
                    name={id}
                    type="file"
                    onChange={onFileUpload}
                    ref={inputRef}
                />
                <div className="text-sm">
                    <i className="fa-solid fa-upload"></i> {title}{" "}
                    {required && <span className="text-red-400"> *</span>}
                </div>
                <div className="w-56 overflow-hidden text-xs">{fileName}</div>
            </label>
            {fileName && (
                <div
                    className="cursor-pointer text-xs text-red-400 hover:text-red-200"
                    onClick={handleFileRemove}
                >
                    Remove
                </div>
            )}
        </div>
    );
};

export default FormFile;

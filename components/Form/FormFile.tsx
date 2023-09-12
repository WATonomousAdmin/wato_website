import { ChangeEvent, useState } from "react";

interface FormFileProps {
    id: string;
    title: string;
    required?: boolean;
}

const FormFile = ({ id, title, required } : FormFileProps) => {
    const [fileName, setFileName] = useState("");

    const onFileUpload = (data : ChangeEvent<HTMLInputElement>) => {
        if (!data.target.files || !data.target.files[0]) return;
        let fn = data.target.files[0].name;
        if (fn.length > 20) {
            fn = `${fn.slice(0, 8)}...${fn.slice(-8)}`;
        }
        setFileName(fn);
    };

    return (
        <label className="w-full cursor-pointer p-1 text-base font-bold text-black">
            <input
                className="hidden"
                id={id}
                accept=".pdf, .doc, .docx, .png, .jpg, .jpeg, .txt"
                name={id}
                type="file"
                onChange={onFileUpload}
            />
            <div>
                <i className="fa-solid fa-upload text-lg"></i> {title}{" "}
                {required && <span className="text-red-400"> *</span>}
            </div>
            <div className="h-6 w-56 overflow-hidden">{fileName}</div>
        </label>
    );
};

export default FormFile;

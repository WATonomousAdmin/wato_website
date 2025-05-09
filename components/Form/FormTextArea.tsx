import { FormEventHandler, KeyboardEvent } from "react";

interface FormTextAreaProps {
    id: string;
    title: string;
    maxWords: number;
    required: boolean;
    formData: Record<string, string>;
    setFormData(newData: Record<string, string>): any;
    onFormChange: FormEventHandler;
}

const FormTextArea = ({
    id,
    title,
    maxWords,
    required,
    formData,
    setFormData,
    onFormChange,
}: FormTextAreaProps) => {
    const checkWordLimit = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        const currentLength = (e.target as HTMLTextAreaElement).value.split(
            /[\s]+/
        );
        if (currentLength.length > maxWords) {
            const newData = { ...formData };
            newData[id] = (e.target as HTMLTextAreaElement).value
                .split(" ")
                .splice(0, maxWords)
                .join(" ");
            setFormData(newData);
        }
    };
    return (
        <div className={`col-span-1 my-2 lg:col-span-2 lg:my-0`}>
            <label htmlFor={id} className="text-sm font-medium">
                {title}
            </label>{" "}
            {required && <span className="text-red-400">*</span>}
            {/* w-64*/}
            <textarea
                className={`mt-2 w-full rounded-md bg-wato-white-bone p-1 text-base text-wato-black`}
                id={id}
                name={id}
                value={formData[id] || ""}
                onChange={onFormChange}
                onKeyUp={checkWordLimit}
                required={required}
                rows={5}
                placeholder={`Max ${maxWords} words`}
                style={{ resize: "none" }}
            />
        </div>
    );
};

export default FormTextArea;

import { ChangeEventHandler } from "react";

interface FormTextProps {
    id: string;
    title: string;
    required?: boolean;
    formData: Record<string, unknown>;
    span?: boolean;
    onFormChange: ChangeEventHandler;
}

const FormText = ({
    id,
    title,
    required,
    formData,
    span,
    onFormChange,
}: FormTextProps) => {
    return (
        <div className={`col-span-1 ${span && "lg:col-span-2"} my-2 lg:my-0`}>
            <label htmlFor={id} className="text-sm font-medium">
                {title}
            </label>{" "}
            {required && <span className="text-red-400">*</span>}
            {/* w-64*/}
            <input
                className={`mt-2 w-full rounded-md bg-wato-white-bone p-1 text-base text-wato-black`}
                id={id}
                name={id}
                value={(formData[id] as string) || ""}
                onChange={onFormChange}
                type={"text"}
                required={required}
            />
        </div>
    );
};

export default FormText;

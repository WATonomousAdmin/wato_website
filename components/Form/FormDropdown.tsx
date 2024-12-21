import { ChangeEventHandler } from "react";

interface FormDropdownProps {
    id: string;
    title: string;
    span?: boolean;
    options: string[];
    formData: Record<string, unknown>;
    onFormChange: ChangeEventHandler;
}

const FormDropdown = ({
    id,
    title,
    span,
    options,
    formData,
    onFormChange,
}: FormDropdownProps) => {
    return (
        <div className={`col-span-1 ${span && "lg:col-span-2"}`}>
            <div>
                <label htmlFor={id} className="font-medium">
                    {title}
                </label>
                <span className="text-red-400"> *</span>
            </div>
            <select
                className="mt-3 w-full rounded-md bg-wato-white-bone p-1 text-xl"
                onChange={onFormChange}
                name={id}
                value={(formData[id] as string) || options[0]}
                required
            >
                {options.map((o) => {
                    return (
                        <option value={o} key={o}>
                            {o}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default FormDropdown;

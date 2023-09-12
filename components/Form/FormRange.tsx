import { ChangeEventHandler, useState } from "react";

interface DescriptionProps {
    idx: string;
    data: string[];
    selected: boolean;
}

const Description = ({ idx, data, selected } : DescriptionProps) => {
    return (
        <div
            className={`flex justify-center p-5 align-middle ${
                selected ? "opacity-100" : "opacity-0"
            } transition-opacity duration-200`}
        >
            {data[parseInt(idx) - 1]}
        </div>
    );
};

interface FormRangeProps {
    id: string;
    title: string;
    min: number;
    max: number;
    step: number;
    descriptions: string[];
    required: boolean;
    formData: Record<string, string>;
    onFormChange: ChangeEventHandler<HTMLInputElement>;
}

const FormRange = ({
    id,
    title,
    min,
    max,
    step,
    descriptions,
    required,
    formData,
    onFormChange,
} : FormRangeProps) => {
    const [selected, setSelected] = useState(false);
    return (
        <div className="col-span-2 flex flex-col">
            <div>
                <label htmlFor={id} className="font-medium">
                    {title}
                </label>
                <span className="text-red-400"> *</span>
            </div>
            <input
                className={`slider-thumb my-2 mt-3 h-5 w-full appearance-none rounded-full bg-wato-white-bone p-1 text-xl`}
                id={id}
                name={id}
                value={formData[id] || ""}
                onChange={onFormChange}
                type="range"
                onMouseDown={() => setSelected(true)}
                onMouseUp={() => setSelected(false)}
                onMouseLeave={() => setSelected(false)}
                required={required}
                min={min}
                max={max}
                step={step}
            />

            {/* TODO: add pop up */}
            <div className="flex w-full flex-row justify-between">
                <div>{min}</div>
                <div>{(max-min)/2}</div>
                <div>{max}</div>
            </div>
            <Description
                idx={formData[id]}
                data={descriptions}
                selected={selected}
            />
        </div>
    );
};

export default FormRange;

import { useRef, ChangeEvent } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

interface UrlContainerProps {
    content: string;
}

const UrlContainer = ({ content }: UrlContainerProps) => {
    return (
        <div className="float-left mr-1 flex w-max items-center rounded-md border-2 border-solid border-blue-300 bg-blue-100 px-2 text-base text-black">
            <div className="">{content}</div>
        </div>
    );
};

interface MultiSelectDropdownProps {
    formFieldName: string;
    options: string[];
    onChange(o1: any): void;
    max?: number;
    formData: Record<string, any>;
    setFormData(data: Record<string, any>): any;
}

const MultiSelectDropdown = ({
    formFieldName,
    options,
    onChange,
    formData,
    setFormData,
    max = 2,
}: MultiSelectDropdownProps) => {
    const optionsListRef = useRef(null);
    const peerRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        const option = e.target.name;

        if (isChecked && formData[formFieldName].length >= max) {
            return;
        }

        let old: string[] = [...formData[formFieldName]];
        if (isChecked) {
            old = [...old, option];
        } else {
            old = old.filter((x) => x !== option);
        }

        setFormData({ ...formData, [formFieldName]: old });
        onChange(null);
    };

    const ref = useOnclickOutside(() => {
        if (!peerRef || !peerRef.current) {
            return;
        }

        peerRef.current.checked = false;
    });

    return (
        <div className={"relative"} ref={ref}>
            <label>
                <input type="checkbox" className="peer hidden" ref={peerRef} />
                <div
                    className={`min-h-10 flex w-full cursor-pointer flex-wrap items-center rounded border bg-wato-white-bone px-5 py-2 
                text-black`}
                >
                    {formData[formFieldName].length ? (
                        formData[formFieldName].map((x: string) => {
                            return <UrlContainer key={x} content={x} />;
                        })
                    ) : (
                        <span className="-ml-3 text-base text-wato-grey">
                            Maximum 3
                        </span>
                    )}
                </div>
                <div className="pointer-events-none absolute max-h-60 w-full overflow-y-scroll border bg-white opacity-0 transition-opacity peer-checked:pointer-events-auto peer-checked:opacity-100">
                    <ul ref={optionsListRef}>
                        {options.map((option) => {
                            return (
                                <li key={option}>
                                    <label
                                        className={`flex cursor-pointer items-center whitespace-nowrap px-2 text-black transition-colors hover:bg-blue-100 [&:has(input:checked)]:bg-blue-200`}
                                    >
                                        <input
                                            type="checkbox"
                                            id={option}
                                            name={option}
                                            checked={formData[
                                                formFieldName
                                            ].includes(option)}
                                            className="cursor-pointer text-base"
                                            onChange={handleChange}
                                        />
                                        <span className="ml-1">{option}</span>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </label>
        </div>
    );
};

export default MultiSelectDropdown;

import { useState } from "react";

interface UrlContainerProps {
    content: string;
    onRemove(content: string): any;
}

const UrlContainer = ({ content, onRemove }: UrlContainerProps) => {
    return (
        <div className="float-left mb-1 mr-1 flex w-max items-center rounded-md border-2 border-solid border-blue-300 bg-blue-100 px-1">
            <div className="">{content}</div>
            <div
                className="ml-1 cursor-pointer text-zinc-500"
                onClick={() => {
                    onRemove(content);
                }}
            >
                x
            </div>
        </div>
    );
};

interface FormURLProps {
    id: string;
    title: string;
    formData: Record<string, any>;
    setFormData(data: Record<string, any>): any;
}
const FormURL = ({ id, title, formData, setFormData }: FormURLProps) => {
    const [error, setError] = useState(""); // Add this line to initialize the error state

    const onSpacePressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === " ") {
            e.preventDefault();
            const inputElement = e.target as HTMLInputElement;
            const urlToAdd = inputElement.value.trim();

            if (urlToAdd.length > 0 && !formData.urls.includes(urlToAdd)) {
                setFormData((data: Record<string, any>) => ({
                    ...data,
                    urls: [...data.urls, urlToAdd],
                }));
                setError(""); // Clear any previous error message
            } else {
                setError("Duplicate URL. Please enter a different URL.");
            }

            inputElement.value = "";
        }
    };

    const removeURL = (url: string) => {
        setFormData((data: Record<string, any>) => ({
            ...data,
            urls: data.urls.filter((x: string) => x !== url),
        }));
    };

    return (
        <div className="col-span-2 flex flex-col">
            <label htmlFor={id} className="text-xl font-medium">
                {title}
            </label>
            <div className={`flex w-full bg-wato-white-bone p-1 text-xl`}>
                <div className={`flex min-h-[2em] w-full flex-wrap`}>
                    {formData.urls.map((url: string, idx: number) => {
                        return (
                            <UrlContainer
                                key={idx}
                                content={url}
                                onRemove={removeURL}
                            ></UrlContainer>
                        );
                    })}
                    <input
                        id={id}
                        type={"text"}
                        placeholder={"Press space after a URL"}
                        onKeyDown={onSpacePressed}
                        className={
                            "flex-1 overflow-auto bg-transparent focus:outline-none"
                        }
                    />
                </div>
            </div>
            {error && <div className="text-red-500">{error}</div>}
        </div>
    );
};

export default FormURL;

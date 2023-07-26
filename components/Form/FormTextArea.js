const FormTextArea = ({
    id,
    title,
    maxWords,
    required,
    formData,
    setFormData,
    onFormChange,
}) => {
    const checkWordLimit = (e) => {
        const currentLength = e.target.value.split(/[\s]+/);
        if (currentLength.length > maxWords) {
            const newData = { ...formData };
            newData[id] = e.target.value
                .split(" ")
                .splice(0, maxWords)
                .join(" ");
            setFormData(newData);
        }
    };
    return (
        <div className={`col-span-1 my-2 lg:col-span-2 lg:my-0`}>
            <label htmlFor={id} className="font-medium">
                {title}
            </label>{" "}
            {required && <span className="text-red-400">*</span>}
            {/* w-64*/}
            <textarea
                className={`mt-3 w-full bg-wato-white-bone p-1 text-xl`}
                id={id}
                name={id}
                value={formData[id] || ""}
                onChange={onFormChange}
                onKeyUp={checkWordLimit}
                type={"text"}
                required={required}
                rows={5}
                placeholder={`Max ${maxWords} words`}
                style={{ resize: "none" }}
            />
        </div>
    );
};

export default FormTextArea;

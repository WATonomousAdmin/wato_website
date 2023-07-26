const FormText = ({ id, title, required, formData, span, onFormChange }) => {
    return (
        <div className={`col-span-1 ${span && "lg:col-span-2"} my-2 lg:my-0`}>
            <label htmlFor={id} className="font-medium">
                {title}
            </label>{" "}
            {required && <span className="text-red-400">*</span>}
            {/* w-64*/}
            <input
                className={`mt-3 w-full bg-wato-white-bone p-1 text-xl`}
                id={id}
                name={id}
                value={formData[id] || ""}
                onChange={onFormChange}
                type={"text"}
                required={required}
            />
        </div>
    );
};

export default FormText;

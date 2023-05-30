const JobFormTextArea = ({
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
      newData[id] = e.target.value.split(" ").splice(0, maxWords).join(" ");
      setFormData(newData);
    }
  };
  return (
    <div className={`col-span-1 my-2 lg:col-span-2 lg:my-0`}>
      <label htmlFor={id} className="text-xl font-medium">
        {title}
      </label>{" "}
      {required && <span className="text-red-400">*</span>}
      {/* w-64*/}
      <textarea
        className={`w-full bg-[#F6F8FA] p-1 text-3xl mt-3`}
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

export default JobFormTextArea;

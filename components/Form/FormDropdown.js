const FormDropdown = ({ id, title, span, options, formData, onFormChange }) => {
  return (
    <div className={`col-span-1 ${span && "lg:col-span-2"}`}>
      <div>
        <label htmlFor={id} className="font-medium">
          {title}
        </label>
        <span className="text-red-400"> *</span>
      </div>
      <select
        className="w-full bg-[#F6F8FA] p-1 text-xl mt-3"
        onChange={onFormChange}
        name={id}
        value={formData[id] || options[0]}
        required
      >
        {options.map((o) => {
          return <option value={o} key={o}>{o}</option>;
        })}
      </select>
    </div>
  );
};

export default FormDropdown;

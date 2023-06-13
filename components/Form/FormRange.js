import { useState } from "react";

const Description = ({idx, data, selected}) => {
  return (
    <div className={`flex p-5 justify-center align-middle ${selected ? "opacity-100" : "opacity-0"} transition-opacity duration-200`}>
      {data[parseInt(idx) - 1]}
    </div>
  );
}

const FormRange = ({ id, title, min, max, step, descriptions, required, formData, onFormChange }) => {
  const [selected,setSelected] = useState(false);
  return (
    <div className="col-span-2 flex flex-col">
      <div>
        <label htmlFor={id} className="font-medium">
          {title}
        </label>
        <span className="text-red-400"> *</span>
      </div>
      <input
        className={`slider-thumb my-2 h-5 w-full appearance-none rounded-full bg-[#F6F8FA] p-1 text-xl mt-3`}
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
        <div>1</div>
        <div>5</div>
        <div>10</div>
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

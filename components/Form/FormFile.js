import { useState } from "react";

const FormFile = ({id, title, required, formData, onFormChange}) => {
    const [fileName, setFileName] = useState("");

    const onFileUpload = (data) => {
        if (!data.target.files[0]) return;
        let fn = data.target.files[0].name;
        if (fn.length > 20) {
          fn = `${fn.slice(0,8)}...${fn.slice(-8)}`;
        }
        setFileName(fn);
    }

    return (
        <label className="cursor-pointer text-base font-bold text-[#2F2E2E] w-full p-1">
        <input
          className="hidden"
          id={id}
          accept=".pdf, .doc, .docx, .png, .jpg, .jpeg, .txt"
          name={id}
          type="file"
          onChange={onFileUpload}
        />
        <div>
          <i className="fa-solid fa-upload text-lg"></i> {title} {required && <span className="text-red-400"> *</span>}
        </div>
        <div className="w-56 h-6 overflow-hidden">
          {fileName}
        </div>
      </label>
    );
}

export default FormFile;
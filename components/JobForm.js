import { useState } from "react";

const fields = [
  "firstName",
  "lastName",
  "email",
  "program",
  "source",
  "urls",
  "website",
  "schoolTerm",
  "termType",
  "inPerson",
  "devotion",
];

const FormInput = ({
  id,
  title,
  type,
  required,
  span,
  formData,
  onFormChange,
  min,
  max,
  step,
}) => {
  let element = (
    <input
      className={`bg-[#F6F8FA] w-full text-xl ${
        type != "checkbox" && "w-64"
      } p-1`}
      id={id}
      name={id}
      value={formData[id] || ""}
      onChange={onFormChange}
      type={type}
      required={required}
    />
  );

  if (type === "range")
    element = (
      <element.type
        {...element.props}
        {...{
          min: min,
          max: max,
          step: step,
        }}
      />
    );

  if (onFormChange === null) {
    const props = { ...element.props };
    delete props.value;
    element = <element.type {...props} />;
  }

  return (
    <div className={`col-span-1 ${span && "lg:col-span-2"} my-2 lg:my-0`}>
      <label htmlFor={id} className="font-medium">
        {title}
      </label>{" "}
      {required && <span className="text-red-400">*</span>}
      <br />
      {element}
    </div>
  );
};

const UrlContainer = ({ content, onRemove }) => {
  return (
    <div className="bg-blue-100 border-2 border-solid border-blue-300 items-center px-1 mb-1 mr-1 rounded-md flex w-max float-left">
      <div className="">{content}</div>
      <div
        className="text-zinc-500 ml-1 cursor-pointer"
        onClick={() => {
          onRemove(content);
        }}
      >
        x
      </div>
    </div>
  );
};

const JobForm = ({ id }) => {
  const defaultForm = {
    id: id,
    urls: [],
    termType: "School",
    inPerson: false,
    devotion: 1,
  };
  const [formData, setFormData] = useState(defaultForm);

  const onFormChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const data = { ...formData };
    setFormData({ ...defaultForm });

    const payload = [data["id"]];
    for (let field of fields) {
      payload.push((data[field] ?? "").toString());
    }

    const res = await fetch("/api/jobpostings/apply", {
      method: "POST",
      body: JSON.stringify({ row: [payload] }),
    });

    console.log(res);
  };

  const onSpacePressed = (e) => {
    if (e.key === " ") {
      const entry = e.target.value;
      console.log("v ", e.target.value);
      console.log(formData.urls);
      setFormData((data) => ({
        ...data,
        urls: [...data.urls, entry.trim()].filter((x) => x.length > 0),
      }));
      console.log(formData.urls);
      e.target.value = "";
      console.log("wow ", formData);
    }
    if (e.key === "Backspace" && e.target.value.length === 0) {
      setFormData((data) => ({
        ...data,
        urls: data.urls.slice(0, -1),
      }));
    }
  };

  const removeURL = (url) => {
    setFormData((data) => ({
      ...data,
      urls: data.urls.filter((x) => x != url),
    }));
  };

  return (
    <div className="py-5 text-xl" id="apply">
      <form
        id="job-form"
        onSubmit={(e) => {
          onFormSubmit(e);
        }}
      >
        <div className="lg:grid lg:grid-cols-2 md:gap-x-4 md:gap-y-6">
          <FormInput
            id={fields[0]}
            title={"First Name"}
            type={"input"}
            required={true}
            formData={formData}
            onFormChange={onFormChange}
          />
          <FormInput
            id={fields[1]}
            title={"Last Name"}
            type={"input"}
            required={true}
            formData={formData}
            onFormChange={onFormChange}
          />
          <FormInput
            id={fields[2]}
            title={"Email Address"}
            type={"input"}
            required={true}
            formData={formData}
            onFormChange={onFormChange}
          />
          <FormInput
            id={fields[3]}
            title={"Program and Grad Year"}
            type={"input"}
            required={true}
            formData={formData}
            onFormChange={onFormChange}
          />
          <FormInput
            id={fields[4]}
            title={"How Did You Hear About This Position?"}
            required={true}
            type={"input"}
            formData={formData}
            span={true}
            onFormChange={onFormChange}
          />

          <div className="flex flex-col col-span-2">
            <label htmlFor={fields[5]} className="font-medium">
              Social URLs (Linkedin, Github, etc.)
            </label>
            <div className={`flex bg-[#F6F8FA] text-xl p-1 w-full`}>
              <div className={`min-h-[2em] flex flex-wrap w-full`}>
                {formData.urls.map((url) => {
                  return (
                    <UrlContainer
                      content={url}
                      onRemove={removeURL}
                    ></UrlContainer>
                  );
                })}
                <input
                  id={fields[5]}
                  type={"input"}
                  placeholder={"Press space after a URL"}
                  onKeyDown={onSpacePressed}
                  className={
                    "bg-transparent focus:outline-none overflow-auto flex-1"
                  }
                />
              </div>
            </div>
          </div>

          <FormInput
            id={fields[6]}
            title={"Personal Website/Portfolio"}
            type={"input"}
            formData={formData}
            onFormChange={onFormChange}
          />
          <FormInput
            id={fields[7]}
            title={"Last School Term Completed"}
            required={true}
            type={"input"}
            formData={formData}
            onFormChange={onFormChange}
          />

          <div>
            <div>
              <label htmlFor={fields[8]} className="font-medium">
                Term Type in Summer 2023
              </label>
              <span className="text-red-400"> *</span>
            </div>
            <select
              className="bg-[#F6F8FA] text-xl p-1 w-full"
              onChange={onFormChange}
              name={fields[8]}
              value={formData.termType || "School"}
              required
            >
              <option value="School">School</option>
              <option value="Coop">Coop</option>
            </select>
          </div>

          <div>
            <div>
              <label htmlFor={fields[9]} className="font-medium">
                Will you be in Waterloo Summer in 2023?
              </label>
              <span className="text-red-400"> *</span>
            </div>
            <select
              className="bg-[#F6F8FA] text-xl p-1 w-full"
              onChange={onFormChange}
              name={fields[9]}
              value={formData.inPerson || "Yes"}
              required
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="col-span-2 flex flex-col items-center">
            <div>
              <label htmlFor={fields[10]} className="font-medium">
                Devotion
              </label>
              <span className="text-red-400"> *</span>
            </div>
            <input
              className={`bg-[#F6F8FA] my-2 h-5 w-full text-xl p-1 slider-thumb appearance-none rounded-full`}
              id={fields[10]}
              name={fields[10]}
              value={formData[fields[10]] || ""}
              onChange={onFormChange}
              type={"range"}
              required={true}
              min={1}
              max={10}
              step={1}
            />
          </div>
        </div>
        <input
          className="align-top font-medium text-2xl mt-5 text-zinc-100 bg-[#1F5D96] rounded-md flex items-center pb-2 pt-1 px-3 cursor-pointer"
          type={"submit"}
          value={"Submit"}
        />
      </form>
    </div>
  );
};

export default JobForm;

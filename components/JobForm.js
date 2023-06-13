import { useState } from "react";
import FormText from "./Form/FormText";
import FormURL from "./Form/FormURL";
import FormDropdown from "./Form/FormDropdown";
import FormRange from "./Form/FormRange";
import FormSubmit from "./Form/FormSubmit";
import FormTextArea from "./Form/FormTextArea";
import FormStatus from "./Form/FormStatus";

const fields = [
  "firstName",
  "lastName",
  "email",
  "program",
  "source",
  "urls",
  "why",
  "website",
  "schoolTerm",
  "termType",
  "inPerson",
  "devotion",
];

const titles = [
  "First Name",
  "Last Name",
  "Email Address",
  "Program and Grad Year",
  "How Did You Hear About This Position?",
  "Social URLs (Linkedin, Github, etc.)",
  "Why WATONOMOUS?",
  "Personal Website/Portfolio",
  "Last School Term Completed",
  "Term Type in Summer 2023",
  "Will you be in Waterloo Summer in 2023?",
  "Devotion"
];

const sliderDescriptions = [
  "aaaaaaaaaaaaaaaaaa",
  "bbbbbbbbbbbbbbbbbb",
  "cccccccccccccccccc",
  "dddddddddddddddddd",
  "eeeeeeeeeeeeeeeeee",
  "ffffffffffffffffff",
  "gggggggggggggggggg",
  "hhhhhhhhhhhhhhhhhh",
  "iiiiiiiiiiiiiiiiii",
  "jjjjjjjjjjjjjjjjjj"
]

const JobForm = ({ id }) => {
  const defaultForm = {
    id: id,
    urls: [],
    termType: "School",
    inPerson: false,
    devotion: 1,
  };
  const [formData, setFormData] = useState(defaultForm);
  const [formStatus, setFormStatus] = useState(0);

  const changeStatus = (status) => {
    setFormStatus(status);
  }

  const onFormChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (formStatus == 1) return;
    changeStatus(1);
    const data = { ...formData };

    const payload = [data["id"]];
    for (let field of fields) {
      payload.push((data[field] ?? "").toString());
    }

    const res = await fetch("/api/jobpostings/apply", {
      method: "POST",
      body: JSON.stringify({ row: [payload] }),
    });

    if (res.status == 500) {
      changeStatus(-1);
    } else if (res.status == 200) {
      changeStatus(2);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
    
    setFormData({ ...defaultForm });

    console.log(res);
  };

  return (
    <div className="py-5 text-xl" id="apply">
      <form
        id="job-form"
        onSubmit={(e) => {
          onFormSubmit(e);
        }}
      >
        <div className="lg:grid lg:grid-cols-2 md:gap-x-16 md:gap-y-8">
          <FormText
            id={fields[0]}
            title={titles[0]}
            required={true}
            formData={formData}
            span={false}
            onFormChange={onFormChange}
          />

          <FormText
            id={fields[1]}
            title={titles[1]}
            required={true}
            formData={formData}
            span={false}
            onFormChange={onFormChange}
          />

          <FormText
            id={fields[2]}
            title={titles[2]}
            required={true}
            formData={formData}
            span={false}
            onFormChange={onFormChange}
          />

          <FormText
            id={fields[3]}
            title={titles[3]}
            required={true}
            formData={formData}
            span={false}
            onFormChange={onFormChange}
          />

          <FormText
            id={fields[4]}
            title={titles[4]}
            required={true}
            formData={formData}
            span={true}
            onFormChange={onFormChange}
          />

          <FormURL
            id={fields[5]}
            title={titles[5]}
            formData={formData}
            setFormData={setFormData}
          />

          <FormTextArea
            id={fields[6]}
            title={titles[6]}
            formData={formData}
            setFormData={setFormData}
            onFormChange={onFormChange}
            required={true}
            maxWords={300}
          />

          <FormText
            id={fields[7]}
            title={titles[7]}
            required={false}
            formData={formData}
            span={false}
            onFormChange={onFormChange}
          />

          <FormText
            id={fields[8]}
            title={titles[9]}
            required={true}
            formData={formData}
            span={false}
            onFormChange={onFormChange}
          />

          <FormDropdown
            id={fields[9]}
            title={titles[9]}
            options={["School", "Coop"]}
            formData={formData}
            onFormChange={onFormChange}
          />

          <FormDropdown
            id={fields[10]}
            title={titles[10]}
            options={["Yes", "No"]}
            formData={formData}
            onFormChange={onFormChange}
          />

          <FormRange
            id={fields[11]}
            title={titles[11]}
            min={1}
            max={10}
            step={1}
            required={true}
            descriptions={sliderDescriptions}
            formData={formData}
            onFormChange={onFormChange}
          />

        </div>
        <div className="flex flex-row items-center justify-center">
          <FormSubmit/>
          <FormStatus status={formStatus}/>
        </div>
      </form>
    </div>
  );
};

export default JobForm;

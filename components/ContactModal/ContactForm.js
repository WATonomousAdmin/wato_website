import { useState } from "react";
import FormText from "../Form/FormText";
import FormDropdown from "../Form/FormDropdown";
import FormTextArea from "../Form/FormTextArea";
import FormSubmit from "../Form/FormSubmit";
import FormFile from "../Form/FormFile";

const ContactForm = ({}) => {
  const defaultForm = {
    purpose: "General",
  };
  const [formData, setFormData] = useState(defaultForm);

  const changeStatus = (status) => {
    setFormStatus(status);
  };

  const onFormChange = (e) => {
    setFormData((data) => ({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  // we won't submit state formData, need to use multipart to submit the file
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector("#contact-form"));
    const response = await fetch("/api/connect/submit", {
      method: "POST",
      body: formData,
    });
    console.log(response);
  };

  return (
    <form
      id="contact-form"
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <div className="md:gap-x-4 md:gap-y-4 lg:grid lg:grid-cols-2 my-5">
        <FormText
          id={"firstname"}
          title={"First Name"}
          required
          formData={formData}
          onFormChange={onFormChange}
        />
        <FormText
          id={"lastname"}
          title={"Last Name"}
          required
          formData={formData}
          onFormChange={onFormChange}
        />
        <FormText
          id={"email"}
          title={"Email"}
          required
          span
          formData={formData}
          onFormChange={onFormChange}
        />
        <FormDropdown
            id={"purpose"}
            title={"Purpose"}
            options={["General", "Membership", "Sponsorship", "Server Usage"]}
            span
            formData={formData}
            onFormChange={onFormChange}
        />
        <FormTextArea
            id={"message"}
            title={"Message"}
            required
            maxWords={500}
            formData={formData}
            onFormChange={onFormChange}
            setFormData={setFormData}
        />
        <FormFile
          id={"upload"}
          title={"UPLOAD FILE"}
          formData={formData}
          onFormChange={formData}
        />
        <FormSubmit/>
      </div>
    </form>
  );
};

export default ContactForm;

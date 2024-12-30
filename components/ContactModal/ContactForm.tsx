import { ChangeEvent, FormEvent, useState } from "react";
import FormText from "../Form/FormText";
import FormDropdown from "../Form/FormDropdown";
import FormTextArea from "../Form/FormTextArea";
import FormSubmit from "../Form/FormSubmit";
import FormFile from "../Form/FormFile";
import FormStatus from "../Form/FormStatus";
import { FormStatusCode } from "../../types";

const ContactForm = () => {
    const defaultForm = {
        purpose: "General",
    };
    const [formData, setFormData] = useState<Record<string, any>>(defaultForm);
    const [error, setError] = useState<string | undefined>(undefined);
    const [formStatus, setFormStatus] = useState(FormStatusCode.Idle);

    const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((data) => ({
            ...data,
            [e.target.name]:
                e.target.type === "checkbox"
                    ? e.target.checked
                    : e.target.value,
        }));
    };

    // we won't submit state formData, need to use multipart to submit the file
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setFormStatus(FormStatusCode.Submitting);
        try {
            const formData = new FormData(
                document.querySelector("#contact-form") as HTMLFormElement
            );
            const response = await fetch("/api/connect/submit", {
                method: "POST",
                body: formData,
            });
            console.log(response);
            if (response.status === 500) {
                setError(undefined);
                throw new Error("Email Error");
            }
            if (response.status === 429) {
                setError("Please wait before sending another request");
                throw new Error("Rate Limited");
            }
            setFormData(defaultForm);
            setFormStatus(FormStatusCode.Success);
        } catch (e) {
            setFormStatus(FormStatusCode.Error);
        }
    };

    return (
        <form
            id="contact-form"
            onSubmit={(e) => {
                onSubmit(e);
            }}
        >
            <div className="my-5 md:gap-x-4 md:gap-y-4 lg:grid lg:grid-cols-2">
                <FormText
                    id={"firstName"}
                    title={"First Name"}
                    required
                    formData={formData}
                    onFormChange={onFormChange}
                />
                <FormText
                    id={"lastName"}
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
                    options={[
                        "General",
                        "Membership",
                        "Sponsorship",
                        "Server Usage",
                    ]}
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
                <FormFile id={"upload"} title={"UPLOAD FILE"} />
                <div className="flex items-start justify-end gap-x-5">
                    <FormStatus status={formStatus} errorMessage={error} />
                    <FormSubmit />
                </div>
            </div>
        </form>
    );
};

export default ContactForm;

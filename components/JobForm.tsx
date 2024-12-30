import { ChangeEvent, FormEvent, useState } from "react";
import FormText from "./Form/FormText";
import FormURL from "./Form/FormURL";
import FormDropdown from "./Form/FormDropdown";
//import FormRange from "./Form/FormRange";
import FormSubmit from "./Form/FormSubmit";
import FormTextArea from "./Form/FormTextArea";
import FormStatus from "./Form/FormStatus";
import { FormStatusCode } from "../types";
import MultiSelectDropdown from "./Form/FormMultiselect";

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
    "team",
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
    "Term Type Next Term",
    "Will You be in Waterloo Next Term?",
    "Where You'd Like to Contribute",
];

// const sliderDescriptions = [
//     "aaaaaaaaaaaaaaaaaa",
//     "bbbbbbbbbbbbbbbbbb",
//     "cccccccccccccccccc",
//     "dddddddddddddddddd",
//     "eeeeeeeeeeeeeeeeee",
//     "ffffffffffffffffff",
//     "gggggggggggggggggg",
//     "hhhhhhhhhhhhhhhhhh",
//     "iiiiiiiiiiiiiiiiii",
//     "jjjjjjjjjjjjjjjjjj",
// ];

const teamOptions = [
    "Autonomous Software",
    "Developer Experience",
    "Perception",
    "Planning and Reasoning",
    "Control",
    "AI Research",
    "CAD Modeling",
    "Hardware Design and Fabrication",
    "Hardware Interfacing",
    "Server Management",
    "Cybersecurity",
    "Graphic Design",
    "Sponsorship and Fundraising",
    "Marketing and Outreach",
];

interface JobFormProps {
    id: string;
}

const JobForm = ({ id }: JobFormProps) => {
    const defaultForm = {
        id: id,
        urls: [],
        termType: "School",
        inPerson: "Yes",
        devotion: 1,
        team: [],
    };
    const [formData, setFormData] = useState<Record<string, any>>(defaultForm);
    const [error, setError] = useState<string | undefined>(undefined);
    const [formStatus, setFormStatus] = useState(FormStatusCode.Idle);

    const onFormChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e) {
            setFormData((data) => ({ ...data }));
            console.log(formData);
            return;
        }
        setFormData((data) => ({
            ...data,
            [e.target.name]:
                e.target.type === "checkbox"
                    ? e.target.checked
                    : e.target.value,
        }));
    };

    const onFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            if (formStatus === FormStatusCode.Submitting) return;
            setFormStatus(FormStatusCode.Submitting);
            const data = { ...formData };

            const payload = [data["id"]];
            for (const field of fields) {
                console.log("attemping to read", field, data[field]);
                payload.push((data[field] ?? "").toString());
            }

            const res = await fetch("/api/jobpostings/apply", {
                method: "POST",
                body: JSON.stringify({ row: [payload] }),
            });

            if (res.status === 500) {
                setError(undefined);
                setFormStatus(FormStatusCode.Error);
            } else if (res.status === 429) {
                setError("Please wait before sending another request");
                setFormStatus(FormStatusCode.Error);
            } else if (res.status === 200) {
                setFormStatus(FormStatusCode.Success);
                // @ts-ignore
                confetti({
                    // eslint-disable-line no-undef
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                });
            }

            setFormData({ ...defaultForm });
        } catch (e) {
            console.error(e);
            setFormStatus(FormStatusCode.Error);
        }
    };

    return (
        <div className="py-5 text-xl" id="apply">
            <form
                id="job-form"
                onSubmit={(e) => {
                    onFormSubmit(e);
                }}
            >
                <div className="text-wato-white-bone md:gap-x-16 md:gap-y-8 lg:grid lg:grid-cols-2">
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
                        title={titles[8]}
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

                    {/* <FormRange
                        id={fields[11]}
                        title={titles[11]}
                        min={1}
                        max={10}
                        step={1}
                        required={true}
                        descriptions={sliderDescriptions}
                        formData={formData}
                        onFormChange={onFormChange}
                    /> */}
                    {/* dirty workaround to get the clickoutside working */}
                    <div className="col-span-2">
                        <div className="my-2 font-medium">
                            {titles[11]}
                            <span className="text-red-400">*</span>
                        </div>
                        <MultiSelectDropdown
                            formFieldName={fields[11]}
                            formData={formData}
                            setFormData={setFormData}
                            onChange={onFormChange}
                            options={teamOptions}
                            max={3}
                        />
                    </div>
                </div>
                <div className="mt-10 flex flex-row items-center justify-center">
                    <FormSubmit />
                    <FormStatus status={formStatus} errorMessage={error} />
                </div>
            </form>
        </div>
    );
};

export default JobForm;

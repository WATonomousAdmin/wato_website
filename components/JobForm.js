import { useEffect, useState } from "react";

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
    "devotion"
];

const FormInput = ({id, title, type, required, placeholder, formData, onFormChange, min, max, step}) => {
    let element =  
        <input
            className={`bg-blue-100 mb-5 ${type != "checkbox" && "w-64"} p-1`}
            id={id}
            name={id}
            value={formData[id] || ""}
            onChange={onFormChange}
            placeholder={placeholder}
            type={type} required={required}/>;

    if (type === "range")
        element = <element.type {...element.props} {...{
            min: min,
            max: max,
            step: step
        }}/>;

    if (onFormChange === null) {
        const props = {...element.props};
        delete props.value;
        element = <element.type {...props}/>;
    }

    return (
        <div>
            <label htmlFor={id} className="font-medium">{title}</label> {required && <span className="text-red-400">*</span>}
            <br/>
            {element}
        </div>
    );
}

const UrlContainer = ({content, onRemove}) => {
    return (
        <div className="bg-blue-100 border-2 border-solid border-blue-300 h-[1.6em] items-center px-1 mr-1 rounded-md flex">
            <div className="">
                {content}
            </div>
            <div className="text-zinc-500 ml-1 cursor-pointer" onClick={() => {onRemove(content)}}>
                x
            </div>
        </div>
    );
}

const JobForm = ({id}) => {
    const defaultForm = {
        id: id,
        urls: [],
        termType: "School",
        inPerson: false,
        devotion: 1
    };
    const [formData, setFormData] = useState(defaultForm);

    const onFormChange = (e) => {
        setFormData(data => ({...data, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value}));
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const data = {...formData};
        setFormData({...defaultForm});
        console.log("DATA: ", data);
        const payload = [data["id"]];
        for (let field of fields) {
            payload.push((data[field] ?? "").toString());
        }
        fetch("/api/jobpostings/apply", {
            method: "POST",
            body: JSON.stringify({row: [payload]})
        });
    }

    const onSpacePressed = (e) => {
        if (e.key === " ") {
            setFormData(data => ({...data, urls: [...data.urls, e.target.value.trim()].filter(x => x.length > 0)}));
            e.target.value = "";
        }
    }

    const removeURL = (url) => {
        setFormData(data => ({...data, urls: data.urls.filter(x => x != url)}));
    }

    useEffect(()=> {
        document.querySelector("#urls").removeEventListener("keyup", onSpacePressed);

        document.querySelector("#urls").addEventListener("keyup", onSpacePressed);
    },[]);

    return (
        <div className="py-3 text-xl">
            <form id="job-form" onSubmit={e => {onFormSubmit(e)}}>
                <FormInput id={fields[0]} title={"First Name"} type={"input"} required={true} formData={formData} onFormChange={onFormChange}/>
                <FormInput id={fields[1]} title={"Last Name"} type={"input"} required={true} formData={formData} onFormChange={onFormChange}/>
                <FormInput id={fields[2]} title={"Email Address"} type={"input"} required={true} formData={formData} onFormChange={onFormChange}/>
                <FormInput id={fields[3]} title={"Program and Grad Year"} type={"input"} required={true} formData={formData} onFormChange={onFormChange}/>
                <FormInput id={fields[4]} title={"How Did You Hear About This Position?"} required={true} type={"input"} formData={formData} onFormChange={onFormChange}/>
                
                <FormInput id={fields[5]} title={"Social URLs (Linkedin, Github, etc.)"} type={"input"} placeholder={"Press space after a URL"} formData={formData} onFormChange={null}/>
                <div className="-mt-3 min-h-[2em] flex">
                    {
                        formData.urls.map(url => {
                            return <UrlContainer content={url} onRemove={removeURL}></UrlContainer>
                        })
                    }
                </div>

                <FormInput id={fields[6]} title={"Personal Website/Portfolio"} type={"input"} formData={formData} onFormChange={onFormChange}/>
                <FormInput id={fields[7]} title={"Last School Term Completed"} required={true} type={"input"} formData={formData} onFormChange={onFormChange}/>

                <div>
                    <label htmlFor={fields[8]} className="font-medium">Term Type in Summer 2023</label><span className="text-red-400"> *</span>
                </div>
                <select
                    className="bg-blue-100 mb-5"
                    onChange={onFormChange}
                    name={fields[8]}
                    value={formData.termType || "School"}
                    required>
                    <option value="School">School</option>
                    <option value="Coop">Coop</option>
                </select>

                <FormInput id={fields[9]} title={"Will you be in Waterloo in Summer 2023?"} type={"checkbox"} formData={formData} onFormChange={onFormChange}/>
                <FormInput id={fields[10]} title={"Devotion"} type={"range"} required={true} min={1} step={1} max={10} formData={formData} onFormChange={onFormChange}/>
                
                <input
                className="bg-blue-100 font-medium py-1 px-2 rounded-sm cursor-pointer"
                type={"submit"}
                value={"Submit"}/>
            </form>
        </div>
    );
}

export default JobForm;
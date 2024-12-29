import { FormStatusCode } from "../../types";

interface FormStatusProps {
    status: FormStatusCode;
}

const FormStatus = ({ status }: FormStatusProps) => {
    switch (status) {
        case FormStatusCode.Error:
            return (
                <div className="ml-3 text-[#EE1C1C]">
                    Error! Please try again or contact us.
                </div>
            );
        case FormStatusCode.Submitting:
            return (
                <div className="ml-3 text-[#C39938]">
                    Submitting... <i className="fa-solid fa-gear fa-spin"></i>
                </div>
            );
        case FormStatusCode.Success:
            return (
                <div className="ml-3 text-[#47D147]">
                    <div>Success!</div>
                </div>
            );
        default:
            return <div></div>;
    }
};

export default FormStatus;

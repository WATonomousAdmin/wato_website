// -1 Error
// 0 Idle
// 1 Submitting
// 2 Success
const FormStatus = ({ status }) => {
    switch (status) {
        case -1:
            return (
                <div className="ml-3 text-[#EE1C1C]">
                    Error! Please try again or contact us.
                </div>
            );
        case 1:
            return (
                <div className="ml-3 text-[#C39938]">
                    Submitting... <i className="fa-solid fa-gear fa-spin"></i>
                </div>
            );
        case 2:
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

// -1 Error
// 0 Idle
// 1 Submitting
// 2 Success
const FormStatus = ({status}) => {
    switch (status) {
        case -1:
            return(
                <div className="text-[#EE1C1C] ml-3">
                    Error! Please try again or contact us.
                </div>
            );
        case 1:
            return (
                <div className="text-[#C39938] ml-3">
                    Submitting... <i class="fa-solid fa-gear fa-spin"></i>
                </div>
            );
        case 2:
            return (
                <div className="text-[#47D147] ml-3">
                    <div>
                    Success!
                    </div>
                </div>  
            );
        default:
            return (
                <div>

                </div>
            );
    }
}

export default FormStatus;
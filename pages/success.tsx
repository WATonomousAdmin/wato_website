import React, { useEffect, useState } from "react";
import WatoVideo from "../components/WatoVideo";
import { FaArrowAltCircleRight } from "react-icons/fa";
import {
    getPostingSubmitSuccess,
    removePostingSubmitSuccess,
} from "../lib/sessionStorage";
import { useRouter } from "next/router";

// should only be visible when a user successfully submits a job form

const SuccessPage = () => {
    const router = useRouter();
    // dirty way to force the page to wait for useEffect
    const [show, setShow] = useState(false);
    useEffect(() => {
        if (!getPostingSubmitSuccess()) {
            router.push("/");
            return;
        }
        setShow(true);
        removePostingSubmitSuccess();
        // @ts-ignore
        confetti({
            // eslint-disable-line no-undef
            spread: 360,
            ticks: 200,
            gravity: 1,
            decay: 0.94,
            startVelocity: 30,
            particleCount: 100,
            scalar: 1,
        });
    }, []);
    return (
        <div>
            <div className="absolute z-10 h-full w-full bg-black bg-opacity-80" />
            <div className={`absolute w-full`}>
                <WatoVideo />
            </div>
            <div className="relative z-20 flex h-screen flex-col items-center justify-center gap-y-4">
                {show && (
                    <>
                        <h1 className="text-4xl font-bold text-wato-white-bone">
                            Thank you for applying!
                        </h1>
                        <h2 className="text-wato-white-bone">
                            You application has been successfully submitted. We
                            will review your application and contact you as soon
                            as possible.
                        </h2>
                        <a
                            className="text-md flex cursor-pointer items-center font-medium text-wato-teal"
                            href={`/careers#open-roles`}
                        >
                            <p>Back to Postings</p>
                            <FaArrowAltCircleRight className="ml-3 text-2xl" />
                        </a>
                    </>
                )}
            </div>
        </div>
    );
};

export default SuccessPage;

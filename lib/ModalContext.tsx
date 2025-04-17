import { createContext, useState, useContext } from "react";

type ModalStateContext = {
    open: boolean;
    sponsorship: boolean;
    setOpen: (val: boolean) => void;
    setSponsorship: (val: boolean) => void;
};

export const ModalContext = createContext<ModalStateContext | undefined>(
    undefined
);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [open, setOpen] = useState(false);
    const [sponsorship, setSponsorship] = useState(false);

    const toggle = () => setOpen((prev) => !prev);
    return (
        <ModalContext.Provider
            value={{ open, sponsorship, setOpen, setSponsorship }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const ctx = useContext(ModalContext);
    if (!ctx) throw new Error("Not called inside provider");
    return ctx;
};

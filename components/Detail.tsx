interface DetailProps {
    title: string;
    children: React.ReactNode | any;
}

const Detail = ({ title, children }: DetailProps) => {
    return (
        <div
            className={`flex flex-row bg-wato-black-vanta py-5 pl-12 lg:pl-36`}
        >
            <div className="w-48 font-bold uppercase text-wato-teal">
                {title}
            </div>
            <div className="text-wato-grey">{children}</div>
        </div>
    );
};

export default Detail;

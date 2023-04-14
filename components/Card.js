import Link from "next/link";

const Card = ({sz, title, body, cta, buttonLink}) => {
    let size = "w-48";
    switch (sz) {
        case "sq":
            size = "w-64";
            break;
    }
    return (
        <div className={`justify-between bg-slate-200 ${size} m-5 p-5 flex flex-col rounded-sm overflow-y-hidden`}>
            <div className="font-medium text-3xl">
                {title}
            </div>
            <div className="text-2xl my-3">
                {body}
            </div>
            <Link href={buttonLink}>
                <div className="font-medium self-end place-self-end text-white bg-slate-500 py-2 px-4 rounded-md cursor-pointer">
                    {cta}
                </div>
            </Link>

        </div>
    );
}

export default Card;
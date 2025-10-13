import Button from "./Button";

interface CardProps {
    title: string;
    subtitle: string;
    body: string[];
    cta: string;
    buttonLink: string;
}

const Card = ({ title, subtitle, body, cta, buttonLink } : CardProps) => {
    return (
        <div
            className={`flex min-w-full flex-col rounded-md bg-wato-grey-clear p-5 text-lg text-black lg:min-w-0 lg:w-[calc(50%-0.625rem)] overflow-y-hidden`}
        >
            <div className="font-normal text-white">{subtitle.toUpperCase()}</div>
            <div className="py-8 text-4xl font-bold">{title}</div>
            <div className="border-t-2 border-solid border-black pt-2 text-lg font-normal">
                {body.map((entry, idx) => {
                    return <div key={idx}>{entry.toUpperCase()}</div>;
                })}
            </div>
            <div className="flex items-end justify-end">
                {/* <Link href={buttonLink} className="align-top">
          <Button text={cta}/>
        </Link> */}
                {/* py-2 px-7 */}
                <Button text={cta} src={buttonLink} />
            </div>
        </div>
    );
};

/*
            <Link href={buttonLink}>
                <div className="font-medium self-end place-self-end text-white bg-slate-500 py-2 px-4 rounded-md cursor-pointer">
                    {cta}
                </div>
            </Link>

*/

export default Card;

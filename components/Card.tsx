import Button from "./Button.tsx";

const Card = ({ title, subtitle, body, cta, buttonLink }) => {
    return (
        <div
            className={`my-10  mr-10 flex min-w-full flex-col rounded-md bg-wato-blue-water p-5 text-lg lg:w-[30vw] lg:min-w-[30vw]`}
        >
            <div className="font-normal">{subtitle.toUpperCase()}</div>
            <div className="py-8 text-4xl font-bold">{title}</div>
            <div className="border-t-2 border-solid border-zinc-900 pt-2 text-lg font-normal">
                {body.map((entry, idx) => {
                    return <div key={idx}>{entry.toUpperCase()}</div>;
                })}
            </div>
            <div className="flex items-end justify-end">
                {/* <Link href={buttonLink} className="align-top">
          <Button text={cta}/>
        </Link> */}
                {/* py-2 px-7 */}
                <Button text={cta} link={buttonLink} />
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

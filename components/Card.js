import Button from "./Button.js";

const Card = ({ title, subtitle, body, cta, buttonLink }) => {
  return (
    <div
      className={`min-w-full  lg:min-w-[30vw] lg:w-[30vw] text-lg flex flex-col bg-wato-blue-water p-5 my-10 rounded-md mr-10`}
    >
      <div className="font-normal">{subtitle.toUpperCase()}</div>
      <div className="font-bold text-4xl py-8">{title}</div>
      <div className="border-t-2 border-solid border-zinc-900 font-normal text-lg pt-2">
        {body.map((entry) => {
          return <div>{entry.toUpperCase()}</div>;
        })}
      </div>
      <div className="flex items-end justify-end">
        {/* <Link href={buttonLink} className="align-top">
          <Button text={cta}/>
        </Link> */}
          {/* py-2 px-7 */}
          <Button text={cta} link={buttonLink}/>
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

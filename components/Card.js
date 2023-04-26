import Link from "next/link";

const Card = ({ sz, title, subtitle, body, cta, buttonLink }) => {
  let size = "w-48";
  switch (sz) {
    case "sq":
      size = "w-64";
      break;
  }
  return (
    <div
      className={`min-w-full  lg:min-w-[30vw] lg:w-[30vw] text-lg flex flex-col bg-zinc-100 p-5 my-10 rounded-md mr-10`}
    >
      <div className="font-normal">{subtitle.toUpperCase()}</div>
      <div className="font-bold text-4xl py-8">{title}</div>
      <div className="border-t-2 border-solid border-zinc-900 font-normal text-lg pt-2">
        {body.map((entry) => {
          return <div>{entry.toUpperCase()}</div>;
        })}
      </div>
      <div className="flex items-end justify-end">
        <Link href={buttonLink} className="align-top">
          {/* py-2 px-7 */}
          <div className="align-top font-medium text-2xl text-zinc-100 bg-[#1F5D96] rounded-md flex items-center pb-2 pt-1 px-3">
            {cta}
          </div>
        </Link>
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

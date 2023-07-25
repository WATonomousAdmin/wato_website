import Link from "next/link";

const Button = ({ text, link, anchor, onClick }) => {
  const buttonElement = (
    <span className="flex w-fit items-center cursor-pointer rounded-md bg-wato-blue px-3 pb-2 pt-1 align-top text-2xl font-medium text-zinc-100">
      {text}
    </span>
  );

  if (link || anchor) {
    return (
      <p>
        <Link href={`${link ?? anchor}`}>{buttonElement}</Link>
      </p>
    );
  }

  return <div onClick={onClick}>{buttonElement}</div>;
};

export default Button;

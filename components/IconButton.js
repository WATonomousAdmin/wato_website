const IconButton = ({ content, onClick, blue }) => {
  return (
    <div
      className={`ml-2 flex h-12 w-12 cursor-pointer items-center justify-center rounded-md ${
        blue ? "bg-[#82A5C4]" : "bg-[#E6E2DF87]"
      } p-2 text-black`}
      onClick={onClick}
    >
      <i className={`fa-brands ${content} text-3xl`} />
    </div>
  );
};

export default IconButton;

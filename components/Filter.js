import Button from "./Button";

const Filter = ({ placeholder, filters, setFilters }) => {
    return (
        <div className="flex w-screen items-center bg-wato-blue-gloomy bg-opacity-40 px-5 py-12 sm:px-16 lg:px-60">
            <input
                className="mr-5 w-full border-l-[20px] border-white bg-search bg-left bg-no-repeat bg-origin-padding py-5 pl-14 outline-none"
                type="text"
                id="filter"
                value={filters}
                onChange={(e) => setFilters(e.target.value)}
                placeholder={placeholder}
            />
            <Button text="Clear" onClick={() => setFilters("")} />
        </div>
    );
};

export default Filter;

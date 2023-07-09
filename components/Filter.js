import Button from "./Button";

const Filter = ({placeholder, filters, setFilters}) => {
    return (
        <div className="sm:px-16 lg:px-60 py-12 w-screen flex items-center bg-[#BCCEE066]">
            <input
                className="w-full pl-14 py-5 mr-5 bg-search bg-no-repeat bg-left bg-origin-padding border-white border-l-[20px] outline-none"
                type="text"
                id="filter"
                value={filters}
                onChange={(e) => setFilters(e.target.value)}
                placeholder={placeholder}
            />
            <Button text="Clear" onClick={() => setFilters("")}/>
        </div>
    );
}

export default Filter;
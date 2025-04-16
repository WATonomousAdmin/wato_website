import Button from "./Button";

interface FilterProps {
    placeholder: string;
    filters?: string | string[];
    setFilters: any;
}

const Filter = ({ placeholder, filters, setFilters }: FilterProps) => {
    return (
        <div className="flex w-screen items-center bg-black px-5 py-12 sm:px-16 lg:px-60">
            <input
                className="mr-5 w-full rounded-md border-l-[20px] border-white bg-search bg-left bg-no-repeat py-3 pl-10 text-sm outline-none"
                type="text"
                id="filter"
                value={filters}
                onChange={(e) => setFilters(e.target.value)}
                placeholder={placeholder}
                style={{ backgroundSize: "25px" }}
            />
            <Button
                text="Clear"
                color="bg-wato-teal text-black"
                onClick={() => setFilters("")}
            />
        </div>
    );
};

export default Filter;

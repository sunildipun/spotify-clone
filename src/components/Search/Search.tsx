import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
    return (
        <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-white">
            <FaSearch />
        </span>
        <input className=" placeholder:text-slate-400 block bg-neutral-800 w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
        </label>
    )
}

export default SearchInput;
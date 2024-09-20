import { HiOutlineSearch } from "react-icons/hi";

function SearchBar() {
  return (
    <div className="flex items-center border border-[#ffffff63] px-5 py-1 rounded-full backdrop-blur-sm gap-5">
      <input type="text"  className="bg-transparent focus:outline-none px-5 py-1 text-[#FFFFFF99]" placeholder="Search movies,series..."/>
      <HiOutlineSearch className="text-[#ffffff5b] h-[20px] w-[20px]"/>
    </div>
  );
}

export default SearchBar;

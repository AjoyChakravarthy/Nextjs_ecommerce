import { SearchInputProps } from "@/app/lib/definition";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const SearchInput: React.FC<SearchInputProps> = ({
   searchQuery,
   setSearchQuery,
   handleSearch,
}) => {
   return (
      <form
         onSubmit={handleSearch}
         className="flex gap-2 border-none bg-[#F1F0E8] w-full h-full p-3"
      >
         <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={
               "flex-1 border border-[#737373]  md:bg-white rounded-md text-black md:text-slate-900 text-base transition-all duration-300 !outline-none p-2 "
            }
         />
         <button
            type="submit"
            className=" border border-[#737373] text-[#737373]  p-2 rounded-full flex items-center justify-center outline-none bg-white"
         >
            <SearchOutlinedIcon className="text-4xl" />
         </button>
      </form>
   );
};

export default SearchInput;

import React, { useState } from "react";
import SearchInput from "./searchInput";
import { useSearch } from "../../hooks/useSearch";
import { SearchResultPage } from "./searchResultPage";

const SearchBar: React.FC = () => {
   const { searchQuery, setSearchQuery, searchResults, handleSearch } =
      useSearch();
   const [showResults, setShowResults] = useState(true);

   const handleClose = () => {
      setShowResults(false);
   };

   const handleSearchWithVisibility = (event: React.FormEvent) => {
      handleSearch(event);
      setShowResults(true);
   };

   return (
      <>
         <SearchInput
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearchWithVisibility}
         />
         {showResults && searchResults.length > 0 && (
            <div>
               <SearchResultPage
                  searchResults={searchResults}
                  onClose={handleClose}
               />
            </div>
         )}
      </>
   );
};

export default SearchBar;

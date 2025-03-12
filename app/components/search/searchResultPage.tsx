import React from "react";
import { SearchResult } from "./searchResult";
import { useSearch } from "../../hooks/useSearch";

interface SearchResultProps {
   searchResults: {
      id: number;
      index: number;
      title: string;
      thumbnail: string;
      price: string;
      rating: number;
   }[];
   onClose: () => void;
}

export const SearchResultPage: React.FC<SearchResultProps> = ({
   searchResults,
   onClose,
}) => {
   const { clearSearch } = useSearch();

   const handleClose = () => {
      onClose();
      clearSearch();
      console.log("handle close");
   };

   return (
      <div className="container mx-auto left-0 right-0 ">
         <SearchResult
            searchResults={searchResults}
            onClose={handleClose}
         />
      </div>
   );
};

import React, { useState } from "react";
import { getProductsBySearch } from "../lib/data";

interface Product {
   id: number;
   title: string;
   thumbnail?: string;
   price?: number;
   rating?: number;
}
export const useSearch = () => {
   const [searchQuery, setSearchQuery] = useState("");
   const [searchResults, setSearchResults] = useState<
      {
         id: number;
         index: number;
         title: string;
         thumbnail: string;
         price: string;
         rating: number;
      }[]
   >([]);

   const handleSearch = async (event: React.FormEvent) => {
      event.preventDefault();
      console.log("Fetching data");

      try {
         const data = await getProductsBySearch(searchQuery);
         console.log(data);

         if (data && data.products) {
            const updatedResults = data.products.map(
               (product: Product, index: number) => ({
                  id: product.id,
                  index: index,
                  title: product.title,
                  thumbnail: product.thumbnail || "default-thumbnail.jpg",
                  price: product.price || "0.00",
                  rating: product.rating || 0,
               })
            );
            setSearchResults(updatedResults);
         } else {
            setSearchResults([]);
         }
      } catch (error) {
         console.error("Error fetching search result", error);
      }
   };
   const clearSearch = () => {
      setSearchResults([]);
      setSearchQuery("");
      console.log("Search Cleared");
   };
   return {
      searchQuery,
      setSearchResults,
      searchResults,
      setSearchQuery,
      handleSearch,
      clearSearch,
   };
};

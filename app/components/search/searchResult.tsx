import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import ProductGridLayout from "../products/productGridLayout";
import { ProductCardMini } from "../products/productCardSmall";
import { useRouter } from "next/navigation";
import CancelIcon from "@mui/icons-material/Cancel";
import TuneIcon from "@mui/icons-material/Tune";

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

export const SearchResult: React.FC<SearchResultProps> = ({
   searchResults,
   onClose,
}) => {
   const [isMounted, setIsMounted] = useState(false);
   const isLargeScreen = useMediaQuery({ query: "(min-width: 767px)" });

   const router = useRouter();
   const handleProductClick = (id: number) => {
      onClose();
      router.push(`/products/${id}`);
   };

   useEffect(() => {
      setIsMounted(true);
   }, []);

   if (!isMounted) {
      return null;
   }

   return (
      <div className="bg-white text-black absolute top-16 md:mt-28 left-0 right-0 w-full max-h-[90vh] overflow-y-scroll">
         <div>
            {searchResults.length > 0 && (
               <div className="flex justify-between items-center text-sm font-semibold sticky top-0 bg-white z-10 p-1">
                  <h1 className="my-2 uppercase">Search Results</h1>
                  <div className="flex gap-2">
                     <button>
                        <TuneIcon />
                     </button>
                     <button onClick={onClose}>
                        <CancelIcon />
                     </button>
                  </div>
               </div>
            )}
            {searchResults.length > 0 &&
               (isLargeScreen ? (
                  <ProductGridLayout
                     products={searchResults}
                     onProductClick={handleProductClick}
                  />
               ) : (
                  searchResults.map((product) => (
                     <ProductCardMini
                        key={product.id}
                        index={product.index}
                        id={product.id}
                        title={product.title}
                        thumbnail={product.thumbnail}
                        price={product.price}
                        rating={product.rating}
                        onClick={() => handleProductClick(product.id)}
                     />
                  ))
               ))}
         </div>
      </div>
   );
};

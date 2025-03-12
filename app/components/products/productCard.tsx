import React from "react";
import Image from "next/legacy/image";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import { useRouter } from "next/navigation";
import StarRating from "./starRating";

interface ProductCardProps {
   id: number;
   title: string;
   price: string;
   thumbnail: string;
   index: number;
   rating: number;
   onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
   id,
   title,
   price,
   thumbnail,
   rating,
   onClick,
}) => {
   return (
      <div
         onClick={onClick}
         key={id}
         className={`relative flex flex-col items-center gap-0 md:gap-4 p-4 rounded-lg cursor-pointer justify-between 
             h-50 md:h-90 row-span-2 col-span bg-zinc-50 shadow-md `}
      >
         {" "}
         <div className="absolute inset-0 bg-slate-700 opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-lg z-10"></div>
         <div className="h-[160px] w-[160px] relative">
            <Image
               src={thumbnail}
               alt={title}
               layout="fill"
               objectFit="cover"
               className="rounded-lg p-2"
            />
         </div>
         <div className="flex flex-col gap-4 w-full">
            <h2 className="text-[11px] md:text-lg font-semibold">{title}</h2>
            <p className="text-gray-600 text-[12px] md:text-base font-bold">
               ${price}
            </p>
            <div className="flex items-center justify-between w-full  gap-4">
               <button className="bg-gray-200 text-black p-1 md:p-2 rounded-lg">
                  <AddShoppingCartIcon />
               </button>
               <button className="bg-gray-200 text-black p-1 md:p-2 rounded-lg">
                  <FavoriteBorderIcon />
               </button>
            </div>
            <div className="flex items-center text-[8px] md:text-lg gap-2">
               Rating: <StarRating rating={rating} />
            </div>
         </div>
      </div>
   );
};

export default ProductCard;

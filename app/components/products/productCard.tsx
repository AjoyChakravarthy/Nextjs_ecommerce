import React from "react";
import Image from "next/legacy/image";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarRating from "./starRating";
import { ProductCardProps } from "@/app/lib/definition";

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
         className={`relative flex flex-col items-center gap-0 md:gap-4 p-2 cursor-pointer justify-between 
             h-fit md:h-[420px] row-span-2 col-span  drop-shadow-lg bg-[#EEEEEE]`}
      >
         {" "}
         <div className="absolute inset-0 bg-slate-700 opacity-0 hover:opacity-10 transition-opacity duration-300  z-10 "></div>
         <div className="h-[90px] w-[90px] md:h-[180px] md:w-[180px] relative">
            <Image
               src={thumbnail}
               alt={title}
               layout="fill"
               objectFit="cover"
               className="rounded-lg p-2 shadow-lg"
            />
         </div>
         <div className="flex flex-col gap-4 w-full p-2 h-[50%]">
            <h2 className="text-[11px] md:text-lg font-semibold text-gray-700 ">
               {title}
            </h2>
            <p className="text-gray-600 text-[12px] md:text-base font-bold">
               ${price}
            </p>
            <div className="flex items-center justify-between w-full  gap-4">
               <button className="bg-gray-200 text-black p-1 md:p-2 rounded-lg drop-shadow-xl ">
                  <AddShoppingCartIcon />
               </button>
               <button className="bg-gray-200 text-black p-1 md:p-2 rounded-lg drop-shadow-xl">
                  <FavoriteBorderIcon />
               </button>
            </div>
            <div className="flex text-gray-700 items-center text-[10px] md:text-lg gap-2">
               Rating: <StarRating rating={rating} />
            </div>
         </div>
      </div>
   );
};

export default ProductCard;

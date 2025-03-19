import Image from "next/legacy/image";
import React from "react";
import StarRating from "./starRating";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ProductCardMIniProps } from "@/app/lib/definition";

export const ProductCardMini: React.FC<ProductCardMIniProps> = ({
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
         className="w-full h-fit items-center flex gap-2 my-6 p-2 rounded-md bg-white shadow-md "
      >
         <div className="w-[30%]  rounded-md p-2">
            <Image
               src={thumbnail}
               alt="title"
               width={400}
               height={400}
               className="rounded-lg"
               objectFit="cover"
            />
         </div>
         <div className="font-semibold text-[15px] flex flex-col gap-2 w-[70%] my-2">
            <h1>{title}</h1>
            <h2 className="opacity-50">$:{price}</h2>
            <StarRating rating={rating} />
            <div className="text-[12px] flex gap-4 justify-stretch ">
               <button>View</button>
               <button>Add to cart</button>
               <button>
                  <FavoriteBorderIcon />
               </button>
            </div>
         </div>
      </div>
   );
};

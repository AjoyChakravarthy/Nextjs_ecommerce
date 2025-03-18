"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface ListCardProps {
   title: string;
   slug: string;
}
const ListCard: React.FC<ListCardProps> = ({ title, slug }) => {
   const router = useRouter();
   const handleClick = () => {
      router.push(`/category/${slug}`);
   };
   return (
      <div className="bg-inherit bg-opacity-10 rounded-sm flex items-center h-16 my-2 shadow-lg cursor-pointer text-[#F3EEEA]">
         <h2
            className="text-xs md:text-base font-light mx-2 overflow-hidden"
            onClick={handleClick}
         >
            {title}
         </h2>
      </div>
   );
};
export default ListCard;

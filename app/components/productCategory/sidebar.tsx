"use client";
import React from "react";
import { useCategories } from "@/app/hooks/useCategory";
import ListCard from "./listCard";

export const Sidebar: React.FC = () => {
   const categories = useCategories();
   return (
      <div className=" overflow-x-auto h-[100vh] bg-[#222831] shadow-lg text-[#F3EEEA]">
         <div className="p-2 mt-2">
            <h2 className="font-semibold text-sm md:text-lg text-[#F3EEEA] drop-shadow-lg">
               Categories
            </h2>
            {categories.map((category) => (
               <ListCard
                  key={category.slug}
                  title={category.name}
                  slug={category.slug}
               />
            ))}
         </div>
      </div>
   );
};

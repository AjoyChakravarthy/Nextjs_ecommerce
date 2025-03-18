import React from "react";
import StoreCard from "./storeCard";
import { popularCategories } from "@/app/lib/placeholder-data";

export const PopularStore = () => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
         {popularCategories.map((category) => (
            <StoreCard
               key={category.id}
               name={category.name}
               image={category.image}
               description={category.description}
            />
         ))}
      </div>
   );
};

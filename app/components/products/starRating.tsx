import { StarRatingProps } from "@/app/lib/definition";
import React from "react";

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
   const stars = [];
   for (let i = 0; i < 5; i++) {
      stars.push(
         <span
            key={i}
            className={i < rating ? "text-yellow-500" : "text-gray-300"}
         >
            ★
         </span>
      );
   }
   return <div className="flex">{stars}</div>;
};

export default StarRating;

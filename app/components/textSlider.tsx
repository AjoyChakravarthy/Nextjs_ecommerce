import React from "react";
import "../styles/styles.css";
const TextSlider = () => {
   return (
      <div className="w-full overflow-hidden whitespace-nowrap py-1 relative bg-transparent/10">
         <div className="flex gap-[400px] w-max scroll-animation">
            <div className="flex gap-[400px] text-[12px] font-medium">
               <span>NEW ARRIVALS - SALE - LATEST TRENDS - SHOP NOW</span>
               <span>FREE SHIPPING ON ORDERS ABOVE - SHOP NOW</span>
            </div>
            <div className="flex gap-[400px] text-[12px] font-medium">
               <span>NEW ARRIVALS - SALE - LATEST TRENDS - SHOP NOW</span>
               <span>FREE SHIPPING ON ORDERS ABOVE - SHOP NOW</span>
            </div>
         </div>
      </div>
   );
};

export default TextSlider;

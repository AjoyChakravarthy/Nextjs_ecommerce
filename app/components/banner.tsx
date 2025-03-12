import React from "react";

interface BannerProps {
   category: string;
}

const categoryBackgrounds: { [key: string]: string } = {
   beauty: "/images/beauty-banner.jpg",
   "mens-shirts": "/images/mens-shirts-banner.jpg",
   "mens-shoes": "/images/shoe2.jpeg",
   "mens-watches": "/images/mens-watches-banner.jpg",
   sunglasses: "/images/sunglasses-banner.jpg",
   tops: "/images/tops-banner.jpg",
   "womens-bags": "/images/womens-bags-banner.jpg",
   "womens-dresses": "/images/womens-dresses-banner.jpg",
   "womens-jewellery": "/images/womens-jewellery-banner.jpg",
   "womens-shoes": "/images/shoe1.jpeg",
   "womens-watches": "/images/womens-watches-banner.jpg",
};

const Banner: React.FC<BannerProps> = ({ category }) => {
   const bannerImage = categoryBackgrounds[category] || "";

   return (
      <div
         className="flex items-center flex-col md:flex-row justify-evenly md:justify-between p-6 h-[400px] text-white md:gap-4 md:my-8 z-10 "
         style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bannerImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
         }}
      >
         <div className="text-3xl md:text-7xl  font-bold ">
            {category.toUpperCase()}
         </div>
         <div className="flex flex-col gap-4 md:text-end text-center">
            <h1 className="text-3xl">Exiting Offers On Products</h1>
            <p className="text-base">Most trending designs </p>
         </div>
      </div>
   );
};

export default Banner;

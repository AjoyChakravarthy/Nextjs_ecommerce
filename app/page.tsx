"use client";
import ProductGrid from "./components/products/productGrid";
import PrimaryButton from "./components/button";
import { useRouter } from "next/navigation";

export default function Home() {
   const router = useRouter();
   const handleProductClick = (id: number) => {
      router.push(`/products/${id}`);
   };

   return (
      <div>
         <div
            className=" h-[90vh] flex  flex-col md:flex-row  items-center justify-center  gap-6 p-8"
            style={{
               background:
                  "linear-gradient(to bottom, #434d51, #6e7579, #9c9fa3, #cccccf, #fcfcfc)",
            }}
         >
            <div className="text-white flex flex-col gap-4 z-10 ">
               <h1 className="text-4xl lg:text-6xl w-40 font-semibold ">
                  NEW RELEASE
               </h1>
               <p className="text-base md:text-lg">
                  Discover the latest collection of clothing and accessories
               </p>
               <PrimaryButton label="SHOP NOW" />
            </div>
            <div className="bg-[url(/background/bg_2.jpg)]  justify-end  bg-cover bg-top bg-no-repeat h-[350] md:h-[650px] md:w-[50%] flex flex-col  gap-8  shadow-2xl text-white rounded-lg p-4 absolute md:relative m-2 left-0 right-0  "></div>
         </div>
         <ProductGrid
            category="mens-shoes"
            onProductClick={handleProductClick}
         />
         <ProductGrid
            category="womens-shoes"
            onProductClick={handleProductClick}
         />
      </div>
   );
}

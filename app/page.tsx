"use client";
import ProductGrid from "./components/products/productGrid";
import PrimaryButton from "./components/button";
import TextSlider from "./components/textSlider";
import { useRouter } from "next/navigation";

export default function Home() {
   const router = useRouter();
   const handleProductClick = (id: number) => {
      router.push(`/products/${id}`);
   };

   return (
      <div>
         <div className="hidden md:block">
            <TextSlider />
         </div>
         <div className=" h-full flex  flex-col md:flex-row  items-center justify-center gap-6 mt-10 m-6">
            <div className="bg-[url(/background/bg_2.jpg)] justify-end bg-cover bg-top bg-no-repeat h-[350] md:h-[750px] w-full flex flex-col  gap-8 shadow-xl md:shadow-none text-white rounded-lg p-4 ">
               <h1 className="text-4xl lg:text-6xl w-40 underline decoration-sky-500 font-semibold ">
                  NEW RELEASE
               </h1>
               <p className="text-base md:text-lg">
                  Discover the latest collection of clothing and accessories
               </p>
               <PrimaryButton label="SHOP NOW" />
            </div>
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

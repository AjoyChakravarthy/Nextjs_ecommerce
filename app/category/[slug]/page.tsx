"use client";
import React, { Suspense } from "react";
import { useParams, useRouter } from "next/navigation";
import ProductGridLayout from "@/app/components/products/productGridLayout";
import { ProductGridSkeleton } from "@/app/components/skeletons";
import { useProductsByCategory } from "@/app/hooks/useProductByCategory";
import CancelIcon from "@mui/icons-material/Cancel";
import TuneIcon from "@mui/icons-material/Tune";
import Sidebar from "@/app/components/filter/sidebar";

interface CategoryPageProps {
   params: { slug: string };
}

const CategoryPage: React.FC<CategoryPageProps> = () => {
   const params = useParams();
   const { slug } = params;
   const router = useRouter();
   const products = useProductsByCategory(slug);
   if (typeof slug !== "string") {
      return <div>Error:Invalid Category Slug</div>;
   }

   const handleProductClick = (id: number) => {
      router.push(`/products/${id}`);
   };

   return (
      <div>
         <div className="flex justify-between md:hidden text-white p-2">
            <button>
               <TuneIcon />
            </button>
            <button>
               <CancelIcon />
            </button>
         </div>
         <div className="flex ">
            <div className="w-[20%] hidden md:block">
               <Sidebar />
            </div>
            <div className="w-full mt-2">
               <h1 className="text-base md:text-2xl font-bold text-center mb-4 text-[#222831] p-4">
                  Products in {slug.toUpperCase()}
               </h1>
               <div className="text-end p-2 ">{/* <SortBy /> */}</div>
               <Suspense fallback={<ProductGridSkeleton />}>
                  <ProductGridLayout
                     products={products}
                     onProductClick={handleProductClick}
                  />
               </Suspense>
            </div>
         </div>
      </div>
   );
};

export default CategoryPage;

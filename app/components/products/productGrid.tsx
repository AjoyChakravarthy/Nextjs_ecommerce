import React, { useEffect, useState } from "react";
import { getProductsByCategory } from "@/app/lib/data";
import Banner from "../banner";
import PrimaryButton from "../button";
import ProductGridLayout from "./productGridLayout";

interface Product {
   id: number;
   title: string;
   price: string;
   thumbnail: string;
   rating: number;
   index: number;
}
interface ProductGridProps {
   category: string;
   onProductClick: (id: number) => void;
}

export default function ProductGrid({
   category,
   onProductClick,
}: ProductGridProps) {
   const [products, setProducts] = useState<Product[]>([]);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      async function fetchProducts() {
         try {
            const products = await getProductsByCategory(category);
            setProducts(products);
         } catch (err) {
            setError((err as Error).message);
         } finally {
            setLoading(false);
         }
      }
      fetchProducts();
   }, [category]);

   if (loading)
      return <p className="text-center text-gray-500">Loading products...</p>;
   if (error) return <p className="text-center text-red-500">{error}</p>;

   return (
      <div className="">
         <div className="py-4">
            <Banner category={category} />
         </div>
         <ProductGridLayout
            products={products}
            onProductClick={onProductClick}
         />
         <div className="flex items-center justify-center ">
            <PrimaryButton label="Show more items" />
         </div>
      </div>
   );
}

"use client";
import { getProductById } from "@/app/lib/data";
import { useState } from "react";
import { useEffect } from "react";
import ProductImages from "@/app/components/products/productImages";
import { useParams } from "next/navigation";
import ProductInfo from "@/app/components/products/productInfo";
import ProductReviews from "@/app/components/products/productReviews";

interface Review {
   rating: number;
   comment: string;
   date: string;
   reviewerName: string;
   reviewerEmail: string;
}
interface Product {
   id: number;
   title: string;
   thumbnail: string;
   images: string[];
   price: string;
   description: string;
   rating: number;
   category: string;
   brand: string;
   warrantyInformation: string;
   returnPolicy: string;
   reviews: Review[];
}

const quantityOptions = [
   { value: 1, label: 1 },
   { value: 2, label: 2 },
   { value: 4, label: 4 },
   { value: 5, label: 5 },
   { value: 6, label: 6 },
];
const sizeOptions = [
   { value: "S", label: "Small" },
   { value: "M", label: "Medium" },
   { value: "L", label: "Large" },
];

export default function ProductDetails() {
   const params = useParams();
   const [product, setProduct] = useState<Product | null>(null);
   const [selectQuantity, setSelectQuantity] = useState<number | string>("");
   const [selectSize, setSelectSize] = useState<number | string>("");
   const [error, setError] = useState<string | null>(null);
   const [view, setView] = useState<"details" | "review">("details");

   useEffect(() => {
      async function fetchProduct() {
         try {
            const product = await getProductById(Number(params.id));
            setProduct(product);
         } catch (error) {
            setError((error as Error).message);
         }
      }
      fetchProduct();
   }, [params.id]);

   if (!product) {
      return <p className="text-center text-red-500"> Product not found</p>;
   }
   const handleQuantityChange = (value: number | string) => {
      setSelectQuantity(value);
   };
   const handleSizeChange = (value: number | string) => {
      setSelectSize(value);
   };
   const toggleView = (view: "details" | "review") => {
      setView(view);
   };

   return (
      <div className="container p-4 mx-auto mt-6 h-[100vh]:">
         <div className="mx-auto container md:flex  items-center justify-between gap-6">
            <ProductImages
               thumbnail={product.thumbnail}
               images={product.images}
               title={product.title}
            />
            <ProductInfo
               title={product.title}
               price={product.price}
               rating={product.rating}
               category={product.category}
               description={product.description}
               selectQuantity={selectQuantity}
               selectSize={selectSize}
               quantityOptions={quantityOptions}
               sizeOptions={sizeOptions}
               onQuantityChange={handleQuantityChange}
               onSizeChange={handleSizeChange}
            />
         </div>
         <div>
            <div className=" flex gap-8 text-sm md:text-base lg:text-lg p-2 font-bold underline ">
               <button
                  onClick={() => toggleView("details")}
                  className={
                     view === "details" ? "text-black" : "text-[#796B6B]"
                  }
               >
                  Details
               </button>
               <button
                  onClick={() => toggleView("review")}
                  className={
                     view === "review" ? "text-black" : "text-[#796B6B]"
                  }
               >
                  Reviews
               </button>
            </div>
            {view === "details" && (
               <div className="text-xs md:text-base p-4 flex flex-col gap-4">
                  <p>
                     Brand: <b>{product.brand}</b>
                  </p>
                  <p>Description: {product.description}</p>
                  <p>Warranty: {product.warrantyInformation}</p>
                  <p>Return Policy: {product.returnPolicy}</p>
               </div>
            )}
            {view === "review" && <ProductReviews reviews={product.reviews} />}
         </div>
      </div>
   );
}

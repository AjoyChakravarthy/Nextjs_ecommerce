import React, { useState } from "react";
import ProductCard from "./productCard";
import BasicPagination from "../filter/pagination";
import { ProductGridLayoutProps } from "@/app/lib/definition";

const ProductGridLayout: React.FC<ProductGridLayoutProps> = ({
   products,
   onProductClick,
}) => {
   const [page, setPage] = useState(1);
   const itemsPerPage = 5;
   const totalPages = Math.ceil(products.length / itemsPerPage);

   const startIndex = (page - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const paginatedProducts = products.slice(startIndex, endIndex);

   return (
      <div className="container mx-auto bg-inherit">
         <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 container mx-auto bg-inherit">
            {paginatedProducts.map((product) => (
               <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  thumbnail={product.thumbnail}
                  index={product.index}
                  rating={product.rating}
                  onClick={() => onProductClick(product.id)}
               />
            ))}
         </div>
         <BasicPagination
            page={page}
            setPage={setPage}
            totalPages={totalPages}
         />
      </div>
   );
};

export default ProductGridLayout;

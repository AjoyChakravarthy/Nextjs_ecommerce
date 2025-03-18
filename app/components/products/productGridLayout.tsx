import React from "react";
import ProductCard from "./productCard";

interface Product {
   id: number;
   title: string;
   price: number;
   thumbnail: string;
   rating: number;
   index: number;
}

interface ProductGridLayoutProps {
   products: Product[];
   onProductClick: (id: number) => void;
}

const ProductGridLayout: React.FC<ProductGridLayoutProps> = ({
   products,
   onProductClick,
}) => {
   return (
      <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 container mx-auto bg-inherit">
         {products.map((product) => (
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
   );
};

export default ProductGridLayout;

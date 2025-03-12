import PrimaryButton from "../button";
import BasicSelect from "../select";
import StarRating from "./starRating";

interface ProductInfoProps {
   title: string;
   price: string;
   rating: number;
   category: string;
   description: string;
   selectQuantity: string | number;
   selectSize: string | number;
   quantityOptions: { value: string | number; label: string | number }[];
   sizeOptions: { value: string | number; label: string | number }[];
   onQuantityChange: (value: string | number) => void;
   onSizeChange: (value: string | number) => void;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
   title,
   price,
   rating,
   category,
   description,
   selectQuantity,
   selectSize,
   quantityOptions,
   sizeOptions,
   onQuantityChange,
   onSizeChange,
}) => {
   return (
      <div className=" py-4 flex flex-col gap-4 md:gap-8 h-[100%] md:w-[50%]">
         <div className="flex items-end justify-between">
            <h1 className="font-bold text-base md:text-2xl lg:text-4xl">
               {title}
            </h1>
            <div className="flex items-center gap-1">
               <p className="line-through font-thin text-[16px] md:text-2xl text-red-400">
                  $:{price}
               </p>
               <p className="text-[20px] md:text-3xl text-[#796B6B]">
                  <b>$:{price}</b>
               </p>
            </div>
         </div>
         <div className="flex flex-col gap-2 text-base md:text-3xl">
            <StarRating rating={rating} />
            <p className="text-xs md:text-base">{description}</p>
         </div>
         <div className="flex items-center justify-between ">
            <BasicSelect
               label="Quantity"
               value={selectQuantity}
               options={quantityOptions}
               onChange={onQuantityChange}
            />
            <BasicSelect
               label="Size"
               value={selectSize}
               options={sizeOptions}
               onChange={onSizeChange}
            />
         </div>
         <PrimaryButton label={"Buy Now"} />
         <p className="text-xs md:text-base">Category:{category}</p>
      </div>
   );
};
export default ProductInfo;

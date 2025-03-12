import Image from "next/legacy/image";

interface ProductImagesProps {
   thumbnail: string | null;
   images: string[] | null;
   title: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({
   thumbnail,
   images,
   title,
}) => {
   const [image1, image2, image3] = images || [];

   return (
      <div className="md:w-[50%] flex flex-col items-center gap-4">
         <div>
            <Image
               src={image1 || "/images/default.png"}
               alt={title}
               width={627}
               height={392}
               className="rounded-lg shadow-lg"
               priority
               unoptimized
               objectFit="contain"
            />
         </div>
         <div className="flex w-full p-4 justify-between shadow-lg rounded-lg">
            <Image
               src={image2 || "/images/default.png"}
               alt={title}
               width={90}
               height={90}
               className="rounded-lg "
               unoptimized
            />
            <Image
               src={thumbnail || "/images/default.png"}
               alt={title}
               width={90}
               height={90}
               className="rounded-lg"
               unoptimized
            />
            <Image
               src={image3 || "/images/default.png"}
               alt={title}
               width={90}
               height={90}
               className="rounded-lg"
               unoptimized
            />
         </div>
      </div>
   );
};

export default ProductImages;

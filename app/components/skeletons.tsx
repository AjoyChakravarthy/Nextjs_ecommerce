import CircularSpinner from "./spinner";

export function SidebarSkeleton() {
   return (
      <div className=" overflow-x-auto h-[100vh] bg-[#222831]">
         <div className="p-2 mt-2">
            <h2 className="font-semibold text-sm md:text-lg">Categories</h2>
            <div className="flex justify-center items-center h-[90vh]">
               <CircularSpinner />
            </div>
         </div>
      </div>
   );
}

const ProductCardSkeleton = () => (
   <div className="animate-pulse bg-gray-300 rounded-lg h-60 w-full"></div>
);

export function ProductGridSkeleton() {
   return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 container mx-auto bg-inherit">
         {Array.from({ length: 10 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
         ))}
      </div>
   );
}

export const ProductSkeleton = () => {
   return (
      <div className="container p-4 mx-auto mt-6 h-[100vh] animate-pulse">
         <div className="mx-auto container md:flex items-center justify-between gap-6">
            <div className="w-full h-80 bg-gray-300 rounded-lg"></div>
            <div className="flex flex-col gap-4 w-full">
               <div className="h-6 bg-gray-300 w-3/4 rounded"></div>
               <div className="h-6 bg-gray-300 w-1/2 rounded"></div>
               <div className="h-4 bg-gray-300 w-1/3 rounded"></div>
               <div className="h-4 bg-gray-300 w-1/3 rounded"></div>
               <div className="h-4 bg-gray-300 w-1/4 rounded"></div>
            </div>
         </div>
         <div className="mt-6">
            <div className="flex gap-8 text-sm md:text-base lg:text-lg p-2 font-bold">
               <div className="h-6 bg-gray-300 w-20 rounded"></div>
               <div className="h-6 bg-gray-300 w-20 rounded"></div>
            </div>
            <div className="text-xs md:text-base p-4 flex flex-col gap-4">
               <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
               <div className="h-4 bg-gray-300 w-full rounded"></div>
               <div className="h-4 bg-gray-300 w-1/3 rounded"></div>
               <div className="h-4 bg-gray-300 w-1/2 rounded"></div>
            </div>
         </div>
      </div>
   );
};

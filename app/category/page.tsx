import React, { Suspense } from "react";
import { SidebarSkeleton } from "../components/skeletons";
import { Sidebar } from "../components/productCategory/sidebar";
import { PopularStore } from "../components/productCategory/categoryStore";

export default function Page() {
   return (
      <div className="flex h-full ">
         <div className="w-28 md:w-[300px] ">
            <Suspense fallback={<SidebarSkeleton />}>
               <Sidebar />
            </Suspense>
         </div>
         <div className="w-full p-2 mt-2 h-[100vh] overflow-y-scroll">
            <h1 className="font-semibold text-sm">Popular Stores</h1>
            <PopularStore />
         </div>
      </div>
   );
}

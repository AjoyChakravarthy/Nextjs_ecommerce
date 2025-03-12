"use client";
import Header from "./components/header/header";
import { SearchBarLayout } from "./components/search/searchBarLayout";
import { SearchResult } from "./components/search/searchResult";

import { inter } from "./fonts";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={`${inter.className} antialiased`}>
            <Header />
            <div className="md:hidden sticky top-0 z-30">
               <SearchBarLayout />
            </div>
            <SearchResult
               searchResults={[]}
               onClose={() => {}}
            />
            <main>{children}</main>
         </body>
      </html>
   );
}

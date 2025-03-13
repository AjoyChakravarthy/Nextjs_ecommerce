import React from "react";
import MenuDrawer from "../drawer";
import SearchBar from "../search/searchBar";
import Logo from "./logo";
import NavLinks from "./navLinks";
import UserAction from "./userAction";

const Header = () => {
   return (
      <header className="h-18 md:h-24 flex items-center md:justify-between p-3 bg-[#F1F0E8] text-[#222831] relative md:sticky top-0 left-0 shadow-2xl  z-50">
         <Logo className="hidden md:block " />
         <div className="md:hidden px-2">
            <MenuDrawer />
         </div>
         <NavLinks className="hidden md:flex text-sm  lg:text-lg " />
         <div className="hidden md:flex ">
            <SearchBar />
         </div>
         <Logo className={`md:hidden text-2xl px-2 `} />
         <UserAction />
      </header>
   );
};

export default Header;

import React from "react";
import MenuDrawer from "../drawer";
import SearchBar from "../search/searchBar";
import Logo from "./logo";
import NavLinks from "./navLinks";
import UserAction from "./userAction";

const Header = () => {
   return (
      <header className="h-18 md:h-24 flex items-center md:justify-between p-3 bg-[#737373] text-black relative  ">
         <Logo className="hidden md:block " />
         <div className="md:hidden px-2">
            <MenuDrawer />
         </div>
         <NavLinks className="hidden md:flex text-sm text-white lg:text-lg " />
         <div className="hidden md:flex ">
            <SearchBar />
         </div>
         <Logo className={`md:hidden text-2xl px-2 `} />
         <UserAction />
      </header>
   );
};

export default Header;

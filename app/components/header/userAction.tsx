import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Link from "next/link";

const UserAction = () => {
   return (
      <div className="flex w-full md:w-fit justify-evenly md:justify-end  md:gap-5">
         <div>
            <Link href="">
               <WidgetsIcon sx={{ fontSize: "30px" }} />
            </Link>
         </div>
         <div>
            <Link href="/login">
               <AccountCircleIcon sx={{ fontSize: "30px" }} />
            </Link>
         </div>
         <div className={` relative `}>
            <ShoppingCartIcon sx={{ fontSize: "30px" }} />
            <span className="bg-[#292524] absolute t text-white text-[10px] w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex justify-center items-center top-[-4] right-[-4]">
               <b>0</b>
            </span>
         </div>
      </div>
   );
};
export default UserAction;

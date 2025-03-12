import React from "react";
interface ButtonProps {
   label: string | number;
}

const PrimaryButton: React.FC<ButtonProps> = ({ label }) => {
   return (
      <button className="bg-black text-white  border-2 border-black py-3 px-5 hover:bg-inherit hover:text-black rounded-md w-fit ">
         {label}
      </button>
   );
};

export default PrimaryButton;

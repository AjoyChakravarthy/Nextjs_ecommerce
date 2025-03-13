import Link from "next/link";

const Logo = ({ className }: { className?: string }) => (
   <div className={`font-bold  md:text-2xl drop-shadow-md ${className}`}>
      <Link href="/">LOGO</Link>
   </div>
);

export default Logo;

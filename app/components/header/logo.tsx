import Link from "next/link";

const Logo = ({ className }: { className?: string }) => (
   <div className={`font-thin  md:text-2xl  ${className}`}>
      <Link href="/">LOGO</Link>
   </div>
);

export default Logo;

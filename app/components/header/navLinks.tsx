import Link from "next/link";

const NavLinks = ({ className }: { className?: string }) => (
   <nav className={`font-normal py-4 gap-2 lg:gap-8 ${className}`}>
      <Link href="#">NEW RELEASE</Link>
      <Link href="#">MEN</Link>
      <Link href="#">WOMEN</Link>
      <Link href="#">ACCESSORIES</Link>
   </nav>
);

export default NavLinks;

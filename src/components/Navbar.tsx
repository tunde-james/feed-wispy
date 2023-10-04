import Link from "next/link";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

function Navbar() {
  const user: boolean = false;

  return (
    <nav className="flex h-12 items-center justify-between border-b-2 border-b-red-500 p-4 uppercase text-red-500 md:h-24 lg:px-20 xl:px-40">
      {/* Left Links */}
      <div className="hidden flex-1 gap-4 md:flex">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* Logo */}
      <div className="flex-1 text-lg md:text-center md:font-bold">
        <Link href="/">Feed Wispy</Link>
      </div>

      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* Right Links */}
      <div className="hidden flex-1 items-center justify-end gap-4 md:flex">
        <div className="right-2 top-3 flex cursor-pointer items-center gap-2 rounded-md bg-orange-300 px-1 md:absolute lg:static">
          <Image src="/images/phone.png" alt="" width={20} height={20} />
          <span>123 456</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/order">Menu</Link>
        )}
        <CartIcon />
      </div>
    </nav>
  );
}

export default Navbar;

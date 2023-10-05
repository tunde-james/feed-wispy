import Link from "next/link";

function Footer() {
  return (
    <div className="flex h-1/2 items-center justify-between p-4 uppercase text-red-500 md:h-24 lg:px-20 xl:px-40">
      <Link href="/" className="text-xl font-bold">
        feed wispy
      </Link>
      <p>all rights reserved</p>
    </div>
  );
}

export default Footer;

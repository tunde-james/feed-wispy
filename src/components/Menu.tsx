"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  // TEMPORARY
  const user = false;

  return (
    <div>
      <Image
        src={isOpen ? "/images/close.png" : "/images/open.png"}
        alt=""
        width={20}
        height={20}
        onClick={() => setOpen(!isOpen)}
        className="cursor-pointer"
      />
      {isOpen && (
        <ul className="absolute left-0 top-24 z-10 flex h-[calc(100vh-6rem)] w-full flex-col items-center justify-center gap-8 bg-red-500 text-3xl text-white">
          {links.map((item) => (
            <li key={item.id} onClick={() => setOpen(!isOpen)}>
              <Link href={item.url}>{item.title}</Link>
            </li>
          ))}

          <Link
            href={user ? "/orders" : "login"}
            onClick={() => setOpen(!isOpen)}
          >
            {user ? "Orders" : "Login"}
          </Link>
          <Link href="/cart" onClick={() => setOpen(!isOpen)}>
            <CartIcon />
          </Link>
        </ul>
      )}
    </div>
  );
};

export default Menu;

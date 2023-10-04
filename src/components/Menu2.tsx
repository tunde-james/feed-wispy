"use client";

import { useState } from "react";

function Menu2() {
  // adding the states
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  //   const toggleActiveClass = () => {
  //     setIsActive(false);
  //   };

  return (
    <nav className="relative flex items-center justify-between gap-4 p-4 ">
      {/* logo */}
      <a href="#home" className="text-red-500">
        Dev.{" "}
      </a>

      {isActive && (
        <ul className="absolute left-[-100%] top-[70px] flex min-h-[70] flex-col items-center justify-between gap-10 md:flex-row">
          <li onClick={toggleActiveClass}>
            <a href="#home" className="navLink">
              Home
            </a>
          </li>
          <li onClick={toggleActiveClass}>
            <a href="#home" className="navLink">
              Catalog
            </a>
          </li>
          <li onClick={toggleActiveClass}>
            <a href="#home" className="navLink">
              All products
            </a>
          </li>
          <li onClick={toggleActiveClass}>
            <a href="#home" className="navLink">
              Contact
            </a>
          </li>
        </ul>
      )}

      <div
        className="hamburger block cursor-pointer"
        onClick={toggleActiveClass}
      >
        <span className="bar m-1 block h-1 w-5 bg-red-500 duration-75"></span>
        <span className="bar m-1 block h-1 w-5 bg-red-500 duration-75"></span>
        <span className="bar m-1 block h-1 w-5 bg-red-500 duration-75"></span>
      </div>
    </nav>
  );
}

export default Menu2;

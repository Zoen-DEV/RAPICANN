import Link from "next/link";
import React from "react";
import { FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const btnStyles = "text-3xl text-gray-800 drop-shadow-md";
  return (
    <main className={`flex w-[90vw] border-b-2 border-gray-800 justify-between items-center py-3`}>
      <button className={`${btnStyles}`}>
        <FaBars />
      </button>
      <Link href="/store" className="font-bold text-2xl text-gray-900 tracking-wider ">
        <h1>RAPICANN</h1>
      </Link>
      <Link href="/cart" className={`${btnStyles}`}>
        <FaShoppingCart />
      </Link>
    </main>
  );
};

export default Navbar;

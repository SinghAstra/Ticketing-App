import Link from "next/link";
import React from "react";
import { FaHome, FaTicketAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-black flex justify-between items-center text-white px-4 py-3 font-mono shadow-xl">
      <div className="flex gap-2 text-2xl">
        <Link href="/">
          <FaHome />
        </Link>
        <Link href="/ticket/new">
          <FaTicketAlt />
        </Link>
      </div>
      <div className="text-xl">
        <p>placeholder@gmail.com</p>
      </div>
    </div>
  );
};

export default Navbar;

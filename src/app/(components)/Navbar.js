import React from "react";
import { FaHome, FaTicketAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-primary flex justify-between items-center text-white">
      <div className="flex gap-1 ">
        <FaHome />
        <FaTicketAlt />
      </div>
      <div>
        <p>placeholder@gmail.com</p>
      </div>
    </div>
  );
};

export default Navbar;

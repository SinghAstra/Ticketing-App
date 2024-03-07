import React from "react";
import { FaFireAlt } from "react-icons/fa";
import { IoRemoveCircleSharp } from "react-icons/io5";

const TicketCard = () => {
  return (
    <div className="bg-secondary p-2">
      <div className="flex justify-between items-center bg-secondary">
        <div className="text-red flex">
          <FaFireAlt />
          <FaFireAlt />
          <FaFireAlt />
          <FaFireAlt />
          <FaFireAlt />
        </div>
        <div className="text-red text-xl">
          <IoRemoveCircleSharp />
        </div>
      </div>
      <div>This is Title</div>
      <hr />
      <p>This is Description for the ticket !!!</p>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p>23rd Dec 2023</p>
          <div className="bg-white">
            <div className="bg-primary" style={{ width: "75%" }}></div>
          </div>
        </div>
        <div className="bg-red rounded-lg">
          <p className="text-xs">Started</p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

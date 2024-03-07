import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import TicketPriority from "./TicketPriority";

const TicketCard = () => {
  return (
    <div className=" bg-cyan-600 p-2 rounded-lg font-mono">
      <div className="flex justify-between items-center mb-2">
        <TicketPriority />
        <div className="text-red-400 text-xl">
          <RxCrossCircled />
        </div>
      </div>
      <div className="text-base">This is Title</div>
      <hr />
      <p className="text-sm mb-1">This is Description for the ticket !!!</p>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-xs">23rd Dec 2023</p>
          <div className="bg-gray-200 rounded-full h-2.5 flex-1">
            <div
              className="bg-blue-600 h-2.5 rounded-l-full"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
        <div>
          <span className="text-xs bg-red-400 rounded-xl px-2 py-1">
            Started
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

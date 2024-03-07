import React from "react";
import TicketPriority from "./TicketPriority";
import TicketProgress from "./TicketProgress";
import TicketStatus from "./TicketStatus";
import TicketDelete from "./TicketDelete";

const TicketCard = () => {
  return (
    <div className=" bg-cyan-600 p-2 rounded-lg font-mono">
      <div className="flex justify-between items-center mb-2">
        <TicketPriority />
        <TicketDelete />
      </div>
      <div className="text-base">This is Title</div>
      <hr />
      <p className="text-sm mb-1">This is Description for the ticket !!!</p>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-xs">23rd Dec 2023</p>
          <TicketProgress />
        </div>
        <TicketStatus />
      </div>
    </div>
  );
};

export default TicketCard;

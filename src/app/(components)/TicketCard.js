import React from "react";
import TicketPriority from "./TicketPriority";
import TicketProgress from "./TicketProgress";
import TicketStatus from "./TicketStatus";
import TicketDelete from "./TicketDelete";

const TicketCard = ({ ticket }) => {
  function formatTimestamp(timestamp) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timestamp);
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }
  return (
    <div className=" bg-cyan-600 p-2 rounded-lg font-mono flex flex-col">
      <div className="flex justify-between items-center mb-2">
        <TicketPriority priority={ticket.priority} />
        <TicketDelete />
      </div>
      <div className="text-base">{ticket.title}</div>
      <hr />
      <p className="text-sm mb-1">{ticket.description}</p>
      <div className="flex-grow"></div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-xs">{formatTimestamp(ticket.createdAt)}</p>
          <TicketProgress progress={ticket.progress} />
        </div>
        <TicketStatus status={ticket.status} />
      </div>
    </div>
  );
};

export default TicketCard;

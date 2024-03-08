import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const Ticket = async ({ params }) => {
  const editTicket = params.id === "new" ? false : true;
  let ticketData;
  if (editTicket) {
    const response = await fetch(
      `http://localhost:3000/api/ticket/${params.id}`
    );
    const body = await response.json();
    ticketData = body.ticket;
  }
  return <TicketForm editTicket={editTicket} ticketData={ticketData} />;
};

export default Ticket;

import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const Ticket = async ({ params }) => {
  const editTicket = params.id === "new" ? false : true;
  let ticketData;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (editTicket) {
    const response = await fetch(`${apiUrl}/api/ticket/${params.id}`);
    const body = await response.json();
    ticketData = body.ticket;
  }
  return <TicketForm editTicket={editTicket} ticketData={ticketData} />;
};

export default Ticket;

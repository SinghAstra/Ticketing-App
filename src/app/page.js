import React from "react";
import TicketCard from "./(components)/TicketCard";

const fetchTickets = async () => {
  const response = await fetch("http://localhost:3000/api");
  const data = await response.json();
  return data.tickets;
};

const Dashboard = async () => {
  const tickets = await fetchTickets();

  let uniqueCategory = new Set(tickets.map((ticket) => ticket.category));
  uniqueCategory = [...uniqueCategory];

  return (
    <>
      {tickets &&
        uniqueCategory.map((category, categoryIndex) => {
          return (
            <div className="p-2" key={categoryIndex}>
              <h1 className="text-xl font-mono">{category.toUpperCase()}</h1>
              <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-2 p-2">
                {tickets
                  .filter((ticket) => ticket.category == category)
                  .map((filteredTicket) => (
                    <TicketCard
                      key={filteredTicket._id}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Dashboard;

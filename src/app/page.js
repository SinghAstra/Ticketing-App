"use client";
import React, { useEffect, useState } from "react";
import TicketCard from "./(components)/TicketCard";

const fetchTickets = async () => {
  const response = await fetch("http://localhost:3000/api", {
    cache: "no-store",
  });
  const data = await response.json();
  return data.tickets;
};

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const loadTickets = async () => {
      const fetchedTickets = await fetchTickets();
      setTickets(fetchedTickets);
    };
    loadTickets();
  }, []);

  let uniqueCategory = new Set(tickets.map((ticket) => ticket.category));
  uniqueCategory = [...uniqueCategory];

  const handleDelete = (id) => {
    setTickets(tickets.filter((ticket) => ticket._id !== id));
  };

  return (
    <>
      {tickets &&
        uniqueCategory.map((category, categoryIndex) => {
          return (
            <div className="p-4" key={categoryIndex}>
              <h1 className="text-3xl font-mono">{category.toUpperCase()}</h1>
              <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-2 p-2">
                {tickets
                  .filter((ticket) => ticket.category == category)
                  .map((filteredTicket) => (
                    <TicketCard
                      key={filteredTicket._id}
                      ticket={filteredTicket}
                      handleDelete={handleDelete}
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

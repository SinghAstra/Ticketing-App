import React from "react";
import TicketCard from "./(components)/TicketCard";

const Dashboard = () => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-2">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
};

export default Dashboard;

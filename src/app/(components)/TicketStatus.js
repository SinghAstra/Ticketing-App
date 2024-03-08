import React from "react";

const TicketStatus = ({ status }) => {
  const getColor = (status) => {
    let color;
    switch (status.toLowerCase()) {
      case "done":
        color = "bg-green-200";
        return color;

      case "started":
        color = "bg-yellow-200";
        return color;

      case "not started":
        color = "bg-red-200";
        return color;
      default:
        color = "bg-slate-700";
    }
    return color;
  };
  return (
    <div>
      <span className={`text-xs ${getColor(status)} rounded-xl px-2 py-1`}>
        {status}
      </span>
    </div>
  );
};

export default TicketStatus;

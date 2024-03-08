import React from "react";

const TicketProgress = ({ progress }) => {
  return (
    <div className="bg-gray-200 rounded-full h-2.5 flex-1">
      <div
        className="bg-blue-600 h-2.5 rounded-l-full"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default TicketProgress;

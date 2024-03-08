import React from "react";
import { FaFireAlt } from "react-icons/fa";

const TicketPriority = ({ priority }) => {
  return (
    <div className="text-red-400 flex">
      <FaFireAlt className={priority > 0 ? "text-red-400" : "text-slate-400"} />
      <FaFireAlt className={priority > 1 ? "text-red-400" : "text-slate-400"} />
      <FaFireAlt className={priority > 2 ? "text-red-400" : "text-slate-400"} />
      <FaFireAlt className={priority > 3 ? "text-red-400" : "text-slate-400"} />
      <FaFireAlt className={priority > 4 ? "text-red-400" : "text-slate-400"} />
    </div>
  );
};

export default TicketPriority;

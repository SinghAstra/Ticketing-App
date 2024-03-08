import React from "react";
import { RxCrossCircled } from "react-icons/rx";

const TicketDelete = ({ id, handleDelete }) => {
  const handleDeleteRequest = async () => {
    const response = await fetch(`http://localhost:3000/api/ticket/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    handleDelete(id);
  };
  return (
    <div
      className="text-red-400 text-xl cursor-pointer"
      onClick={handleDeleteRequest}
    >
      <RxCrossCircled />
    </div>
  );
};

export default TicketDelete;

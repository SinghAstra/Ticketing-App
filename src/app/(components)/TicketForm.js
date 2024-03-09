"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ editTicket, ticketData }) => {
  const router = useRouter();
  const initialValue = {
    title: "",
    description: "",
    category: "software problem",
    priority: "1",
    status: "not started",
    progress: "0",
  };
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (editTicket) {
      const response = await fetch(`${apiUrl}/api/ticket/${formData._id}`, {
        method: "PUT",
        body: JSON.stringify({
          formData: {
            title: formData.title,
            description: formData.description,
            category: formData.category,
            priority: formData.priority,
            status: formData.status,
            progress: formData.progress,
          },
        }),
      });
      if (response.ok) {
        router.push("/");
      }
    } else {
      const response = await fetch(`${apiUrl}/api`, {
        method: "POST",
        body: JSON.stringify({ formData }),
        "Content-Type": "application/json",
      });
      if (response.ok) {
        router.push("/");
      }
    }
  };

  const [formData, setFormData] = useState(
    editTicket ? ticketData : initialValue
  );
  return (
    <form
      className="max-w-sm mx-auto flex flex-col gap-2 border-2 p-3 m-3 rounded-md"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center font-bold font-mono mb-2 text-xl">
        {editTicket ? "Edit" : "Create"} a Ticket
      </h1>
      <input
        type="text"
        name="title"
        id="title"
        className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 font-mono border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <textarea
        type="text"
        name="description"
        id="description"
        className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 font-mono border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        rows={5}
        required
      />
      <div className="mb-2">
        <label htmlFor="priority" className="block mb-1 font-mono">
          Priority {formData.priority}
        </label>
        <input
          type="range"
          min="1"
          max="5"
          id="priority"
          name="priority"
          className="w-full"
          value={formData.priority}
          onChange={handleChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="status" className="block mb-1 font-mono">
          Status
        </label>
        <select
          name="status"
          className="w-full font-mono border-2 rounded-md"
          value={formData.status}
          onChange={handleChange}
        >
          <option value={"not started"}>Not Started</option>
          <option value={"started"}>Started</option>
          <option value={"done"}>Done</option>
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="category" className="block mb-1 font-mono">
          Category
        </label>
        <select
          name="category"
          className="w-full font-mono border-2 rounded-md"
          value={formData.category}
          onChange={handleChange}
        >
          <option value={"software problem"}>Software Problem</option>
          <option value={"hardware problem"}>Hardware Problem</option>
          <option value={"project"}>Project</option>
        </select>
      </div>
      <div className="mb-2">
        <label htmlFor="progress" className="block mb-1 font-mono">
          Progress {formData.progress}%
        </label>
        <input
          type="range"
          min="0"
          max="100"
          id="progress"
          name="progress"
          className="w-full"
          value={formData.progress}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="text-white font-mono bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {editTicket ? "Update" : "Create"} Ticket
      </button>
    </form>
  );
};

export default TicketForm;

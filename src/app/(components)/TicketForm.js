import React from "react";

const TicketForm = () => {
  return (
    <form class="max-w-sm mx-auto flex flex-col gap-2 border-2 p-3 m-3 rounded-md">
      <input
        type="text"
        name="title"
        id="title"
        class="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 font-mono border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="Title"
        required
      />
      <textarea
        type="text"
        name="description"
        id="description"
        class="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 font-mono border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder="Description"
        rows={5}
        required
      />
      <div className="mb-2">
        <label for="range" className="block mb-1 font-mono">
          Priority
        </label>
        <input
          type="range"
          min="0"
          max="4"
          id="range"
          name="range"
          className="w-full"
        />
      </div>
      <div className="mb-2">
        <label for="status" className="block mb-1 font-mono">
          Status
        </label>
        <select name="status" className="w-full font-mono border-2 rounded-md">
          <option value={"not started"}>Not Started</option>
          <option value={"started"}>Started</option>
          <option value={"done"}>Done</option>
        </select>
      </div>
      <div className="mb-2">
        <label for="progress" className="block mb-1 font-mono">
          Progress
        </label>
        <input
          type="range"
          min="0"
          max="100"
          id="progress"
          name="progress"
          className="w-full"
        />
      </div>

      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create Ticket
      </button>
    </form>
  );
};

export default TicketForm;

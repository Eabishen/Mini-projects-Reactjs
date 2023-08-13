import React, { useState } from "react";

const Input = ({ taskList, setTaskList }) => {
  const [input, setInput] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if (input == "") {
      return;
    }
    setTaskList([...taskList, input]);
    setInput("");
  };

  return (
    <div>
      <form action="">
        <label className="capitalize text-sm font-semibold block mb-2" htmlFor="input-container">
          Add items
        </label>
        <input
          className="border border-gray-300 rounded py-1 px-2 mr-3"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id="input-container"
        />
        <button
          onClick={handleClick}
          className="bg-cyan-800 text-cyan-50 py-1 px-2 rounded"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;

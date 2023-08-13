import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";

function App() {
  return (
    <>
      <div className="text-indigo-50">
        <h1 className="text-4xl text-yellow-500 font-bold pl-6 py-4">
          Task Tacker
        </h1>
        <p className="text-xl pl-6 ">Welcome</p>
        <div className="flex items-center gap-2">
          <p className="text-xl pl-6">click</p>
          <AddTask />
          <p> to add new task</p>
        </div>
      </div>
    </>
  );
}

export default App;

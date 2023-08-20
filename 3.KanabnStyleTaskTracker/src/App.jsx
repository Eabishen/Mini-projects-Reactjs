import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";

function App() {
  return (
    <>
      <div className="text-indigo-50 border-b-violet-200 border-b pb-4">
        <h1 className="text-4xl text-yellow-500 font-bold pl-6 py-4">
          Task Tacker
        </h1>
        <p className="text-xl pl-6 ">Welcome</p>
        <div className="flex items-center gap-2">
          <p className="text-xl pl-6">Click</p>
          <AddTask taskList={taskList} setTaskList={setTaskList} />
          <p> to add new task</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full flex flex-col">
          <h2 className="w-auto ml-2 mr-2 md:w-3/4 text-2xl my-10 rounded-lg uppercase text-center md:ml-6 md:mr-0 bg-violet-500/40 py-1.5 text-indigo-50 max-w-lg font-black tracking-wider">
            To Do List
          </h2>
          <div className="flex flex-col-reverse">
            {taskList.map((task, i) => (
              <ToDoList
                key={i}
                task={task}
                taskList={taskList}
                setTaskList={setTaskList}
                index={i}
              />
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col" ref={drop}>
          <h2 className="w-auto ml-2 mr-2 md:w-3/4 text-2xl my-10 rounded-lg uppercase text-center md:ml-6 md:mr-0 bg-violet-500/40 py-1.5 text-indigo-50 max-w-lg font-black tracking-wider">
            Completed
          </h2>
          <div className="flex flex-col-reverse">
            {completed.map((task, i) => (
              <ToDoList
                key={i}
                task={task}
                taskList={taskList}
                setTaskList={setTaskList}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

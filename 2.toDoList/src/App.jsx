import { useEffect, useState } from "react";
import "./App.css";
import Input from "./components/Input";
import TalkList from "./components/TalkList";

function App() {
  const [taskList, setTaskList] = useState([]);
  console.log(taskList);

  return (
    <div className="flex items-center justify-center flex-col gap-4 my-7 mx-auto px-6 md:px-0 max-w-lg">
      <h1 className="text-3xl uppercase mb-6 font-black text-cyan-800">
        To Do List
      </h1>
      <Input taskList={taskList} setTaskList={setTaskList} />
      <div className="flex flex-wrap gap-4 items-center">
        {taskList.map((task, index) => {
          return <TalkList task={task} setTaskList={setTaskList} taskList={taskList} index={index} /> 
        })}
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import EditTask from "./EditTask";
import { useDrag } from "react-dnd";

const ToDoList = ({ task, index, taskList, setTaskList }) => {
  const [time, setTime] = useState(task.duration);
  const [running, setRunning] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "todo",
    item: {
      id: index,
      projectName: task.projectName,
      taskDescription: task.taskDescription,
      timeStamp: task.timeStamp,
      duration: task.duration,
    },
    collect: (monitor) => ({
      isDragging: !monitor.isDragging(),
    }),
  }));

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [running]);

  const handleStop = (e) => {
    setRunning(false);
    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex, 1, {
      projectName: task.projectName,
      taskDescription: task.taskDescription,
      timeStamp: task.timeStamp,
      duration: time,
    });

    if (e.target.name === "reset") {
      taskList.splice(taskIndex, 1, {
        projectName: task.projectName,
        taskDescription: task.taskDescription,
        timeStamp: task.timeStamp,
        duration: 0,
      });
    }

    localStorage.setItem("tasks", JSON.stringify(taskList));
    window.location.reload();
  };

  return (
    <>
      <div
        className=" py-4 rounded-lg w-auto md:w-3/4 
      max-w-lg flex flex-col items-start justify-start bg-purple-800 text-indigo-50
       my-4 mx-2 md:mr-0 md:ml-6 px-2 md:px-6"
        ref={drag}
      >
        <div className="flex items-baseline justify-between gap-2 w-full">
          <p className="font-semibold text-2xl ">{task.projectName}</p>
          <EditTask
            task={task}
            index={index}
            taskList={taskList}
            setTaskList={setTaskList}
            running={running}
            setRunning={setRunning}
            time={time}
            setTime={setTime}
          />
        </div>
        <p className="text-lg py-2">{task.taskDescription}</p>
        <div className="pt-2 border-t-2 border-gray-400/60 w-full ">
          <p className="font-semibold mb-1 text-xl ">
            {running ? "On process" : "Time Spent"}
          </p>
          <div className="text-xl">
            <span>{("0" + (Math.floor(time / 3600000) % 24)).slice(-2)}:</span>
            <span>{("0" + (Math.floor(time / 6000) % 60)).slice(-2)}:</span>
            <span>{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}:</span>
            <span className="text-sm">
              {("0" + (Math.floor(time / 10) % 100)).slice(-2)}
            </span>
          </div>
          <div className="mt-4  flex items-center gap-3">
            {running ? (
              <button
                className="text-sm bg-violet-500/40 rounded-md font-semibold tracking-wider py-1 px-2"
                onClick={handleStop}
              >
                stop
              </button>
            ) : (
              <button
                className="text-sm bg-violet-500/40 rounded-md font-semibold tracking-wider py-1 px-2"
                onClick={() => setRunning(true)}
              >
                start
              </button>
            )}
            <button
              className="text-sm bg-violet-500/40 rounded-md font-semibold tracking-wider py-1 px-2"
              name="reset"
              onClick={handleStop}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;

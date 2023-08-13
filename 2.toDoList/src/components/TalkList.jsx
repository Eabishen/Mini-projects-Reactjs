import React from "react";

const TalkList = ({task, index, taskList, setTaskList}) => {

    const handleDelete = () => {
        let removeIndex = taskList.indexOf(task);
        taskList.splice(removeIndex, 1)
        setTaskList(currentTask => currentTask.filter(todo => index === removeIndex))
    }

  return (
    <div className="flex gap-2 items-center rounded-md p-4 border border-cyan-100">
      <div key={index}>{task}</div>
      <button onClick={handleDelete} className="bg-red-600 text-white text-xs py-1 px-2 rounded-md">
        delete
      </button>
    </div>
  );
};

export default TalkList;

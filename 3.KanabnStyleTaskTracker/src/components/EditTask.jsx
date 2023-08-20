import React, { useEffect, useState } from "react";

const EditTask = ({ task, taskList, setTaskList }) => {
  const [editModal, setEditModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;

    name === "projectName" && setProjectName(value);
    name === "taskDescription" && setTaskDescription(value);
  };

  useEffect(() => {
    setProjectName(task.projectName);
    setTaskDescription(task.taskDescription);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const taskindex = taskList.indexOf(task);
    taskList.splice(taskindex, 1, {
      projectName: projectName,
      taskDescription: taskDescription,
      timeStamp: task.timeStamp,
      duration: task.duration,
    });
    // setTaskList([...taskList, { projectName, taskDescription }]);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    window.location.reload();
    setEditModal(false);
  };

  const handleDelete = (itemID) => {
    const removeId = taskList.indexOf(task);
    taskList.splice(removeId, 1);

    localStorage.setItem("tasks", JSON.stringify(taskList));
    window.location.reload();

    // setTaskList((currenttask) =>
    //   currenttask.filter((current) => current.id !== itemID)
    // );
  };

  return (
    <>
      <div className="flex items-center gap-3">
        <button
          onClick={() => setEditModal(true)}
          className="text-sm uppercase bg-violet-500/40 rounded-md font-semibold tracking-wider py-1 px-2"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 uppercase text-sm font-semibold text-red-50 py-1 px-2 rounded-md"
        >
          delete
        </button>
      </div>

      {editModal ? (
        <>
          <div
            className="overflow-x-hidden flex items-center justify-center overflow-y-auto 
          fixed inset-0 z-[100] bg-black bg-opacity-60"
          >
            <div className="bg-violet-900 p-5 rounded-md border shadow-md shadow-violet-600/20 w-auto md:w-9/12 max-w-lg border-violet-800">
              <div className="flex flew-row justify-between">
                <h3 className="text-3xl font-semibold">Edit Task</h3>
                <button
                  className="p-1 text-red-400 float-right text-xl leading-none font-semibold block"
                  onClick={() => setEditModal(false)}
                >
                  &#10006;
                </button>
              </div>
              <form className="my-6" action="">
                <div>
                  <label
                    className="mb-2 font-medium tracking-wide uppercase text-violet-50/80 text-xs block"
                    htmlFor="project-name"
                  >
                    Project Name
                  </label>
                  <input
                    className="bg-violet-950 text-violet-50 transition-all ease-in p-3 w-full rounded-sm border border-violet-200/40 focus:outline-none focus:ring focus:ring-violet-500 placeholder:text-gray-300/50"
                    type="text"
                    autoComplete="off"
                    name="projectName"
                    autoFocus
                    id="project-name"
                    placeholder="Project Name"
                    required
                    value={projectName}
                    onChange={handleInput}
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="task-description">Task Description</label>
                  <textarea
                    className="bg-violet-950 text-violet-50 transition-all ease-in  
                    p-3 w-full rounded-sm border border-violet-200/40 focus:outline-none focus:ring
                     focus:ring-violet-500 placeholder:text-gray-300/50"
                    name="taskDescription"
                    id="task-description"
                    rows="4"
                    placeholder="Task Description"
                    value={taskDescription}
                    onChange={handleInput}
                  ></textarea>
                </div>
                <div>
                  <button
                    onClick={handleUpdate}
                    className="w-full p-3 rounded shadow-lg focus:shadow-sm hover:shadow-sm shadow-violet-500/20 uppercase font-bold transition-all ease-in border-none bg-violet-950 border border-violet-500 focus:outline-none focus:ring focus:ring-violet-500"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default EditTask;

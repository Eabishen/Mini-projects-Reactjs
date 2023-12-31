import React, { useState } from "react";

const AddTask = () => {
  const [addModal, setAddModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setAddModal(true)}
        className="bg-violet-500/40 py-1.5 px-2.5 rounded uppercase text-lg font-semibold my-3.5 hover:bg-opacity-80"
      >
        New+
      </button>
      {addModal ? (
        <>
          <div
            className="overflow-x-hidden flex items-center justify-center overflow-y-auto 
          fixed inset-0 z-[100] bg-black bg-opacity-60"
          >
            <div className="bg-violet-900 p-5 rounded-md border shadow-md shadow-violet-600/20 w-auto md:w-9/12 max-w-lg border-violet-800 ">
              <div className="flex flew-row justify-between">
                <h3 className="text-3xl font-semibold">Add New Task</h3>
                <button
                  className="p-1 text-red-400 float-right text-xl leading-none font-semibold block"
                  onClick={() => setAddModal(false)}
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
                    id="project-name"
                    placeholder="Project Name"
                    required
                    value={projectName}
                    autoFocus
                    onChange={handleInput}
                  />
                </div>
                <p className="text-red-400">{errorMessage}</p>
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
                    onClick={handleAdd}
                    className="w-full p-3 rounded shadow-lg focus:shadow-sm hover:shadow-sm shadow-violet-500/20 uppercase font-bold transition-all ease-in border-none bg-violet-950 border border-violet-500 focus:outline-none focus:ring focus:ring-violet-500"
                  >
                    Add
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

export default AddTask;

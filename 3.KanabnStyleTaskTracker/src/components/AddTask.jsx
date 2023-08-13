import React, { useState } from "react";

const AddTask = () => {
  const [addModal, setAddModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setAddModal(true)}
        className="bg-indigo-600 py-1 px-2 rounded uppercase text-sm font-semibold my-3.5 hover:bg-opacity-80"
      >
        New+
      </button>
      {addModal ? (
        <>
          <div
            className="overflow-x-hidden flex items-center justify-center overflow-y-auto 
          fixed inset-0 z-[100] bg-black bg-opacity-60"
          >
            <div className="bg-violet-900 p-5 rounded-md border shadow-md shadow-violet-600/20 w-9/12 lg:w-2/6 border-violet-800 ">
              <div className="flex flew-row justify-between">
                <h3 className="text-3xl font-semibold">Working</h3>
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
                    name="project Name"
                    id="project-name"
                    placeholder="Project Name"
                    required
                  />
                </div>
                <div className="my-4">
                  <label htmlFor="task-description">Task Description</label>
                  <textarea
                    className="bg-violet-950 text-violet-50 transition-all ease-in p-3 w-full rounded-sm border border-violet-200/40 focus:outline-none focus:ring focus:ring-violet-500 placeholder:text-gray-300/50"
                    name="task description"
                    id="task-description"
                    rows="3"
                    placeholder="Task Description"
                  ></textarea>
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

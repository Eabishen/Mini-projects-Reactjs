import React, { useState } from "react";

const AddTask = () => {
    const [addModal, setAddModal] = useState(false);

    return (
        <>
            <button
            onClick={() => setAddModal(true)}
            className="bg-indigo-600 py-1 px-2 rounded uppercase text-sm font-semibold my-3.5 hover:bg-opacity-80">
                New+
            </button>
            {addModal ? (
                <>  
                <div>
                    <h3>Working</h3>
                </div>
                </>
            ) : null}
        </>
    );
};

export default AddTask;

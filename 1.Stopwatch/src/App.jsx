import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if(running){
      interval = setInterval(() => {
        setTime((prevItem) => prevItem + 10)
      }, 10)
    } else if (!running){
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [running])

  return (
    <>
      <div className="h-screen flex items-center flex-col gap-6 justify-center ">
        <h1 className="text-5xl font-semibold text-purple-800">Stopwatch</h1>

        <div>
          <span className="text-3xl font-medium">
            {("0" + Math.floor((time / 6000) % 60)).slice(-2)}:
          </span>
          <span className="text-3xl font-medium">
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
          </span>
          <span className="text-3xl font-medium">{("0" + ((time / 10) % 100)).slice(-2)}</span>
          <span></span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={()=> {setRunning(!running)}} className="focus:ring-2 focus:ring-yellow-800 ring-offset-2 bg-purple-800 focus:outline-none text-purple-100 py-2 px-5 rounded-md shadow-md">
           {running ? "stop" : "start" }
          </button>
         
          <button onClick={()=> {setTime(0)}} className="focus:ring-2 focus:ring-yellow-800 ring-offset-2 bg-purple-800 focus:outline-none text-purple-100 py-2 px-5 rounded-md shadow-md">
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

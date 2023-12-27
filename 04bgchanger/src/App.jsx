import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div
        className="w-full h-screen duration-500 flex justify-center items-center"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap justify-center inset-x-12 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-slate-400 px-4 py-3 rounded-xl">
            <button
              className="outline-none px-4 py-2 rounded-full shadow-xl"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-2 rounded-full shadow-xl"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-2 rounded-full shadow-xl"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-2 rounded-full shadow-xl"
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}
            >
              Olive
            </button>
            <button
              className="outline-none px-4 py-2 rounded-full shadow-xl"
              style={{ backgroundColor: "gray" }}
              onClick={() => setColor("gray")}
            >
              Gray
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-xl"
              style={{ backgroundColor: "Yellow" }}
              onClick={() => setColor("Yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-2 rounded-full shadow-xl"
              style={{ backgroundColor: "pink" }}
              onClick={() => setColor("pink")}
            >
              pink
            </button>
            <button
              className="outline-none px-4 py-2 rounded-full shadow-xl"
              style={{ backgroundColor: "Purple" }}
              onClick={() => setColor("Purple")}
            >
              Purple
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full shadow-xl"
              style={{ backgroundColor: "Lavender" }}
              onClick={() => setColor("Lavender")}
            >
              Lavender
            </button>
            <button
              className="outline-none px-4 py-2 rounded-full shadow-xl"
              style={{ backgroundColor: "White" }}
              onClick={() => setColor("White")}
            >
              White
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

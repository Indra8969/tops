import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  return (
    <div className="wrapper"
        onMouseMove={(e)=>{
            setX(e.clientX)
            setY(e.clientY)
        }}>
      <div
        style={{
          width: "40px",
          aspectRatio: 1,
          border: "1px solid black",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          position: "fixed",
          top: y,
          left: x,
        }}
      ></div>
    </div>
  );
};

export default App;

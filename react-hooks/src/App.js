import { useEffect, useState, useRef } from "react";

const useFullscreen = () => {
  const element = useRef();
  const triggerFull = () => {};
  return element;
};
  
function App() {
  const fullScrEl = useFullscreen();
  return (
    <div style={{ height: "1000vh" }}>
      <img ref={fullScrEl} src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape" width="250" />
      <button>Make fullscreen</button>
    </div>
  );
}

export default App;

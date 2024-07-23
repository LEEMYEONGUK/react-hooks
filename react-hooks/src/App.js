import { useEffect, useState, useRef } from "react";

function App() {
  const fadeInH1 = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>lalala...</p>
    </div>
  );
}

export default App;

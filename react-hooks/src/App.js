import { useEffect, useState } from "react";



function App() {
  const begForLife = () => {
    console.log("Pls don't leave");
  };
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;

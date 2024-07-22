import { useEffect, useState } from "react";

const useConfirm = (message="", callback, rejection) => {
  if (typeof callback !== "function") {
    return;
  }
  const confirmAction = () => {
    if(confirm(message)) {
      callback();
    } else {
      rejection();
    }
  }
  return confirmAction
}

function App() {
  const deleteWorld = () => console.log("Deleting the world...")
  const abort = () => console.log("Aborted")
  const confirmDelete = useConfirm("Are you sure", deleteWorld, abort)
  return (
    <div>
      <button onClick={confirmDelete} >Delete the world</button>
    </div>
  );
}

export default App;

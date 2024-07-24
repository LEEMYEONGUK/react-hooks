import { useEffect, useState, useRef } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if(typeof onChange === "function") {
      onChange(navigator.onLine)
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};

function App() {
  const handleNetworkChange = (onLine) => {
    console.log(onLine? "We just went online":"We are offline")
  }
  const onLine = useNetwork(handleNetworkChange)
  return <div>
    <h1>{onLine ? "OnLine":"Offline"}</h1>
  </div>;
}

export default App;

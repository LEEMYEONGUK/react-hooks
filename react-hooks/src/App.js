import { useEffect, useState } from "react";

const useClick = (onclick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListenser("click", onclick);
      }
    };
  }, []);
  return element;
};

function App() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  setTimeout(() => console.log(potato), 5000);
  return (
    <div>
      <div>Hi</div>
      <input ref={title} placeholder="la" />
    </div>
  );
}

export default App;

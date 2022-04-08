import React, { useEffect, useRef } from "react";
import { useState } from "react";

const Home = () => {
  const [time, setTime] = useState(new Date().toString());
  const [name, setName] = useState("shejal");
  const useRefExm = useRef(null);

  useEffect(() => {
    console.log("mounted");
    if (name === "komal") {
      return () => {
        console.log("unmounted");
      };
    }
  }, [time, name]);

  const changeTime = () => {
    setTime(new Date().toString());
  };
  const changeName = () => {
    setName("komal");
    if (name === "komal") {
      setName("shejal");
    }
  };
  const focusInput = () => {
    console.log(useRefExm);
    useRefExm.current.focus();
  };
  return (
    <div>
      <h2>{time}</h2>
      <h3>{name}</h3>
      <input type="text" ref={useRefExm} />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={changeName}>Change Name</button>
      <button onClick={changeTime}>Change Time</button>
    </div>
  );
};

export default Home;

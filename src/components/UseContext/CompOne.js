import React, { createContext } from "react";
import CompTwo from "./CompTwo";

const Name = createContext();
const CompOne = () => {
  let name = "shejal";
  return (
    <div>
      <h2>this is component one</h2>
      <Name.Provider value={name}>
        <CompTwo />
      </Name.Provider>
    </div>
  );
};

export default CompOne;
export { Name };

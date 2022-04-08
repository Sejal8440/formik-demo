import React, { useContext } from "react";
import CompThree from "./CompThree";
import { Name } from "./CompOne";

const CompTwo = () => {
  const name = useContext(Name);
  return (
    <div>
      <h3>{name}</h3>
      <h2>this is component two</h2>
      <CompThree />
    </div>
  );
};

export default CompTwo;

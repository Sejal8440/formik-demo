import React, { useContext } from "react";
import { Name } from "./CompOne";

const CompThree = () => {
  const name = useContext(Name);
  return (
    <div>
      <h3>{name}</h3>
      <h2>this is component three</h2>
    </div>
  );
};

export default CompThree;

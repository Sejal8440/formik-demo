import React, { useReducer } from "react";

let initialValue = 0;

const reducer = (value, action) => {
  switch (action) {
    case "addition":
      return value + 1;
    case "subtration":
      return value - 1;
    case "mulitiplication":
      return value * 5;
    case "division":
      return value / 2;
    default:
      return initialValue;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h3>Value - {state}</h3>
      <button onClick={() => dispatch("addition")}>Addition</button>
      <button onClick={() => dispatch("subtration")}>Subtraction</button>
      <button onClick={() => dispatch("mulitiplication")}>Multiplication</button>
      <button onClick={() => dispatch("division")}>Division</button>
    </div>
  );
};

export default UseReducer;

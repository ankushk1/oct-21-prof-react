import React from "react";
import { useState } from "react";
import withCounter from "./withCounter";

const Counter = (props) => {
  console.log(props);
  const { count, onIncrement, onDecrement } = props;
  return (
    <div>
      Counter
      <h4>{count}</h4>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
};

export default withCounter(Counter);

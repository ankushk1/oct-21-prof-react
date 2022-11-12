import React, { useState } from "react";
import withCounter from "./withCounter";

const Hover = ({count, onIncrement, onDecrement, name}) => {

  return (
    <div>
      {" "}
      <br />
      <br />
      Hover
      <h4 onMouseOver={onIncrement}>{count}</h4>
    </div>
  );
};

export default withCounter(Hover);

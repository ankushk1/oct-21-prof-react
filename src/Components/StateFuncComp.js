import React, { useState } from "react";

const StateFuncComp = () => {
  const [count, setCount] = useState({
    num1: 0,
    num2: 1
  });

  const onIncrement = (num) => {

    // setCount({
    //   ...count,
    //   num1 : count.num1 + 1
    // });

    // setCount({
    //   ...count,
    //   num1 : count.num1 + 1
    // });

    setCount((prev) => {
      console.log(prev);
      return {
        ...count,
        num1: prev.num1 + 1
      };
    });
    setCount((prevVal) => {
      console.log(prevVal);
      return {
        ...count,
        num1: prevVal.num1 + 1
      };
    });
  };

  const onDecrement = () => {
    setCount({
      ...count,
      num1: count.num1 - 1
    });
  };

  const Reset = () => {
    setCount({
      num1: 0,
      num2: 0
    });
  };

  const onIncrement2 = (num) => {
    setCount({
      ...count,
      num2: count.num2 + 1
    });
  };

  const onDecrement2 = () => {
    setCount({
      ...count,
      num2: count.num2 - 1
    });
  };

  //In functional components
  //Always first clone the state and then update

  return (
    <div>
      {/* {console.log(count)} */}
      Num1 is = {count.num1} <br />
      {/* Num2 is = {count.num2} */}
      <div>
        <button onClick={() => onIncrement(10)}>Increment</button>
        <button onClick={() => onDecrement()}>Decrement</button>
        <button onClick={() => Reset()}>Reset</button>
      </div>
      {/* <div>
        <button onClick={() => onIncrement2()}>Increment2</button>
        <button onClick={() => onDecrement2()}>Decrement2</button>
      </div> */}
    </div>
  );
};

export default StateFuncComp;

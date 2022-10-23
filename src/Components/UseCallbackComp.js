import React, { useEffect, useState, useCallback } from "react";

const UseCallbackComp = () => {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(2);

  const onIncrement1 = () => {
    setCount(count + 1);
  };

  const onIncrement2 = useCallback((num , num2) => {
    setCount2(count2 + num);
  }, [count2]);

  useEffect(() => {
    console.log("useEffect called");
  }, [onIncrement2]);

  return (
    <div>
      Count1 = {count} <br />
      Count2 = {count2}
      <div>
        <button onClick={() => onIncrement1()}>Inc1</button>
        <button onClick={() => onIncrement2(4,3)}>Inc2</button>
      </div>
    </div>
  );
};

export default UseCallbackComp;




import React, { useState, useMemo, useEffect } from "react";

function slowFunc(n) {
  console.log('slowFunc called');
  for (var i = 0; i < 1000000000; i++) {}
  return n * 2;
}

const UseMemoComp = () => {
  const [number, setNumber] = useState(1);
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount(count + 1);
  };

  //  const twiceOfNum = slowFunc(number);
  const twiceOfNum = useMemo(() => {
    console.log('Calling')
    return slowFunc(number);
  }, [number]);

  console.log(twiceOfNum);

  return (
    <div>
      <div>
        Count - {count} <br />
        <button onClick={() => onIncrement()}>Increment Count</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setNumber(number + 1)}>Increment Number</button>
        <div>
          {number} * 2 = {twiceOfNum}
        </div>
      </div>
    </div>
  );
};

export default UseMemoComp;

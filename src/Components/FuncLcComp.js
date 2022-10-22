import React, { useState, useEffect } from "react";

const FuncLcComp = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [data, setData] = useState([]);

  const onIncrement = () => {
    setCount(count + 1);
  };

  const onNameChange = () => {
    setName("ABC" + Math.floor(Math.random() * 100));
  };

  // useEffect(()=> {
  //   console.log('useEffect Running for count');
  // }, [ count, name ])

  // useEffect(()=> {
  //   console.log('useEffect Running for name');
  // }, [ name ])

  // useEffect(()=> {
  //   return(()=> {
  //     console.log('unMount')
  //   })
  // }, [])

  useEffect(() => {
    (async () => {
      await fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((json) => setData(json));
    })();
  }, []);

  return (
    <div>
      {console.log("render", data)}
      {/* <h3>{count}</h3>
      <h3>{name}</h3> */}
      {data && data.map(elem =>(
          <div>
            {elem.id} <br />
            {elem.title}
          </div>
        ))}
      <div>
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onNameChange}>Name Change</button>
      </div>
    </div>
  );
};

export default FuncLcComp;

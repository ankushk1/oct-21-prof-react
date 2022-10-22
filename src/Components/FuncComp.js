import React, { useState } from "react";
import ComponentA from "./ComponentA";
import TodoDetails from "./TodoDetails";
import todos from './todos.json'
const FuncComp = (props) => {

  const [dataFromChild, setDataFromChild] = useState(null)
  console.log(dataFromChild)

  return (
    <div>
      Functional Comp is rendered - {dataFromChild}

      <ComponentA stateChnageFunc= {setDataFromChild}/>
    </div>
  );
};

export default FuncComp;

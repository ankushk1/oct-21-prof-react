import React from "react";
import TodoDetails from "./TodoDetails";
import todos from './todos.json'
const FuncComp = (props) => {
  // const {
  //   name,
  //   age,
  //   student: { Standard, subSection },
  //   children
  // } = props;

  // console.log(props);

  return (
    <div>
      {/* FuncComp
      <p>
        Name of student is {name} and age is {age}
      </p>
      <div>
        Class = {Standard}
        Section = {subSection}
      </div>

      <h3>{children}</h3> */}

      <TodoDetails todos={todos.slice(0,40)}/>
    </div>
  );
};

export default FuncComp;

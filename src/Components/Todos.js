import React, { useState } from "react";
import TodoDetails from "./TodoDetails";
import todoData from "./todos.json";

const Todos = () => {
  const [todos, setTodos] = useState(todoData.slice(0, 50));
  console.log(todos);

  return (
    <div>
      <TodoDetails todos={todos}/>
    </div>
  );
};

export default Todos;

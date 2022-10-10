import React from "react";

const TodoDetails = (props) => {
  const { todos, id, title } = props;

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
          <div>{todo.id}</div>
          <div>{todo.title}</div> <br />
        </div>
      ))}
    </div>
  );
};

export default TodoDetails;

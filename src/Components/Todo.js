import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todoArr, setTodoArr] = useState([]);

  const [isEditing, setIsEditing] = useState({
    edit: false,
    todoId: ""
  });

  const onAddHandler = () => {
    if(!input) return
    const todo = {
      id: uuidv4().split("-")[0],
      text: input
    };
    // const newArr = [...todoArr, todo]
    // setTodoArr(newArr)

    setTodoArr([...todoArr, todo]);
    setInput("");
  };

  const onDeleteHandler = (id) => {
    // const cloneArr = [...todoArr]
    // const deleteIndex = cloneArr.findIndex(elem => elem.id === id)
    // cloneArr.splice(deleteIndex, 1)
    // setTodoArr(cloneArr)

    const updateArr = todoArr.filter((elem) => elem.id !== id);
    setTodoArr(updateArr);
  };

  const onEditHandler = (id) => {
    setIsEditing({ ...isEditing, edit: true, todoId: id});
    const todoElem = todoArr.find(elem => elem.id === id)
    setInput(todoElem.text)
  };

  const onUpdateHandler = () => {
    const cloneArr = [...todoArr]
    const todoIndex = cloneArr.findIndex(elem => elem.id === isEditing.todoId)
    cloneArr[todoIndex] = {
      id: isEditing.todoId,
      text: input
    }
    setTodoArr(cloneArr)
    setIsEditing({edit:false, todoId:""})
    setInput("")
  };

  return (
    <div className="container">
      <h3 className="my-3">Todo App</h3>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          className="form-control w-75"
          value={input}
          placeholder="Add Todo"
          onChange={(e) => setInput(e.target.value)}
        />
        {isEditing.edit ? (
          <button
            className="ms-2 btn btn-warning"
            onClick={() => onUpdateHandler()}
          >
            Update
          </button>
        ) : (
          <button
            className="ms-2 btn btn-secondary"
            onClick={() => onAddHandler()}
          >
            Add
          </button>
        )}
      </div>
      <div className="todo-list mt-3">
        <div className="row d-flex align-items-center">
          {todoArr.map((todo) => (
            <>
              <div className="fs-4 col-7 text-start ps-5 my-2">{todo.text}</div>
              <button
                className="col-2 btn btn-info btn-sm me-2"
                onClick={() => onEditHandler(todo.id)}
              >
                Edit
              </button>
              <button
                className="col-2 btn btn-danger btn-sm"
                onClick={() => onDeleteHandler(todo.id)}
              >
                Delete
              </button>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;

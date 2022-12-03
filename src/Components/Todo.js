import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./TodoItem";
import {useDispatch, useSelector} from 'react-redux'
import { setTodos } from "../actions/TodoActions";

const Todo = () => {
  const ALL = "ALL";
  const PENDING = "PENDING";
  const COMPLETED = "COMPLETED";

  const todosFromRedux = useSelector((store) => {
    // console.log(store);
    return store.todoData.todos})
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [todoArr, setTodoArr] = useState([])
  //  {
  //   const todosFromLC = JSON.parse(localStorage.getItem('todos')) ?? []
  //   return todosFromLC
  // }
  // );

  useEffect(() => {
    setTodoArr(todosFromRedux)
  },[todosFromRedux])

  const [filter, setFilter] = useState(ALL);
  const [isEditing, setIsEditing] = useState({
    edit: false,
    todoId: ""
  });

  const onAddHandler = () => {
    dispatch(setTodos(todoArr))
    if (!input) return;
    const todo = {
      id: uuidv4().split("-")[0],
      text: input,
      completed: false
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
    setIsEditing({ ...isEditing, edit: true, todoId: id });
    const todoElem = todoArr.find((elem) => elem.id === id);
    setInput(todoElem.text);
  };

  const onUpdateHandler = () => {
    const cloneArr = [...todoArr];
    const todoIndex = cloneArr.findIndex(
      (elem) => elem.id === isEditing.todoId
    );
    cloneArr[todoIndex] = {
      id: isEditing.todoId,
      text: input
    };
    setTodoArr(cloneArr);
    setIsEditing({ edit: false, todoId: "" });
    setInput("");
  };

  const onCompleteHandler = (id) => {
    const cloneArr = [...todoArr];
    const todoIndex = cloneArr.findIndex((elem) => elem.id === id);
    const todoObj = cloneArr.find((elem) => elem.id === id);
    cloneArr[todoIndex] = {
      ...todoObj,
      completed: !todoObj.completed
    };
    setTodoArr(cloneArr);
  };

  const renderAllTodos = () => {
    return todoArr.map((todo) => (
      <TodoItem
        key={todo.id}
        id={todo.id}
        text={todo.text}
        completed={todo.completed}
        onDeleteHandler={onDeleteHandler}
        onEditHandler={onEditHandler}
        onCompleteHandler={onCompleteHandler}
      />
    ));
  };

  const renderCompletedTodos = () => {
    return todoArr.map(
      (todo) =>
        todo.completed && (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onDeleteHandler={onDeleteHandler}
            onEditHandler={onEditHandler}
            onCompleteHandler={onCompleteHandler}
          />
        )
    );
  };

  const renderPendingTodos = () => {
    return todoArr.map(
      (todo) =>
        !todo.completed && (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            onDeleteHandler={onDeleteHandler}
            onEditHandler={onEditHandler}
            onCompleteHandler={onCompleteHandler}
          />
        )
    );
  };

  useEffect(()=>{
    // localStorage.setItem('todos', JSON.stringify(todoArr))
    // dispatch(setTodos(todoArr))
  }, [todoArr])

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
      <div className="my-2">
        <button
          className={`${filter === ALL ? "btn-info" : ""} btn mx-4`}
          onClick={() => setFilter(ALL)}
        >
          All
        </button>
        <button
          className={`${filter === COMPLETED ? "btn-info" : ""} btn mx-4`}
          onClick={() => setFilter(COMPLETED)}
        >
          Completed
        </button>
        <button
          className={`${filter === PENDING ? "btn-info" : ""} btn mx-4`}
          onClick={() => setFilter(PENDING)}
        >
          Pending
        </button>
      </div>
      <div className="todo-list mt-3">
        <div className="row d-flex align-items-center">
          {filter === ALL && renderAllTodos()}
          {filter === PENDING && renderPendingTodos()}
          {filter === COMPLETED && renderCompletedTodos()}
        </div>
      </div>
      {/* {modalState && <Modal ></Modal>} */}
    </div>
  );
};

export default Todo;

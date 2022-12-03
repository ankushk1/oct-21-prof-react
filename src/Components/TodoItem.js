import React from "react";

const TodoItem = (props) => {
  const {
    id,
    text,
    onEditHandler,
    onDeleteHandler,
    completed,
    onCompleteHandler
  } = props;

  return (
    <>
      <div className="fs-4 col-7 text-start ps-5 my-2">
        <span onClick={() => onCompleteHandler(id)} className="me-2">
          {completed ? (
            <i className="fa-solid fa-circle-check fa-sm"></i>
          ) : (
            <i className="fa-solid fa-stopwatch"></i>
          )}
        </span>
        {text}
      </div>
      <button
        className="col-2 btn btn-info btn-sm me-2"
        onClick={() => onEditHandler(id)}
      >
        Edit
      </button>
      <button
        className="col-2 btn btn-danger btn-sm"
        onClick={() => onDeleteHandler(id)}
      >
        Delete
      </button>
    </>
  );
};

export default TodoItem;

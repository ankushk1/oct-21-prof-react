import { SET_TODOS } from "./constants";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
};

export const setTodos = (todos) => async (dispatch) => {
  const payload = await fetchData();
  dispatch ({
    type:SET_TODOS,
    payload: payload
  })
};

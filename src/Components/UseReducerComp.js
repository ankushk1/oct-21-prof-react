import React, { useReducer } from "react";

// initial state
// actions = To just change state and word related to actions is dispatch
// reducer function

const UseReducerComp = () => {
  const initialState = {
    count: 0,
    count2: 10
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + action.payload };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "reset":
        return { ...state, count: 0 };
      case "increment2":
        return { ...state, count2: state.count2 + 10 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      Count 1 - {state.count} <br />
      Count 2 - {state.count2}
      <div>
        <button onClick={() => dispatch({ type: "increment", payload: 20 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button onClick={() => dispatch({ type: "increment2" })}>
          Increment2
        </button>
      </div>
    </div>
  );
};

export default UseReducerComp;

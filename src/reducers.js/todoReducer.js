import { INC_COUNT, DEC_COUNT, RESET_COUNT , SET_TODOS} from "../actions/constants";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_TODOS : {
      return {
        ...state,
        todos: action.payload
      }
    }
    default: {
      return state
    }
  }
};


export default todoReducer;

import { INC_COUNT, DEC_COUNT, RESET_COUNT , SET_TODOS} from "../actions/constants";

const initialState = {
  count: 0,
};

const counterReducer = (state = initialState, action) => {

  switch (action.type) {
    case INC_COUNT:
      return {
        ...state,
        count: state.count + 1
      };
    case DEC_COUNT:
      return {
        ...state,
        count: state.count - 1
      };
    case RESET_COUNT:
      return {
        ...state,
        count: 0
      };
    default: {
      return state
    }
  }
};


export default counterReducer;


// state = {
//   count : 0,
//   todos : [{}, {}, {}]
// }
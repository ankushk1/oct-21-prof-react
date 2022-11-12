const redux = require("redux");

const createStore = redux.createStore;

const initialState = {
  count: 0
};

const INC_COUNT = "INC_COUNT";
const DEC_COUNT = "DEC_COUNT";

const reducer = (state = initialState, action) => {
  if (action.type === INC_COUNT) {
    console.log('-->',state)
    return { ...state, count: state.count + (action.payload || 1)};
  } else if (action.type === DEC_COUNT) {
    return { ...state, count: state.count - 1 };
  } else{
    return state
  }
};

const store = createStore(reducer);

let globalState;
store.subscribe(() => {
  console.log(store.getState());
  globalState = store.getState();
});

store.dispatch({ type: INC_COUNT, payload:20 });
store.dispatch({ type: INC_COUNT});
store.dispatch({ type: DEC_COUNT });

// console.log(globalState);




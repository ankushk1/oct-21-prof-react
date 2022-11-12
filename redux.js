const redux = require("redux");


const createStore = redux.createStore;

const initialState= {
  count: 0
}

const INC_COUNT = 'INC_COUNT'
const DEC_COUNT = 'DEC_COUNT'

const reducer = (state= initialState, action) =>{
  console.log(action)
}

const store = createStore(reducer)

let globalState;
store.subscribe(() => {
  globalState = store.getState()
})

store.dispatch({type:INC_COUNT})

console.log(globalState);
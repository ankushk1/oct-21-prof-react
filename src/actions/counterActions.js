import {INC_COUNT, DEC_COUNT, RESET_COUNT, SET_TODOS} from './constants'


export const incrementCount = (num) => {

  return ({
    type:INC_COUNT,
    payload: num
  })
}

export const decrementCount = () => {
  return ({
    type:DEC_COUNT
  })
}


export const resetCount = () => {
  return ({
    type:RESET_COUNT
  })
}



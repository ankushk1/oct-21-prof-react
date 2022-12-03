import React, { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import {
  decrementCount,
  incrementCount,
  resetCount
} from "../actions/counterActions";
import { useDispatch, useSelector } from "react-redux";

const CounterRedux = (props) => {
  // console.log(props);
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  // const state = {
  //   count: 0
  // };

  const countFromRedux = useSelector((state) => {
    console.log(state);
    return state.count;
  });

  useEffect(() => {
    console.log(countFromRedux);
    setCount(countFromRedux);
  }, [countFromRedux]);

  const handleIncrement = () => {
    // props.increment();
    dispatch(incrementCount(5));
  };
  const handleDecrement = () => {
    // props.decrement();
    dispatch(decrementCount());
  };
  const handleReset = () => {
    // props.reset();
    dispatch(resetCount());
  };

  return (
    <div>
      CounterRedux
      <div>
        {count}
        <div>
          <button onClick={() => handleIncrement()}>Increment</button>
          <button onClick={() => handleDecrement()}>Decrement</button>
          <button onClick={() => handleReset()}>Reset</button>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     counterState: state
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(incrementCount()),
//     decrement: () => dispatch(decrementCount()),
//     reset: () => dispatch(resetCount())
//   };
// };

// export def ault connect(mapStateToProps, mapDispatchToProps)(CounterRedux);
export default CounterRedux;

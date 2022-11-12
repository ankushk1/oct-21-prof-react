import React, { useState } from 'react'

const withCounter = (PrevComp) => (props) => {
  
  const [count, setCount] = useState(0)

  const onIncrement = () => {
    setCount(count + 1);
  }

  const onDecrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <PrevComp count={count} onIncrement={onIncrement} onDecrement={onDecrement} propsData={props}/>
    </div>
  )
}

export default withCounter
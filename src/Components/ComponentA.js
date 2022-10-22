import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = ({message}) => {

  return (
    <div>
      Component A is getting rendered <br />
    <ComponentB />
    </div>
  )
}

export default ComponentA
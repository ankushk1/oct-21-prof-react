import React, { useContext } from 'react'
import { messageContext } from '../App'
import ComponentC from './ComponentC'

const ComponentB = ({message}) => {
  const valFromApp = useContext(messageContext)

  console.log('B', valFromApp)
  return (
    <div>ComponentB
      <div>
        <ComponentC />
      </div>
    </div>
  )
}

export default ComponentB
import React, {useContext} from 'react'
import { messageContext } from '../App'

const ComponentC = () => {

  const valFromApp = useContext(messageContext)
  console.log(valFromApp)
  return (
    <div>ComponentC 
      <div>
        <messageContext.Consumer>
            {(value)=> {
              console.log(value);
              return <>
                <div>{value.name}</div>
                <div>{value.age}</div>
              </>
            }}
        </messageContext.Consumer>
        {valFromApp.name} <br />
        {valFromApp.age}
      </div>
    </div>
  )
}

export default ComponentC
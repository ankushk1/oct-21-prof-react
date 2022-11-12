import React from 'react'
import { useLocation, useParams } from 'react-router'

const SignUp = (props) => {

  const location = useLocation()
  const params = useParams();

  console.log(params)
  return (
    <div>SignUp</div>
  )
}

export default SignUp
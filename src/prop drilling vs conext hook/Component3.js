import React, { useContext } from 'react'
import { UserContext } from './Context'

const Component3 = () => {
    const{user,text}=useContext(UserContext);
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{text}</p>
    </div>
  )
}

export default Component3

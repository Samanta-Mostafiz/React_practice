import React, { useState } from 'react'
import Component2 from './Component2'
import { UserContext } from './Context'

// parent component1
const Component1 = () => {
    // context hook for multiple state
    const [user,setUser]=useState({id:1,name:"pranto"});
    const [text,settext]=useState("want ti be with you");
  return (
    <div>
     <UserContext.Provider value={{user,text}}>
     <h1>react hook(5) useContext</h1>
     <Component2/>
     </UserContext.Provider>
    </div>
  )
}

export default Component1

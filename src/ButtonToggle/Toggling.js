import React, { useState } from 'react'

const Toggling = () => {
    const [toggle,setToggle]=useState("true");
  return (
    <div style={{background:"blue",textAlign:"center" ,color:"white",marginTop:"10px"}}>
     {
        toggle &&  
        <p>tjdjtghfghjhkllk
        khdjkwekweucnuwamajlkaulduiowiqojmkudiouj hjdhwuioq hdkqwiouowuoipqhdud hui
        hjhkjdeqwiuqioeyio3ioeyuigfedgjkefuiwyjjseryjil njkehwyuiw dnmyuiw jkwjy
      </p>
     }
      <div>
        <button 
        style={{}}
        onClick={()=>{setToggle(!toggle)}}>
                    {toggle ?"hide":"show"}

        </button>
      </div>
    </div>
  )
}

export default Toggling

import { useState } from "react"

function StateHook() {
    const [count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+1);
    }
    return (

        <div>
            <h2>state handling with rfc<br/>{count}</h2>
            <button onClick={handleClick}>increase </button>
        </div>
    )
}

export default StateHook

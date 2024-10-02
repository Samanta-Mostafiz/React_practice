import { useState } from "react"

function StateHook() {
    const [count,setCount]=useState(0);
    const handleClick=()=>{
        setCount(count+1);// 0+1
        setCount(count+1);// 0+1
        setCount(count+1);// 0+1
         // ekhane jehetu initially state 0 kore rkha protibar  0 er sathe value jog hobe 1(0+1) e hobe protibar

        // setCount(count=>count+1);

       
    }
    return (

        <div>
            <h2>state handling with rfc<br/>{count}</h2>
            <button onClick={handleClick}>increase </button>
        </div>
    )
}

export default StateHook

  
import React, { useEffect, useState } from "react";

// const Effect = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("useEffect");
//   });
//   return (
//     <div>
//         {console.log('count')}

//       <h1>useEffect hook learning</h1>
//       <h2>count:{count}</h2>
//       <button
//         onClick={() => {
//           setCount((count) => count + 1);
//         }}
//       >
//         +
//       </button>
//       <button
//         onClick={() => {
//           setCount((count) => count - 1);
//         }}
//       >
//         -
//       </button>
//     </div>
    
//   );
// };

// export default Effect;


// with multiple state and dependency(er mane[]ei third bracket e je state thakbe tar por effect render hobena)
const Effect = () => {
  const [count, setCount] = useState(0);
  const [isLoading,setIsLoading]=useState(true);

  useEffect(() => {
    console.log("useEffect");
    setCount(0)
  },[isLoading]);
  return (
    <div style={{background:"pink",margin:"20px 202px",padding:"8px 8px",textAlign:"center",alignContent:"center",width:"50rem"}}>
        {console.log('count',count)}

      <h1>useEffect hook learning</h1>
      <h2>count:{count}</h2>
    <div >
    <button style={{marginRight:"8px"}}
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        +
      </button>
      <button style={{marginRight:"8px"}}
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        -
      </button>
      {/* to reset the count */}
      <button style={{marginRight:"8px"}}
        onClick={() => {
          setIsLoading((isLoading)=>!isLoading);
        }}
      >
       Toggle {isLoading}
      </button>
    </div>
    </div>
    
  );
};

export default Effect;
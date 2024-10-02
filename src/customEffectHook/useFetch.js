// import React, { useEffect, useState } from 'react'

// const useFetch = (url) => {
//     const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch(url)
//         .then((res) => {
//           if(!res.ok){
//             throw new Error("data is not fetching");
//           }
//           else{
//             return res.json();
//           }
//         })
//         .then((data) => {
//           setData(data);
//           setIsLoading(false);
//           console.log(data);
//           setError(null)
//         })
//         .catch((error) => {
//           setError(error);
//           setIsLoading(false);
//         });
//     }, 2000);
//   },[error,url]);

//   return (
    
//       {data,isLoading,error}
  
//   );
// }

// export default useFetch

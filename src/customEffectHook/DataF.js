// import React, { useState } from 'react'
// import useFetch from './useFetch';

// const DataF = () => {
//  const {data,isLoading,error}=  useFetch("https://jsonplaceholder.typicode.com/todos");

//     const todosData =
//     data &&
//     data.map((todo) => {
//       return <p key={todo.id}>{todo.title}</p>;
//     });
//     const loadingMessage = <p>data is loading from the server</p>;
//     const errorMessage= error ? <p>{typeof error === 'string' ? error : error.message}</p> : null;;

//   return (
//     <div>
//        <h1>data fetching using effect hook</h1>
//       {errorMessage}
//       {isLoading && loadingMessage}
//       {todosData}
//     </div>
//   );
// }

// export default DataF

// import React, { useEffect, useState } from "react";



// const DataFetch = () => {
//   const [todos, setTodos] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(true);

//   useEffect(() => {
//     setTimeout(() => {
//       fetch("https://jsonplaceholder.typicode.com/todos")
//         .then((res) => {
//           if(!res.ok){
//             throw Error("data is not fetching");
//           }
//           else{
//             return res.json();
//           }
//         })
//         .then((data) => {
//           setTodos(data);
//           setIsLoading(false);
//           console.log(todos);
//           setError(null)
//         })
//         .catch((error) => {
//           setError(error.message);
//           setIsLoading(false);
//         });
//     }, 2000);
//   });


//   const todosData =
//     todos &&
//     todos.map((todo) => {
//       return <p key={todo.id}>{todo.title}</p>;
//     });
//     const loadingMessage = <p>data is loading from the server</p>;
//     const errorMessage=<p> {error}</p>

//   return (
//     <div>
//       <h1>data fetching using effect hook</h1>
//       {todosData}
//       {error &&{errorMessage}}
//       {isLoading && loadingMessage}
//     </div>
//   );
// };

// export default DataFetch;

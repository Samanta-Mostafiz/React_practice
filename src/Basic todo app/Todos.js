import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
     console.log(props.todos);
  return (
    <div>
      {/* {props.dummyTodos} */}
      {/* map the recieved todos data from home.js into todo component */}
      {props.todos.map((todo,index)=>(
        <Todo key={index}todo={todo}/>
      ))}
    </div>
  )
}

export default Todos

import React, { useState } from 'react'
import Todos from './Todos';
import NewTodo from './NewTodo';
// parent of other todos and child of app.js
const dummyTodos=["todo1","todo2"];

const Home = () => {
  const[todos,setTodos]=useState(dummyTodos);

  const handleTodo=(newTodo)=>{
setTodos([...todos,newTodo]);
// newTodo te NewTodo.js er input dewa data gulo store korte hobe ebong state change hoe ja pawa jbe NewTodo.js e props er maddhome rcv korte hobe kore parent e je method nam dewa hoise se props.method() die call korte hbe
  }
  
  return (
    <div>
      <NewTodo onNewTodo={handleTodo}/>
      <Todos todos={todos}/>
    </div>
  )
}
export default Home

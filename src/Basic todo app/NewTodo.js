import React, { useState } from 'react'
// ei newtodo.js ke parent home e pass korabo jate ager todo gulo o conncet hoi

const NewTodo = (props) => {
  const[todo,setTodo]=useState('');

  const handleSubmit=(e)=>{
    e.preventDefault();
    props.onNewTodo(todo);
    console.log(todo)// input ta console  hocce
  }

  const handleInputChange=(e)=>{
    setTodo(e.target.value);// er maddhome input ja ja dicci ta change hobe
  }
  
  return (
    <div>
<form onSubmit={handleSubmit}>
  <label htmlFor='task'>Task:</label>
  <input type='text' name='task' id='task'  value={todo} onChange={handleInputChange} />
  <button>add</button>
</form>
    </div>
  )
}

export default NewTodo

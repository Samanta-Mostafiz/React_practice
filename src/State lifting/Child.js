import React from 'react'

const Child = (props) => {
    // for child to parent state lifting
    const data="i am from child element accessed by parent";
    props.onChildData(data);
  return (
    <div>
      <h1>State lifting from child to parent</h1>
      <p>{props.data}</p>
    </div>
  )
}

export default Child


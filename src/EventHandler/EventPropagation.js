function EventPropagation() {
    const handleParentClick=(event)=>{
console.log("parent",event);
// ekhane jotobar e child e click kori parent event fire hocche tai propagation stop korte hobe  child function e jey
    }
    const handleChildClick=(event)=>{
        event.stopPropagation();
        console.log("child",event);
       
    }
  return (
    <div className="parent" onClick={handleParentClick} style={{backgroundColor:"red"}}>
      hello world
      <button onClick={handleChildClick}></button>
    </div>
  );
}

export default EventPropagation;

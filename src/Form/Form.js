import React, { useState } from "react";
import style from "./form.module.css";

function Form() {
  // const [name, setName] = useState("");
  // const [mail, setMail] = useState("");
  // onk gulo state ke ekta state e rekhe kaj kora
  
  const[user,setUser]=useState({name:'',mail:''});
  const {name,mail}=user;

  // const handleName = (e) => {
  //   setName(e.target.value);
  //   e.preventDefault();
  // };
  // const handleMail = (e) => {
  //   setMail(e.target.value);
  //   e.preventDefault();
  // };
  // // ekadhik event function use na kore ektar moddhe sob gulo newa
//   const handleChange=(e)=>{
// const fieldName=e.target.name;
// if(fieldName==='name'){
//   setUser({name:e.target.name,mail})
// }
// if(fieldName==='mail'){
//   setUser({mail:e.target.mail,name})
// }
//   }
//   // barbar if use na kore spread operator die kora jabe
const handleChange=(e)=>{
  setUser({...user,[e.target.name]:e.target.value});
}



  const handleSubmit = (e) => {
    console.log("form submitted");
    // let info = {
    //   name: "name",
    //   mail: "mail",
    // };
    // console.log(info);
    console.log(user);
    e.preventDefault();
    
  };

  return (
    <div>
      <h1>registration</h1>
      <form action="">
        <div className={style.divGroup}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            // onChange={handleName}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.divGroup}>
          <label htmlFor="email">E-mail:</label>
          <input
            type="mail"
            id="mail"
            name="mail"
            value={mail}
            // onChange={handleMail}
            onChange={handleChange}
            required
          />
        </div>
        <div className={style.divGroup}>
          <button type="submit" onSubmit={handleSubmit}>
            register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;

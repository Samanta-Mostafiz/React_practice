// import React, { useState } from "react";

// const Formik = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//   });
//   const { name, email } = user;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUser(...user,[e.target.name]="e.target.value");
//     console.log(user);
//     setUser({name:"",email:""});
//   };

//   const handleChange = (e) => {
//     setUser(e.target.value);
//   };


//   return (
//     <div>
//       <h1>User sign up form using Formik</h1>
//       <form
//         style={{
//           backgroundColor: "yellow",
//           fontWeight: "bolder",
//           textAlign: "center",
//         }}
//         onSubmit={handleSubmit}
//       >
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//         />
//         <br />
//         <br />
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={email} 
//           onChange={handleChange}
//           placeholder="Enter your mail id"
//         />
//         <br />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Formik;

//upore basic obj die ekadhik event handle kore kora hoise,ekhon formik hook use kore kora hobe

import { useFormik } from "formik";
import *as yup from 'yup';

const Formik = () => {
  const formik=useFormik({
  initialValues:{
  name:"",
  email:"",
  },

  validationSchema:yup.object({
    name:yup.string().min(4,"must type name").required(),
    email:yup.string().min(5,"enter mail address").email().required(),
    }),

  onSubmit:(values,{resetForm})=>{
  resetForm({values:""})
  console.log(values);
  }
  });

const renderName=formik.touched.name && formik.errors.name && (<span style={{color:"red"}}>{formik.errors.name}</span>);
const renderEmail=formik.touched.email && formik.errors.email && (<span style={{color:"red"}}>{formik.errors.email}</span>);
const renderForm=
(<form
style={{
  backgroundColor: "yellow",
  fontWeight: "bolder",
  textAlign: "center",
}}
onSubmit={formik.handleSubmit}
>
<label htmlFor="name">Name:</label>
<input
  type="text"
  id="name"
  name="name"
  value={formik.values.name}
  onChange={formik.handleChange}
  placeholder="Enter your name"
/>
<br />
<br />
{renderName}
<label htmlFor="email">Email:</label>
<input
  type="email"
  id="email"
  name="email"
  value={formik.values.email}
  onChange={formik.handleChange}
  placeholder="Enter your mail id"
/>
<br />
<br />
{renderEmail}
<button type="submit">Submit</button>
</form>
);
  console.error(formik.errors);


  return (
    <div>
      <h1>User sign up form using Formik</h1>
      {renderForm}
    </div>
  );
};

export default Formik;

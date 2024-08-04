import React, { Component } from 'react';
import HomePage from './HomePage';
import LogIn from './LogIn';
class Index extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           loggedIn:false
        }
      }
      
  render() {
  // //  with if-else condition  
  //   if(this.state.loggedIn){
  //   return (
  //   <HomePage/>
  //  ) }
  //   else{
  //       return <LogIn/>
  //   }
  // }
// // element destruct kore render
// const{loggedIn}=this.state;
// let element;
// element=loggedIn?<HomePage/>:<LogIn/>
// return(
//   <>
//   {element}
//   </>
// )
  // ternary operation
  const{loggedIn}=this.state;
return(
<>
<h1>conditional rendering with rcc</h1>
{loggedIn?<HomePage/>:<LogIn/>}
</>
)
// // short circuiting
// const{loggedIn}=this.state;
// return(
//   <div>
//   {loggedIn && <HomePage/>}
//   </div>
// )
}
}
export default Index;
/* eslint-disable no-undef */
import React, { Component } from 'react'

export default class EventChange extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         valueChanged:''
      }
    }

    handleChange=(e)=>{
this.setState({
    valueChanged: e.target.value
},
// call back function ba second function cALL korlam barbar jate event ekisathe fire kore//es6
// ()=>{console.log(e.target.value) })
()=>{
    console.log(this.state.valueChanged)
}
)
  }

  render() {
    const{valueChanged}=this.state;
    return (
      <div>
        <h1>event change with rcc</h1>
        <label for="name">Full name:</label>
        <input type='text'  placeholder='enter your full name' onChange={this.handleChange}  />
      <p>{valueChanged}</p>
      </div>
    )
  }
}

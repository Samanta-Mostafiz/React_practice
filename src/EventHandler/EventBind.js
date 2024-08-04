import React, { Component } from 'react'

export default class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      this.handleClick=this.handleClick.bind(this);
      
    }
    // arrow func use korle bind lagena 

     handleClick() {
        return(
            this.setState({
                count:this.state.count+1
            })
        );
        
    }
    
  render() {
    return (
      <div>
        <h1>Event binding</h1>
        {this.state.count}
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}

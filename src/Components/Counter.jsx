import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          count:0
        }
      }
      clickIncrement=()=>{
        this.setState(prevState=>{
          return{count:prevState.count + 1}
        })
      }
  render() {
    return (
      <div>{this.props.name(this.state.count, this.clickIncrement)}</div>
    )
  }
}

export default Counter

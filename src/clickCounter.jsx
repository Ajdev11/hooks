import React, { Component } from 'react'

class ClickCounter extends Component {
constructor(props) {
  super(props)

  this.state = {
     count : 0
  }
  this.IncrementClick = this.IncrementClick.bind(this)
}
IncrementClick(){
    this.setState(prevState=>{
        return{count:prevState.count +1}
    })
}
    render() {
        const {count} = this.state 
        return (
            <div>
                <button onClick={this.IncrementClick}>Clicked {count} times</button>
            </div>
        );
    }
}
 
export default ClickCounter;
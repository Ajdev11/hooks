import React, { Component } from "react";

class Hover extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          count: 0,
        };
      }
      handleIncrement = () => {
        this.setState((prevState) => {
          return { count: prevState.count + 1 };
        });
      };
  render() {
    const {count}=this.state
    return (
      <>
        <h1 onMouseOver={this.handleIncrement}>Hover{count}</h1>
      </>
    );
  }
}

export default Hover;

import React, { Component } from "react";

class Hover extends Component {
  render() {
    const { count, handleIncrement } = this.props;
    return (
      <>
        <h1 onMouseOver={handleIncrement}>Hover{count}</h1>
      </>
    );
  }
}

export default Hover;

import React, { Component } from "react";

class Hover extends Component {
  render() {
    const { count, IncrementClick } = this.props;
    return (
      <>
        <h1 onMouseOver={IncrementClick}>Hover{count}</h1>
      </>
    );
  }
}

export default Hover;

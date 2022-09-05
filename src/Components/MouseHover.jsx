import React, { Component } from "react";
import withCounter from "./withCounter";

class MouseHover extends Component {
  render() {
    const { count, IncrementClick } = this.props;
    return (
      <>
        <h1 onMouseOver={IncrementClick}>
           MouseHover{count}
        </h1>
      </>
    );
  }
}

export default withCounter(MouseHover, 5git add);

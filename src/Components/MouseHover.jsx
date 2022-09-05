import React, { Component } from "react";
import UpdatedComponents from "./withCounter";

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

export default UpdatedComponents(MouseHover);

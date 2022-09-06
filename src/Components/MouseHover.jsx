import React, { Component } from "react";


class MouseHover extends Component {
  render() {
    const { count, clickIncrement } = this.props;
    return (
      <div>
        <h2 onMouseOver={clickIncrement}>Please hover me{count}</h2>
      </div>
    );
  }
}

export default MouseHover;

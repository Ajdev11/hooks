import React, { Component } from "react";

class ClickCount extends Component {
  render() {
    const { count, handleIncrement } = this.props;
    return (
      <>
        <button onClick={handleIncrement}>ClickCount{count}</button>
      </>
    );
  }
}

export default ClickCount;

import React, { Component } from "react";


class ClickCount extends Component {
  render() {
    const { count,clickIncrement} = this.props;
    return (
      <>
        <button onClick={clickIncrement}>Please click me{count}</button>
      </>
    );
  }
}

export default ClickCount;

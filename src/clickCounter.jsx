import React, { Component } from "react";
import withCounter from "./Components/withCounter";

class ClickCounter extends Component {
  render() {
    const { count, IncrementClick } = this.props;
    return (
      <div>
        <button onClick={IncrementClick}>
         {this.props.name} Clicked {count} times
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);

import React, { Component } from "react";
import UpdatedComponents from "./Components/withCounter";

class ClickCounter extends Component {
  render() {
    const { count, IncrementClick } = this.props;
    return (
      <div>
        <button onClick={IncrementClick}>
          Clicked {count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComponents(ClickCounter);

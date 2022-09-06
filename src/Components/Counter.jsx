import React, { Component } from "react";

class Counter extends Component {
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
    return <>
      <h2>{this.props.name(this.state.count, this.handleIncrement)}</h2>
    </>;
  }
}

export default Counter;

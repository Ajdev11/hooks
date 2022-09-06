import React, { Component } from "react";



class ClickCount extends Component {
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
    const { count } = this.state;
    return (
      <>
        <button onClick={this.handleIncrement}>ClickCount{count}</button>
      </>
    );
  }
}

export default ClickCount;

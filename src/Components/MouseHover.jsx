import React, { Component } from "react";

class MouseHover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.IncrementClick = this.IncrementClick.bind(this);
  }
  IncrementClick() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  }
  render() {
    const { count } = this.state;
    return (
      <>
        <h1 onMouseOver={this.IncrementClick}>MouseHover{count}</h1>
      </>
    );
  }
}

export default MouseHover;

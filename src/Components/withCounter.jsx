import React from "react";

const withCounter = WrappedComponent => {
  class WithCounter extends React.Component {
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
      return (
        <>
          <WrappedComponent count={this.state.count} IncrementClick={this.IncrementClick} />
        </>
      );
    }
  }
  return WithCounter;
};

export default withCounter;

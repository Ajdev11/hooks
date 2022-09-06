import React from "react";

const UpdatedComponent = (OriginalComponent, increment) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }
    incrementMe = () => {
      this.setState(prevState => {
        return { count: prevState.count + increment };
      });
    };
    render() {
      return (
        <>
          <OriginalComponent count={this.state.count} incrementMe={this.incrementMe} {...this.props} />
        </>
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;

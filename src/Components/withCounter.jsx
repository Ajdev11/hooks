import React from "react";

const UpdatedComponents = OriginalComponent => {
  class NewComponent extends React.Component {
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
          <OriginalComponent count={this.state.count} IncrementClick={this.IncrementClick} />
        </>
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponents;

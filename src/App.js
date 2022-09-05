import React, { Component } from "react";
import ClickCounter from "./clickCounter";
import MouseHover from "./Components/MouseHover";

class App extends Component {
  render() {
    return (
      <>
        <ClickCounter name="Olaseni"/>
        <MouseHover />
      </>
    );
  }
}

export default App;

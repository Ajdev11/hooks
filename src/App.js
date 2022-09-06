import React, { Component } from "react";
//import ClickCounter from "./clickCounter";
//import MouseHover from "./Components/MouseHover";
import ClickCount from "./Components/clickCount";
import Hover from "./Components/Hover";
import User from "./Components/User";

class App extends Component {
  render() {
    return (
      /*<>
        <ClickCounter name="Olaseni"/>
        <MouseHover />
      </>*/
      <>
      <ClickCount />
      <Hover />
      <User name = {(isLoggedIn)=> isLoggedIn? "Moses":"Guest"} />
      </>
    );
  }
}

export default App;

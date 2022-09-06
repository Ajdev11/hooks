import React, { Component } from "react";
//import ClickCounter from "./clickCounter";
//import MouseHover from "./Components/MouseHover";
import ClickCount from "./Components/clickCount";
import Hover from "./Components/Hover";
import User from "./Components/User";
import Counter from "./Components/Counter";

class App extends Component {
  render() {
    return (
      /*<>
        <ClickCounter name="Olaseni"/>
        <MouseHover />
        <ClickCount />
      <Hover />
      <User />
      </>*/
      <>
      <Counter name = {(count, handleIncrement)=> <ClickCount count={count} handleIncrement={handleIncrement} />} />
      <Counter name = {(count, handleIncrement)=> <Hover count={count} handleIncrement={handleIncrement}/>}/>
      </>
    );
  }
}

export default App;

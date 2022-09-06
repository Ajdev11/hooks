import React, { Component } from "react";
//import ClickCounter from "./clickCounter";
import MouseHover from "./Components/MouseHover";
import ClickCount from "./Components/clickCount";
//import Hover from "./Components/Hover";
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
      <ClickCount />
      <MouseHover />
      <User name= {(isLoggedIn)=>isLoggedIn? "Moses":"Guest"}/>
      </>*/
      <>
      <Counter name={(count, clickIncrement)=> <ClickCount count ={count} clickIncrement={clickIncrement} {...this.props} />}/>
      <Counter name={(count, clickIncrement)=> <MouseHover count ={count} clickIncrement={clickIncrement} />}/>
      </>
    );
  }
}

export default App;

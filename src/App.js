import React, { Component } from "react";
import HooksCounter from "./HooksComponents/HooksCounter";
import HooksCounter2 from "./HooksComponents/HooksCounter2";
//import ClickCounter from "./clickCounter";
//import MouseHover from "./Components/MouseHover";
//import ClickCount from "./Components/clickCount";
//import Hover from "./Components/Hover";
//import User from "./Components/User";
//import Counter from "./Components/Counter";
//import ComponentC from "./Components/ComponentC";
//import { UserProvider } from "./Components/userContext";


class App extends Component {
  render() {
    return (
      /*<>
      <ClickCounter name="Olaseni"/>
      <ClickCounter name="Olaseni"/>
      <MouseHover />
      <ClickCount />
      <Hover />
      <User />
      <ClickCount />
      <MouseHover />
      <User name= {(isLoggedIn)=>isLoggedIn? "Moses":"Guest"}/>
       <Counter name={(count, clickIncrement)=> <ClickCount count ={count} clickIncrement={clickIncrement} {...this.props} />}/>
      <Counter name={(count, clickIncrement)=> <MouseHover count ={count} clickIncrement={clickIncrement} />}/>
      <UserProvider value="Baddest developer">
      <ComponentC />
      </UserProvider>
       <HooksCounter />
      </>*/
      <>
     <HooksCounter2 />
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./index.css"
//import HooksCounter from "./HooksComponents/HooksCounter";
//import HooksCounter2 from "./HooksComponents/HooksCounter2";
//import HooksCounter3 from "./HooksComponents/HooksCounter3";
//import ClickCounter from "./clickCounter";
//import MouseHover from "./Components/MouseHover";
//import ClickCount from "./Components/clickCount";
//import Hover from "./Components/Hover";
//import User from "./Components/User";
//import Counter from "./Components/Counter";
//import ComponentC from "./Components/ComponentC";
//import { UserProvider } from "./Components/userContext";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import About from "./Components/About";


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
      <HooksCounter2 />
      <HooksCounter3 />
      </>*/
      <>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    );
  }
}

export default App;

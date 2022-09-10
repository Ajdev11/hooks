import React, { Component } from "react";
//import "./index.css"
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
//import { Routes, Route } from "react-router-dom";
//import HomePage from "./Components/HomePage";
//import About from "./Components/About";
//import HooksArray from "./HooksComponents/HooksArray";
//import HooksEffect1 from "./HooksComponents/HooksEffect1";
//import HooksMouse from "./HooksComponents/HooksMouse";
//import MouseContainer from "./HooksComponents/MouseContainer";
//import IntervalCounter from "./HooksComponents/intervalCounter";
//import DataFetching from "./HooksComponents/DataFetching";
//import DataFetching2 from "./HooksComponents/DataFetching2";
import DataFetching3 from "./HooksComponents/DataFetching3";
//import UseContext from "./HooksComponents/UseContext";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

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
      <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <HooksArray />
        <HooksEffect1 />
        <HooksMouse />
        <MouseContainer />
        <IntervalCounter />
        <UserContext.Provider value={"Olaseni"}>
          <ChannelContext.Provider value={"Moses"}>
            <UseContext />
          </ChannelContext.Provider>
        </UserContext.Provider>
        <DataFetching />
        <DataFetching2 />
        <DataFetching3 />
      </>*/
      <>
      
      <DataFetching3 />
      </>
    );
  }
}

export default App;

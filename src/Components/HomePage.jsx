import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <>
        <h1 className="Name">Welcome to my HomePage</h1>
        <NavLink className="Link" to="/about">
          ABOUT
        </NavLink>
      </>
    );
  }
}

export default HomePage;

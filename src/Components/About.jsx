import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <>
        <h1>Welcome to The About Page</h1>
        <NavLink to="/home">HOME</NavLink>
      </>
    );
  }
}

export default About;

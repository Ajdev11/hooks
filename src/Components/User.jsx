import React, { Component } from 'react'

class User extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name(true)}</h2>
      </div>
    )
  }
}

export default User
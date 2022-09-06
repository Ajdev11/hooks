import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
            {username=>{
                return <div>
                    <h2>Hello {username}</h2>
                </div>
            }}
        </UserConsumer>
      </div>
    )
  }
}

export default ComponentF
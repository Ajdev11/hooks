import React, {useContext} from 'react'
import { ChannelContext } from '../App'
import { UserContext } from '../App'


function UseContext2() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
        {user}-{channel}
    </div>
  )
}

export default UseContext2
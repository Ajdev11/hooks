import React, { useState } from 'react'
import HooksMouse from './HooksMouse'

function MouseContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toogle Display</button>
       {display && <HooksMouse />}
    </div>
  )
}

export default MouseContainer
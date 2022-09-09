import React, {useState, useEffect} from 'react'

function HooksEffect1() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
      document.title = `You clciked ${count} times`
    })
  return (
    <div>
      <button onClick={()=>setCount(count + 1)}>You Clicked {count} times</button>
    </div>
  )
}

export default HooksEffect1
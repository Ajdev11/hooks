import React, {useState, useEffect} from 'react'

function HooksEffect1() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(()=>{
      console.log('useeffect')
      document.title = `You clciked ${count} times`
    }, [count])
  return (
    <div>
      <input type="text" value={name} onChange={e=>setName(e.target.value)} />
      <button onClick={()=>setCount(count + 1)}>You Clicked {count} times</button>
    </div>
  )
}

export default HooksEffect1
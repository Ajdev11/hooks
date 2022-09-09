import React, {useState} from 'react'

function HooksArray() {
const [lists, setLists] = useState([])
const addList=()=>{
    setLists([...lists, {id:lists.length, value:Math.floor(Math.random()*200)}])
}
  return (
    <div>
        <button onClick={addList}>ADD TO LIST</button>
       <ul>
        {lists.map(list=><li key={list.id}>{list.value}</li>)}
       </ul>
    </div>
  )
}

export default HooksArray
import React, {useState} from 'react'

function HooksCounter3() {
    const [name, setName] = useState({firstName: "", lastName: ""})
  return (
      <form>
        <input type="" value={name.firstName} onChange={e=>setName({...name, firstName: e.target.value})} />
        <input type="" value={name.lastName} onChange={e=>setName({...name, lastName: e.target.value})} />
        <h2>Your firstName is -{name.firstName}</h2>
        <h2>Your lastName is -{name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
  )
}

export default HooksCounter3
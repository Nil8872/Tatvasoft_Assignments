import React, { useContext } from 'react'
import { newContex } from './Parent24'

function ChildB() {
    const [count, setCount, name, setName] =useContext(newContex)
    const clickHandler = ()=>{
        setCount(c=>c+1)
    }
  return (
    <div>
      <h3>Component B render count : {count} name is : {name}
      <button className='btn' onClick={clickHandler }>INCREMENT</button>
      </h3>
    </div>
  )
}

export default ChildB

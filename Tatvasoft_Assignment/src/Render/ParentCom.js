import React, { useState } from 'react'
import ChildCom from './ChildCom'

function ParentCom() {
    const [count, setCount] = useState(0);
   const clickHandler = ()=>{
    setCount((c)=>c+1);
   }
   console.log("render Parent")

  return (
    <div>
        <h1>I am Parent Counter : {count}</h1>
        <button className='btn' onClick={clickHandler}>Increment</button>
      <ChildCom/>
    </div>
  )
}

export default ParentCom

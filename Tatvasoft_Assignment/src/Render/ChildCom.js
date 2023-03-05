import React, { useState } from 'react'

function ChildCom() {
  const [count, setCount] = useState(0);
   const clickHandler = ()=>{
    setCount((c)=>c+1);
   }
  console.log("render Child")
  
  return (
    <div> 
      <h1>I am Child Counter : {count}</h1>
        <button className='btn' onClick={clickHandler}>Increment</button>
      
    </div>
  )
}

export default ChildCom

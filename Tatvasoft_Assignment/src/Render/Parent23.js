import React, { useState } from 'react'
import ComA from './ComA'
import ComB from './ComB'
import ComC from './ComC'
 

function Parent23() {
  console.log("Parent render")
  const [count, setCount] = useState(0);
   const clickHandler = ()=>{
    setCount((c)=>c+1);
   }
  return (
    <div>
      <h1>Parent Count - {count}
      <button className='btn' onClick={clickHandler}> INCREMENT</button>
      </h1>
        <ComA/>
        <ComB/>
        <ComC/>
      
    </div>
  )
}

export default Parent23

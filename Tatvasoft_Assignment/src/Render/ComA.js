import React, { useState } from 'react'
function ComA() {
    console.log("A Comp render")
    const [count, setCount] = useState(0);
   const clickHandler = ()=>{
    setCount((c)=>c+1);
   }
  return (
    <div>
      <h1>A Count {count}
      <button className='btn' onClick={clickHandler}> INCREMENT</button>
      </h1>
    </div>
  )
}

export default React.memo(ComA)

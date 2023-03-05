import React, { useState } from 'react'
function ComC() {
    console.log("C comp render")
    const [count, setCount] = useState(0);
   const clickHandler = ()=>{
    setCount((c)=>c+1);
   }
  return (
    <div>
      <h1>C Count {count}
      <button className='btn' onClick={clickHandler}> INCREMENT</button>
      </h1>
    </div>
  )
}

export default React.memo(ComC)

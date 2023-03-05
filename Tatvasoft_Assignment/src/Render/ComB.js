import React, { useState } from 'react'
function ComB() {
    console.log("B Comp render")
    const [count, setCount] = useState(0);
   const clickHandler = ()=>{
    setCount((c)=>c+1);
   }
  return (
    <div>
      <h1>B Count {count}
      <button className='btn' onClick={clickHandler}> INCREMENT</button>
      </h1>
    </div>
  )
}

export default React.memo(ComB)

import React, { useState } from 'react'

function CounterHook() {
    const [count, setCount] = useState(0);

    const clickHandler = ()=>{
        setCount(count+1);
    }
  return (
    <div>
      <button className='btn' onClick={clickHandler}>Click Me {count} times</button>
    </div>
  )
}

export default CounterHook

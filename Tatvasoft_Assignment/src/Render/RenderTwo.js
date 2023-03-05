import React, { useEffect, useReducer, useState } from 'react'

const reducer = (state, action) =>{
    switch (action.type) {
        case "ADD":
            return state+1
    
        case "SUB":
            return state-1
    
        case "MUL":
            return state*2
    
        default:
           return state;
    }
}

function RenderTwo() {
    const initialState = 0;
    const [count, setCount] = useState(0);
    const [state, dispatch]= useReducer(reducer, initialState);
    useEffect(()=>{
        setCount((c)=>c+1);
    },[state])
  return (
    <div className='container'>
        <h1>{state}</h1>
        <h1>{count}-times render</h1>
      <button className='btn' onClick={()=>dispatch({type: "ADD"})}>Add + 1</button>
      <button className='btn' onClick={()=>dispatch({type: "SUB"})}>Substract - 1</button>
      <button className='btn' onClick={()=>dispatch({type: "MUL"})}>Multipy * 2</button>
    </div>
  )
}

export default RenderTwo

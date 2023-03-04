import React, { useReducer,useContext } from "react";
import { GlobalCounter } from "../App";

function CounterIncUseReduce() {
   

  // const [state, dispatch] = useReducer(reducer, initialState);
  // const [stateTwo, dispatchTwo] = useReducer(reducer, initialState);
  const {Counterdispatch,counterState} = useContext(GlobalCounter);
  return (
    <div>
      <div className="countValue"> 
      </div>
      <button className="btn" onClick={() => Counterdispatch({ type: "DECREMENT",value:1 })}>
        DECREMENT
      </button>
      <button className="btn" onClick={() => Counterdispatch({ type: "RESET" })}>
        RESET
      </button>
      <button className="btn" onClick={() => Counterdispatch({ type: "INCREMENT", value:1 })}>
        INCREMENT
      </button>
       
    </div>
  );
}

export default CounterIncUseReduce;

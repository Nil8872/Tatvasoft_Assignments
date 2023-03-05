 import React, { useState } from 'react'
import ChildA from './ChildA';
import ChildB from './ChildB';
import ChildC from './ChildC'; 
 
export const newContex = React.createContext();

 function Parent24() {
  const [name , setName ] = useState('');
  const [count, setCount] = useState(0);
  const clickHandler = () =>{
    setCount(c=>c+1);
  }

  const setNameHandler = ()=>{
    setName('Nilesh')
  }
   return (
    <>
    <h2>Parent Componet render Count : {count}
    
      <button className='btn' onClick={clickHandler}>onClick</button>
      <button className='btn' onClick={setNameHandler}>setName</button>
    </h2>
    <h4>name is : {name}</h4>
      <newContex.Provider value={[count, setCount, name, setName]} >
        <ChildA/>
        <ChildB/>
        <ChildC/>
      </newContex.Provider>
    </>

   )
 }
 
 export default Parent24
 
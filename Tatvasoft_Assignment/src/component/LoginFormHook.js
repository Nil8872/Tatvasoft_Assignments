import React, { useState } from 'react'

function LoginFormHook() {
    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');

    const submitHandler = ()=>{
        alert(`Your emai is : ${email} \n Password is : ${psw}`)
    }
    const resetHandler = ()=>{
        setEmail('');
        setPsw('');
    }

  return (
 
      <div className="container">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <form action="" onSubmit={submitHandler} >
           
          <div className="email item">
            <input
              className="input"
              id="email"
              name="email"
             
              type="email"
            onChange={(e)=>setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="Password item">
            <input
              className="input"
              id="password"
              name="password"
              onChange={(e)=>setPsw(e.target.value)}
              type="password"
              
              autoComplete="off"
              placeholder="Enter Your Password"
            />
          </div>

          <div>
            <input className="btn" type="submit" />
            <input
              className="btn"
              type="reset"
              onClick={resetHandler}
               
            />
          </div>
        </form>
      </div>
    
  )
}

export default LoginFormHook

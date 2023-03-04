import React, { useCallback, useReducer, useState } from 'react'
import useInput from './useInput';



// const reducer = (state, action)=>{
//     switch (action.type) {
//         case "USERNAME":
//             console.log(action.value)
//             return {...state, userName : action.value}
    
//         case "EMAIL":
//             return {...state, email : action.value}
    
//         case "PHONE":
//             return {...state, phone : action.value}
    
//         case "DOB":
//             return {...state, dob : action.value}
    
//         default:
//             return state;
//     }
// }
function RegisterUser() {
    // const initialState = {
    //     userName : '',
    //     email : '',
    //     phone : '',
    //     dob : '',
    // }
    // const [userName, setUserName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [dob, setDob] = useState('');
    
    const [userName, bindUserName, resetUserName] =useInput('');
    const [email, bindEmail, resetEmail] = useInput('');
    const [phone, bindPhone, resetPhone] = useInput('');
    const [dob, bindDob, resetDob] = useInput('');
    // const [state, dispatch] = useReducer(reducer, initialState)

const onSubmitHandler = (e)=>{
e.preventDefault();
alert(`UserName is : ${userName} \n email is : ${email} \n phone numbet is : ${phone}\n DOB is : ${dob}`)
resetHandler();
}

const resetHandler = () => {
    // setDob('')
    // setEmail('')
    // setPhone('')
    // setUserName('')
    resetUserName();
    resetEmail();
    resetDob();
    resetPhone();
    

}
     
  return (
    <div className="container">
    <div className="heading">
      <h1>Registration</h1>
    </div>
    <form action="" onSubmit={onSubmitHandler} /*<onSubmit={onSubmitHandler} */ >
      <div className="userName item">
        <input
          className="input"
          id="userName"
          name="userName" 
          type="text"

          // value={userName}
          // onChange={useCallback((e)=>setUserName(e.target.value),[userName])}
          {...bindUserName}

        // onChange={ (e)=>dispatch({type : "USERNAME", value : e.target.value})}
            // value={userName}
          placeholder="Enter Your Username"
        />
      </div>
      <div className="email item">
        <input
          className="input"
          id="email"
          name="email" 
          type="email"
          placeholder="Enter Your Email"


          //   value={email}
          // onChange={useCallback((e)=>setEmail(e.target.value),[email])}
          {...bindEmail}


        // onChange={ (e)=>dispatch({type : "EMAIL", value : e.target.value})}
        />
      </div>
      <div className="phone item">
        <input
          className="input"
          id="phone"
          name="phone" 
          type="number" 
          autoComplete="off"
          placeholder="Enter Your Mobile No."

          // value={phone}
          // onChange={useCallback((e)=>setPhone(e.target.value),[phone])}
          {...bindPhone}


        // onChange={ (e)=>dispatch({type : "PHONE", value : e.target.value})} 
               />
      </div>
      <div className="date item">
        <input
          className="input"
          id="date"
          name="date" 
          type="date" 
          autoComplete="off"

          // value={dob}
          // onChange={useCallback((e)=>setDob(e.target.value),[dob])}
          {...bindDob}


        // onChange={ (e)=>dispatch({type : "DOB", value : e.target.value})}
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

export default React.memo(RegisterUser)

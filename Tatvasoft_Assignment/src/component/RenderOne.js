import React, {useEffect, useState} from "react";
import useDebounce from "./useDebounce";


function RenderOne() {

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [dob, setDob] = useState('');
    const [count, setCount] = useState(0);

    // const debouceUserName = useDebounce(userName);
    // const debouceEmail = useDebounce(email);
    // const deboucePhone = useDebounce(phone);
    // const debouceDob = useDebounce(dob);
    // const debouceCount = useDebounce(count);
     
    // console.log("rednre")
    useEffect(()=>{
        setCount((c)=>c+1);
         
    },[userName, phone, dob, email])

    const onSubmitHandler = ()=>{

    }

    // console.log("Render one is render")

  return (
    <div className="container">
      <div className="heading">
        <h1>Registration</h1>
        <h1>{count} Times render</h1>
      </div>
      <form
        action=""
        onSubmit={onSubmitHandler} 
      >
        <div className="userName item">
          <input
            className="input"
            id="userName"
            name="userName"
            type="text"
            value={userName}
            placeholder="Enter Your Username"
            onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
        <div className="email item">
          <input
            className="input"
            id="email"
            name="email"
            type="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="phone item">
          <input
            className="input"
            id="phone"
            name="phone"
            type="number"
            autoComplete="off"
            value={phone}
            placeholder="Enter Your Mobile No."
            onChange={(e)=>setPhone(e.target.value)}
          />
        </div>
        <div className="date item">
          <input
            className="input"
            id="date"
            name="date"
            type="date"
            value={dob}
            autoComplete="off"
            onChange={(e)=>setDob(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default RenderOne;

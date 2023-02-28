import React, { Component } from "react";

// Day - 7

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      email: "",
      password: "",
    };
  }

  onChangeHandler = (e) => {
    // const {name, value} = e.target;
    this.setState({
      [e.target.name]: e.targe.value
    });
  };
  
  onSubmitHandler = (e) => {
      const {userName, email, password} = this.state;
    e.preventDefault();
    alert(`UserName is : ${userName} \n Email is : ${email} \n password is : ${password}`)
  };

  onResetHandler = ()=>{
   this.setState({userName: "", email : '', password : ''})
  }
  
  render() {
    const {userName, email, password} = this.state;
    return (
      <div className="container">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <form action="" onSubmit={this.onSubmitHandler}>
          <div className="userName item">
            <input
              className="input"
              id="userName"
              name="userName"
              onChange={this.onChangeHandler}
              type="text"
                value={userName}
              placeholder="Enter Your Name"
            />
          </div>
          <div className="email item">
            <input
              className="input"
              id="email"
              name="email"
              onChange={this.onChangeHandler}
              type="email"
                value={email}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="Password item">
            <input
              className="input"
              id="password"
              name="password"
              onChange={this.onChangeHandler}
              type="password"
                value={password}
              autoComplete="off"
              placeholder="Enter Your Password"
            />
          </div>

          <div>
            <input className="btn" type="submit" />
            <input
              className="btn"
              type="reset"
              onClick={this.onResetHandler}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;

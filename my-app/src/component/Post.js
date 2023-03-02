import axios from "axios";
import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  };
  onSubmitHandler = (e) => {
    e.preventDefault()
    // console.log(this.state);
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state).
    then(response => {
        // console.log(response);
        const {userId, title, body} = response.data
        alert(`Userid is ${userId} \n titel is : ${title} \n body is : ${body}`)
    })
    .catch(error => {
        console.log(error);
    })
  }

  render() {
    // const { userId, title, body } = this.state;
    return (
      <div className="container">
        <form  
        onSubmit={this.onSubmitHandler}
        >
            <div className="heading">
                <h1>Login</h1>
            </div>
          <div>
            <input
            className="input"
              type="text"
              name="userId"
              id="userId"
              placeholder="Enter UserId"
            //   value={userId}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              id="title"
              className="input"
              placeholder="Enter title"
            //   value={title}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="body"
              id="body"
              className="input"
              placeholder="Enter body"
            //   value={body}
              onChange={this.onChangeHandler}
            />
          </div>
          <div>
            <button 
            style={{cursor:'pointer'}}
            className="btn"
             type="submit">Submit now</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Post;

import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import UserDetail from './UserDetail'

// import React from 'react'

function Users() {
  const [users, setUsers] =useState([]);
  const [message, setMessage] = useState('');

  const url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(()=>{
    axios.get(url).
        then((respose)=> {
          // console.log(respose.data);
            return (setUsers(respose.data)
        )})
        .catch(error =>setMessage(
            "Some ErroR  Occure in Fetch Data"
        ))

  },[])
  return (
    <div>
       <UserDetail users={users} message={message} />
    </div>
  )
}

export default Users


// class Users extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          users : [],
//          message : '',
//       }
//     }
//     url = "https://jsonplaceholder.typicode.com/posts"

//     componentDidMount(){
//         axios.get(this.url).
//         then((respose)=> {
//             return this.setState(
//             {
//                 users : respose.data,
//             }
//         )})
//         .catch(error =>this.setState({
//             message : "Some ErroR  Occure in Fetch Data",
//         }))
        
//     }

    
//   render() {
//     console.log(this.state)
//     return (
//       <div>
//         <UserDetail users={this.state} />
//       </div>
//     )
//   }
// }

// export default Users

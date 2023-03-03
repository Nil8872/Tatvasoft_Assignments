import React, { Component } from 'react'


class UserList extends Component {
  render() {
   const {data} = this.props;
    return (
      <div>
        <table className="table">
  <thead>
    <tr>
    
      <th scope="col">Id</th>
      <th scope="col">name</th>
      <th scope="col">College</th>
       
    </tr>
  </thead>
  <tbody>
    {
     data.map((item)=>{
      return (
        <tr key={item.id}>
      
     <td>{item.id}</td>
     <td>{item.name}</td>
     <td>{item.college}</td>
     
       </tr>
      )
     })
    }
     
  </tbody>
</table>
      </div>
    )
  }
}

export default UserList

import React, { Component } from 'react'
import Title from '../component/Title'
import HOC from '../component/HOC'
import UserList from '../component/UserList'

export class Home extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         title : "Home Page",
         desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      }
    }

    array1 = [
       
      {
        id:1,
        name: 'Nilesh',
        college : 'Gec, Bhavnagar',
      },
      {
        id:2,
        name: 'Vijay',
        college : 'Gec, Surat',
      },
      {
        id:3,
        name: 'Sagar',
        college : 'Gec, Ahemdabad',
      },
      {
        id:4,
        name: 'Kris',
        college : 'Gec, Gandhinagr',
      },
      {
        id:5,
        name: 'Umesh',
        college : 'Gec, Rajkot',
      },
    ]

    Users = HOC(UserList, this.array1)
    
  render() {

    return (
      <div>
         {/* <Title  titleText="Hello World"/> */}
         {/* <Title titleText="Nilesh Sariya"/>
         <Title titleText="Good Morning"/> */}

         {/* <Title state={this.state}/> */}
         {/* <Title/>
         <h2>I am Home Page</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minus consequatur debitis, quia blanditiis non! Rerum libero dicta cumque eveniet aliquid, cupiditate voluptates?</p> */}
        
         {/* <this.Users/>  */}
      </div>
    )
  }
}

export default Home

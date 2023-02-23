import React, { Component } from 'react'
import Title from '../component/Title'

export class Home extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         title : "Home Page",
         desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
      }
    }
    
  render() {
    return (
      <div>
         {/* <Title  titleText="Hello World"/> */}
         {/* <Title titleText="Nilesh Sariya"/>
         <Title titleText="Good Morning"/> */}

         {/* <Title state={this.state}/> */}
         <Title/>
         <h2>I am Home Page</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minus consequatur debitis, quia blanditiis non! Rerum libero dicta cumque eveniet aliquid, cupiditate voluptates?</p>

      </div>
    )
  }
}

export default Home

import React, { Component } from 'react'

export class numberer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         number:0,
      }
    }

    incrementNumber = ()=>{
        this.setState({
            number: this.state.number+1,
        },()=>{
            console.log(this.state.number)
        })
    }
    
  render() {
    return (
      <div>
        <button style={{padding:'20px', fontSize:'30px', borderRadius:'10px', cursor:'pointer'}} onClick={this.incrementNumber}>Click Me number: {this.state.number}</button>
      </div>
    )
  }
}

export default numberer

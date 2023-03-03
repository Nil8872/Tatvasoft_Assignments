import React, { Component, createRef } from 'react'

// Day - 8

class InputRef extends Component {
    constructor(props) {
      super(props)
        this.inputFocus = React.createRef()
        
    }
   
    
    
    focusInput = ()=>{
        
        this.inputFocus.current.focus()
    }
    
    render() {
    return (
      <div className='container'>
        <div >
            <input  ref={this.inputFocus} className="input" type="text"  placeholder='Enter Your Name'/>
            

        </div>
      </div>
    )
  }
}

export default InputRef

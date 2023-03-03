import React, { Component } from 'react'
import InputRef from './InputRef'


class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }
    onClickToFocus = ()=>{
        console.log(this.componentRef);
        this.componentRef.current.focusInput();
     }
    
  render() {
    return (
      <div>
        <InputRef ref={this.componentRef}/>
        <button className='btn' onClick={this.onClickToFocus}>ClickToFocus</button>
      </div>
    )
  }
}

export default FocusInput

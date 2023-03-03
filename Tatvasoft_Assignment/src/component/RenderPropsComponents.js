import React, { Component } from 'react'

  class RenderPropsComponents extends Component {
  render() {
    const {rander} = this.props
    return (
      <div className='container'>
         {rander()}
      </div>
    )
  }
}

export default RenderPropsComponents

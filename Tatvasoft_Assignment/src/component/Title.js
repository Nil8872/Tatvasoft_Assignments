import React from 'react'
import List from './List'
import '../App.css'


function Title() {
  return (
    <div>
      {/* <h1>{titleText}</h1> */}
      {/* <h1>{state.title}</h1>
      <h1>{state.desc}</h1> */}
      {/* <h1>Title</h1> */}
      <h1>This is Title.js</h1>
      <List/> 
    </div>
  )
}

export default React.memo(Title)

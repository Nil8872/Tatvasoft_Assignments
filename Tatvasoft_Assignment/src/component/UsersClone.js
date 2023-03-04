import React, { Component, useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import UserDetail from './UserDetail'

// import React from 'react'

const initialState = {
  user: '',
  error : '',
};
const reducer = (state, action)=>{
  switch (action.type) {
    case "DATA_FETCH":
      return {
        ...state, user: action.payload
      }
   
    case "DATA_NOT_FETCH":
      return {
        ...state, error:"Some error Occore in Fetchin data"
      }
   
    default:
      return state;
  }
}
function UsersClone() {

useEffect(()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then((response)=>{
     dispatch({type:"DATA_FETCH", payload: response.data.title})
  })
  .catch((e)=>{
    dispatch({type:"DATA_NOT_FETCH"})
  })
}, [])
   const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
       
       <h3>{state.user}</h3>
       <h3>{state.error}</h3>
    </div>
  )
}

export default UsersClone

 
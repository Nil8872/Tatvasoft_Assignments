import React, { useState } from 'react'



function PostDetail() {

    const [id, setId] =  useState(0);

  return (
    <div>
      <input type="number" value='' onChange={changeHandler} />
    </div>
  )
}

export default PostDetail

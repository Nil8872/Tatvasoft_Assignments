import React from 'react'

function UserDetail(props) {
    const {users, message} = props;
    // console.log(users.message)
    console.log(users);
  return (
    <div className='main-Box'>
      {
      users.map((item)=>{
            return (
                <div className="box" key={item.id}>
                    <h1>{(item.title).slice(0,15)}</h1>
                    <p>{(item.body.slice(0,100))}</p>
                </div>
            )
        })
      }
      <h1 className='container'>{message}</h1>
    </div>
  )
}

export default UserDetail

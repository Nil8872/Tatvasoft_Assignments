import React, { useContext } from "react";
import { UserNameCunsumer } from "./UserNameContex";


function ComC() {
  const name =  useContext(UserNameCunsumer)
  return (
    <div>
      <h1>This is Component C. start from here</h1>


      {/* <UserNameCunsumer>
        {(userName) => {
          return <h1>Hello {userName}</h1>;
        }}
      </UserNameCunsumer>
       */}
      <h1>Hello {name}</h1>

      <h1>This is Component C. End here</h1>
    </div>
  );
}

export default ComC;

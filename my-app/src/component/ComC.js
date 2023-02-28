import React from "react";
import { UserNameCunsumer } from "./UserNameContex";

function ComC() {
  return (
    <div>
      <h1>This is Component B. start from here</h1>

      <UserNameCunsumer>
        {(userName) => {
          return <h1>Hello {userName}</h1>;
        }}
      </UserNameCunsumer>

      <h1>This is Component B. End here</h1>
    </div>
  );
}

export default ComC;

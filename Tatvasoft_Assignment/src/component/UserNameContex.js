import React from "react";

const UserContex = React.createContext();

const UserNameProvider = UserContex.Provider;
const UserNameCunsumer = UserContex.Consumer;

export {UserNameProvider,UserNameCunsumer} 
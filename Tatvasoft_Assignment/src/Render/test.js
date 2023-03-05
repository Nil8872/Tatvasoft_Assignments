import { createContext, useContext, useState } from 'react';

// Create a context to hold the data we want to pass between components
const MyContext = createContext();

// Create a custom hook to access the context
export const useMyContext = () => useContext(MyContext);

// Define a provider component to wrap our app and pass data through the context
export const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      {children}
    </MyContext.Provider>
  );
};

 
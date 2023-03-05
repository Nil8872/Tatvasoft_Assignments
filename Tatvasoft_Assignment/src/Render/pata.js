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
import { useMyContext } from './MyContext';

const ComponentA = () => {
  const { setCount } = useMyContext();

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <button onClick={handleClick}>
      Increment Count in Context
    </button>
  );
};

const ComponentB = () => {
  const { count } = useMyContext();
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount((count) => count + 1);
  }, []);

  return (
    <div>
      <p>Count in Context: {count}</p>
      <p>Render Count: {renderCount}</p>
    </div>
  );
};

const ComponentC = () => {
  const { count } = useMyContext();
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    setRenderCount((count) => count + 1);
  }, []);

  return (
    <div>
      <p>Count in Context: {count}</p>
      <p>Render Count: {renderCount}</p>
    </div>
  );
};

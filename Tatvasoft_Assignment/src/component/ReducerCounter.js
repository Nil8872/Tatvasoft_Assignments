
export const initialState = {
    count: 0,
    
  };
  
export const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":return { ...state, count : state.count + action.value}
      case "RESET":return initialState;
      
      case "DECREMENT": return { ...state, count : state.count - action.value}
      default:
        return state
      }
    };
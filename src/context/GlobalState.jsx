import React, { createContext, useReducer } from 'react';

// 1. Create the initial state
const initialState = { count: 0 };

// 2. Define the reducer function to handle actions
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 3. Create a context object
export const GlobalContext = createContext();

// 4. Create a provider component that wraps the app
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Provide state and dispatch to children via context
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

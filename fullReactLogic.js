import React, { createContext, useContext, useReducer } from 'react';

// Create a context for the state and dispatch function
const MyContext = createContext();

// Define the initial state and reducer function
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// Create a provider component to wrap your app or component tree
function MyProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
}

// Use the context in any child component
function MyComponent() {
  const { state, dispatch } = useContext(MyContext);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

// Wrap your app or component tree with the provider
function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

export default App;

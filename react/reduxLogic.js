/**
The following is a way of how you can structure your redux project

Root Project folder
  Public
  src
    components
    hooks
      useActions.ts
      useTypedSelector.ts
     state
      action-creators
        index.ts
       action-types
        index.ts
       actions
        index.ts
       reducers
        repositoryReducer.ts
        index.ts
       index.ts
       store.ts
      index.tsx
**/

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Define the initial state and action types
const initialState = { count: 0 };
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Define the reducer function
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Define the action creators
function increment() {
  return { type: INCREMENT };
}

function decrement() {
  return { type: DECREMENT };
}

function asyncIncrement() {
  return dispatch => {
    setTimeout(() => {
      dispatch(increment());
    }, 1000);
  };
}

// Create the store with the thunk middleware
const store = createStore(reducer, {}, applyMiddleware(thunk));

// Use the store in any component
function MyComponent() {
  const { count } = store.getState();
  return (
    <Provider store={store}>
      <div>
        Count: {count}
        <button onClick={() => store.dispatch(increment())}>+</button>
        <button onClick={() => store.dispatch(decrement())}>-</button>
        <button onClick={() => store.dispatch(asyncIncrement())}>Async +</button>
      </div>
    </Provider>
  );
}

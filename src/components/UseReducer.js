import React, { useReducer } from 'react';


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

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
      <>
        <h1>(Using UseReducer) The count is { state.count }</h1>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      </>
    );
}


export default UseReducer;
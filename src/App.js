import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';
import './App.css';


const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(store => store.count);

  return (
    <div>
      <h1>The count is { count }</h1>
      <button onClick={() => dispatch(increment(count))}>+</button>
      <button onClick={() => dispatch(decrement(count))}>-</button>
    </div>
  );
}


export default App;

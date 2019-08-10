import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store';
import axios from 'axios';
import UseReducer from './components/UseReducer';
import './App.css';


const App = () => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    setUsers(res.data);
  };
  useEffect(() => { fetchUsers(users) });

  const dispatch = useDispatch();
  const count = useSelector(store => store.count);

  return (
    <div>
      <h1>(Using Redux) The count is { count }</h1>
      <button onClick={ () => dispatch(increment(count)) }>+</button>
      <button onClick={ () => dispatch(decrement(count)) }>-</button>
      <UseReducer/>
      <h1>Fetched Users</h1>
      <ul>
      { users.map(user => <li key={ user.id }>{ user.name }</li>) }
      </ul>
    </div>
  );
}


export default App;

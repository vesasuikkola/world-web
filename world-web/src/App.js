import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from './actions/worldActions';
import { logout } from './actions/authActions';
import World from './containers/World';
import Auth from './components/Auth';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector(({ auth }) => auth.auth.token);
  return (
    <div className="App">
      <h1>Welcome to the world app!</h1>
      {token && <button onClick={() => dispatch(logout())}>Logout</button>}
      <hr />
      {token ? dispatch(fetchCountries(token)) && <World /> : <Auth />}
    </div>
  );
}

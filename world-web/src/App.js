import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from './actions/worldActions';
import World from './containers/World';
import Auth from './containers/Auth';
import './App.css';

export default function App() {
  const dispatch = useDispatch();
  const token = useSelector(({ auth }) => auth.auth.token);
  return (
    <div className="App">
      <h1>Welcome to the world app!</h1>
      <hr />
      {token ? dispatch(fetchCountries(token)) && <World /> : <Auth />}
    </div>
  );
}

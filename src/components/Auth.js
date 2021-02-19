import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as authActions from '../actions/authActions';
import './Auth.css';

export default function Auth() {
  const dispatch = useDispatch();

  const [form, setForm] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      authActions.login(e.target['email'].value, e.target['password'].value)
    );
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (e.target['password1'].value === e.target['password2'].value)
      dispatch(
        authActions.register(
          e.target['name'].value,
          e.target['email'].value,
          e.target['password1'].value
        )
      );
    else alert('Please provide matching passwords!');
  };

  //FIXME: security issues with form behaviour when switching between register/login
  return form ? (
    <form method="POST" className="Auth-form" onSubmit={handleLogin}>
      <h2>Please login</h2>
      <span className="login" onClick={() => setForm(false)}>
        Don't yet have an account?
      </span>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" required></input>
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required></input>
      <br />
      <button type="submit">Login</button>
    </form>
  ) : (
    <form method="POST" className="Auth-form" onSubmit={handleRegister}>
      <h2>Please register</h2>
      <span className="login" onClick={() => setForm(true)}>
        Already have an account?
      </span>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name"></input>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" required></input>
      <label htmlFor="password1">Password:</label>
      <input id="password1" name="password1" type="password" required></input>
      <label htmlFor="password2">Confirm password:</label>
      <input id="password2" name="password2" type="password" required></input>
      <br />
      <button type="submit">Register</button>
    </form>
  );
}

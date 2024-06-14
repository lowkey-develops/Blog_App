// src/components/Auth/Auth.js
import React from 'react';
import Login from './Login';
import Register from './Register';
import './Auth.css';

const Auth = () => {
  return (
    <div className="auth-container">
      <div>
        <Login />
      </div>
      <div>
        <Register />
      </div>
    </div>
  );
};

export default Auth;

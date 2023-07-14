import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send POST request to login endpoint with email and password data
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} />
      <label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send POST request to register endpoint with username, email, and password data
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <label>Username</label>
      <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
      <label>Email</label>
      <input type="email" value={email} onChange={handleEmailChange} placeholder="email@address.com" />
      <label>Password</label>
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
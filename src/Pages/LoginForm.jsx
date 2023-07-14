import React, { useContext, useState } from 'react';
import './LoginForm.css';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext)

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(email, password)
    // Send POST request to login endpoint with email and password data
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email</label>
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Enter your email address" />
        <label>Password</label>
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter your password" />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register</Link></p>
    </div>
  );
};

export default LoginForm;
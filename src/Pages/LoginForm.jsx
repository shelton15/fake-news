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
        <input type="email" value={email} onChange={handleEmailChange} placeholder="email@address.com" />
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
        <button type="submit">LOGIN</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default LoginForm;
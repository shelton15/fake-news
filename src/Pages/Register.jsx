import React, { useContext, useState } from 'react';
import './Register.css';
import { AuthContext } from '../context/AuthProvider';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext)

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
    register(username, email, password)
    // Send POST request to register endpoint with username, email, and password data
  };

  return (
    <div className='container'>
        <form onSubmit={handleSubmit} className="register-form">
            <label>Username</label>
            <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
            <label>Email</label>
            <input type="email" value={email} onChange={handleEmailChange} placeholder="email@address.com" />
            <label>Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
            <button type="submit">Register</button>
        </form>
    </div>
  );
};

export default Register;
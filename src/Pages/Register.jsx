import React, { useContext, useState } from 'react';
import './Register.css';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';


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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await register(username, email, password);
      // Send POST request to register endpoint with username, email, and password data
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container'>
        <form onSubmit={handleSubmit} className="register-form">
            <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
            <input type="email" value={email} onChange={handleEmailChange} placeholder="email@address.com" />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
            <button type="submit">REGISTER</button>
            <p>Already have an Account? <Link to="/login">Login</Link></p>
        </form>
    </div>
  );
};

export default Register;
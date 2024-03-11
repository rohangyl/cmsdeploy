import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from './AuthContext';
import './UserLogin.css';
import { useClaimContext } from './ClaimContext';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUserId } = useClaimContext();
  const navigate = useNavigate();
  //const { login } = useAuth();
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8081/users/login', {
        username,
        password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        const token = response.data; // Assuming the token is in the response data
        const userId = response.data.userId;
        setUserId(userId);

        console.log('Login successful. Token:', token);
        navigate('/healthclaim');
      } else {
        // Handle unsuccessful login
        console.error('Login failed. Status:', response.status);
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form className='login-form'>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

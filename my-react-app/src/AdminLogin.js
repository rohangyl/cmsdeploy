import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { useClaimContext } from './ClaimContext';
import "./AdminLogin.css"

const AdminLogin = () => {
  const navigate = useNavigate();
 // const { login, setClaimId } = useAuth(); // Use setClaimId from useAuth
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAdminId } = useClaimContext();

  const handleLogin = async () => {
    try {
      // Send login request to the Spring Boot backend
      const response = await axios.post('http://localhost:8081/api/admins/login', {
        username,
        password,
      });
      console.log('Login successful:', response.data);

      // Assuming the claimId is available in the response
      const adminId = response.data.adminId;

      // Set the claimId in the global context
      setAdminId(adminId);

      navigate('/dashboard/admin');
    } catch (error) {
      console.error('Login failed:', error.response.data);
    }
  };


  return (
    <div className="admin-login-container">
      <h2>Admin Login</h2>
      <form className="admin-login-form">
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

export default AdminLogin;

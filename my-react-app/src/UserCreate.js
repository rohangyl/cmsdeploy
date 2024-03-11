import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './UserCreate.css';
const UserCreate = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Use useNavigate to get access to the navigate function
 // const navigate = useNavigate();


  const handleCreateUser = async () => {
    try {
      // Send user creation request to the Spring Boot backend
      const response = await axios.post('http://localhost:8081/users/create', {
        username,
        password,
      });

      // Check if 'response' is defined before accessing 'data'
      if (response && response.data) {
        // Handle successful user creation
        console.log('User created successfully:', response.data);

        // After successful user creation, navigate to the welcome page
       // navigate('/welcome');
      } else {
        console.error('Invalid response format:', response);
      }
    } catch (error) {
      // Handle user creation failure
      console.error('User creation failed:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='createUser-container'>
      <h2>Create User</h2>
      <form className='createUser-form'>
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
        <button type="button" onClick={handleCreateUser}>
          Create User
        </button>
      </form>
    </div>
  );
};

export default UserCreate;

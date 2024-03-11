// src/components/UserComponent.js
import React, { useState } from 'react';
import axios from 'axios';

const UserComponent = () => {
  const [userData, setUserData] = useState({});
  
  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/users/create/1'); // Replace with your Spring Boot endpoint
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  return (
    <div>
      <h2>User Information</h2>
      <button onClick={fetchUserData}>Fetch User Data</button>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};

export default UserComponent;

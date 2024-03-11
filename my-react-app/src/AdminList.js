import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminList = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    // Fetch admins from the Spring Boot backend
    axios.get('http://localhost:8081/api/admins')
      .then(response => setAdmins(response.data))
      .catch(error => console.error('Error fetching admins:', error));
  }, []);

  return (
    <div>
      <h2>Admin List</h2>
      <ul>
        {admins.map(admin => (
          <li key={admin.id}>{admin.username}</li>
        ))}
      </ul>
    </div>
  );
};



export default AdminList;

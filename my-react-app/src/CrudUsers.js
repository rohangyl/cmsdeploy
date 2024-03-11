import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CrudUser.css'
const UsersByAdmin = ({ adminId }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/admins/users/1`);
        if (response.status === 200) {
          setUsers(response.data);
        } else {
          console.error('Error fetching users');
          setError('Error fetching users');
        }
      } catch (error) {
        console.error('Error:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [adminId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="users-container">
    <h2>Users</h2>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.username}</strong>
          <ul>
            {user.healthClaims.map((claim) => (
              <li key={claim.id}>
                Date: {claim.dateOfClaim}, Description: {claim.description}, Amount: {claim.amount}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
  )
};

export default UsersByAdmin;

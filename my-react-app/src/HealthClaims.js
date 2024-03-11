// HealthClaims.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './HealthClaim.css';
const HealthClaims = () => {
  //const userId = localStorage.getItem('userId');
  const [userId, setUserId] = useState('');
  const [healthClaims, setHealthClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Retrieve userId from localStorage
    const storedUserId = localStorage.getItem('userId');
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

 useEffect(() => {
    // Fetch health claims when userId changes
    if (1) {
      fetchHealthClaims();
    }
  }, [1]);

    const fetchHealthClaims = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/users/${1}/claims`);
        if (response.status === 200) {
          setHealthClaims(response.data);
          setLoading(false);
        } else {
          console.error('Error fetching health claims');
          setLoading(false);
        setError('Error fetching health claims');
        }
      } catch (error) {
        console.error('Error:', error);
        setLoading(false);
      setError(error.message);
      }
      finally {
        setLoading(false); // Set loading to false after the request is complete (success or error)
      }
    };
  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

    return (
      <div className='health-claims-container'>
        <h2>Health Claims</h2>
        <table className='health-claims-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date of Claim</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Status</th>
              <th>claimStatus</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {healthClaims.map((claim) => (
              <tr key={claim.id}>
                <td>{claim.id}</td>
                <td>{claim.dateOfClaim}</td>
                <td>{claim.description}</td>
                <td>{claim.amount}</td>
                <td>{claim.status}</td>
                <td>{claim.claimStatus}</td>
                {/* Add more cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default HealthClaims;

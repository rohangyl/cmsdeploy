import React, { useState, useEffect } from 'react';
import './AdminHealth.css'
import axios from 'axios';

const HealthClaimsByAdmin = () => {
  const [adminId, setAdminId] = useState('');
  const [healthClaims, setHealthClaims] = useState([]);
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');


  useEffect(() => {
    // Fetch health claims when component mounts
    fetchHealthClaims();
  }, [adminId]); // Empty dependency array ensures useEffect runs only once when component mounts

  const fetchHealthClaims = async () => {
    try {
      const response = await fetch(`http://localhost:8081/api/admin/${adminId}`);
      if (response.status === 200) {
        const fetchedHealthClaims = await response.json();
        setHealthClaims(fetchedHealthClaims);
      } else {
        console.error('Error fetching health claims');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAdminIdChange = (e) => {
    setAdminId(e.target.value);
  };

  const handleGetHealthClaims = () => {
    fetchHealthClaims();
  };
  ////////////////////////////Try Try Touch sky///////////////////////////////////////
  const handleApproveClaim = async (claimId) => {
    try {
            const response = await axios.post(`http://localhost:8081/api/health-claims/${claimId}/approve`, {
              adminUsername :'rohan1',
              adminPassword :'rohan1',
            },
            {
                params: {
                  adminUsername: 'rohan1', 
                  adminPassword :'rohan1',// Repeat the adminUsername as a query parameter
                },
              });
            
      
            if (response.status === 200) {
                console.log('Claim Approved:', response.data);
                // After approval, you can fetch the updated health claims
                fetchHealthClaims();
              } else {
                console.error('Error approving claim');
              }
            } catch (error) {
              console.error('Error approving claim:', error);
            }
  };

  return (
    <div className="health-claims-container">
      <h2>Health Claims by Admin</h2>
      <label>
        Admin ID:
        <input type="text" value={adminId} onChange={handleAdminIdChange} />
      </label>
      <button type="button" onClick={handleGetHealthClaims}>
        Get Health Claims
      </button>

      <table className="health-claims-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date of Claim</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Status</th>
            <th>ClaimStatus</th>
            <th>Action</th>
            <th>PolicyHolder</th>
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
              <td> <button type="button" onClick={() => handleApproveClaim(claim.id)}>
                  Approve
                </button></td>
                <td>{claim.policyHolder.name}</td>
              {/* Add more cells as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HealthClaimsByAdmin;

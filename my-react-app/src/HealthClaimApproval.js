import React, { useState } from 'react';
import axios from 'axios';

const AdminApproval = () => {
  const [claimId, setClaimId] = useState('');
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const handleApproveClaim = async () => {
    try {
      const response = await axios.post(`http://localhost:8081/api/health-claims/${claimId}/approve`, {
        adminUsername,
        adminPassword,
      });

      if (response.ok) {
        // Process the approved claim data as needed
        console.log('Claim Approved:', response.data);
      } else {
        // Handle error in claim approval
        console.error('Error:', response.data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Approve Health Claim</h2>
      <label>
        Claim ID:
        <input type="text" value={claimId} onChange={(e) => setClaimId(e.target.value)} />
      </label>
      <br />
      <label>
        Admin Username:
        <input type="text" value={adminUsername} onChange={(e) => setAdminUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Admin Password:
        <input type="password" value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)} />
      </label>
      <br />
      <button type="button" onClick={handleApproveClaim}>
        Approve Health Claim
      </button>
    </div>
  );
};

export default AdminApproval;

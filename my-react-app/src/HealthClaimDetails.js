import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HealthClaimDetails = ({ claimId }) => {
  const [healthClaim, setHealthClaim] = useState(null);

  useEffect(() => {
    const fetchHealthClaim = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/health-claims?claimId=${claimId}`);
        setHealthClaim(response.data);
      } catch (error) {
        console.error('Error fetching health claim:', error);
      }
    };

    fetchHealthClaim();
  }, [claimId]);

  return (
    <div>
      {healthClaim ? (
        <div>
          <h2>Health Claim Details</h2>
          <p>Claim ID: {healthClaim.id}</p>
          {/* Include other details as needed */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HealthClaimDetails;

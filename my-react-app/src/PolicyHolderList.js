import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PolicyHolderList = () => {
  const [policyHolders, setPolicyHolders] = useState([]);

  useEffect(() => {
    fetchPolicyHolders();
  }, []);

  const fetchPolicyHolders = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/policyholders');
      setPolicyHolders(response.data);
    } catch (error) {
      console.error('Error fetching policy holders:', error);
    }
  };

  return (
    <div>
      <h1>Policy Holders</h1>
      <ul>
        {policyHolders.map((policyHolder) => (
          <li key={policyHolder.id}>{policyHolder.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PolicyHolderList;

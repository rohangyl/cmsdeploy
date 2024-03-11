import React, { useState, useEffect } from 'react';
import HealthClaimApproval from './HealthClaimApproval';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

  return (
    <div>
      <h2>Admin Dashboard</h2>
      
      <Link to="/adminHealth">Show All Health Claims</Link>
      <Link to="/crudusers">Show All users</Link>

    </div>
  );
};

export default AdminDashboard;

// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/usercreate">User Create</Link></li>
        <li><Link to="/userlogin">User Login</Link></li>
        <Link to="/dashboard">Go to Dashboard</Link>
        <li><Link to="/healthclaims">HealthClaims</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;

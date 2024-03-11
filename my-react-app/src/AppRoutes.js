// routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserCreate from './UserCreate';
import UserLogin from './UserLogin';
import HealthClaims from './HealthClaims';
import Dashboard from './AdminDashboard';
import AdminHealth from './AdminHealth'
//import HealthClaim from './HealthClaim';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/usercreate" element={<UserCreate />} />
      <Route path="/userlogin"   element={<UserLogin/>}/>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/healthclaims" element={<HealthClaims />} />
      <Route path="/adminHealth" element={<AdminHealth />} />
    </Routes>
  );
};

export default AppRoutes;

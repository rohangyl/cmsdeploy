import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import HealthClaims from './HealthClaims';
import AdminDashboard from './AdminDashboard';
import PrivateRoute from './PrivateRoute';
import AppRoutes from './AppRoutes';
//import Navigation from './Navigation';
import ReactDOM from 'react-dom';
import AdminList from './AdminList';
import UserCreate from './UserCreate';
//import { ClaimProvider } from './UserContext';
import UserLogin from './UserLogin';
import AdminLogin from './AdminLogin';
import { ClaimProvider } from './ClaimContext';
import Home from './home';
import AdminHealth from './AdminHealth'
import UsersByAdmin from './CrudUsers';
import axios from 'axios';
import PolicyHolderList from './PolicyHolderList';
//import AdminDashboard from './AdminDashboard';

const App = () => {
  const [adminId, setAdminId] = useState(null);
  const[userId, setUserId]=useState(null);

  return (
    <Router>
      <AuthProvider>
      <ClaimProvider> 
        <div>
          {/* <Navigation /> */}

          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/usercreate" element={<UserCreate />} />
            <Route path="/userlogin" element={<UserLogin setUserId={setUserId} />} />
            <Route path="/adminlogin" element={<AdminLogin setAdminId={setAdminId} />} />
           {/* // <Route path="/dashboard" element={<AdminDashboard />} /> */}
            <Route path="/dashboard/admin/*" element={<DashboardWrapper />} />
            <Route path="/healthclaim" element={<HealthClaims />} />
            <Route path="/adminApproval" element={<AdminHealth />} />
            <Route path="/adminHealth" element={<AdminHealth />} />
            <Route path="/crudusers" element={<UsersByAdmin />} />


            {/* Protected routes
            <PrivateRoute path="/dashboard" element={<Dashboard />} />
            <PrivateRoute path="/admin-list" element={<AdminList />} />
            <PrivateRoute path="/health-claims" element={<HealthClaims />} />
            <PrivateRoute path="/policy-holder-list" element={<PolicyHolderList />} /> */}
          </Routes>
        </div>
        </ClaimProvider>
      </AuthProvider>
    </Router>
  );
};

const DashboardWrapper = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
      
      </Routes>
    </div>
  );
};

export default App;

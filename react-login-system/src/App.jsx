import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import DashboardLayout from './DashboardLayout';
import Overview from './Overview';
import Settings from './Settings';
import { parseFakeJWT } from './auth';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const payload = parseFakeJWT(token);
      if (payload && payload.exp > Date.now()) {
        setIsAuthenticated(true);
        setUserRole(payload.role);
      } else {
        localStorage.removeItem('authToken');
      }
    }
    setLoading(false);
  }, []);

  const handleLoginSuccess = (token, role) => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setUserRole(null);
  };

  if (loading) {
    return <div className="loading-screen">Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            isAuthenticated ? 
            <Navigate to="/dashboard" replace /> : 
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            isAuthenticated ? 
            <DashboardLayout role={userRole} onLogout={handleLogout} /> : 
            <Navigate to="/" replace />
          }
        >
          <Route index element={<Overview role={userRole} />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

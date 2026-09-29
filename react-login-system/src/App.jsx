import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';
import { parseFakeJWT } from './auth';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // Check for existing token on initial load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      const payload = parseFakeJWT(token);
      // Check if token exists and hasn't expired
      if (payload && payload.exp > Date.now()) {
        setIsAuthenticated(true);
        setUserRole(payload.role);
      } else {
        // Token is invalid or expired
        localStorage.removeItem('authToken');
      }
    }
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>React JWT Auth App</h1>
      </header>
      <main>
        {isAuthenticated ? (
          <Dashboard role={userRole} onLogout={handleLogout} />
        ) : (
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        )}
      </main>
    </div>
  );
}

export default App;

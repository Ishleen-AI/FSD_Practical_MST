import React from 'react';

const Dashboard = ({ role, onLogout }) => {
  return (
    <div className="dashboard-container">
      <h2>Protected Dashboard</h2>
      <div className="welcome-message">
        <p>Welcome to the secure area!</p>
        <p>Your current role is: <span className="role-badge">{role}</span></p>
      </div>
      <div className="dashboard-content">
        {role === 'Admin' && (
          <div className="admin-panel">
            <h3>Admin Panel</h3>
            <p>You have access to administrative features.</p>
          </div>
        )}
        {role === 'User' && (
          <div className="user-panel">
            <h3>User Profile</h3>
            <p>You have access to standard user features.</p>
          </div>
        )}
      </div>
      <button onClick={onLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { Shield, Activity, Users, Zap } from 'lucide-react';

const Overview = ({ role }) => {
  return (
    <div className="overview-page">
      <div className="welcome-banner">
        <h2>Welcome back to your workspace!</h2>
        <p>Here's what's happening with your account today.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon bg-blue"><Activity size={24} /></div>
          <div className="stat-details">
            <h3>Activity</h3>
            <p className="stat-value">85%</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon bg-green"><Shield size={24} /></div>
          <div className="stat-details">
            <h3>Security</h3>
            <p className="stat-value">Optimal</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon bg-purple"><Users size={24} /></div>
          <div className="stat-details">
            <h3>Team</h3>
            <p className="stat-value">4 Members</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon bg-yellow"><Zap size={24} /></div>
          <div className="stat-details">
            <h3>Performance</h3>
            <p className="stat-value">A+</p>
          </div>
        </div>
      </div>

      <div className="role-specific-content">
        {role === 'Admin' ? (
          <div className="admin-panel card">
            <h3>Administrative Controls</h3>
            <p>As an admin, you have full access to system configuration and user management.</p>
            <div className="placeholder-chart">System Usage Chart Placeholder</div>
          </div>
        ) : (
          <div className="user-panel card">
            <h3>My Tasks</h3>
            <p>You have 3 pending tasks to complete today.</p>
            <ul className="task-list">
              <li>Complete profile setup</li>
              <li>Review weekly report</li>
              <li>Submit timesheet</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;

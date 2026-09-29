import React from 'react';
import { Bell, Lock, Eye, Monitor } from 'lucide-react';

const Settings = () => {
  return (
    <div className="settings-page">
      <h2>Account Settings</h2>
      <p className="subtitle">Manage your account preferences and settings.</p>
      
      <div className="settings-grid">
        <div className="settings-card card">
          <div className="settings-header">
            <Bell className="text-primary" />
            <h3>Notifications</h3>
          </div>
          <p>Manage how you receive updates and alerts.</p>
          <div className="toggle-group">
            <label className="toggle-label">
              <span>Email Notifications</span>
              <input type="checkbox" defaultChecked />
            </label>
            <label className="toggle-label">
              <span>Push Notifications</span>
              <input type="checkbox" />
            </label>
          </div>
        </div>
        
        <div className="settings-card card">
          <div className="settings-header">
            <Lock className="text-primary" />
            <h3>Security</h3>
          </div>
          <p>Update your password and secure your account.</p>
          <button className="btn-secondary">Change Password</button>
        </div>
        
        <div className="settings-card card">
          <div className="settings-header">
            <Monitor className="text-primary" />
            <h3>Appearance</h3>
          </div>
          <p>Customize the UI theme.</p>
          <select className="select-input">
            <option>Light Theme</option>
            <option>Dark Theme</option>
            <option>System Default</option>
          </select>
        </div>
        
        <div className="settings-card card">
          <div className="settings-header">
            <Eye className="text-primary" />
            <h3>Privacy</h3>
          </div>
          <p>Manage who can see your profile information.</p>
          <button className="btn-secondary">Privacy Settings</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

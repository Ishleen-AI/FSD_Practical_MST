import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { LayoutDashboard, Settings as SettingsIcon, LogOut, UserCircle } from 'lucide-react';

const DashboardLayout = ({ role, onLogout }) => {
  return (
    <div className="dashboard-layout">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>MyApp</h2>
          <span className="role-badge">{role}</span>
        </div>
        
        <nav className="sidebar-nav">
          <NavLink to="/dashboard" end className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <LayoutDashboard size={20} />
            <span>Overview</span>
          </NavLink>
          <NavLink to="/dashboard/settings" className={({isActive}) => isActive ? 'nav-item active' : 'nav-item'}>
            <SettingsIcon size={20} />
            <span>Settings</span>
          </NavLink>
        </nav>
        
        <div className="sidebar-footer">
          <div className="user-info">
            <UserCircle size={24} />
            <div className="user-details">
              <span className="user-name">Current User</span>
            </div>
          </div>
          <button onClick={onLogout} className="btn-logout">
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>
      
      <main className="main-content">
        <header className="topbar">
          <h1>Dashboard</h1>
        </header>
        <div className="content-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;

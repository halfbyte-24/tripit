import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: 'var(--clr-charcoal)', color: 'white', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px', fontSize: '1.25rem', fontWeight: 'bold', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          Agency Admin
        </div>
        <nav style={{ flex: 1, padding: '24px 0' }}>
          <Link to="/admin" style={{ display: 'block', padding: '12px 24px', color: 'white', opacity: 0.9 }}>Dashboard</Link>
          <Link to="/" style={{ display: 'block', padding: '12px 24px', color: 'white', opacity: 0.7 }}>Back to Site</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;

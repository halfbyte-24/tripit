import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { siteConfig } from '../data/dummy';

const Dashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // In a real app with auth, we would fetch from Supabase.
  // We'll mock some data since we might not have a real Supabase DB connected.
  useEffect(() => {
    const fetchInquiries = async () => {
      if (supabase.supabaseUrl.includes('placeholder')) {
        // Mock data
        setInquiries([
          { id: 1, name: 'Alice Smith', phone: '9876543210', destination: 'Ladakh', travel_date: '2026-06', status: 'New', created_at: new Date().toISOString() },
          { id: 2, name: 'Bob Johnson', phone: '9876543211', destination: 'Manali', travel_date: '2026-10', status: 'Contacted', created_at: new Date(Date.now() - 86400000).toISOString() }
        ]);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase.from('inquiries').select('*').order('created_at', { ascending: false });
      if (!error && data) {
        setInquiries(data);
      }
      setLoading(false);
    };

    fetchInquiries();
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setInquiries(inquiries.map(inq => inq.id === id ? { ...inq, status: newStatus } : inq));
    // Here we would also update Supabase
  };

  if (loading) return <div>Loading dashboard...</div>;

  return (
    <div>
      <h1 style={{ marginBottom: '24px', fontSize: '2rem' }}>Enquiries Dashboard</h1>
      
      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '32px' }}>
        <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ color: 'var(--clr-muted)', marginBottom: '8px' }}>Total Enquiries</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{inquiries.length}</div>
        </div>
        <div style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
          <div style={{ color: 'var(--clr-muted)', marginBottom: '8px' }}>New</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'var(--clr-orange)' }}>
            {inquiries.filter(i => i.status === 'New').length}
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Contact</th>
              <th style={thStyle}>Destination</th>
              <th style={thStyle}>Travel Date</th>
              <th style={thStyle}>Status</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map(inq => (
              <tr key={inq.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                <td style={tdStyle}>{new Date(inq.created_at).toLocaleDateString()}</td>
                <td style={tdStyle}>{inq.name}</td>
                <td style={tdStyle}>
                  <a href={`tel:${inq.phone}`} style={{ color: 'var(--clr-blue)', display: 'block' }}>{inq.phone}</a>
                  <a href={`https://wa.me/${inq.phone}`} target="_blank" rel="noreferrer" style={{ fontSize: '0.8rem', color: '#25D366' }}>WhatsApp</a>
                </td>
                <td style={tdStyle}>{inq.destination}</td>
                <td style={tdStyle}>{inq.travel_date}</td>
                <td style={tdStyle}>
                  <select 
                    value={inq.status} 
                    onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                    style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid #ccc' }}
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Closed">Closed</option>
                  </select>
                </td>
                <td style={tdStyle}>
                  <button className="btn btn-secondary" style={{ padding: '4px 8px', fontSize: '0.8rem' }}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {inquiries.length === 0 && (
          <div style={{ padding: '32px', textAlign: 'center', color: 'var(--clr-muted)' }}>No enquiries yet.</div>
        )}
      </div>
    </div>
  );
};

const thStyle = {
  padding: '16px',
  fontWeight: 600,
  color: 'var(--clr-muted)'
};

const tdStyle = {
  padding: '16px'
};

export default Dashboard;

import React, { useState } from 'react';
import { siteConfig } from '../data/dummy';
import { submitInquiry } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    travel_date: '',
    travellers: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const { error } = await submitInquiry(formData);
    
    if (error) {
      console.error(error);
      setStatus('error');
    } else {
      setStatus('success');
      setFormData({
        name: '', phone: '', email: '', destination: '', travel_date: '', travellers: '', message: ''
      });
    }
  };

  return (
    <div style={{ paddingTop: '80px', backgroundColor: 'var(--clr-ivory)', minHeight: '100vh' }}>
      <section className="section">
        <div className="container">
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '48px', 
            backgroundColor: 'white', 
            borderRadius: '16px', 
            overflow: 'hidden',
            boxShadow: 'var(--shadow-md)'
          }}>
            
            {/* Left Col - Contact Info */}
            <div style={{ flex: '1 1 350px', backgroundColor: 'var(--clr-charcoal)', color: 'white', padding: '48px' }}>
              <h1 style={{ color: 'white', marginBottom: '16px' }}>GET IN TOUCH</h1>
              <p style={{ opacity: 0.9, marginBottom: '48px' }}>Have questions about a trip or want to plan a custom adventure? We're here to help.</p>
              
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--clr-yellow)', marginBottom: '8px' }}>Call Us</h3>
                <p>{siteConfig.phone}</p>
              </div>
              
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--clr-yellow)', marginBottom: '8px' }}>WhatsApp</h3>
                <p>+{siteConfig.whatsapp}</p>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1rem', color: 'var(--clr-yellow)', marginBottom: '8px' }}>Email</h3>
                <p>{siteConfig.email}</p>
              </div>

              <div>
                <h3 style={{ fontSize: '1rem', color: 'var(--clr-yellow)', marginBottom: '8px' }}>Office Hours</h3>
                <p>Mon - Sat, 10:00 AM - 7:00 PM</p>
              </div>
            </div>

            {/* Right Col - Form */}
            <div style={{ flex: '2 1 400px', padding: '48px', color: 'var(--clr-charcoal)' }}>
              <h2 style={{ marginBottom: '24px' }}>Send an Enquiry</h2>
              
              {status === 'success' ? (
                <div style={{ padding: '24px', backgroundColor: '#e6f4ea', color: '#137333', borderRadius: '8px' }}>
                  <h3>Thanks! Your enquiry has been received.</h3>
                  <p style={{ marginTop: '8px' }}>Our travel desk will contact you shortly.</p>
                  <div style={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
                    <button onClick={() => setStatus('idle')} className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>Send Another</button>
                    <a href={`https://wa.me/${siteConfig.whatsapp}`} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>Chat on WhatsApp</a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Full Name *</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Phone / WhatsApp *</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Destination of Interest</label>
                    <input type="text" name="destination" value={formData.destination} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Travel Date (Approx)</label>
                    <input type="month" name="travel_date" value={formData.travel_date} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Number of Travellers</label>
                    <input type="number" name="travellers" min="1" value={formData.travellers} onChange={handleChange} style={inputStyle} />
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Message / Requirements</label>
                    <textarea rows="4" name="message" value={formData.message} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }}></textarea>
                  </div>
                  <div style={{ gridColumn: '1 / -1' }}>
                    <button type="submit" disabled={status === 'submitting'} className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.125rem' }}>
                      {status === 'submitting' ? 'SENDING...' : 'SEND ENQUIRY'}
                    </button>
                    {status === 'error' && <p style={{ color: 'red', marginTop: '8px' }}>Something went wrong. Please try again.</p>}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontFamily: 'inherit',
  fontSize: '1rem',
  color: 'var(--clr-charcoal)',
  backgroundColor: 'var(--clr-white)',
  outline: 'none',
  transition: 'border-color 0.2s ease'
};

export default Contact;

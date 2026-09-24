import React, { useState } from 'react';
import { trips, destinations } from '../data/dummy';
import { Link, useLocation } from 'react-router-dom';

const Tours = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const defaultDestination = queryParams.get('destination') || 'All';
  
  const [selectedDestination, setSelectedDestination] = useState(defaultDestination);

  const filteredTrips = selectedDestination === 'All' 
    ? trips 
    : trips.filter(t => t.destination.toLowerCase() === selectedDestination.toLowerCase());

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--clr-ivory)' }}>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--clr-charcoal)', color: 'white', padding: 'var(--spacing-4xl) 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '16px' }}>EXPLORE ALL TOURS</h1>
          <p style={{ opacity: 0.9, fontSize: '1.25rem' }}>Find your next adventure from our curated collection.</p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          {/* Filters */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '32px', flexWrap: 'wrap' }}>
            <button 
              className={`btn ${selectedDestination === 'All' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setSelectedDestination('All')}
            >
              All
            </button>
            {destinations.map(dest => (
              <button 
                key={dest.id}
                className={`btn ${selectedDestination.toLowerCase() === dest.slug.toLowerCase() ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setSelectedDestination(dest.name)}
              >
                {dest.name}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filteredTrips.length > 0 ? (
            <div className="trip-grid">
              {filteredTrips.map((trip, i) => (
                <div key={trip.id} className="trip-card" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="trip-card-img-wrapper">
                    <img src={trip.image} alt={trip.title} className="trip-card-img" />
                  </div>
                  <div className="trip-card-body">
                    <div className="trip-meta">
                      <span>{trip.destination}</span>
                      <span>{trip.duration}</span>
                    </div>
                    <h3 className="trip-title">{trip.title}</h3>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                      <span style={{ padding: '4px 8px', backgroundColor: 'var(--clr-sand)', borderRadius: '4px', fontSize: '0.75rem' }}>{trip.tripType}</span>
                      <span style={{ padding: '4px 8px', backgroundColor: 'var(--clr-sand)', borderRadius: '4px', fontSize: '0.75rem' }}>{trip.nextDeparture}</span>
                    </div>
                    <div className="trip-footer">
                      <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--clr-muted)' }}>Starting from</div>
                        <div style={{ fontWeight: 700, color: 'var(--clr-charcoal)' }}>₹{trip.price.toLocaleString()}</div>
                      </div>
                      <Link to={`/tours/${trip.slug}`} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.875rem' }}>VIEW TRIP</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--clr-muted)' }}>
              <h3>No journeys match those filters. Try another destination.</h3>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Tours;

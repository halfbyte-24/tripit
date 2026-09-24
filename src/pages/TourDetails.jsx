import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { trips, siteConfig } from '../data/dummy';

const TourDetails = () => {
  const { slug } = useParams();
  const trip = trips.find(t => t.slug === slug);

  if (!trip) {
    return (
      <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h2>Tour not found</h2>
        <Link to="/tours" className="btn btn-primary" style={{ marginTop: '16px' }}>Back to Tours</Link>
      </div>
    );
  }

  const whatsappMessage = `Hi! I'm interested in the ${trip.title} trip to ${trip.destination}. Please share availability and details.`;
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div style={{ paddingTop: '80px', backgroundColor: 'var(--clr-ivory)' }}>
      {/* Hero */}
      <section style={{ 
        position: 'relative', 
        height: '60vh', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
          <img src={trip.image} alt={trip.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.6)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 2, padding: '0 24px' }}>
          <div style={{ fontSize: '0.875rem', letterSpacing: '2px', marginBottom: '16px', color: 'var(--clr-yellow)' }}>
            {trip.destination} &bull; {trip.duration}
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'white', textTransform: 'uppercase', marginBottom: '24px' }}>
            {trip.title}
          </h1>
          <div style={{ fontSize: '1.25rem', marginBottom: '32px' }}>
            FROM ₹{trip.price.toLocaleString()} / PERSON
          </div>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href={whatsappUrl} className="btn btn-primary">ENQUIRE ON WHATSAPP</a>
            <a href="#itinerary" className="btn btn-white">VIEW ITINERARY</a>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
          
          {/* Left Col - Itinerary & Info */}
          <div>
            <h2 id="itinerary" style={{ marginBottom: '24px' }}>ITINERARY</h2>
            {/* Hardcoded sample itinerary for demo */}
            <div style={{ borderLeft: '2px solid var(--clr-sand)', paddingLeft: '24px', position: 'relative' }}>
              <div style={{ marginBottom: '32px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-33px', top: '0', width: '16px', height: '16px', backgroundColor: 'var(--clr-orange)', borderRadius: '50%' }}></div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '8px' }}>Day 01: Arrival & Acclimatisation</h3>
                <p style={{ color: 'var(--clr-muted)' }}>Airport pickup, hotel check-in, rest and acclimatisation. Evening market walk if time permits.</p>
              </div>
              <div style={{ marginBottom: '32px', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-33px', top: '0', width: '16px', height: '16px', backgroundColor: 'var(--clr-sand)', borderRadius: '50%' }}></div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '8px' }}>Day 02: Exploration Begins</h3>
                <p style={{ color: 'var(--clr-muted)' }}>Scenic drive through passes. Visit monasteries and incredible viewpoints. Camp check-in by evening.</p>
              </div>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-33px', top: '0', width: '16px', height: '16px', backgroundColor: 'var(--clr-sand)', borderRadius: '50%' }}></div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '8px' }}>Day 03: The Return Journey</h3>
                <p style={{ color: 'var(--clr-muted)' }}>Sunrise at the camp, breakfast, and drive back to the base for departure.</p>
              </div>
            </div>
          </div>

          {/* Right Col - Cost & Features */}
          <div>
            <div style={{ backgroundColor: 'white', padding: '32px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)', marginBottom: '32px' }}>
              <h2 style={{ marginBottom: '24px' }}>PACKAGE DETAILS</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--clr-muted)' }}>Stay</div>
                  <div style={{ fontWeight: 600 }}>Hotel & Camps</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--clr-muted)' }}>Food</div>
                  <div style={{ fontWeight: 600 }}>Veg / Non-Veg</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--clr-muted)' }}>Transport</div>
                  <div style={{ fontWeight: 600 }}>SUV</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--clr-muted)' }}>Difficulty</div>
                  <div style={{ fontWeight: 600 }}>{trip.difficulty}</div>
                </div>
              </div>

              <h3 style={{ fontSize: '1.125rem', marginBottom: '16px' }}>Inclusions</h3>
              <ul style={{ color: 'var(--clr-muted)', marginBottom: '24px', paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>Accommodation as per itinerary</li>
                <li>Breakfast & Dinner</li>
                <li>Transport during trip</li>
                <li>Trip Leader</li>
              </ul>

              <h3 style={{ fontSize: '1.125rem', marginBottom: '16px' }}>Exclusions</h3>
              <ul style={{ color: 'var(--clr-muted)', paddingLeft: '20px', listStyleType: 'disc' }}>
                <li>Flights / Trains to starting point</li>
                <li>Personal expenses & Insurance</li>
                <li>Lunches</li>
              </ul>
            </div>

            <a href={whatsappUrl} className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.125rem' }}>
              ENQUIRE ABOUT THIS TRIP
            </a>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default TourDetails;

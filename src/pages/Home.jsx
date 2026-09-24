import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { destinations, trips, faqs, siteConfig } from '../data/dummy';
import FAQAccordion from '../components/FAQAccordion';
import HorizontalScroll from '../components/HorizontalScroll';

const Home = () => {
  const upcomingTrips = useMemo(() => {
    const today = new Date();
    return trips
      .filter(trip => new Date(trip.nextDeparture) >= today)
      .sort((a, b) => new Date(a.nextDeparture) - new Date(b.nextDeparture))
      .slice(0, 3);
  }, []);
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <motion.span 
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Travel &bull; Explore &bull; Discover
          </motion.span>
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your Next<br/>Great Story<br/>Starts Here
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Curated group journeys, unforgettable landscapes and trips worth talking about.
          </motion.p>
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/tours" className="btn btn-primary">EXPLORE TOURS</Link>
            <Link to="/contact" className="btn btn-white">WHATSAPP US</Link>
          </motion.div>
        </div>
      </section>
      {/* Destination Scroller */}
      <section className="scroller-section">
        <div className="container scroller-header">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            EXPLORE DESTINATIONS
          </motion.h2>
          <motion.p 
            className="text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Find your perfect getaway
          </motion.p>
        </div>
        <HorizontalScroll autoScroll={true} speed={1}>
          {destinations.map((dest, i) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ flexShrink: 0 }}
            >
              <Link to={`/tours?destination=${dest.slug}`} className="dest-card">
                <div className="dest-card-img-wrapper">
                  <img src={dest.image} alt={dest.name} className="dest-card-img" />
                </div>
              <div className="dest-card-content">
                <h3 className="dest-card-title">{dest.name}</h3>
                <p className="text-muted">{dest.description}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
                  <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{dest.tripCount} TRIPS</span>
                  <span className="dest-card-price">FROM ₹{dest.startingPrice.toLocaleString()}</span>
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </HorizontalScroll>
      </section>

      {/* Upcoming Trips */}
      <section className="scroller-section">
        <div className="container">
          <motion.h2 
            style={{ marginBottom: '32px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            UPCOMING DEPARTURES
          </motion.h2>
        </div>
        <HorizontalScroll>
          {upcomingTrips.map((trip, i) => (
            <motion.div 
              key={trip.id} 
              className="trip-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{ flexShrink: 0 }}
            >
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
            </motion.div>
          ))}
        </HorizontalScroll>
      </section>

      {/* Merged FAQ + Final CTA Section */}
      <section className="section" style={{ position: 'relative', zIndex: 10 }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '48px', alignItems: 'flex-start' }}>
          
          {/* Left Side - FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)', padding: '40px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', color: 'var(--clr-charcoal)' }}
          >
            <h2 style={{ marginBottom: '32px', fontSize: '2rem' }}>FREQUENTLY ASKED QUESTIONS</h2>
            <FAQAccordion faqs={faqs.slice(0, 4)} />
          </motion.div>

          {/* Right Side - CTA */}
          <motion.div 
            style={{ backgroundColor: 'var(--clr-orange)', color: 'white', padding: '48px 40px', borderRadius: '24px', textAlign: 'center', boxShadow: 'var(--shadow-lg)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '16px' }}>STAY CONNECTED</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '32px', opacity: 0.9 }}>
              Join our newsletter for travel stories, upcoming journeys, and early access to new routes.
            </p>
            <form style={{ display: 'flex', gap: '8px', flexDirection: 'column' }}>
              <input type="email" placeholder="Your email address" style={{ padding: '16px', borderRadius: '8px', border: 'none', width: '100%', fontSize: '1rem', outline: 'none' }} />
              <button className="btn btn-white" style={{ width: '100%', padding: '16px', fontSize: '1rem', marginTop: '8px' }}>SUBSCRIBE</button>
            </form>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Home;

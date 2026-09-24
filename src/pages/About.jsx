import React from 'react';
import { motion } from 'framer-motion';
import { siteConfig } from '../data/dummy';

const About = () => {
  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--clr-ivory)', overflow: 'hidden' }}>
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px' }}
          >
            <h1 style={{ fontSize: '3rem', marginBottom: '24px', textTransform: 'uppercase' }}>BEYOND THE MAP</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--clr-muted)' }}>
              We believe that travel is more than just ticking boxes. It's about the people you meet, the landscapes that humble you, and the stories you bring back.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ borderRadius: '16px', overflow: 'hidden', height: '60vh', marginBottom: '64px', boxShadow: 'var(--shadow-lg)' }}
          >
            <img src="/images/hero_himalaya.jpg" alt="About us" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', marginBottom: '64px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 style={{ marginBottom: '16px', fontSize: '2rem' }}>Our Mission</h2>
              <p style={{ color: 'var(--clr-muted)', fontSize: '1.125rem' }}>
                To curate and deliver authentic, responsible, and unforgettable travel experiences. We meticulously plan every detail—from the route to the stays, the local food, and the safety measures—so you can focus entirely on enjoying the journey.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ backgroundColor: 'white', padding: '32px', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}
            >
              <h2 style={{ marginBottom: '24px', fontSize: '2rem' }}>Why Us?</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Expertly crafted itineraries',
                  'Small group sizes for better experiences',
                  'Focus on local culture and sustainable practices',
                  'Transparent pricing with no hidden costs'
                ].map((item, i) => (
                  <li key={i} style={{ marginBottom: '16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ color: 'var(--clr-orange)', fontWeight: 'bold' }}>✓</span>
                    <span style={{ color: 'var(--clr-muted)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

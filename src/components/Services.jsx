import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, Database, Plane, FileText, UserPlus } from 'lucide-react';

const services = [
  { icon: <Mail size={32} />, title: 'Inbox Mgmt', desc: 'Organizing emails and prioritizing critical comms so you never miss a beat.', color: 'var(--color-accent-1)' },
  { icon: <Calendar size={32} />, title: 'Calendar', desc: 'Seamless scheduling and meeting preparation to maximize efficiency.', color: 'var(--color-accent-2)' },
  { icon: <Database size={32} />, title: 'CRM & Data', desc: 'Precise data handling and meticulous management of your systems.', color: 'var(--color-accent-3)' },
  { icon: <Plane size={32} />, title: 'Travel', desc: 'Booking flights, coordinating itineraries, and reconciling expenses.', color: 'var(--color-accent-4)' },
  { icon: <FileText size={32} />, title: 'Doc Prep', desc: 'Formatting and preparing pristine reports and presentations.', color: 'var(--color-accent-1)' },
  { icon: <UserPlus size={32} />, title: 'Onboarding', desc: 'Handling client communications for a flawless white-glove experience.', color: 'var(--color-accent-2)' }
];

const Services = () => {
  return (
    <section id="services" style={{ padding: 'var(--section-padding)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="font-display hero-title" style={{ fontSize: '4rem', margin: '0 0 24px 0' }}>
            Curated Services.
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', fontWeight: '500' }}>
            High-end administrative support with a creative edge. I provide the structure so you can focus on growth.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '32px'
        }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1, type: 'spring' }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-hover)' }}
              style={{
                padding: '40px',
                borderRadius: 'var(--border-radius-lg)',
                backgroundColor: 'var(--bg-card)',
                border: 'var(--border-playful)',
                boxShadow: 'var(--shadow-playful)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition)'
              }}
            >
              <div style={{ 
                backgroundColor: s.color, 
                color: 'var(--text-main)',
                width: '64px',
                height: '64px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                border: 'var(--border-playful)',
                boxShadow: 'var(--shadow-playful)'
              }}>
                {s.icon}
              </div>
              <h3 className="font-display" style={{ fontSize: '1.8rem', marginBottom: '16px' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', margin: 0, fontWeight: '500' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

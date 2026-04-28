import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, Database, Plane, FileText, UserPlus } from 'lucide-react';

const services = [
  { icon: Mail, title: 'Inbox Management', desc: 'Organizing, prioritizing, and responding to emails so nothing slips through the cracks.', tag: 'Communication' },
  { icon: Calendar, title: 'Calendar & Scheduling', desc: 'Coordinating meetings, managing appointments, and ensuring your day runs seamlessly.', tag: 'Organization' },
  { icon: Database, title: 'CRM & Data Entry', desc: 'Maintaining clean databases, updating records, and managing customer relationships.', tag: 'Systems' },
  { icon: Plane, title: 'Travel & Expenses', desc: 'Booking travel, creating itineraries, and tracking expenses with precision.', tag: 'Logistics' },
  { icon: FileText, title: 'Document Preparation', desc: 'Formatting reports, creating presentations, and preparing professional documents.', tag: 'Content' },
  { icon: UserPlus, title: 'Client Onboarding', desc: 'Creating a smooth, memorable experience for every new client from day one.', tag: 'Experience' }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  })
};

const Services = () => {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '80px', alignItems: 'end' }} className="services-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="badge" style={{ marginBottom: '20px' }}>What I Do</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', letterSpacing: '-0.02em' }}>
              Services <em style={{ fontStyle: 'italic' }}>tailored</em> to your needs
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}
          >
            From inbox zero to flawless travel logistics, I provide end-to-end administrative 
            support that lets you focus on the big picture.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="services-grid">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -6 }}
                style={{
                  padding: '40px 32px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  cursor: 'default',
                  transition: 'box-shadow 0.4s var(--ease), border-color 0.4s var(--ease), transform 0.4s var(--ease)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-hover)';
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '28px',
                  color: 'var(--accent)'
                }}>
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{service.title}</h3>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  {service.desc}
                </p>

                <div style={{ marginTop: '24px' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--text-light)'
                  }}>
                    {service.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 900px) {
          .services-header { grid-template-columns: 1fr !important; }
          .services-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </section>
  );
};

export default Services;

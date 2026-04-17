import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, Hash, FileText, Layout, Users } from 'lucide-react';

const services = [
  { icon: <Mail size={24} />, title: 'Inbox Management', desc: 'Keeping your communications organized, spam-free, and prioritized so you only see what matters.', height: '340px', offset: '0px' },
  { icon: <Calendar size={24} />, title: 'Calendar Coordination', desc: 'Scheduling meetings seamlessly so your day flows perfectly, maximizing your deep work time.', height: '380px', offset: '40px' },
  { icon: <Hash size={24} />, title: 'Social Media', desc: 'Maintaining your brand\'s presence with consistent and engaging posts tailored to your audience.', height: '320px', offset: '20px' },
  { icon: <FileText size={24} />, title: 'Admin Support', desc: 'Handling data entry, documents, and back-office tasks with precision and absolute confidentiality.', height: '360px', offset: '60px' },
  { icon: <Layout size={24} />, title: 'Project Tracking', desc: 'Coordinating milestones and teams to ensure your projects are delivered beautifully and on time.', height: '340px', offset: '10px' },
  { icon: <Users size={24} />, title: 'Client Relations', desc: 'Providing exceptional white-glove service to your clients and nurturing long-term relationships.', height: '380px', offset: '50px' }
];

const Services = () => {
  return (
    <section id="services" style={{ padding: 'var(--section-padding)', background: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="grid-2" style={{ marginBottom: '80px', alignItems: 'end' }}>
          <div>
            <h2 className="font-display hero-title" style={{ fontSize: '3.5rem', margin: 0 }}>
              Curated<br/><span style={{ color: 'var(--primary)' }}>Expertise.</span>
            </h2>
          </div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '500px', margin: 0 }}>
              Moving beyond basic task execution, I provide comprehensive support to give you the mental space to focus on what you do best.
            </p>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '32px',
          alignItems: 'start'
        }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0, 0, 1] }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -8, boxShadow: 'var(--shadow-hover)' }}
              style={{
                padding: '48px 32px',
                borderRadius: '24px',
                background: 'var(--bg-surface-lowest)',
                boxShadow: 'var(--shadow-ambient)',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle background flare */}
              <motion.div 
                whileHover={{ scale: 1.5 }}
                transition={{ duration: 0.5 }}
                style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--bg-surface-low)', borderRadius: '50%', zIndex: 0 }} 
              />
              
              <div style={{ 
                color: 'var(--accent-gold)', 
                marginBottom: '32px',
                position: 'relative',
                zIndex: 1,
                background: 'var(--bg-surface-low)',
                padding: '16px',
                width: 'fit-content',
                borderRadius: '16px'
              }}>
                {s.icon}
              </div>
              <h3 className="font-display" style={{ fontSize: '1.5rem', marginBottom: '16px', position: 'relative', zIndex: 1 }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

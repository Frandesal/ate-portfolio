import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, Hash, FileText, Layout, Users } from 'lucide-react';

const services = [
  { icon: <Mail size={24} />, title: 'Inbox Alchemy', desc: 'Transforming chaotic inboxes into structured command centers. Ensuring priority communications are handled precisely.', height: '340px', offset: '0px' },
  { icon: <Calendar size={24} />, title: 'Calendar Choreography', desc: 'Seamless scheduling and time-blocking. I ensure your days flow effortlessly, maximizing deep work and strategic meetings.', height: '380px', offset: '40px' },
  { icon: <Hash size={24} />, title: 'Brand Presence', desc: 'Curating social media timelines and maintaining a consistent, refined online voice that engages your core audience.', height: '320px', offset: '20px' },
  { icon: <FileText size={24} />, title: 'Administrative Design', desc: 'Crafting elegant documents, precise data entry, and executing essential back-office workflows with zero friction.', height: '360px', offset: '60px' },
  { icon: <Layout size={24} />, title: 'Project Curation', desc: 'Tracking milestones and coordinating teams to ensure high-stakes projects are delivered beautifully and on time.', height: '340px', offset: '10px' },
  { icon: <Users size={24} />, title: 'Client Concierge', desc: 'Providing white-glove service to your most valued clients, handling inquiries with grace and nurturing long-term relationships.', height: '380px', offset: '50px' }
];

const Services = () => {
  return (
    <section id="services" style={{ padding: 'var(--section-padding)', background: 'var(--bg-surface)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '60px', marginBottom: '80px', alignItems: 'end' }}>
          <div>
            <h2 className="font-display" style={{ fontSize: '3.5rem', margin: 0 }}>
              Curated<br/><span style={{ color: 'var(--primary)' }}>Expertise.</span>
            </h2>
          </div>
          <div>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '500px', margin: 0 }}>
              Moving beyond basic task execution, I provide comprehensive, strategic support designed to give you the mental space to focus on high-level growth.
            </p>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
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
                padding: '48px 40px',
                borderRadius: '24px',
                background: 'var(--bg-surface-lowest)',
                boxShadow: 'var(--shadow-ambient)',
                height: s.height,
                marginTop: window.innerWidth > 768 ? s.offset : '0px',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle background flair */}
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--bg-surface-low)', borderRadius: '50%', zIndex: 0 }} />
              
              <div style={{ 
                color: 'var(--accent-gold)', 
                marginBottom: '32px',
                position: 'relative',
                zIndex: 1
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

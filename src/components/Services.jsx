import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, Hash, FileText, Layout, Users } from 'lucide-react';

const services = [
  {
    icon: <Mail size={32} />,
    title: 'Inbox Management',
    desc: 'Streamlining your communications, filtering spam, and ensuring priority emails are handled promptly.'
  },
  {
    icon: <Calendar size={32} />,
    title: 'Calendar Coordination',
    desc: 'Scheduling meetings, managing appointments, and ensuring your day runs like clockwork.'
  },
  {
    icon: <Hash size={32} />,
    title: 'Social Media Support',
    desc: 'Planning posts, engaging with followers, and maintaining a consistent online presence.'
  },
  {
    icon: <FileText size={32} />,
    title: 'Administrative Tasks',
    desc: 'Data entry, document formatting, and general office support tailored to your needs.'
  },
  {
    icon: <Layout size={32} />,
    title: 'Project Coordination',
    desc: 'Assisting in project tracking, deadline management, and team communication.'
  },
  {
    icon: <Users size={32} />,
    title: 'Client Relations',
    desc: 'Handling inquiries, gathering feedback, and nurturing professional relationships.'
  }
];

const Services = () => {
  return (
    <section id="services" style={{ padding: 'var(--section-padding)', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>My Expertise</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Comprehensive support solutions designed to give you more time to focus on high-level growth.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px' 
        }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(126, 91, 226, 0.1)' }}
              style={{
                padding: '40px',
                borderRadius: '24px',
                background: 'var(--bg)',
                transition: 'var(--transition)',
                border: '1px solid rgba(0,0,0,0.05)'
              }}
            >
              <div style={{ 
                color: 'var(--primary)', 
                marginBottom: '20px',
                background: 'var(--primary-light)',
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

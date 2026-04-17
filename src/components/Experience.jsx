import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    year: '2023 - Present',
    role: 'Lead Virtual Assistant',
    company: 'Independent Contractor',
    desc: 'Managing operations for multiple high-growth startups, specializing in project oversight and executive administrative support.'
  },
  {
    year: '2021 - 2023',
    role: 'Executive Assistant',
    company: 'Creative Agency',
    desc: 'Optimized internal workflows, managed complex travel arrangements, and served as the primary contact for key stakeholders.'
  },
  {
    year: '2019 - 2021',
    role: 'Project Coordinator',
    company: 'Tech Solutions Inc.',
    desc: 'Facilitated team communication, tracked project milestones, and assisted in the successful delivery of 20+ digital products.'
  }
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: 'var(--section-padding)', background: 'var(--bg)' }}>
      <div className="container">
        <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '60px' }}>Professional Journey</h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Line */}
          <div style={{ 
            position: 'absolute', 
            left: '20px', 
            top: 0, 
            bottom: 0, 
            width: '2px', 
            background: 'var(--primary)', 
            opacity: 0.2 
          }} />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              style={{ 
                marginBottom: '50px', 
                paddingLeft: '60px', 
                position: 'relative' 
              }}
            >
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '11px',
                top: '5px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--primary)',
                border: '4px solid white',
                boxShadow: '0 0 0 4px rgba(126, 91, 226, 0.1)'
              }} />

              <span style={{ 
                color: 'var(--primary)', 
                fontWeight: '600', 
                fontSize: '0.9rem',
                display: 'block',
                marginBottom: '5px'
              }}>
                {exp.year}
              </span>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '5px' }}>{exp.role}</h3>
              <p style={{ fontWeight: '500', color: 'var(--text-main)', marginBottom: '10px' }}>
                {exp.company}
              </p>
              <p style={{ color: 'var(--text-muted)' }}>{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

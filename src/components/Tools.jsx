import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiOpenai, 
  SiAnthropic, 
  SiCanva, 
  SiSlack, 
  SiAsana, 
  SiNotion 
} from 'react-icons/si';
import { TbBrandAdobePhotoshop } from 'react-icons/tb';
import { FaGoogleDrive } from 'react-icons/fa';

const tools = [
  { name: 'ChatGPT', icon: SiOpenai, color: '#10a37f' },
  { name: 'Claude AI', icon: SiAnthropic, color: '#D4A574' },
  { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
  { name: 'Photoshop', icon: TbBrandAdobePhotoshop, color: '#31A8FF' },
  { name: 'Google Drive', icon: FaGoogleDrive, color: '#4285F4' },
  { name: 'Slack', icon: SiSlack, color: '#4A154B' },
  { name: 'Asana', icon: SiAsana, color: '#F06A6A' },
  { name: 'Notion', icon: SiNotion, color: '#000000' }
];

const Tools = () => {
  const doubled = [...tools, ...tools];

  return (
    <section style={{ padding: '80px 0', overflow: 'hidden', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '48px' }}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-light)' }}
        >
          Tools I Work With
        </motion.p>
      </div>

      {/* Scrolling Track */}
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Fade edges */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to right, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px', background: 'linear-gradient(to left, var(--bg), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 30, repeat: Infinity }}
          style={{ display: 'flex', gap: '24px', width: 'fit-content' }}
        >
          {doubled.map((tool, i) => {
            const Icon = tool.icon;
            return (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 28px',
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border)',
                  whiteSpace: 'nowrap',
                  transition: 'border-color 0.3s, box-shadow 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-hover)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <Icon size={22} color={tool.color} />
                <span style={{ fontWeight: 500, fontSize: '0.95rem', color: 'var(--text)' }}>{tool.name}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;

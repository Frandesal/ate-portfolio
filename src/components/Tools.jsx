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
  { name: 'ChatGPT', icon: <SiOpenai size={28} /> },
  { name: 'Claude AI', icon: <SiAnthropic size={28} /> },
  { name: 'Canva', icon: <SiCanva size={28} color="#00C4CC" /> },
  { name: 'Photoshop', icon: <TbBrandAdobePhotoshop size={28} color="#31A8FF" /> },
  { name: 'Workspace', icon: <FaGoogleDrive size={28} /> },
  { name: 'Slack', icon: <SiSlack size={28} /> },
  { name: 'Asana', icon: <SiAsana size={28} color="#F06A6A" /> },
  { name: 'Notion', icon: <SiNotion size={28} /> }
];

const Tools = () => {
  return (
    <section style={{ 
      padding: '80px 0', 
      backgroundColor: 'var(--color-accent-3)',
      borderTop: 'var(--border-playful)',
      borderBottom: 'var(--border-playful)',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <div className="container" style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h3 className="font-display" style={{ fontSize: '2rem', margin: 0 }}>
          Industry-Standard Workflow.
        </h3>
      </div>

      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Scrolling Track */}
        <motion.div 
          animate={{ x: ['0%', '-50%'] }}
          transition={{ ease: 'linear', duration: 25, repeat: Infinity }}
          style={{ display: 'flex', width: '200%', gap: '32px', padding: '10px 20px' }}
        >
          {/* Loop twice to create seamless effect */}
          {[...tools, ...tools, ...tools, ...tools].map((tool, i) => (
            <div 
              key={i} 
              style={{
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px',
                padding: '16px 32px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '100px',
                border: 'var(--border-playful)',
                boxShadow: 'var(--shadow-playful)',
                whiteSpace: 'nowrap',
                color: 'var(--text-main)',
                fontWeight: '700',
                fontFamily: 'var(--font-body)'
              }}
            >
              {tool.icon}
              <span>{tool.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;

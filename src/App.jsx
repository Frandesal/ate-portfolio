import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Tools />
        <Experience />
        <Contact />
      </main>
      <footer style={{ 
        padding: '40px 0', 
        textAlign: 'center', 
        borderTop: '1px solid var(--border)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', margin: 0 }}>&copy; {new Date().getFullYear()} Kimberly Kate E. Longno</p>
          <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', margin: 0 }}>Crafted with care</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

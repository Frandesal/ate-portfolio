import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Experience />
        <Contact />
      </main>
      <footer style={{ 
        padding: '40px 20px', 
        textAlign: 'center', 
        background: 'var(--bg)', 
        color: 'var(--text-muted)',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}>
        <p>&copy; {new Date().getFullYear()} Kimberly Kate E. Longno. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

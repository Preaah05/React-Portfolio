import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`glass ${scrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: scrolled ? '10px' : '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1000px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        zIndex: 100,
        transition: 'all 0.3s ease',
        borderRadius: scrolled ? '20px' : '12px',
      }}
    >
      <div className="logo" style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
        <span className="text-gradient">Portfolio</span>
      </div>
      <ul style={{ 
        display: 'flex', 
        gap: '2rem', 
        listStyle: 'none' 
      }}>
        <li><a href="#home" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500, opacity: 0.8, transition: '0.2s' }}>Home</a></li>
        <li><a href="#about" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500, opacity: 0.8, transition: '0.2s' }}>About</a></li>
        <li><a href="#projects" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500, opacity: 0.8, transition: '0.2s' }}>Projects</a></li>
        <li><a href="#contact" style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 500, opacity: 0.8, transition: '0.2s' }}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default function Hero() {
  return (
    <section id="home" className="container hero-section">
      <div className="reveal">
        <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '20px', marginBottom: '2rem', fontSize: '0.875rem', color: 'var(--accent-primary)', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
          Open to work
        </div>
        <h1 className="hero-title">
          Hi, I'm <span className="text-gradient-accent">Priya</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem auto', lineHeight: 1.8 }}>
          Aspiring Software Engineer and a 3rd year Engineering student pursuing Computer Science and Engineering at Madan Mohan Malaviya University of Technology
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#projects" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            View Work
          </a>
          <a href="#contact" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

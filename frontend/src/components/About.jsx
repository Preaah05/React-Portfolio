export default function About() {
  return (
    <section id="about" className="container" style={{ marginBottom: '5rem' }}>
      <div className="glass glass-panel reveal delay-100" style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
        <div style={{ flex: '1 1 400px' }}>
          <h2 className="section-title text-gradient" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>About Me</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
            I’m Priya Verma, a third-year Computer Science student at Madan Mohan Malaviya University of Technology with strong expertise in data structures and algorithms, CS fundamentals and full-stack development using the MERN stack.
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
            During my tenure as an SDE Intern at Amazon, I developed an automation solution for Fresh store onboarding, reducing process time from 28 weeks to 14 weeks and improving operational efficiency by 50%. I also have hands-on experience in machine learning and have built multiple projects demonstrating practical problem-solving and system design skills.
          </p>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
            I am actively seeking opportunities to apply my technical skills to build scalable, high-impact systems.
          </p>
        </div>
        <div style={{ flex: '1 1 300px', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '350px',
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))',
            border: '1px solid var(--glass-border)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4)'
          }}>
            <img 
              src="/images/profile_picture.jpeg" 
              alt="Profile" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

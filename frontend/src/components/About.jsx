export default function About() {
  return (
    <section id="about" className="container" style={{ marginBottom: '5rem' }}>
      <div className="glass glass-panel reveal delay-100 about-container">
        <div className="about-content">
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
        <div className="about-image-wrapper">
          <div className="about-image">
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

const projects = [
  {
    id: 1,
    title: 'React Job Portal',
    description: 'A comprehensive job board application bridging the gap between job seekers and employers with seamless filtering.',
    tech: ['MERN Stack'],
    link: 'https://github.com/Preaah05',
    image: '/images/react_job_portal.png'
  },
  {
    id: 2,
    title: 'Crop Recommendation System',
    description: 'An ML-powered web app that recommends the most optimal crops for farmers based on soil conditions and weather data.',
    tech: ['Machine Learning'],
    link: 'https://github.com/Preaah05',
    image: '/images/crop_recommendation.png'
  },
  {
    id: 3,
    title: 'React To-Do App',
    description: 'A beautifully designed real-time productivity app to manage daily tasks efficiently.',
    tech: ['MERN Stack'],
    link: 'https://github.com/Preaah05',
    image: '/images/todo_app.png'
  },
  {
    id: 4,
    title: 'E-commerce cart System',
    description: 'A fully functional shopping cart system built entirely with vanilla web technologies, featuring persistent cart state via LocalStorage.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/Preaah05',
    image: '/images/ecommerce_preview.png'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="container" style={{ marginBottom: '5rem' }}>
      <h2 className="section-title reveal text-gradient">Featured Work</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={project.id} className={`glass glass-panel reveal delay-${(index + 1) * 100}`} style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ width: '100%', height: '220px', overflow: 'hidden', flexShrink: 0 }}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }} className="project-img" />
            </div>
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{project.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{project.description}</p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem', flex: 1, alignContent: 'flex-start' }}>
              {project.tech.map(t => (
                <span key={t} style={{ 
                  fontSize: '0.75rem', 
                  padding: '4px 10px', 
                  background: 'rgba(255,255,255,0.05)', 
                  borderRadius: '12px',
                  color: 'var(--accent-primary)',
                  border: '1px solid rgba(139, 92, 246, 0.2)'
                }}>{t}</span>
              ))}
            </div>
              <a href={project.link} className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', marginTop: 'auto', alignSelf: 'flex-start' }}>
                View Project &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

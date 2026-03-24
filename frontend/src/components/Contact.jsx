import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="container" style={{ alignItems: 'center' }}>
      <div className="glass glass-panel reveal delay-200" style={{ maxWidth: '600px', width: '100%', margin: '0 auto' }}>
        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Let's Build Something Amazing</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
          Whether it's a project, internship opportunity, or collaboration — I'm excited to bring ideas to life. Send me a message and let's get started.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 calc(50% - 0.75rem)' }}>
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'white', outline: 'none', transition: '0.3s' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              />
            </div>
            <div style={{ flex: '1 1 calc(50% - 0.75rem)' }}>
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required
                style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'white', outline: 'none', transition: '0.3s' }}
                onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
              />
            </div>
          </div>
          <div>
            <textarea 
              name="message" 
              placeholder="Your Message..." 
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{ width: '100%', padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: 'white', outline: 'none', resize: 'none', transition: '0.3s' }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ width: '100%', padding: '1rem', fontSize: '1.1rem' }}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
          {status === 'success' && <p style={{ color: '#4ade80', textAlign: 'center', marginTop: '1rem' }}>Message sent successfully!</p>}
          {status === 'error' && <p style={{ color: '#f87171', textAlign: 'center', marginTop: '1rem' }}>Failed to send message. Make sure the backend is running.</p>}
        </form>
      </div>
    </section>
  );
}

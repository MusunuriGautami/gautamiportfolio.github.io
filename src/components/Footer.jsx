import { ArrowUp, Mail } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin, FiTwitter as Twitter } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      marginTop: '4rem',
      padding: '1rem 2rem',
      background: 'var(--color-glass-bg)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderTop: '1px solid var(--color-glass-border)',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        {/* Left: Socials & Back to Top */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            {[Github, Linkedin, Mail].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                style={{ color: 'var(--color-text-secondary)', transition: 'color 0.2s', display: 'flex', alignItems: 'center' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text-primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          <button
            onClick={scrollToTop}
            className="glass-button"
            style={{ padding: '0.25rem', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Right: Copyright */}
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', margin: 0, textAlign: 'right' }}>
          &copy; {new Date().getFullYear()} Gautami Musunuri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

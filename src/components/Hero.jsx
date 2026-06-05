import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Mail } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import ShinyText from './ShinyText';
import ChromaGrid from './ChromaGrid';
import SpotlightButton from './SpotlightButton';

const roles = ["Data Analyst Enthusiast", "Transforming Data into Insights"];

const chromaItems = [
  {
    image: "/profile.jpg",
    title: "Gautami Musunuri",
    buttons: ["PARUL UNIVERSITY", "2027"],
    borderColor: "var(--color-primary)",
    gradient: "linear-gradient(135deg, rgba(35, 35, 35, 0.4), rgba(25, 25, 25, 0.2))",
    url: ""
  }
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];
      
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="section-container" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap', width: '100%' }}>
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
        >
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--color-glass-bg)', border: '1px solid var(--color-glass-border)', borderRadius: 'var(--radius-sm)', width: 'max-content', fontSize: '0.9rem', fontWeight: '500' }}>
            Hello, Welcome to my portfolio
          </div>
          
          <h1 className="name-text" style={{ fontSize: '4rem', letterSpacing: '-1px', fontWeight: 'normal', margin: 0 }}>
            <ShinyText 
              text="Gautami Musunuri" 
              color="#EBC8B2"
              shineColor="#ffffff"
              speed={3}
              spread={120}
              direction="left"
            />
          </h1>
          
          <h2 style={{ fontSize: '1.5rem', height: '2.5rem', color: 'teal', fontWeight: '600' }}>
            {displayText}
            <span style={{ animation: 'blink 1s step-end infinite', fontWeight: '400', color: 'var(--color-text-secondary)' }}>|</span>
          </h2>
          
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', maxWidth: '500px', lineHeight: '1.8' }}>
            Building ideas with purpose and solving challenges creatively. Dedicated to continuous growth and meaningful innovation.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
            <SpotlightButton href="#projects" className="primary">
              <span>View Projects</span> <ArrowRight size={18} />
            </SpotlightButton>
            <SpotlightButton as="a" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <span>View Resume</span> <ExternalLink size={18} />
            </SpotlightButton>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            {[Github, Linkedin, Mail].map((Icon, idx) => (
              <SpotlightButton key={idx} href="#" className="icon-only" style={{ color: 'var(--color-text-primary)' }}>
                <Icon size={20} />
              </SpotlightButton>
            ))}
          </div>
        </motion.div>

        {/* Right Visuals */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ flex: '1 1 450px', position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {/* Main Visual Element */}
          <div className="glass-card" style={{ width: '400px', height: '520px', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(35, 35, 35, 0.55), rgba(25, 25, 25, 0.45))' }}>
            <div style={{ width: '250px', height: '250px', borderRadius: '50%', background: 'linear-gradient(135deg, #202020, #141414)', filter: 'blur(50px)', position: 'absolute', top: '-60px', left: '-60px' }} />
            <div style={{ width: '180px', height: '180px', borderRadius: '50%', background: 'linear-gradient(135deg, #2A2A2A, #1A1A1A)', filter: 'blur(40px)', position: 'absolute', bottom: '-30px', right: '-30px' }} />
            
            <div style={{ zIndex: 1, width: '100%', height: '100%' }}>
              <ChromaGrid 
                items={chromaItems}
                columns={1}
                radius={200}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
                className="hero-chroma"
              />
            </div>
          </div>



        </motion.div>
      </div>
      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default Hero;

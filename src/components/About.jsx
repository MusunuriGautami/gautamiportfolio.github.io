import { motion } from 'framer-motion';
import TiltedCard from './TiltedCard';
import SpotlightCard from './SpotlightCard';
import BorderGlow from './BorderGlow';

const traits = [
  "Self-Motivated",
  "Research & Analysis",
  "Strategic Thinking",
  "Multitasking"
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>About Me</h2>
          <p className="section-subtitle">
            Who I am?
          </p>
        </div>

        <div>
          <TiltedCard rotateAmplitude={12} scaleOnHover={1.05} containerHeight="auto">
            <BorderGlow className="glass-card" backgroundColor="transparent" edgeSensitivity={40}>
              <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.08)">
                <div style={{ padding: '3rem', position: 'relative', height: '100%', width: '100%' }}>
                  <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)', opacity: 0.05, filter: 'blur(40px)' }} />
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', zIndex: 1 }}>
                    <div>
                      <p style={{ fontFamily: '"Comic Sans MS", "Comic Sans", cursive', color: 'var(--color-text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                        I am a passionate and motivated Big Data Analytics student with a strong interest in exploring how technology and data can create meaningful solutions for real-world challenges. I enjoy learning, growing, and taking on opportunities that help me expand my knowledge and understanding of the rapidly evolving tech world. My journey has been driven by curiosity, consistency, and a desire to build impactful solutions that make a difference. I believe continuous learning and adaptability are essential for growth, and I am always eager to challenge myself through new experiences, innovative ideas, and meaningful projects. I aspire to contribute to impactful work while continuously developing both personally and professionally.
                      </p>
                    </div>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
                      {traits.map((trait, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          style={{ padding: '0.75rem 1.25rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                        >
                          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-primary)', boxShadow: '0 0 10px var(--color-primary)' }} />
                          <span style={{ fontSize: '0.95rem', fontWeight: '500', color: 'var(--color-text-primary)' }}>{trait}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </BorderGlow>
          </TiltedCard>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

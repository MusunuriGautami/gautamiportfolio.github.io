import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import TiltedCard from './TiltedCard';
import SpotlightCard from './SpotlightCard';
import BorderGlow from './BorderGlow';

const educationList = [
  {
    degree: "BTech in Big Data Analytics",
    institution: "Parul University, Vadodara, Gujarat",
    duration: "2023 - 2027",
    grade: "CGPA : 6.54",
    description: ""
  },
  {
    degree: "12th Class, MPC",
    institution: "Sri Shirdi Sai Junior College, Rajahmundry",
    duration: "2021 - 2023",
    grade: "Percentage: 81.1%",
    description: ""
  },
  {
    degree: "Secondary Education, 10th Class",
    institution: "Sri Prakash Vidyaniketan, Rajahmundry",
    duration: "2019 - 2020",
    grade: "Percentage: 75.6%",
    description: ""
  }
];

const Education = () => {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Education</h2>
          <p className="section-subtitle">
            My Academic Foundation
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ position: 'absolute', left: '24px', top: '0', bottom: '0', width: '2px', background: 'var(--color-glass-border)', zIndex: 0 }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {educationList.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}
              >
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-bg)', border: '2px solid var(--color-text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--color-text-primary)' }}>
                  <GraduationCap size={20} />
                </div>
                
                <TiltedCard rotateAmplitude={12} scaleOnHover={1.05} containerHeight="auto" containerWidth="100%">
                  <BorderGlow className="glass-card" backgroundColor="transparent" edgeSensitivity={40}>
                    <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.08)">
                      <div style={{ padding: '2rem', flexGrow: 1, width: '100%', height: '100%' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.5rem' }}>
                          <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>{edu.degree}</h3>
                            <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', fontWeight: '500' }}>{edu.institution}</p>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
                            <span style={{ padding: '0.3rem 0.8rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-secondary)' }}>
                              {edu.duration}
                            </span>
                            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>
                              {edu.grade}
                            </span>
                          </div>
                        </div>
                        
                        {edu.description && (
                          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginTop: '1rem' }}>
                            {edu.description}
                          </p>
                        )}
                      </div>
                    </SpotlightCard>
                  </BorderGlow>
                </TiltedCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;

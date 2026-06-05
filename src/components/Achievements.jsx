import { motion } from 'framer-motion';
import { Trophy, Code, Medal, Star } from 'lucide-react';

const achievements = [
  {
    title: "1st Place - Global Hackathon 2023",
    category: "Hackathons",
    icon: <Trophy size={24} />,
    description: "Built an AI-powered accessibility tool for visually impaired users. Won out of 500+ participating teams globally."
  },
  {
    title: "Top 1% on LeetCode",
    category: "Coding Achievements",
    icon: <Code size={24} />,
    description: "Solved 800+ algorithmic challenges and maintained a top 1% global ranking in competitive programming contests."
  },
  {
    title: "Dean's List of Academic Excellence",
    category: "Academic Achievements",
    icon: <Star size={24} />,
    description: "Awarded for maintaining a perfect 4.0 GPA during the final two years of undergraduate studies."
  },
  {
    title: "Open Source Contributor of the Year",
    category: "Community",
    icon: <Medal size={24} />,
    description: "Recognized by a major open-source foundation for significant contributions to the React ecosystem."
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Achievements</h2>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className="glass-card"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', position: 'relative', overflow: 'hidden' }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Subtle background icon */}
              <div style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.05, transform: 'scale(4)' }}>
                {achievement.icon}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)', color: 'var(--color-text-primary)' }}>
                  {achievement.icon}
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', padding: '0.3rem 0.8rem', background: 'var(--color-text-primary)', color: 'var(--color-bg)', borderRadius: '20px' }}>
                  {achievement.category}
                </span>
              </div>
              
              <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginTop: '0.5rem', zIndex: 1 }}>
                {achievement.title}
              </h3>
              
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', zIndex: 1 }}>
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;

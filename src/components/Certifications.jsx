import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    provider: "Amazon Web Services",
    date: "August 2023",
    link: "#"
  },
  {
    name: "Google Data Analytics Professional Certificate",
    provider: "Coursera / Google",
    date: "January 2023",
    link: "#"
  },
  {
    name: "Meta Front-End Developer Professional Certificate",
    provider: "Coursera / Meta",
    date: "October 2022",
    link: "#"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Certifications</h2>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              className="glass-card"
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.75rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-sm)', color: 'var(--color-text-primary)' }}>
                  <Award size={24} />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: '500', color: 'var(--color-text-secondary)' }}>
                  {cert.date}
                </span>
              </div>
              
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>
                  {cert.name}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
                  {cert.provider}
                </p>
              </div>
              
              <a href={cert.link} className="glass-button" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem', fontSize: '0.9rem', marginTop: '1rem' }}>
                View Credential <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;

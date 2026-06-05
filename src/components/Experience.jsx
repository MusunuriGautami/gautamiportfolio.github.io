import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2022 - Present",
    description: "Leading the frontend development team in building scalable micro-frontends. Improved application load time by 40% and mentored junior developers.",
    skills: ["React", "TypeScript", "Webpack", "Redux"]
  },
  {
    role: "Full Stack Developer",
    company: "Digital Solutions LLC",
    duration: "Mar 2019 - Dec 2021",
    description: "Developed and maintained RESTful APIs and modern user interfaces for enterprise clients. Integrated payment gateways and optimized database queries.",
    skills: ["Node.js", "Express", "MongoDB", "Vue.js"]
  },
  {
    role: "Software Engineering Intern",
    company: "Startup Hub",
    duration: "May 2018 - Aug 2018",
    description: "Assisted in the development of a real-time chat application using WebSockets. Wrote unit tests and participated in daily stand-ups.",
    skills: ["JavaScript", "Socket.io", "HTML/CSS"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Experience</h2>

        <div style={{ position: 'relative', marginTop: '3rem', maxWidth: '800px', margin: '3rem auto 0' }}>
          {/* Timeline Line */}
          <div style={{ position: 'absolute', left: '24px', top: '0', bottom: '0', width: '2px', background: 'var(--color-glass-border)', zIndex: 0 }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ display: 'flex', gap: '2rem', position: 'relative', zIndex: 1 }}
              >
                {/* Timeline Icon */}
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--color-bg)', border: '2px solid var(--color-text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--color-text-primary)' }}>
                  <Briefcase size={20} />
                </div>
                
                {/* Content Card */}
                <div className="glass-card" style={{ padding: '2rem', flexGrow: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'var(--color-text-primary)' }}>{exp.role}</h3>
                      <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', fontWeight: '500' }}>{exp.company}</p>
                    </div>
                    <span style={{ padding: '0.4rem 1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', color: 'var(--color-text-secondary)' }}>
                      {exp.duration}
                    </span>
                  </div>
                  
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {exp.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {exp.skills.map((skill, idx) => (
                      <span key={idx} style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', border: '1px solid var(--color-glass-border)', borderRadius: '4px', color: 'var(--color-text-secondary)' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

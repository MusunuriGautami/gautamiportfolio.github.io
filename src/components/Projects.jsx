import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FiGithub as Github } from 'react-icons/fi';
import CardSwap, { Card } from './CardSwap';

const projects = [
  {
    title: "Deep Learning Approach for Retinal Disease Classification Using OCT",
    description: "A deep learning-based system that classifies retinal diseases such as CNV, DME, Drusen, and Normal using OCT images for faster and accurate disease detection.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["Python", "TensorFlow", "Keras", "OpenCV", "HTML", "CSS", "JavaScript", "Flask", "MySQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "SmartCrop",
    description: "An intelligent farming system that helps farmers by analyzing crop health, soil, and weather conditions to provide smart crop recommendations and disease detection.",
    image: "/smartcrop.jpg",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "HTML", "CSS", "JavaScript / React", "Weather API", "Soil/Crop Dataset", "MySQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "Online Learning Game for Children",
    description: "An interactive educational platform that makes learning fun for children through games, quizzes, and activities to improve knowledge and problem-solving skills.",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    tags: ["React", "Framer Motion", "Gamification", "HTML", "CSS", "JavaScript", "PHP / Python Flask"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Featured Projects</h2>
          <p className="section-subtitle">
            Transforming ideas into impactful projects.
          </p>
        </div>

        <div style={{ height: '800px', position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10rem' }}>
          <CardSwap
            cardDistance={75}
            verticalDistance={80}
            delay={5000}
            pauseOnHover={false}
            width={900}
            height={600}
          >
            {projects.map((project, index) => (
              <Card key={index} customClass="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'rgba(25, 25, 25, 0.9)', padding: 0 }}>
                <div style={{ position: 'relative', height: '300px', overflow: 'hidden', flexShrink: 0 }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>{project.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }}>
                    {project.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} style={{ fontSize: '0.8rem', padding: '0.2rem 0.6rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '4px', color: 'var(--color-text-secondary)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }} onClick={e => e.stopPropagation()}>
                    <a href={project.github} className="glass-button" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', flex: 1 }}>
                      <Github size={16} /> Code
                    </a>
                    <a href={project.demo} className="glass-button glass-button-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', flex: 1 }}>
                      <ExternalLink size={16} /> Demo
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

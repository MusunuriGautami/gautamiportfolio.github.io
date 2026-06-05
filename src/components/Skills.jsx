import { motion } from 'framer-motion';
import { Code2, Database, Layout, Settings } from 'lucide-react';
import { FaJava, FaChartBar, FaCode } from 'react-icons/fa';
import { SiPython, SiCplusplus, SiJavascript, SiReact, SiFlask, SiMysql, SiMongodb, SiGit, SiGithub, SiEclipseide } from 'react-icons/si';
import TiltedCard from './TiltedCard';
import SpotlightCard from './SpotlightCard';
import BorderGlow from './BorderGlow';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 size={24} />,
    skills: [
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "JavaScript", icon: <SiJavascript /> }
    ]
  },
  {
    title: "Frameworks",
    icon: <Layout size={24} />,
    skills: [
      { name: "React", icon: <SiReact /> },
      { name: "Flask", icon: <SiFlask /> }
    ]
  },
  {
    title: "Databases",
    icon: <Database size={24} />,
    skills: [
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> }
    ]
  },
  {
    title: "Tools",
    icon: <Settings size={24} />,
    skills: [
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "VS Code", icon: <FaCode /> },
      { name: "PowerBI", icon: <FaChartBar /> },
      { name: "Eclipse IDE", icon: <SiEclipseide /> }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

import Folder from './Folder';

const Skills = () => {
  const folderItems = skillCategories.map((category, index) => (
    <TiltedCard key={index} rotateAmplitude={8} scaleOnHover={1.02} containerHeight="100%">
      <BorderGlow className="glass-card" backgroundColor="rgba(25, 25, 25, 0.95)" edgeSensitivity={40}>
        <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.05)">
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ padding: '0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-sm)', color: 'var(--color-text-primary)' }}>
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{category.title}</h3>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.3rem 0.8rem', 
                    background: 'rgba(35, 35, 35, 0.55)', 
                    border: '1px solid var(--color-glass-border)',
                    borderRadius: '20px',
                    fontSize: '0.85rem',
                    fontWeight: '500',
                    transition: 'var(--transition-smooth)',
                    cursor: 'default'
                  }}
                >
                  {skill.icon}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </SpotlightCard>
      </BorderGlow>
    </TiltedCard>
  ));

  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ marginBottom: '3rem' }}>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Technical Skills</h2>
          <p className="section-subtitle">
            Tools Behind My Work
          </p>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '500px', paddingTop: '120px' }}>
          <Folder size={1} color="#B19CD9" items={folderItems} />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;

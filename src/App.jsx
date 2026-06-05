import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Ferrofluid from './components/Ferrofluid';
import ClickSpark from './components/ClickSpark';
import './index.css';

function App() {
  return (
    <ClickSpark sparkColor='#FDF5E6' sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
      <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Layer - zIndex 0 and pointerEvents none ensures it's above body but doesn't block clicks */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none' }}>
        <Ferrofluid
          colors={['#60A5FA', '#93C5FD', '#BFDBFE']}
          speed={0.3}
          scale={1.2}
          turbulence={0.8}
          fluidity={0.15}
          rimWidth={0.15}
          sharpness={2}
          shimmer={1}
          glow={2}
          flowDirection="down"
          opacity={1}
          mouseInteraction={false} // Disable mouse interaction if pointer events are none, or we can enable pointer events and let it sit in background
          mouseStrength={1.5}
          mouseRadius={0.4}
        />
      </div>

      {/* Content Layer - sits above the background */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
    </ClickSpark>
  );
}

export default App;

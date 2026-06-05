import React from 'react';
import { Home, User, Code, Folder, Mail } from 'lucide-react';
import Dock from './Dock';

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    { icon: <Home size={18} />, label: 'Home', onClick: () => scrollToSection('home') },
    { icon: <User size={18} />, label: 'About', onClick: () => scrollToSection('about') },
    { icon: <Code size={18} />, label: 'Skills', onClick: () => scrollToSection('skills') },
    { icon: <Folder size={18} />, label: 'Projects', onClick: () => scrollToSection('projects') },
    { icon: <Mail size={18} />, label: 'Contact', onClick: () => scrollToSection('contact') },
  ];

  return (
    <>
      {/* 
        This replaces the traditional top navbar with the new macOS-style dock.
        It sits fixed at the bottom.
      */}
      <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </>
  );
};

export default Navbar;

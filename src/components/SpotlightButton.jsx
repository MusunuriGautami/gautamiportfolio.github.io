import { useRef } from 'react';
import './SpotlightButton.css';

const SpotlightButton = ({ children, className = '', onClick, href, as = 'button', type, style }) => {
  const btnRef = useRef(null);

  const handleMouseMove = e => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    btnRef.current.style.setProperty('--mouse-x', `${x}px`);
    btnRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const Component = href ? 'a' : as;

  return (
    <Component 
      ref={btnRef} 
      href={href}
      type={type}
      onClick={onClick}
      onMouseMove={handleMouseMove} 
      className={`spotlight-btn ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};

export default SpotlightButton;

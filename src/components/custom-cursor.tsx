'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition);
    
    // Add hover listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .project-card, .experience-card, .btn-primary');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    // Hide cursor when mouse leaves window
    const handleMouseLeaveWindow = () => setIsVisible(false);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', () => setIsVisible(true));

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', () => setIsVisible(true));
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-150 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
        }}
      >
        <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />
      </div>

      {/* Cursor ring */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: isHovering ? 'scale(1.8)' : 'scale(1)',
        }}
      >
        <div className="w-6 h-6 border border-cyan-400/60 rounded-full animate-pulse" />
      </div>

      {/* Outer glow ring */}
      <div
        className={`fixed pointer-events-none z-[9997] transition-all duration-500 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: isHovering ? 'scale(2.2)' : 'scale(1)',
        }}
      >
        <div className="w-10 h-10 border border-cyan-400/20 rounded-full animate-ping" />
      </div>
    </>
  );
}

import React, { useRef, useState, useEffect, useCallback } from 'react';
import '../styles/components.css';

const HorizontalScroll = ({ children, className = '', autoScroll = false, speed = 1 }) => {
  const scrollRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const requestRef = useRef();

  const animate = useCallback(() => {
    if (autoScroll && scrollRef.current && !isDown && !isHovered) {
      scrollRef.current.scrollLeft += speed;
      // If we reach the end, we could loop, but for a simple marquee let's just scroll.
      // Usually users will just want it to scroll continuously.
      if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth - scrollRef.current.clientWidth)) {
        scrollRef.current.scrollLeft = 0; // Reset to start when hitting the end
      }
    }
    requestRef.current = requestAnimationFrame(animate);
  }, [autoScroll, isDown, isHovered, speed]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animate]);

  const handleMouseDown = (e) => {
    setIsDown(true);
    scrollRef.current.classList.add('active');
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    setIsHovered(false);
    if (scrollRef.current) scrollRef.current.classList.remove('active');
  };

  const handleMouseUp = () => {
    setIsDown(false);
    if (scrollRef.current) scrollRef.current.classList.remove('active');
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll-fast
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div 
      className={`horizontal-scroll-container ${className}`}
      ref={scrollRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {children}
    </div>
  );
};

export default HorizontalScroll;


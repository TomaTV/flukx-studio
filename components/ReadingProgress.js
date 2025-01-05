import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

const ReadingProgress = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Configuration plus légère de l'animation sur mobile
  const scaleX = useSpring(scrollYProgress, {
    stiffness: isMobile ? 50 : 100,
    damping: isMobile ? 15 : 30,
    restDelta: isMobile ? 0.01 : 0.001
  });

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      // Débounce pour éviter trop d'appels sur mobile
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }, isMobile ? 100 : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobile]);

  // Pas de rendu sur mobile si pas visible
  if (!isVisible || (isMobile && window.scrollY < 200)) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 sm:h-1 bg-indigo-600 origin-left z-50 transform-gpu"
      style={{ 
        scaleX,
        willChange: 'transform',
      }}
    />
  );
};

export default ReadingProgress;
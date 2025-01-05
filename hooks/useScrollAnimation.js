import { useEffect } from 'react';
import { useMotionValue, useTransform, animate } from 'framer-motion';

export const useScrollAnimation = (ref) => {
  const y = useMotionValue(0);
  const opacity = useTransform(y, [0, 100], [0, 1]);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      
      if (scrollPercent > 0 && scrollPercent < 1) {
        animate(y, scrollPercent * 100, {
          type: "spring",
          stiffness: 50,
          damping: 30
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [y]);

  return { y, opacity };
};

export const useParallax = (ref, speed = 0.1) => {
  const y = useMotionValue(0);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrollPosition = window.pageYOffset;
      const parallaxOffset = scrollPosition * speed;
      
      y.set(parallaxOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [y, speed]);

  return y;
};

export const useMagneticEffect = (ref, strength = 0.5) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      
      const centerX = width / 2;
      const centerY = height / 2;
      
      const deltaX = x - centerX;
      const deltaY = y - centerY;
      
      element.style.transform = `translate(${deltaX * strength}px, ${deltaY * strength}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = '';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, strength]);
};
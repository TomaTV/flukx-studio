import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../hooks/useIsMobile";

const Loader = ({ children }) => {
  const isMobile = useIsMobile();
  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Réduire le temps de chargement sur mobile
  const loadingDuration = isMobile ? 1000 : 1500;
  const transitionDuration = isMobile ? 0.4 : 0.6;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDuration);

    return () => clearTimeout(timer);
  }, [loadingDuration]);

  useEffect(() => {
    if (!isLoading) {
      // Réduire le délai sur mobile
      const timer = setTimeout(() => {
        setIsContentVisible(true);
      }, isMobile ? 50 : 100);
      return () => clearTimeout(timer);
    }
  }, [isLoading, isMobile]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ 
              duration: transitionDuration,
              ease: [0.76, 0, 0.24, 1]
            }}
            className="fixed inset-0 z-[100] bg-white flex items-center justify-center"
            style={{ willChange: 'transform' }}
          >
            <div className="relative flex flex-col items-center">
              <svg 
                viewBox="0 0 100 100" 
                className="w-16 h-16 sm:w-20 sm:h-20 mb-4"
                style={{ transform: 'translateZ(0)' }}
              >
                <motion.path
                  d="M50 0 L54 46 L100 50 L54 54 L50 100 L46 54 L0 50 L46 46 Z"
                  fill="none"
                  stroke="black"
                  strokeWidth={isMobile ? 3 : 2}
                  strokeLinejoin="miter"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ 
                    duration: isMobile ? 0.6 : 0.8, 
                    ease: "easeInOut" 
                  }}
                  style={{ willChange: 'stroke-dashoffset' }}
                />
              </svg>

              {/* Ligne de loading optimisée */}
              {!isMobile && (
                <motion.div
                  className="absolute -bottom-12 w-48 h-[2px] bg-gray-100"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  style={{ willChange: 'transform' }}
                >
                  <motion.div
                    className="h-full w-full bg-black origin-left transform-gpu"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.6, 
                      ease: "easeInOut" 
                    }}
                    style={{ willChange: 'transform' }}
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="min-h-screen bg-white transform-gpu"
        style={{
          opacity: isContentVisible ? 1 : 0,
          transform: `translateY(${isContentVisible ? "0" : "100vh"})`,
          transition: `transform ${transitionDuration}s cubic-bezier(0.76, 0, 0.24, 1), opacity ${isMobile ? 0.2 : 0.3}s ease`,
          willChange: 'transform, opacity'
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Loader;
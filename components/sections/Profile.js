import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useIsMobile } from "../../hooks/useIsMobile";
import Image from 'next/image';

const Profile = () => {
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);

  // Optimisation du scroll pour mobile
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Réduction de l'intensité des animations sur mobile
  const imageHeight = useTransform(
    scrollYProgress, 
    [0, 0.8], 
    isMobile ? ["40vh", "60vh"] : ["30vh", "80vh"]
  );

  // Réduction du scale sur mobile pour éviter les lags
  const imageScale = useTransform(
    scrollYProgress, 
    [0, 0.8], 
    isMobile ? [1.05, 1] : [1.1, 1]
  );

  // Animations de texte plus rapides et moins prononcées sur mobile
  const nameY = useTransform(
    scrollYProgress, 
    [0.3, 0.5], 
    isMobile ? [100, 0] : [200, 0]
  );

  const nameOpacity = useTransform(
    scrollYProgress, 
    [0.3, 0.5], 
    [0, 1]
  );

  const contentY = useTransform(
    scrollYProgress, 
    [0.5, 0.7], 
    isMobile ? [100, 0] : [200, 0]
  );

  const contentOpacity = useTransform(
    scrollYProgress, 
    [0.5, 0.7], 
    [0, 1]
  );

  return (
    <section ref={sectionRef} className="relative bg-white">
      <motion.div
        style={{ 
          height: imageHeight,
          willChange: 'height'
        }}
        className="relative w-full overflow-hidden"
      >
        <motion.div
          style={{ 
            scale: imageScale,
            willChange: 'transform'
          }}
          className="relative w-full h-full transform-gpu"
        >
          {/* Optimisation de l'image avec next/image */}
          <div className="relative w-full h-full">
            <img
              src="/img/bgparallax.avif"
              alt="Thomas Devulder"
              className="w-full h-full object-cover transform-gpu"
              style={{ 
                willChange: 'transform',
                transform: 'translateZ(0)'
              }}
              loading="eager"
            />
          </div>
          <div 
            className="absolute inset-0 bg-black/40"
            style={{ willChange: 'opacity' }}
          />
        </motion.div>

        <div className="absolute bottom-32 sm:bottom-48 left-0 w-full px-4 sm:px-8 text-center text-white pointer-events-none">
          <motion.div
            style={{ 
              y: nameY, 
              opacity: nameOpacity,
              willChange: 'transform, opacity'
            }}
            className="overflow-hidden mb-4 sm:mb-8 transform-gpu"
          >
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold font-grotesk">
              Thomas Devulder
            </h2>
          </motion.div>

          <motion.div
            style={{ 
              y: contentY, 
              opacity: contentOpacity,
              willChange: 'transform, opacity'
            }}
            className="space-y-4 sm:space-y-6 overflow-hidden transform-gpu"
          >
            <p className="text-base sm:text-lg md:text-xl font-inter text-white/90">
              Développeur créatif & Designer UI/UX basé à Paris
            </p>

            <div className="pointer-events-auto">
              <motion.a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={isMobile ? {} : { scale: 1.05 }}
                whileTap={isMobile ? { scale: 0.95 } : { scale: 0.98 }}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 hover:border-white border hover:bg-transparent hover:text-white font-grotesk rounded-full transition-colors"
              >
                <span className="text-sm sm:text-base">Voir mon CV</span>
                <ArrowUpRight className="w-4 h-4 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Profile;
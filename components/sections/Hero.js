import React, { useEffect, useContext } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useLanguage } from "../../hooks/useLanguage";

const Hero = () => {
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();

  const { t } = useLanguage();

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5],
    isMobile ? [1, 0.9] : [1, 0.7]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    isMobile ? [0, 50] : [0, 100]
  );

  const handleScroll = () => {
    if (window.lenis) {
      window.lenis.scrollTo(window.innerHeight, {
        duration: isMobile ? 1 : 1.5,
        easing: (t) => 1 - Math.pow(1 - t, isMobile ? 3 : 5),
      });
    }
  };

  useEffect(() => {
    if (window.lenis) {
      window.lenis.options = {
        ...window.lenis.options,
        duration: isMobile ? 1 : 1.5,
        smoothWheel: true,
        wheelMultiplier: isMobile ? 0.5 : 1,
        touchMultiplier: isMobile ? 1.5 : 2,
        smoothTouch: isMobile ? false : true,
      };
    }
  }, [isMobile]);

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center bg-white">
      <motion.div style={{ scale, opacity, y }} className="absolute inset-0">
        <div
          className={`absolute right-[5%] top-[15%] w-[90vw] h-[70vh] sm:w-[80vw] sm:h-[60vh] lg:w-[60vw] lg:h-[50vh] bg-[#4338ca] rounded-full ${
            isMobile ? "blur-[60px]" : "blur-[120px]"
          } opacity-[0.15]`}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobile ? 0.01 : 0.02 }}
        transition={{ duration: isMobile ? 1 : 2 }}
        className="absolute inset-0 bg-[url('/img/noise.png')] bg-repeat pointer-events-none"
      />

      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: isMobile ? 0.5 : 0.8 }}
        className="absolute top-0 w-full flex justify-between items-center py-6 sm:py-12 px-6 sm:px-16 z-20"
      >
        <div className="flex items-center gap-4">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: isMobile ? 0.5 : 0.8, delay: 0.3 }}
            className="h-px bg-black/20"
          />
          <span className="text-black/70 font-inter tracking-[0.3em] uppercase text-[0.7em] sm:text-sm">
            {t("hero.studio")}
          </span>
        </div>

        <a
          href="mailto:contact@flukxstudio.fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={isMobile ? {} : { scale: 1.02 }}
            whileTap={isMobile ? { scale: 0.95 } : { scale: 0.98 }}
            className="relative px-4 sm:px-8 py-1.5 sm:py-3 border-2 border-[#4338ca] text-[#4338ca] hover:text-white hover:bg-[#4338ca] font-spaceGrotesk rounded-full transition-all duration-300 flex items-center gap-2 text-[0.6em] sm:text-sm group"
          >
            <span className="relative z-10">{t("hero.discuss")}</span>
            <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </a>
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 max-w-[95%] sm:max-w-[80%] lg:max-w-[70%] mx-auto px-4 sm:px-8"
      >
        <div className="flex flex-col items-center text-center">
          <div className="space-y-8">
            <h1 className="relative">
              <motion.span
                initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.7 : 1 }}
                className="block text-[2.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-spaceGrotesk font-bold leading-[0.9] tracking-tight"
              >
                {t("hero.transform")}
              </motion.span>
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.7 : 1, delay: 0.3 }}
                className="block text-[2.5rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] font-spaceGrotesk font-bold leading-[0.9] tracking-tight"
              >
                {t("hero.ideas")}{" "}
                <span className="text-[#4338ca] relative">
                  {t("hero.reality")}.
                </span>
              </motion.div>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.7 : 1, delay: 0.8 }}
              className="max-w-4xl mx-auto text-lg sm:text-xl text-black/80 font-inter leading-relaxed"
            >
              {t("hero.description")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.7 : 1, delay: 1 }}
            className="mt-12"
          >
            <motion.button
              whileHover={isMobile ? {} : { scale: 1.02 }}
              whileTap={isMobile ? { scale: 0.95 } : { scale: 0.98 }}
              onClick={() => {
                const scrollHeight =
                  document.documentElement.scrollHeight - window.innerHeight;
                const duration = 1000;
                let startTime = null;

                function scrollStep(timestamp) {
                  if (!startTime) startTime = timestamp;
                  const progress = timestamp - startTime;
                  const scrollPosition = Math.min(
                    (progress / duration) * scrollHeight,
                    scrollHeight
                  );
                  window.scrollTo(0, scrollPosition);

                  if (progress < duration) {
                    requestAnimationFrame(scrollStep);
                  }
                }

                requestAnimationFrame(scrollStep);
              }}
              className="group relative px-8 sm:px-10 py-4 border-2 bg-gray-900 text-white hover:text-gray-900 hover:bg-transparent hover:border-gray-900 font-spaceGrotesk text-lg sm:text-base rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <span>{t("hero.create")}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScroll}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: isMobile ? 0.7 : 1, delay: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-2 group"
      >
        <motion.div
          animate={{ y: [0, isMobile ? 4 : 8, 0] }}
          transition={{
            duration: isMobile ? 1 : 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 group-hover:border-gray-900 transition-colors"
        >
          <ArrowDown className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-colors" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;

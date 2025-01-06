import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useLanguage } from "../../hooks/useLanguage";

const ClientsSlider = () => {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const { t } = useLanguage();

  const logos = [
    { id: 1, name: "Aramisauto", image: "/img/entreprise/Aramis.svg" },
    { id: 2, name: "Bpifrance", image: "/img/entreprise/Bpi.svg" },
    { id: 3, name: "Engie", image: "/img/entreprise/Engie.svg" },
    { id: 4, name: "Kéa&Partners", image: "/img/entreprise/Kéa.svg" },
    { id: 5, name: "Loxam", image: "/img/entreprise/Loxam.svg" },
    { id: 6, name: "Clariane", image: "/img/entreprise/Clariane.svg" },
    { id: 7, name: "Qonto", image: "/img/entreprise/Qonto.svg" },
    { id: 8, name: "Crédit du Nord", image: "/img/entreprise/Crédit.svg" },
  ];

  const sliderConfig = {
    duration: isMobile ? 35 : 25,
    pauseOnHover: !isMobile,
    shouldAnimate: !shouldReduceMotion,
  };

  return (
    <section className="py-16 sm:py-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12 sm:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: isMobile ? 10 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.5 : 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 text-center font-grotesk mb-4"
        >
          {t("clients.title")}
        </motion.h2>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="relative">
          <motion.div
            initial={{ x: 0 }}
            animate={sliderConfig.shouldAnimate ? { x: "-50%" } : {}}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: sliderConfig.duration,
                ease: "linear",
              },
            }}
            className="flex gap-8 sm:gap-16 w-fit"
            style={{ willChange: "transform" }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-16 sm:w-48 sm:h-24 bg-white rounded-lg flex items-center justify-center"
                style={{
                  willChange: "transform",
                  transform: "translateZ(0)",
                }}
              >
                <div className="relative w-full h-full p-4">
                  <img
                    src={logo.image}
                    alt={`${logo.name} logo`}
                    className="w-full h-full object-contain"
                    loading={index > 8 ? "lazy" : "eager"}
                    style={{
                      willChange: "transform",
                      transform: "translateZ(0)",
                    }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;

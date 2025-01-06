import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import ContactModal from "../ContactModal";
import { useLanguage } from "../../hooks/useLanguage";

const Footer = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const { t } = useLanguage();

  const scrollToTop = () => {
    const isMobile = window.innerWidth <= 768;
    const duration = 1000;

    if (isMobile) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const scrollHeight = document.documentElement.scrollTop;
      let startTime = null;

      function scrollStep(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const scrollPosition = Math.max(
          scrollHeight - (progress / duration) * scrollHeight,
          0
        );
        window.scrollTo(0, scrollPosition);

        if (progress < duration) {
          requestAnimationFrame(scrollStep); // Continue l'animation
        }
      }

      // Lance l'animation du scroll
      requestAnimationFrame(scrollStep);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative bg-white pt-20 sm:pt-32 pb-12 px-6 sm:px-16"
    >
      {/* Section Titre et Bouton */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12 sm:mb-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-4xl font-bold font-grotesk mb-6 sm:mb-8"
        >
          {t("footer.title")}
        </motion.h2>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsContactModalOpen(true)}
          className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-gray-900 text-gray-900 font-grotesk text-base sm:text-lg rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
        >
          {t("footer.btnfooter")}
        </motion.button>
      </motion.div>

      {/* Liens Réseaux Sociaux */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="flex flex-col items-center sm:flex-row sm:justify-center gap-6 sm:gap-12 mb-12 sm:mb-16"
      >
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://www.linkedin.com/in/thomas-devulder/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span className="font-inter text-sm sm:text-base">LINKEDIN</span>
          <ArrowUpRight className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://github.com/TomaTV"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <span className="font-inter text-sm sm:text-base">GITHUB</span>
          <ArrowUpRight className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>
      </motion.div>

      {/* Titre du Studio (placé plus bas) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-center mb-4 sm:mb-24"
      >
        <h3 className="text-5xl sm:text-8xl font-bold font-grotesk text-gray-900">
          FLUKXSTUDIO
        </h3>
      </motion.div>

      {/* Footer bas : Copyright + Bouton Retour */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
        className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0"
      >
        <p className="text-xs sm:text-sm text-gray-500 font-inter text-center sm:text-left">
          © {new Date().getFullYear()} Flukx Studio. {t("footer.copyright")}
        </p>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          onClick={scrollToTop}
          className="group p-2 sm:p-3 border-2 border-gray-900 rounded-full hover:bg-gray-900 transition-colors"
        >
          <ArrowUp
            size={20}
            className="text-gray-900 group-hover:text-white transition-colors"
          />
        </motion.button>
      </motion.div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </motion.footer>
  );
};

export default Footer;

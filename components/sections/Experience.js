import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";

const Experience = () => {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();

  // Optimisation du scroll sur mobile
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const experiences = [
    {
      period: "2023 - 2028",
      title: "MASTER Manager de l'innovation Numérique",
      company: "Web School Factory",
      location: "Paris",
      type: "education",
    },
    {
      period: "2024",
      title: "Designer UI/UX",
      company: "Iypaper",
      tasks: ["Conception UX/UI", "Gestion de projet", "Prototypage"],
      type: "professional",
    },
    {
      period: "2023 - Présent",
      title: "Freelance Developer & Designer",
      company: "Flukx",
      tasks: [
        "Développement Web & Design",
        "Gestion de projet",
        "Consultation & Stratégie",
      ],
      type: "professional",
    },
    {
      period: "2019 - 2022",
      title: "Chef de projet & Développeur",
      company: "Affranchie",
      tasks: [
        "Gestion d'équipe",
        "Développement (Web & Lua)",
        "Création d'une communauté (3000 membres)",
      ],
      type: "professional",
    },
  ];

  // Animation optimisées pour mobile
  const fadeInUpVariants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 10 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.5
      }
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-16 sm:pt-32 overflow-hidden bg-white"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-16">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
          variants={fadeInUpVariants}
          className="text-3xl sm:text-6xl font-bold text-gray-900 mb-12 sm:mb-24 text-center font-grotesk"
        >
          Parcours
        </motion.h2>

        <div className="relative">
          {/* Timeline line avec gradient optimisé */}
          <div className="absolute left-[28px] md:left-1/2 h-full w-[2px] bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 transform-gpu" />

          {experiences.map((exp, index) => {
            // Optimisation des animations de scroll pour mobile
            const scaleProgress = useTransform(
              scrollYProgress,
              [index * (isMobile ? 0.25 : 0.2), index * (isMobile ? 0.25 : 0.2) + 0.1],
              [isMobile ? 0.95 : 0.8, 1]
            );

            const opacityProgress = useTransform(
              scrollYProgress,
              [index * (isMobile ? 0.25 : 0.2), index * (isMobile ? 0.25 : 0.2) + 0.1],
              [0, 1]
            );

            return (
              <motion.div
                key={index}
                style={{
                  opacity: opacityProgress,
                  scale: scaleProgress,
                  willChange: 'transform, opacity'
                }}
                className={`relative flex flex-col md:flex-row items-start group mb-16 sm:mb-32 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot avec animation optimisée */}
                <div className="absolute left-6 md:left-1/2 -ml-1.5 md:-ml-2">
                  <div className={`
                    w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-900 transform-gpu
                    ${!isMobile ? 'group-hover:scale-150 transition-transform duration-300' : ''}
                  `} />
                  {!isMobile && (
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-gray-900/20 animate-ping" />
                  )}
                </div>

                {/* Contenu */}
                <div
                  className={`pl-16 md:pl-0 w-full md:w-1/2 ${
                    index % 2 === 0 ? "md:pl-20" : "md:pr-20"
                  }`}
                >
                  <span className="inline-block text-xs sm:text-sm text-gray-500 font-inter tracking-wide mb-2 sm:mb-4">
                    {exp.period}
                  </span>
                  <h3 className="font-grotesk text-xl sm:text-2xl font-medium text-gray-900 mb-2">
                    {exp.title}
                  </h3>
                  <div className="font-inter text-lg sm:text-xl mb-3 sm:mb-4 text-gray-600">
                    {exp.company}
                    {exp.location && (
                      <span className="text-gray-400"> | {exp.location}</span>
                    )}
                  </div>

                  {exp.tasks && (
                    <motion.ul
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ 
                        staggerChildren: isMobile ? 0.05 : 0.1,
                        duration: isMobile ? 0.3 : 0.5
                      }}
                      className="space-y-1.5 sm:space-y-2"
                    >
                      {exp.tasks.map((task, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: isMobile ? -5 : -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ 
                            delay: i * (isMobile ? 0.05 : 0.1),
                            duration: isMobile ? 0.3 : 0.5
                          }}
                          className="font-inter text-sm sm:text-base text-gray-500 flex items-center gap-2 sm:gap-3"
                        >
                          <span className="w-1 h-1 rounded-full bg-gray-400" />
                          {task}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}

                  {/* Tag avec style optimisé */}
                  <span
                    className={`mt-3 sm:mt-4 inline-block px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-inter ${
                      exp.type === "education"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {exp.type === "education" ? "Formation" : "Professionnel"}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Gradient de fondu en bas optimisé */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[20vh] sm:h-[30vh] bg-gradient-to-b from-transparent to-white pointer-events-none"
        style={{ willChange: 'opacity' }}
      />
    </section>
  );
};

export default Experience;
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useLanguage } from "../../hooks/useLanguage";

const CustomStar = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" className="fill-gray-900">
    <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
  </svg>
);

const Experience = () => {
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const experiences = [
    {
      period: t("experience.experiences.0.period"),
      title: t("experience.experiences.0.title"),
      company: t("experience.experiences.0.company"),
      location: t("experience.experiences.0.location"),
      type: "formation",
    },
    {
      period: t("experience.experiences.1.period"),
      title: t("experience.experiences.1.title"),
      company: t("experience.experiences.1.company"),
      tasks: [
        t("experience.experiences.1.tasks.0"),
        t("experience.experiences.1.tasks.1"),
        t("experience.experiences.1.tasks.2"),
      ],
      type: "professional",
    },
    {
      period: t("experience.experiences.2.period"),
      title: t("experience.experiences.2.title"),
      company: t("experience.experiences.2.company"),
      tasks: [
        t("experience.experiences.2.tasks.0"),
        t("experience.experiences.2.tasks.1"),
        t("experience.experiences.2.tasks.2"),
      ],
      type: "education",
    },
    {
      period: t("experience.experiences.3.period"),
      title: t("experience.experiences.3.title"),
      company: t("experience.experiences.3.company"),
      tasks: [
        t("experience.experiences.3.tasks.0"),
        t("experience.experiences.3.tasks.1"),
        t("experience.experiences.3.tasks.2"),
      ],
      type: "professional",
    },
    {
      period: t("experience.experiences.4.period"),
      title: t("experience.experiences.4.title"),
      company: t("experience.experiences.4.company"),
      tasks: [
        t("experience.experiences.4.tasks.0"),
        t("experience.experiences.4.tasks.1"),
        t("experience.experiences.4.tasks.2"),
      ],
      type: "professional",
    },
  ];

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      y: isMobile ? 10 : 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.5,
      },
    },
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
          {t("experience.title")}
        </motion.h2>

        <div className="relative">
          {experiences.map((exp, index) => {
            const lineProgress = useTransform(
              scrollYProgress,
              [index * 0.15, (index + 1) * 0.15],
              ["0%", "100%"]
            );

            const contentBaseClass = index % 2 === 0 ? "md:pl-20" : "md:pr-20";
            const flexDirection = index % 2 === 0 ? "md:flex-row-reverse" : "";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-start group mb-20 last:mb-16 ${flexDirection}`}
              >
                <motion.div
                  className="absolute left-[28px] md:left-1/2 top-16 w-[2px] h-[calc(100%-4rem)] bg-black"
                  style={{
                    scaleY: lineProgress,
                    transformOrigin: "top",
                    opacity: lineProgress,
                  }}
                />

                <div className="absolute left-6 md:left-1/2 -ml-3.5 md:-ml-3.5 bg-white py-4 z-10">
                  <CustomStar />
                </div>

                <div
                  className={`pl-16 md:pl-0 w-full md:w-1/2 pt-1 ${contentBaseClass}`}
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
                        staggerChildren: 0.1,
                        duration: 0.5,
                      }}
                      className="space-y-1.5 sm:space-y-2 mb-4"
                    >
                      {exp.tasks.map((task, i) => (
                        <motion.li
                          key={i}
                          initial={{ x: -10, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{
                            delay: i * 0.1,
                            duration: 0.5,
                          }}
                          className="font-inter text-sm sm:text-base text-gray-500 flex items-center gap-2 sm:gap-3"
                        >
                          <span className="w-1 h-1 rounded-full bg-gray-400" />
                          {task}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}

                  <span
                    className={`inline-block px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-inter ${
                      exp.type === "education"
                        ? "bg-blue-100 text-blue-800"
                        : exp.type === "formation"
                        ? "bg-orange-100 text-orange-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {t(`experience.${exp.type}`)}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[20vh] sm:h-[30vh] bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  );
};

export default Experience;

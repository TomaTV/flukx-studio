import React from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "../../hooks/useIsMobile";
import {
  Code,
  Users,
  Lightbulb,
  Palette,
  Rocket,
  ClipboardCheck,
} from "lucide-react";

const Skills = () => {
  const isMobile = useIsMobile();

  const skills = [
    {
      id: "01",
      title: "Développement web",
      description:
        "HTML, CSS, JavaScript, React, Next.js et Node.js. Création d'applications modernes, performantes et évolutives.",
      icon: Code,
    },
    {
      id: "02",
      title: "Design UX/UI",
      description:
        "Maquettes et prototypes avec Figma, Photoshop, Illustrator. Interfaces intuitives centrées sur l'utilisateur.",
      icon: Palette,
    },
    {
      id: "03",
      title: "Résolution de problèmes",
      description:
        "Analyse, débogage et optimisation pour surmonter des défis techniques et conceptuels efficacement.",
      icon: Lightbulb,
    },
    {
      id: "04",
      title: "Travail d'équipe",
      description:
        "Collaboration fluide, communication efficace et adaptation aux dynamiques de groupe.",
      icon: Users,
    },
    {
      id: "05",
      title: "Innovation et veille",
      description:
        "Exploration des tendances (IA, low-code) pour intégrer des idées novatrices dans les projets.",
      icon: Rocket,
    },
    {
      id: "06",
      title: "Gestion de projet",
      description:
        "Méthodologies agiles pour planifier, organiser et respecter délais, budgets et objectifs.",
      icon: ClipboardCheck,
    },
  ];

  // Animation simplifiée pour mobile
  const fadeUpVariants = {
    hidden: { 
      opacity: 0, 
      y: isMobile ? 10 : 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.6
      }
    }
  };

  // Délais réduits sur mobile
  const getDelay = (index) => {
    if (isMobile) {
      return index * 0.1; // Délais plus courts sur mobile
    }
    return index * 0.15;
  };

  return (
    <section className="py-16 sm:py-32 px-4 sm:px-8 bg-white overflow-hidden">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
        variants={fadeUpVariants}
        className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 sm:mb-24 text-center font-grotesk"
      >
        Expertise
      </motion.h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
            variants={fadeUpVariants}
            transition={{ delay: getDelay(index) }}
            className={`group relative p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border-2 border-gray-100 hover:border-[#4338ca] transition-colors ${
              index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
            } ${
              index === 4 ? "lg:row-span-2" : ""
            } ${
              index === 5 ? "sm:col-span-2" : ""
            }`}
          >
            {/* Gradient de fond optimisé */}
            {!isMobile && (
              <div className="absolute inset-0 bg-gradient-to-br from-[#4338ca]/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
            )}

            <div className="absolute top-4 sm:top-8 right-4 sm:right-8 text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900/[0.03] font-grotesk group-hover:text-gray-900/[0.05] transition-colors">
              {skill.id}
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <skill.icon className={`
                w-6 h-6 sm:w-10 sm:h-10 text-gray-400 
                ${isMobile ? '' : 'group-hover:text-gray-900 transition-colors duration-300'} 
                mb-3 sm:mb-6
              `} />

              <div className="space-y-2 sm:space-y-4">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-900 font-grotesk">
                  {skill.title}
                </h3>
                <p className="text-gray-600 font-inter text-sm sm:text-lg">
                  {skill.description}
                </p>
              </div>
            </div>

            {/* Effet de bordure animée (désactivé sur mobile) */}
            {!isMobile && (
              <div className="absolute inset-0 border-2 border-[#4338ca] rounded-3xl opacity-0 scale-105 group-hover:opacity-10 group-hover:scale-100 transition-all duration-300" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
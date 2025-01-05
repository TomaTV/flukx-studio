import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useIsMobile } from "../../hooks/useIsMobile";
import Image from 'next/image';

const Projects = () => {
  const isMobile = useIsMobile();

  const projects = [
    {
      id: 1,
      title: "Affranchie",
      description:
        "Serveur de jeu GTA 5 (FiveM) avec une communauté active de 3000 membres",
      tags: ["Lua", "FiveM", "Web"],
      image: "/img/affranchie.png",
      link: "https://www.linkedin.com/in/thomas-devulder/",
      stats: [
        { label: "Utilisateurs actifs", value: "3000+" },
        { label: "Scripts custom", value: "50+" },
      ]
    },
    {
      id: 2,
      title: "FetchUp.me",
      description:
        "Site permettant de tester des API en temps réel, afficher les réponses et analyser les résultats",
      tags: ["Next.js", "Tailwind", "API"],
      image: "https://placehold.co/800x600",
      link: "https://www.linkedin.com/in/thomas-devulder/",
    },
    {
      id: 3,
      title: "WSFLogi",
      description:
        "Site de gestion des inscriptions d'événements avec une API Google",
      tags: ["Node.js", "Express", "Google API"],
      image: "https://placehold.co/800x600",
      link: "https://www.linkedin.com/in/thomas-devulder/",
    },
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: isMobile ? 10 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: isMobile ? 0.5 : 0.7,
      }
    }
  };

  return (
    <section className="bg-white py-16 sm:py-32">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUpVariants}
        className="text-4xl sm:text-6xl font-bold text-gray-900 mb-16 sm:mb-24 text-center font-grotesk"
      >
        Mes Projets
      </motion.h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="space-y-24 sm:space-y-40">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: isMobile ? "-50px" : "-100px" }}
              variants={fadeInUpVariants}
              className={`group flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 sm:gap-16`}
            >
              {/* Image avec optimisation */}
              <div className="w-full md:w-1/2 relative aspect-[4/3] overflow-hidden rounded-2xl">
                <div className="relative w-full h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transform transition-transform ${
                      !isMobile ? 'group-hover:scale-[1.02]' : ''
                    } ${isMobile ? 'duration-300' : 'duration-700'}`}
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Contenu */}
              <div className="w-full md:w-1/2 space-y-4 sm:space-y-6">
                <h3 className="text-3xl sm:text-4xl font-bold font-grotesk">{project.title}</h3>
                
                <p className="text-lg sm:text-xl text-gray-600 font-inter">{project.description}</p>

                {/* Stats avec optimisation mobile */}
                {project.stats && (
                  <div className="flex gap-8 sm:gap-12 py-2">
                    {project.stats.map((stat, index) => (
                      <div key={index}>
                        <p className="text-2xl sm:text-3xl font-bold font-grotesk text-[#4338ca]">
                          {stat.value}
                        </p>
                        <p className="text-sm sm:text-base text-gray-600 font-inter">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 sm:px-5 py-1.5 sm:py-2 bg-gray-100 text-gray-700 rounded-full font-inter text-sm hover:bg-gray-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Lien avec interactions optimisées */}
                <div className="pt-4">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={isMobile ? {} : { scale: 1.02 }}
                    whileTap={isMobile ? { scale: 0.95 } : { scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-gray-900 text-gray-900 hover:text-white hover:bg-gray-900 font-grotesk rounded-full transition-all duration-300"
                  >
                    <span>Voir le projet</span>
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
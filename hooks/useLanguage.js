import { useState, useEffect } from "react";

export const translations = {
  fr: {
    hero: {
      studio: "Studio Créatif",
      discuss: "Discutons",
      transform: "Transformez Vos",
      ideas: "Idées En",
      reality: "Réalité",
      description:
        "Nous transformons vos concepts en outils digitaux performants conçus pour développer votre entreprise, captiver vos clients et laisser une impression durable.",
      create: "Créons ensemble",
    },
    projects: {
      title: "Mes Projets",
      viewProject: "Voir le projet",
      activeUsers: "Utilisateurs actifs",
      customScripts: "Scripts custom",
      projects: [
        {
          title: "Affranchie",
          description:
            "Serveur de jeu GTA 5 (FiveM) avec une communauté active de 3000 membres",
          stats: [
            { label: "Utilisateurs actifs", value: "3000+" },
            { label: "Scripts custom", value: "50+" },
          ],
        },
        {
          title: "FetchUp.me",
          description:
            "Site permettant de tester des API en temps réel, afficher les réponses et analyser les résultats",
        },
        {
          title: "WSFLogi",
          description:
            "Site de gestion des inscriptions d'événements avec une API Google",
        },
      ],
    },
    contact: {
      title: "Parlons de votre projet",
      email: "Email",
      location: "Basé à",
      locationValue: "Paris, France",
      name: "Nom",
      subject: "Sujet",
      message: "Message",
      send: "Envoyer (bientôt)",
    },
    clients: {
      title: "Ils m'ont fait confiance",
    },
    skills: {
      title: "Expertise",
      items: [
        {
          title: "Développement web",
          description:
            "HTML, CSS, JavaScript, React, Next.js et Node.js. Création d'applications modernes, performantes et évolutives.",
        },
        {
          title: "Design UX/UI",
          description:
            "Maquettes et prototypes avec Figma, Photoshop, Illustrator. Interfaces intuitives centrées sur l'utilisateur.",
        },
        {
          title: "Résolution de problèmes",
          description:
            "Analyse, débogage et optimisation pour surmonter des défis techniques et conceptuels efficacement.",
        },
        {
          title: "Travail d'équipe",
          description:
            "Collaboration fluide, communication efficace et adaptation aux dynamiques de groupe.",
        },
        {
          title: "Innovation et veille",
          description:
            "Exploration des tendances (IA, low-code) pour intégrer des idées novatrices dans les projets.",
        },
        {
          title: "Gestion de projet",
          description:
            "Méthodologies agiles pour planifier, organiser et respecter délais, budgets et objectifs.",
        },
      ],
    },
    profile: {
      description: "Développeur créatif & Designer UI/UX basé à Paris",
      btncv: "Voir mon CV",
    },
    footer: {
      title: "TRAVAILLONS ENSEMBLE",
      btnfooter: "ME CONTACTER",
      copyright: "Tous droits réservés.",
    },
    experience: {
      title: "Parcours",
      formation: "Formation",
      education: "Éducation",
      professional: "Professionnel",
      experiences: [
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
          location: "Stage",
          tasks: ["Conception UX/UI", "Gestion de projet", "Prototypage"],
          type: "professional",
        },
        {
          period: "2024",
          title: "Concepteur UX et IA",
          company: "Icade",
          tasks: ["UX Design", "Gestion de projet", "Prototypage", "IA"],
          type: "professional",
        },
        {
          period: "2023 - Présent",
          title: "Freelance Developer & Designer",
          company: "Flukx Studio",
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
      ],
    },
  },
  en: {
    hero: {
      studio: "Creative Studio",
      discuss: "Let's Talk",
      transform: "Turn Your Ideas",
      ideas: "Into",
      reality: "Reality",
      description:
        "We turn your concepts into powerful digital tools designed to grow your business, engage your customers, and leave a lasting impression.",
      create: "Let's create together",
    },
    contact: {
      title: "Let's talk about your project",
      email: "Email",
      location: "Based in",
      locationValue: "Paris, France",
      name: "Name",
      subject: "Subject",
      message: "Message",
      send: "Send (soon)",
    },
    projects: {
      title: "My Projects",
      viewProject: "View project",
      activeUsers: "Active users",
      customScripts: "Custom scripts",
      projects: [
        {
          title: "Affranchie",
          description:
            "GTA 5 game server (FiveM) with an active community of 3000 members",
          stats: [
            { label: "Active users", value: "3000+" },
            { label: "Custom scripts", value: "50+" },
          ],
        },
        {
          title: "FetchUp.me",
          description:
            "Website to test APIs in real-time, display responses and analyze results",
        },
        {
          title: "WSFLogi",
          description:
            "Event registration management website with Google API integration",
        },
      ],
    },
    clients: {
      title: "They trusted me",
    },
    skills: {
      title: "Expertise",
      items: [
        {
          title: "Web Development",
          description:
            "HTML, CSS, JavaScript, React, Next.js and Node.js. Building modern, performant and scalable applications.",
        },
        {
          title: "UX/UI Design",
          description:
            "Mockups and prototypes with Figma, Photoshop, Illustrator. User-centered intuitive interfaces.",
        },
        {
          title: "Problem Solving",
          description:
            "Analysis, debugging and optimization to efficiently overcome technical and conceptual challenges.",
        },
        {
          title: "Teamwork",
          description:
            "Smooth collaboration, effective communication and adaptation to group dynamics.",
        },
        {
          title: "Innovation & Watch",
          description:
            "Exploring trends (AI, low-code) to integrate innovative ideas into projects.",
        },
        {
          title: "Project Management",
          description:
            "Agile methodologies to plan, organize and meet deadlines, budgets and objectives.",
        },
      ],
    },
    profile: {
      description: "Creative Developer & UI/UX Designer based in Paris",
      btncv: "View my resume",
    },
    footer: {
      title: "LET'S WORK TOGETHER",
      btnfooter: "CONTACT ME",
      copyright: "All rights reserved.",
    },
    experience: {
      title: "Experience",
      formation: "Formation",
      education: "Education",
      professional: "Professional",
      experiences: [
        {
          period: "2023 - 2028",
          title: "MASTER Digital Innovation Manager",
          company: "Web School Factory",
          location: "Paris",
          type: "formation",
        },
        {
          period: "2024",
          title: "UI/UX Designer",
          company: "Iypaper",
          location: "Internship",
          tasks: ["UX/UI Design", "Project Management", "Prototyping"],
          type: "education",
        },
        {
          period: "2024",
          title: "UX Designer and IA",
          company: "Icade",
          tasks: ["UX/UI Design", "Project Management", "Prototyping", "IA"],
          type: "professional",
        },
        {
          period: "2023 - Present",
          title: "Freelance Developer & Designer",
          company: "Flukx Studio",
          tasks: [
            "Web Development & Design",
            "Project Management",
            "Consulting & Strategy",
          ],
          type: "professional",
        },
        {
          period: "2019 - 2022",
          title: "Project Manager & Developer",
          company: "Affranchie",
          tasks: [
            "Team Management",
            "Development (Web & Lua)",
            "Community Building (3000 members)",
          ],
          type: "professional",
        },
      ],
    },
  },
};

export function useLanguage() {
  const [currentLang, setCurrentLang] = useState("en");

  useEffect(() => {
    const updateLanguage = () => {
      const path = window.location.pathname;
      const newLang = path.match(/^\/fr(?:\/|$)/) ? "fr" : "en";
      setCurrentLang(newLang);
    };

    updateLanguage();
    window.addEventListener("popstate", updateLanguage);
    return () => window.removeEventListener("popstate", updateLanguage);
  }, []);

  const t = (key, index) => {
    const keys = key.split(".");
    let result = keys.reduce((obj, k) => obj?.[k], translations[currentLang]);
    if (Array.isArray(result) && index !== undefined) {
      result = result[index];
    }
    return result || key;
  };

  return { t, currentLang };
}

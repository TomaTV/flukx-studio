export const defaultSEO = {
  defaultTitle: "Flukx Studio - Studio Créatif & Développement Web à Paris",
  titleTemplate: "%s | Flukx Studio",
  description:
    "Studio créatif spécialisé en développement web et design UI/UX à Paris, avec plus de 10 ans d'expérience. Transformez vos idées en expériences digitales innovantes avec Flukx Studio.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://flukxstudio.fr",
    site_name: "Flukx Studio",
    title: "Flukx Studio - Studio Créatif Digital à Paris",
    description:
      "Spécialisé en développement web moderne (React, Next.js, Tailwind CSS) et design UI/UX. Créez des expériences utilisateur uniques avec Flukx Studio.",
    images: [
      {
        url: "/img/preview.png",
        width: 1200,
        height: 630,
        alt: "Flukx Studio - Développement Web et Design UI/UX",
      },
    ],
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    siteName: "Flukx Studio"
  },
  twitter: {
    handle: "@flukxstudio",
    site: "@flukxstudio",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "flukx studio, thomas devulder, studio créatif paris, développement web paris, création site web paris, agence digitale paris, " +
        "react js, next js, tailwind css, javascript, node.js, développement frontend, backend, " +
        "design ui ux, webdesign, interfaces utilisateur, wireframes, maquettes figma, " +
        "site web responsive, optimisation SEO, site rapide, accessibilité web, " +
        "freelance paris, développeur freelance paris, designer freelance paris, solutions digitales sur mesure, maintenance web",
    },
    {
      name: "apple-mobile-web-app-capable",
      content: "yes",
    },
    {
      name: "author",
      content: "Thomas Devulder",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  additionalLinkTags: [
    {
      rel: "alternate",
      hrefLang: "fr",
      href: "https://flukxstudio.fr/fr"
    },
    {
      rel: "alternate",
      hrefLang: "en",
      href: "https://flukxstudio.fr/en"
    },
    {
      rel: "alternate",
      hrefLang: "x-default",
      href: "https://flukxstudio.fr"
    }
  ],
  languageAlternates: [
    {
      hrefLang: "fr",
      href: "https://flukxstudio.fr/fr"
    },
    {
      hrefLang: "en",
      href: "https://flukxstudio.fr/en"
    }
  ]
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Flukx Studio",
  image: "https://flukxstudio.fr/img/preview.png",
  description:
    "Flukx Studio, expert en développement web et design UI/UX à Paris. Nous créons des solutions digitales sur mesure adaptées à vos besoins.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "48.827577",
    longitude: "2.314775",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de Flukx Studio",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Développement Web",
        description:
          "Création de sites performants avec React, Next.js et Tailwind CSS.",
        price: "Sur devis",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Design UI/UX",
        description: "Design d'interfaces modernes et centrées utilisateur.",
        price: "Sur devis",
        priceCurrency: "EUR",
      },
      {
        "@type": "Offer",
        name: "Optimisation SEO et Performance",
        description:
          "Amélioration de la visibilité web et des performances techniques de votre site.",
        price: "Sur devis",
        priceCurrency: "EUR",
      },
    ],
  },
  inLanguage: ["fr", "en"],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "48.827577",
      longitude: "2.314775",
    },
    geoRadius: "50000",
  },
  url: "https://flukxstudio.fr",
  telephone: "0782629442",
  priceRange: "€€",
  openingHours: "Mo-Fr 09:00-17:00",
  sameAs: [
    "https://www.linkedin.com/in/thomas-devulder/",
    "https://github.com/TomaTV",
    "https://flukxstudio.fr",
  ],
};
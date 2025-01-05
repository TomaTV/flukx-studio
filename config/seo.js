export const defaultSEO = {
  titleTemplate: '%s | FlukX Studio',
  defaultTitle: 'FlukX Studio - Design & Développement Web Créatif',
  description: 'Studio créatif spécialisé dans le design et le développement web, créant des expériences numériques uniques et performantes.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://flukxstudio.fr', // Remplace par ton domaine quand tu l'auras
    site_name: 'FlukX Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FlukX Studio',
      },
    ],
  }
};

export const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'FlukX Studio',
  url: 'https://flukxstudio.fr', // Remplace par ton domaine quand tu l'auras
  sameAs: [
    'https://www.linkedin.com/in/thomas-devulder/',
    'https://github.com/TomaTV'
  ],
};
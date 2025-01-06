import Head from "next/head";
import { useRouter } from "next/router";
import { defaultSEO, jsonLd } from "../config/seo";
import ReadingProgress from "./ReadingProgress";
import Loader from "./Loader";
import { Space_Grotesk, Inter } from "next/font/google";
import { useLanguage } from "../hooks/useLanguage";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const Layout = ({ children, pageSEO = {} }) => {
  const router = useRouter();
  const { currentLang } = useLanguage();
  const seo = { ...defaultSEO, ...pageSEO };
  const currentUrl = `${seo.openGraph.url}${currentLang === 'fr' ? '/fr' : '/en'}${router.pathname}`;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{seo.defaultTitle}</title>
        <meta name="description" content={seo.description} />

        {/* SEO Général */}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentUrl} />
        <meta name="author" content="Thomas Devulder" />
        <meta name="keywords" content={seo.additionalMetaTags[0].content} />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#4338ca" />
        <meta name="msapplication-TileColor" content="#4338ca" />

        {/* Alternate Languages */}
        <link rel="alternate" href={`${seo.openGraph.url}/fr${router.pathname}`} hrefLang="fr" />
        <link rel="alternate" href={`${seo.openGraph.url}/en${router.pathname}`} hrefLang="en" />
        <link rel="alternate" href={seo.openGraph.url} hrefLang="x-default" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={seo.openGraph.type} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={seo.openGraph.title} />
        <meta property="og:description" content={seo.openGraph.description} />
        <meta property="og:image" content={seo.openGraph.images[0].url} />
        <meta property="og:image:width" content={seo.openGraph.images[0].width} />
        <meta property="og:image:height" content={seo.openGraph.images[0].height} />
        <meta property="og:locale" content={currentLang === 'fr' ? 'fr_FR' : 'en_US'} />
        <meta property="og:site_name" content={seo.openGraph.site_name} />

        {/* Twitter */}
        <meta name="twitter:card" content={seo.twitter.cardType} />
        <meta name="twitter:site" content={seo.twitter.site} />
        <meta name="twitter:creator" content={seo.twitter.handle} />
        <meta name="twitter:title" content={seo.openGraph.title} />
        <meta name="twitter:description" content={seo.openGraph.description} />
        <meta name="twitter:image" content={seo.openGraph.images[0].url} />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon/icon-32x32.png" />
        <link rel="icon" type="image/png" sizes="64x64" href="/icon/icon-64x64.png" />
        <link rel="apple-touch-icon" sizes="128x128" href="/icon/icon-128x128.png" />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...jsonLd,
              url: currentUrl,
              inLanguage: currentLang === 'fr' ? 'fr' : 'en'
            }),
          }}
        />
      </Head>

      <noscript>
        <div style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#4338ca",
          color: "white",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}>
          Pour une meilleure expérience, veuillez activer JavaScript dans votre navigateur.
        </div>
      </noscript>

      <div className={`${spaceGrotesk.variable} ${inter.variable} font-sans`}>
        <ReadingProgress />
        <Loader>{children}</Loader>
      </div>

      <style jsx global>{`
        :root {
          --font-space-grotesk: ${spaceGrotesk.style.fontFamily};
          --font-inter: ${inter.style.fontFamily};
        }
      `}</style>
    </>
  );
};

export default Layout;
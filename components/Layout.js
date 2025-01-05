import Head from "next/head";
import { useRouter } from "next/router";
import { defaultSEO, jsonLd } from "../config/seo";
import ReadingProgress from "./ReadingProgress";
import Loader from "./Loader";
import { Space_Grotesk, Inter } from "next/font/google";

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
  const seo = { ...defaultSEO, ...pageSEO };
  const currentUrl = `${seo.openGraph.url}${router.pathname}`;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{seo.defaultTitle}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content={seo.openGraph.type} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={seo.defaultTitle} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.openGraph.images[0].url} />
        <meta property="og:site_name" content={seo.openGraph.site_name} />
        <meta property="og:locale" content={seo.openGraph.locale} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...jsonLd,
              url: currentUrl,
            }),
          }}
        />
      </Head>

      <div className={`${spaceGrotesk.variable} ${inter.variable} font-sans`}>
        <ReadingProgress />
        <Loader>{children}</Loader>
      </div>
    </>
  );
};

export default Layout;

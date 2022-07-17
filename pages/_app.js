import Head from "next/head";

import "../styles/globals.css";
import "@code-hike/mdx/dist/index.css";

import Favicon from "../public/favicon/favicon.ico";
import Logo192 from "../public/favicon/android-chrome-192x192.png";
import manifest from "../public/favicon/manifest.json";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta charSet="utf-8" />
        <link rel="icon" href={`${Favicon.src}`} />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href={`${Logo192.src}`} />
        <link rel="manifest" href={`${manifest}`} />

        {/* twitter card meta tags */}
        <meta key="twitter-title" name="twitter:title" content={`Public API`} />
        <meta
          key="twitter-description"
          name="twitter:description"
          content={`Free and Open Source fake API for testing and prototyping`}
        />
        <meta key="twitter-site" name="twitter:site" content="@codinasion" />
        {/* og card meta tags */}
        <meta key="og-title" property="og:title" content={`Public API`} />
        <meta
          key="og-description"
          property="og:description"
          content={`Free and Open Source fake API for testing and prototyping`}
        />
        <meta
          key="og-url"
          property="og:url"
          content={`https://pubapi.vercel.app/`}
        />
        <meta key="og-site-name" property="og:site_name" content="Public API" />
        <meta key="og-type" property="og:type" content="website" />

        {/* title */}
        <title key="title">{`Public API`}</title>
        <meta
          key="description"
          name="description"
          content={`Free and Open Source fake API for testing and prototyping`}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

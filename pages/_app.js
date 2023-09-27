import '@styles/globals.css'; // Import your global CSS
import { useEffect } from 'react';
import Head from 'next/head'; // Import the Head component

function MyApp({ Component, pageProps }) {
  // Add any global JavaScript or effects here
  useEffect(() => {
    // Global JavaScript or effects can go here
  }, []);

  return (
    <>
      {/* Add the viewport meta tag */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

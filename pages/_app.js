import '@styles/globals.css'; // Import your global CSS
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // Add any global JavaScript or effects here
  useEffect(() => {
    // Global JavaScript or effects can go here
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;

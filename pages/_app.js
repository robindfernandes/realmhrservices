import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useEffect } from 'react';
import '../styles/globals.css'; // Import your global styles

function MyApp({ Component, pageProps }) {
  // Add any global JavaScript or effects here
  useEffect(() => {
    // Global JavaScript or effects can go here
  }, []);

  return (
    <div className="container">
      <Container style={{ maxWidth: '100%' }}> {/* Header */}
      <Head>
        <title>RealmHRServices</title>
        <link rel="icon" href="/logo-realm.png" />
      </Head>
      <Header>
        <div className="logoContainer">
          <img
            src="/logo-realm.png"
            alt="RealmHR Services Logo"
            className="logo"
          />
          <h1 className="title">Welcome to RealmHR Services</h1>
        </div>
      </Header>
      </Container> 
      <Component {...pageProps} />
      <Container style={{ maxWidth: '100%' }}> {/* Footer */}
      <Footer />
      </Container>
    </div>
  );
}

export default MyApp;

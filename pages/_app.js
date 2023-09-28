import '../styles/globals.css'; // Adjust the path as needed
import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

  // Add any global JavaScript or effects here
  useEffect(() => {
    // Global JavaScript or effects can go here
  }, []);
  function MyApp({ Component, pageProps }) {
    return (
      <div className="container">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* Rest of your JSX */}
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
      <Component {...pageProps} />
      <Footer /> 
      </div>
  );
}

export default MyApp;

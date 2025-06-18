// pages/_app.js

import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { useEffect } from 'react';
import '../styles/globals.css'; // Import your global styles
import React from 'react';
import UserData from '/components/UserData'; // Import your component

const App = () => {
  return (
    <div className="App">
      <h1>My App</h1>
      <UserData /> {/* Use your component */}
    </div>
  );
};

function MyApp({ Component, pageProps }) {
  // Add any global JavaScript or effects here
  useEffect(() => {
    // Global JavaScript or effects can go here
  }, []);

  return (
    <div className="container">
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
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;

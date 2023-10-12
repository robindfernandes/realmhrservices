import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const WhoWeAre = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <div className="container">
      <Head>
        <title>RealmHRServices</title>
        <link rel="icon" href="/logo-realm.png" />
      </Head>
      <div className="centered-content">
        <header>
          <div className="header-container">
            <div className="button-container">
              {/*{isMenuVisible && (
                <>
                  <Link href="/index">
                    <button className="menu-link-button">
                      <strong>Home</strong>
                    </button>
                  </Link>
                  <Link href="/who-we-are">
                    <button className="menu-link-button">
                      <strong>Who we are</strong>
                    </button>
                  </Link>
                  <Link href="/clients-testimonials">
                    <button className="menu-link-button">
                      <strong>Clients Testimonials</strong>
                    </button>
                  </Link>
                  <Link href="/Talk-to-us">
                    <button className="menu-link-button">
                      <strong>Talk to us</strong>
                    </button>
                  </Link>
                </>
              )} */}
            </div>
          </div>
        </header>
        <img
          src="/2.png"
          alt="Image 2"
          className="image"
          style={{ width: '80%', height: '30%' }}
        />
        <div className="main-content">
          <h1>TEJASWEETA MISTRY</h1>
          <h2>
            <strong>Founder | REALMHR Services</strong>
          </h2>
          <p>
            Tejasweeta Mistry, a name embodying majesty, dignity, and an
            unwavering wellspring of positive energy, stands as a luminary in
            the realm of recruitment and human resources. With an illustrious
            career spanning over 15 years, Tejasweeta has honed her skills and
            acumen in the art of managing organizational human capital, making
            her a formidable force in the industry.
          </p>
          {/* More content... */}
          <Link href="/index">
            <button className="menu-link-button">
              <strong>Back to Home</strong>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;

import React, { useState } from 'react';
import styles from './Header.module.css'; // Import your CSS module for header styles
import { Button, Link } from '@mui/material';

const Header = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <header className={styles.header}>
      <h1><strong>REALM HR SERVICES</strong></h1>
      <img src="/logo-realm.png" alt="Netlify Logo" className={styles.logo} />

      {isMenuVisible && (
        <nav className={styles.menu}>
           <Link href="/index"><button className="menu-link-button"><strong>Home</strong></button></Link>
                <Link href="/who-we-are"><button className="menu-link-button"><strong>Who we are</strong></button>
                </Link>
                <Link href="/clients-testimonials"><button className="menu-link-button"><strong>Clients Testimonials</strong></button>
                  </Link>
                  <Link href="/Talk-to-us"><button className="menu-link-button"><strong>Talk to us</strong></button>
                  </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

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
          <Link href="/who-we-are">
            <Button variant="contained">
              Who we are
            </Button>
          </Link>
          <Link href="/clients-testimonials">
            <Button variant="contained">
              Clients Testimonials
            </Button>
          </Link>
          <Link href="/Talk-to-us">
            <Button variant="contained">
              Talk to us
            </Button>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;

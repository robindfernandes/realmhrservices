// Header.js

import React from 'react';
import styles from './Header.module.css'; // Import your CSS module for header styles

const Header = () => {
  return (
    <header className={styles.header}>
      <h1><strong>WELCOME TO REALMHR SERVICES</strong></h1>
      <img src="/logo-realm.png" alt="Netlify Logo" className={styles.logo} />
    </header>
  );
};

export default Header;

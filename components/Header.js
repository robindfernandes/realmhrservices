// Header.js

import React from 'react';
import styles from './Header.module.css'; // Import your CSS module for header styles

const Header = ({ title }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

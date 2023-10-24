import React from 'react';
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
      <a>      
        <img src="/logo-realm.png" alt="Netlify Logo" className={styles.logo} />
      </a>
      </div>
      <div className={styles.linkedinContainer}>
        <a href="https://www.linkedin.com/company/realmhrservices">
          <img src="/LinkedIn.png" alt="LinkedIn Logo" className={styles.LinkedInlogo} />
        </a>
        </div>
    </footer>
  );
}

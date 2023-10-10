import React from 'react';
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <a> <img src="/logo-realm.png" alt="Netlify Logo" className={styles.logo} />
        </a>
        <p href="https://www.linkedin.com/company/realmhrservices">
          <img src="/LinkedIn.png" alt="LinkedIn Logo" className={styles.LinkedInlogo} />
        </p>
      </footer>
    </>
  )
}

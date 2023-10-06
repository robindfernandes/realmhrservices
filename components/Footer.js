import React from 'react';
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/logo-realm.png" alt="Netlify Logo" className={styles.logo} /> 
        <a href="https://www.linkedin.com/company/realmhrservices"><strong>Follow us on LinkedIn</strong></a> <img src="/LinkedIn.png" alt="LinkedIn Logo" className={styles.LinkedInlogo} />
      </footer>      
    </>
  )
}

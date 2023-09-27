// who-we-are.js

import React from 'react';
import Head from 'next/head';
import styles from './whoWeAre.module.css'; // Import the CSS module for page-specific styles

const WhoWeAre = () => {
  return (
    <>
      <Head>
        <title>Who We Are</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={`logo-container ${styles.logoTopLeft}`}>
          <img
            src="/logo-realm.png"
            alt="RealmHR Services Logo"
            className="logo"
            style={{ width: '150px', height: 'auto' }} // Adjusted logo size
          />
           <img
        src="/2.png"
        alt="Image 2"
        className="image"
        style={{ width: '50%', height: '50' }}
      />
        </div>
        <div className="who-we-are">
          <h1 className={styles.title}>RealmHR Services</h1>
        <h2>About Us:</h2>
        <p>
          RealmHR Services is a leading recruitment firm specializing in the ITES, FMCG, and Retail industries. Founded and owned by <strong>Ms. Tejasweeta Mistry</strong>, a seasoned professional with over 15 years of experience in talent acquisition across ITES, Retail, Pharma, and FMCG sectors.
        </p>

        <h2>Our Expertise:</h2>
        <p>
          <strong>ITES (Information Technology Enabled Services):</strong> We excel in finding top talent for the ITES sector, ensuring that our clients have the skilled professionals they need to thrive in today's fast-paced tech-driven environment.
        </p>
        <p>
          <strong>FMCG (Fast-Moving Consumer Goods):</strong> We understand the unique demands of the FMCG industry and connect companies with dynamic individuals who can drive growth and success.
        </p>
        <p>
          <strong>Retail:</strong> Our comprehensive knowledge of the retail sector allows us to source candidates who can elevate the customer experience and contribute to retail excellence.
        </p>

        <h2>Discover the RealmHR Services Advantage</h2>
        <ul>
          <li><strong>Proven Track Record:</strong> With a wealth of experience, we have successfully placed candidates in key positions across various industries.</li>
          <li><strong>Tailored Solutions:</strong> We offer customized recruitment solutions to meet the unique needs of each client, ensuring the right fit for every role.</li>
          <li><strong>Exceptional Talent Pool:</strong> Our extensive network and rigorous selection process enable us to provide access to top-tier talent.</li>
          <li><strong>Client-Centric Approach:</strong> We prioritize understanding our clients' goals and challenges to deliver results that drive their success.</li>
        </ul>

        <h2>Contact Us:</h2>
        <p>
          Email: <a href="mailto:teejay@realmhrservices.com">teejay@realmhrservices.com</a>
        </p>
        <p>
          Phone: +91 93727 87542
        </p>
        <p>
          Website: <a href="https://www.realmhrservices.com">www.realmhrservices.com</a>
        </p>
        <p>
          Connect with us on LinkedIn: <a href="https://www.linkedin.com/company/realmhrservices">Follow us on LinkedIn</a>
        </p>
        </div>
      </div>
    </>
  );
}
export default WhoWeAre;

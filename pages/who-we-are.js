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
        <img
          src="/2.png"
          alt="Image 2"
          className="image"
          style={{ width: '20%', height: '20%' }}
        />
        <div className="who-we-are">
          <h1 className={styles.title}>TEJASWEETA MISTRY</h1>
          <h2><strong>Founder | REALMHR Services</strong></h2>
          <p>Tejasweeta Mistry, a name embodying majesty, dignity, and an unwavering wellspring of positive energy, stands as a luminary in the realm of recruitment and human resources. With an illustrious career spanning over 15 years, Tejasweeta has honed her skills and acumen in the art of managing organizational human capital, making her a formidable force in the industry.</p>
          
          <p>Her journey to becoming a recruitment industry expert is marked by a relentless pursuit of knowledge and hands-on experience within distinguished corporations, coupled with impactful consulting engagements. Tejasweeta's extensive knowledge traverses the entire spectrum of HR functions, encompassing Talent Acquisition, Employee Life Cycle Management, Performance Management, Compensation & Benefits, Payroll & Compliance, HR Audit, and HRIS Management. Her unwavering commitment to compliance and her profound understanding of regulatory and legal frameworks are the cornerstones of her success.</p>
          
          <p>Armed with a Master's Degree from the prestigious Narsee Monjee Institute of Management Studies, Tejasweeta has ascended to the status of a true subject matter expert in HR Shared Services. Her extensive skill set and hands-on experience empower her to provide strategic guidance to senior management, particularly in matters pertaining to human capital. Tejasweeta's remarkable achievements include spearheading organizational structure changes, spearheading the seamless implementation of cutting-edge HRIS systems, and adeptly navigating the intricate HR landscape in high-stakes Merger & Acquisition projects.</p>
          
          <p>In the dynamic world of recruitment, Tejasweeta Mistry shines as an unwavering beacon of expertise, innovation, and excellence, guiding organizations toward a brighter future.</p>
        
        <h2><strong>Contact Us:</strong></h2>
        <p>
          Email: <a href="mailto:teejay@realmhrservices.com"><strong>teejay@realmhrservices.com</strong></a>
        </p>
        <p>
          Phone: <strong>+91 93727 87542</strong>
        </p>
        <p>
          Website: <a href="https://www.realmhrservices.com"><strong>www.realmhrservices.com</strong></a>
        </p>
        <p>
          Connect with us on LinkedIn: <a href="https://www.linkedin.com/company/realmhrservices"><strong>Follow us on LinkedIn</strong></a>
        </p>
        </div>
      </div>
    </>
  );
}
export default WhoWeAre;

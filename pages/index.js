import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
{/*##import styles from './index.module.css'## */}

const Home = () => {
  // Define state to manage the visibility of the dropdown menu
  const [isMenuVisible, setMenuVisible] = useState(true);

  // Function to toggle the visibility of the dropdown menu
    const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
};
  return (
<div className="container">
      <Head>
        <title>RealmHRServices</title>
         <link rel="icon" href="/logo-realm.png" />
      </Head>
      <header>
        <div className="header-container">
        <div className="button-container">
          {isMenuVisible && (
            <>
            <Link href="/who-we-are"><button className="menu-link-button"><strong>Who we are</strong></button>
            </Link>
            <Link href="/clients-testimonials"><button className="menu-link-button"><strong>Clients Testimonials</strong></button>
              </Link>
            <a href="#"><button className="menu-link-button"><strong>Talk to us</strong></button></a>
            </>
            )}
        </div>  
        </div>
      </header>  
        <img
          src="/1.png"
          alt="Image 1"
          className="image"
          style={{ width: '80%', height: '30%' }}
        />
        <p className="description">
        <main className="main-content"></main>
        Welcome to Realm HR Services, your trusted partner in recruitment solutions. 
        <p>At Realm HR Services, we understand that finding the right talent is crucial for the success of any organization. We specialize in providing comprehensive recruitment services tailored to meet the unique needs of businesses across various industries.</p>
        <p>With our deep industry knowledge, extensive networks, and proven methodologies, we strive to connect exceptional talent with exceptional opportunities.</p>
        </p>
        <h2>Why RealmHR Services?</h2>
        <p>We leverage the latest technologies and industry best practices to streamline the recruitment process, ensuring efficiency, accuracy, and transparency. Whether you are seeking candidates for permanent positions, contract roles, or executive-level placements, we have the expertise and resources to deliver results.</p> 
        <p>We carefully assess and screen candidates, conduct in-depth interviews, and conduct thorough background checks to present you with a shortlist of highly qualified individuals.</p> 
        <p>At Realm HR Services, we value integrity, professionalism, and confidentiality. We maintain the highest ethical standards and prioritize the privacy of both our clients and candidates. Our team is dedicated to providing personalized, responsive, and reliable service, and we strive to exceed your expectations at every stage of the recruitment journey. Discover the difference that Realm HR Services can make for your organization. Let us handle your recruitment needs, allowing you to focus on your core business objectives.</p> 
        
        <p>Contact us today to learn more about our services or to discuss how we can assist you in finding the right talent to drive your organization forward. Your success is our priority. Trust Realm HR Services for exceptional recruitment solutions.
        </p>
    </div>
  );
};

export default Home;

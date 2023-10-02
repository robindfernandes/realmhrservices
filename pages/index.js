import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
{/*##import styles from './index.module.css'## */}

const Home = () => {
  // Define state to manage the visibility of the dropdown menu
  const [isMenuVisible, setMenuVisible] = useState(true);

  // Function to toggle the visibility of the dropdown menu
  {/*const toggleMenu = () => { */}
    setMenuVisible(!isMenuVisible);
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
      <main>      
        <img
          src="/1.png"
          alt="Image 1"
          className="image"
          style={{ width: '80%', height: '30%' }}
        />
        <p className="description">
          RealmHR Services is your trusted partner in recruitment, specializing in the retail, FMCG, and ITES sectors. With our deep industry knowledge and a commitment to excellence, we connect businesses with top-tier talent, helping them thrive and grow. In the dynamic world of retail, FMCG, and ITES, finding the right talent is crucial for success. At RealmHR Services, we understand the unique challenges and demands of these sectors. Our dedicated team of recruiters has a proven track record of identifying and placing exceptional professionals who can drive your business forward.
        </p>
        <h2>Why Choose RealmHR Services?</h2>
        <ul>
          <li><strong>Industry Expertise:</strong> Our team comprises experts with in-depth knowledge of the retail, FMCG, and ITES industries, ensuring that we match your specific needs with the right candidates.</li>
          <li><strong>Extensive Network</strong>: We have an extensive network of qualified candidates, allowing us to quickly connect you with the best talent available.</li>
          <li><strong>Customized Solutions</strong>: We tailor our recruitment solutions to your business's unique requirements, ensuring a perfect fit for every position.</li>
          <li><strong>Seamless Process</strong>: Our efficient and transparent recruitment process saves you time and resources, so you can focus on what you do best—growing your business.</li>
        </ul>

        <p>
          Partner with RealmHR Services today and experience the difference in recruitment. Let us help you build a workforce that drives success in the retail, FMCG, and ITES sectors. Contact us to learn more about how we can assist you in achieving your recruitment goals.
        </p>
      </main>

      
    </div>
  );
};

export default Home;

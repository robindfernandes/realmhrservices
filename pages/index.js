import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';
/*import SideNav from '@components/SideNav';*/
import { useState } from 'react';


const Home = () => {
  // Define state to manage the visibility of the dropdown menu
  const [isMenuVisible, setMenuVisible] = useState(false);

  // Function to toggle the visibility of the dropdown menu
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
<div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <SideNav /> */}
      <main>
      <div className="dropdown">
          {/* Move the button inside the JSX */}
          <button className="dropdown-button" style={{ fontWeight: 'bold' }} onClick={toggleMenu}>Menu</button>
          {isMenuVisible && (
            <ul className="dropdown-menu">
              <li><Link href="/who-we-are">Who we are</Link></li>
              <li><a href="#">Clients-Testimonials</a></li>
              <li><a href="#">Talk to us</a></li>
            </ul>
          )}
          {isMenuVisible && (
            <ul className="dropdown-menu">
            <li><Link href="/who-we-are">Who we are</Link></li>
            <li><Link href="/clients-testimonials">Clients-Testimonials</Link></li>
            <li><a href="#">Talk to us</a></li>
          </ul>
          )}
        </div>
        <div className="container"> </div>
        <Header>
          <div className={styles.logoContainer}>
            <img
              src="/logo-realm.png"
              alt="RealmHR Services Logo"
              className={styles.logo}
            />
            <h1 className={styles.title}>Welcome to RealmHR Services</h1>
            </div>
        </Header>
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

      <Footer />
    </div>
  );
};

export default Home;

import React, { useState } from 'react'; // Import useState from React
import Head from 'next/head';
import Link from 'next/link';
const Home = () => {
  // Define state to manage the visibility of the dropdown menu
  const [isMenuVisible, setMenuVisible] = useState(true);

  return (
    <div className="container">
      <Head>
        <title>RealmHRServices</title>
        <link rel="icon" href="/logo-realm.png" />
      </Head>
      <div className="centered-content">
        <header>
          <div className="header-container">
            <div className="button-container">
              {isMenuVisible && (
                <>
                </>
              )}
            </div>
          </div>
        </header>
        <img
          src="/5.png"
          alt="Image 5"
          className="image"
          style={{ width: '50%', height: '10%' }}
        />
          {/* Use CSS Modules class here */}
          <div className="main-content clients-testimonials" style={{ marginLeft: '10%', marginRight: '10%' }}>
          <h1>What Our Clients say about RealmHR Services:</h1>
          <h2>1. National Group Of Companies - India</h2>
          <p>
            "RealmHR Services has been an invaluable partner in our recruitment efforts.
            Their efficiency and dedication to understanding our unique needs in the Retail and FMCG sectors
            have resulted in exceptional hires that have greatly contributed to our company's growth."
          </p>
          <p><strong>Jaykumar Mistry - Chief Marketing Officer</strong></p>

          <h2>2. RDF Studios</h2>
          <p>
            "Working with RealmHR Services has been a game-changer for us in the Media industry.
            Their ability to quickly source top-tier talent, coupled with their industry knowledge, has made a significant impact on our team's productivity and success."
          </p>
          <p><strong>Ronald D Feepling - Chief Operating Officer</strong></p>

          <h2>3. Rowling Pharma Pty. Ltd.</h2>
          <p>
            "We can't thank RealmHR Services enough for their outstanding support in the Pharma industry.
            Their personalized and tailored recruitment solutions have consistently provided us with skilled professionals who align perfectly with our company's goals.
            They are our go-to partner for talent acquisition."
          </p>
          <p><strong>Max Prefectsio - National HR Head</strong></p>

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
          <div className="centered-content">
            <Link href="/">
            <button className="menu-link-button">
              <strong>Back to Home</strong>
            </button>
          </Link>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Home;

import React, { useState } from 'react'; // Import useState from React
import Head from 'next/head';
import styles from './clients-testimonials.module.css'; // Import the CSS module for page-specific styles
import Link from 'next/link';


const ClientsTestimonials = () => {
    // Define state to manage the visibility of the dropdown menu
 const [isMenuVisible, setMenuVisible] = useState(true);
 
 // Function to toggle the visibility of the dropdown menu
    const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
    };
return (
        <>
            <Head>
            <title>RealmHRServices</title>
             <link rel="icon" href="/logo-realm.png" />
            <div className={styles.container}>
                {/* Use CSS Modules class here */}
                <img
                    src="/logo-realm.png"
                    alt="RealmHR Services Logo"
                    className={styles.logo} // Use CSS Modules class here
                    style={{ width: '50px', height: 'auto' }}
                />
            </div>
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
              <Link href="/Talk-to-us"><button className="menu-link-button"><strong>Talk to us</strong></button>
                  </Link>
            </>
            )}
        </div>  
        </div>
      </header>
      <img
              src="/5.png"
              alt="Image 5"
              className="image"
              style={{ width: '80%', height: '30%' }}
            />
            <div className={styles['clients-testimonials']}>
                {/* Use CSS Modules class here */}
                <h1>What Our Clients say about RealmHR Services:</h1>
                <h2>1. National Group Of Companies - India</h2>
                <p>
                    "RealmHR Services has been an invaluable partner in our recruitment efforts.
                        Their efficiency and dedication to understanding our unique needs in the Retail and FMCG sectors
                        have resulted in exceptional hires that have greatly contributed to our company's growth."
                </p>
                <p><strong>Jaykumar Mistry - Chief Marketing Officer</strong>
                    <p />
                </p>

                <h2>2. RDF Group Of Companies</h2>
                <p>
                    "Working with RealmHR Services has been a game-changer for us in the Media industry.
                    Their ability to quickly source top-tier talent, coupled with their industry knowledge, has made a significant impact on our team's productivity and success."
                </p>
                <p><strong>Ronald D Feepling - National HR Head</strong>
                    <p />
                </p>

                <h2>3. MKR Group Of Companies</h2>
                <p>
                    "We can't thank RealmHR Services enough for their outstanding support in the Pharma industry.
                    Their personalized and tailored recruitment solutions have consistently provided us with skilled professionals who align perfectly with our company's goals.
                    They are our go-to partner for talent acquisition."
                </p>
                <p><strong>Max K Rowling - National HR Head</strong>
                    <p />
                </p>

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
                <Link href="/index"><button className="menu-link-button"><strong>Back to Home</strong></button></Link>
            </div>
        </>
    );
}

export default ClientsTestimonials;

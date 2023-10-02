import React from 'react';
import Head from 'next/head';
import styles from './clients-testimonials.module.css'; // Import the CSS module for page-specific styles

const ClientsTestimonials = () => {
    return (
        <>
            <Head>
                <title>CLIENTS TESTIMONIALS</title>
                <link rel="icon" href="/favicon.ico" />
            <div className={styles.container}>
                {/* Use CSS Modules class here */}
                <Header title="CLIENTS TESTIMONIALS" />
                <img
                    src="/logo-realm.png"
                    alt="RealmHR Services Logo"
                    className={styles.logo} // Use CSS Modules class here
                    style={{ width: '50px', height: 'auto' }}
                />
            </div>
            </Head>
            <div className={styles['clients-testimonials']}>
                {/* Use CSS Modules class here */}
                <h1>What Our Clients say about RealmHR Services:</h1>
                <h2>1. National Group Of Companies - India</h2>
                <p>
                    <strong>"RealmHR Services has been an invaluable partner in our recruitment efforts.
                        Their efficiency and dedication to understanding our unique needs in the Retail and FMCG sectors
                        have resulted in exceptional hires that have greatly contributed to our company's growth."</strong>
                </p>
                <p><strong>Jaykumar Mistry - Chief Marketing Officer</strong>
                    <p />
                </p>

                <h2>2. RDF Group Of Companies</h2>
                <p>
                    <strong>"Working with RealmHR Services has been a game-changer for us in the Media industry.
                        Their ability to quickly source top-tier talent, coupled with their industry knowledge, has made a significant impact on our team's productivity and success."</strong>
                </p>
                <p><strong>Ronald D Feepling - National HR Head</strong>
                    <p />
                </p>

                <h2>3. MKR Group Of Companies</h2>
                <p>
                    <strong>"We can't thank RealmHR Services enough for their outstanding support in the Pharma industry.
                        Their personalized and tailored recruitment solutions have consistently provided us with skilled professionals who align perfectly with our company's goals.
                        They are our go-to partner for talent acquisition."</strong>
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
            </div>
            <Footer />
        </>
    );
}

export default ClientsTestimonials;

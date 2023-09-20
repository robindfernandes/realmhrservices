import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from '@styles/globals.css'; // Import your global CSS

export default function Home() {
  return (
    <div className={styles.container} style={{ backgroundColor: 'var(--primary-bg-color)' }}>
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title" style={{ fontSize: '24px' }}>Welcome to RealmHR Services</h1>
        <Header title="Welcome to RealmHR Services" /> {/* Pass the title prop here */}
        <img
          src="/logo-realm.png"
          alt="RealmHR Services Logo"
          className="logo"
          style={{ width: '200px', height: 'auto' }} // Adjust the width as needed
        />
        <p className="description">
          RealmHR Services is your trusted partner in recruitment, specializing in the retail, FMCG, and ITES sectors. With our deep industry knowledge and a commitment to excellence, we connect businesses with top-tier talent, helping them thrive and grow. In the dynamic world of retail, FMCG, and ITES, finding the right talent is crucial for success. At RealmHR Services, we understand the unique challenges and demands of these sectors. Our dedicated team of recruiters has a proven track record of identifying and placing exceptional professionals who can drive your business forward.
        </p>
        
        <h2>Why Choose RealmHR Services:</h2>
        <ul>
          <li>Industry Expertise: Our team comprises experts with in-depth knowledge of the retail, FMCG, and ITES industries, ensuring that we match your specific needs with the right candidates.</li>
          <li>Extensive Network: We have an extensive network of qualified candidates, allowing us to quickly connect you with the best talent available.</li>
          <li>Customized Solutions: We tailor our recruitment solutions to your business's unique requirements, ensuring a perfect fit for every position.</li>
          <li>Seamless Process: Our efficient and transparent recruitment process saves you time and resources, so you can focus on what you do best—growing your business.</li>
        </ul>
        
        <p>
          Partner with RealmHR Services today and experience the difference in recruitment. Let us help you build a workforce that drives success in the retail, FMCG, and ITES sectors. Contact us to learn more about how we can assist you in achieving your recruitment goals.
        </p>
      </main>

      <Footer />
    </div>
  )
}

import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';

const Home = () => {
    const [isMenuVisible, setMenuVisible] = useState(false); // Initialize menu as hidden

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const query = formData.get('query');
        const resume = formData.get('resume');

        try {
            const response = await axios.post('/api/process-data/', { query, resume });
            // Handle success
        } catch (error) {
            // Handle error
        }
    };

    const handleClickResume = () => {
        // Handle navigation
    };

    return (
        <div className="container">
            <Head>
                <title>RealmHRServices</title>
                <link rel="icon" href="/logo-realm.png" />
            </Head>
            <div className="centered-content">
                <header>
                    <div className="header-container">
                        {/* Your menu content goes here */}
                    </div>
                </header>
                <img src="/9.png" alt="Image 9" className="image" />
                <div className="main-content">
                    <h1>Welcome to Realm HR SERVICES, your trusted partner in recruitment solutions.</h1>
                    <h2>Contact Us:</h2>
                    <p>Email: <a href="mailto:teejay@realmhrservices.com">teejay@realmhrservices.com</a></p>
                    <p>Phone: +91 93727 87542</p>
                    <p>Website: <a href="https://www.realmhrservices.com">www.realmhrservices.com</a></p>
                    <p>Connect with us on LinkedIn: <a href="https://www.linkedin.com/company/realmhrservices">Follow us on LinkedIn</a></p>
                </div>
            </div>
            <div className="centered-content">
                <Link href="/">
                    <button className="menu-link-button">Back to Home</button>
                </Link>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="resume"><strong>Attach your resume here: </strong></label>
                    <input type="file" id="resume" name="resume" accept=".docx,.pdf" />
                    <p><button type="submit">Upload Resume</button></p>
                </form>
            </div>
        </div>
    );
};

export default Home;

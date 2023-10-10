import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { Button, Typography, Container, AppBar, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Image from 'next/image';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Customize primary color
    },
    secondary: {
      main: '#ff6f61', // Customize secondary color
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif', // Set custom fonts
  },
  // Add more theme customizations here
});

const Home = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Head>
          <title>RealmHRServices</title>
          <link rel="icon" href="/logo-realm.png" />
        </Head>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Realm HR Services</Typography>
            {/* Add your navigation buttons here */}
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">
          <div className="header-container">
            <div className="button-container">
              {isMenuVisible && (
                <>
                  <Link href="/who-we-are">
                    <Button variant="contained" color="primary">
                      <strong>Who we are</strong>
                    </Button>
                  </Link>
                  <Link href="/clients-testimonials">
                    <Button variant="contained" color="primary">
                      <strong>Clients Testimonials</strong>
                    </Button>
                  </Link>
                  <Link href="/Talk-to-us">
                    <Button variant="contained" color="primary">
                      <strong>Talk to us</strong>
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </Container>
        <Container maxWidth="sm">
        <Image src="/1.png" alt="Image 1" className="image" style={{ maxWidth: '100%', height: 'auto' }} />
          <Typography variant="h4" component="h1">
            Welcome to Realm HR SERVICES, your trusted partner in recruitment solutions.
          </Typography>
          <Typography variant="body1">
            At Realm HR Services, we understand that finding the right talent is crucial for the success of any
            organization. We specialize in providing comprehensive recruitment services tailored to meet the unique
            needs of businesses across various industries.
          </Typography>
          <Typography variant="body1">
            With our deep industry knowledge, extensive networks, and proven methodologies, we strive to connect
            exceptional talent with exceptional opportunities.
          </Typography>
          {/* Add more content here */}
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Home;

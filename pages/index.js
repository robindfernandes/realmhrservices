import Image from 'next/image';
import Link from 'next/link';
import { Button, Typography, Container, AppBar, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { Bloodtype } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    type: 'light', // Specify 'light' or 'dark'
    primary: {
      main: '#06dee3', // Customize primary color
    },
    secondary: {
      main: '#ff6f61', // Customize secondary color
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif',
    h6: {
      color: 'black',
    },
    Button: {
      fontFamily: 'Lato, sans-serif',
      h6: {
        color: 'black',
      },
    body1: {
      color: '#000000',
    },
  },
},
});

const Home = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <ThemeProvider theme={theme}>
  <div className="container">
    <div
     style={{
      backgroundImage: 'url("/1.png")',
      backgroundSize: '100% 100%', // Cover the entire container
      backgroundRepeat: 'no-repeat',
      }}
    >
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none', display: 'flex', justifyContent: 'center' }}>
        <Toolbar style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {isMenuVisible && (
              <>
                <Link href="/who-we-are">
                <Button variant="contained" style={{ color: 'black', backgroundColor: 'transparent' }}>
                <strong>Who we are</strong>
                </Button>
                </Link>
                <Link href="/clients-testimonials">
                <Button variant="contained" style={{ color: 'black', backgroundColor: 'transparent' }}>
                <strong>Clients Testimonials</strong>
                </Button>
                </Link>
                <Link href="/Talk-to-us">
                <Button variant="contained" style={{ color: 'black', backgroundColor: 'transparent' }}>
                <strong>Talk to us</strong>
                </Button>
                </Link>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h6" style={{ textAlign: 'center' }}>
       <strong>TALENT ACQUISITION EXPERTS</strong>
       </Typography>
        <Typography variant="h4" component="h1" style={{ color: '#000000' }}>
          Welcome to Realm HR SERVICES, your trusted partner in recruitment solutions.
        </Typography>
        <Typography variant="body1" style={{ color: '#000000' }}>
          At Realm HR Services, we understand that finding the right talent is crucial for the success of any organization. We specialize in providing comprehensive recruitment services tailored to meet the unique needs of businesses across various industries.
        </Typography>
        <Typography variant="body1" style={{ color: '#000000' }}>
          With our deep industry knowledge, extensive networks, and proven methodologies, we strive to connect exceptional talent with exceptional opportunities.
        </Typography>
        {/* Add more content here */}
      </Container>
    </div>
    </div>
</ThemeProvider>
  );
};

export default Home;

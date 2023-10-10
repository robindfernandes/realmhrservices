import Head from 'next/head';
import Link from 'next/link';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Customize primary color
    },
    secondary: {
      main: '#ff6f61', // Customize secondary color
    },
    background: {
      // Set background image and make it cover the viewport
      image: '/1.png',
      size: 'cover',
    },
  },
  typography: {
    fontFamily: 'Lato, sans-serif', // Set custom fonts
  },
});

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <Head>
          <title>RealmHRServices</title>
          <link rel="icon" href="/logo-realm.png" />
        </Head>
        <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Realm HR Services
            </Typography>
            <Link href="/who-we-are" passHref>
              <Button color="primary" style={{ textTransform: 'none' }}>
                <strong>Who we are</strong>
              </Button>
            </Link>
            <Link href="/clients-testimonials" passHref>
              <Button color="primary" style={{ textTransform: 'none' }}>
                <strong>Clients Testimonials</strong>
              </Button>
            </Link>
            <Link href="/Talk-to-us" passHref>
              <Button color="primary" style={{ textTransform: 'none' }}>
                <strong>Talk to us</strong>
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" style={{ paddingTop: '100px' }}>
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

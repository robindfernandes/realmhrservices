import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { createTheme, ThemeProvider } from '@mui/material/styles';

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
});

const Home = () => {
  const [isMenuVisible, setMenuVisible] = useState(true);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  
  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        {/* Your Head and title */}
        <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Realm HR Services
            </Typography>
            {/* Your navigation buttons */}
          </Toolbar>
        </AppBar>
        <Container
        maxWidth="md">
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
          maxWidth="md"
          style={{
            paddingTop: '100px',
            backgroundImage: 'url("/1.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
          <Typography variant="h4" component="h1" style={{ color: '#fff' }}>
            Welcome to Realm HR SERVICES, your trusted partner in recruitment solutions.
          </Typography>
          <Typography variant="body1" style={{ color: '#fff' }}>
            At Realm HR Services, we understand that finding the right talent is crucial for the success of any organization.
            We specialize in providing comprehensive recruitment services tailored to meet the unique needs of businesses across various industries.
          </Typography>
          <Typography variant="body1" style={{ color: '#fff' }}>
            With our deep industry knowledge, extensive networks, and proven methodologies, we strive to connect exceptional talent with exceptional opportunities.
          </Typography>
          {/* Add more content here */}
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Home;

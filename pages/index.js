import { Typography, Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#06dee3',
    },
    secondary: {
      main: '#ff6f61',
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
    },
    body1: {
      color: '#000000',
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
      <div
        style={{
          backgroundImage: 'url("/1.png")',
          backgroundSize: '100% auto', // Cover width, auto height
          //backgroundAttachment: 'fixed',
          backgroundBlendmode: 'normal',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center the content horizontally
        }}
      >
        <Container style={{ maxWidth: '100%' }}> </Container>

        <Container>
        <Typography variant="h4" component="h1" style={{ color: 'black' }}>
            <strong>Welcome to REALM HR SERVICES, your trusted partner in recruitment solutions.</strong>
          </Typography>
          <Typography variant="body1" style={{ color: 'black' }}>
            <strong>At REALM HR Services, we understand that finding the right talent is crucial for the success of any organization. We specialize in providing comprehensive recruitment services tailored to meet the unique needs of businesses across various industries.</strong>
          </Typography>
          <Typography variant="body1" style={{ color: 'black' }}>
            <strong>With our deep industry knowledge, extensive networks, and proven methodologies, we strive to connect exceptional talent with exceptional opportunities.</strong>
          </Typography>
          {/* Additional Content */}
          <Typography variant="h6" style={{ textAlign: 'center', color: 'black' }}>
            <strong>Our Commitment to Excellence</strong>
          </Typography>
          <Typography variant="body1" style={{ color: 'black' }}>
            At REALM HR Services, we're not just a recruitment agency; we're your strategic partner in talent acquisition. Our commitment to excellence is unwavering. We understand that the right talent can drive your organization's success, and we're dedicated to finding the best fit for your unique needs.
          </Typography>
          <Typography variant="body1" style={{ color: 'black' }}>
            <strong>A Tailored Approach</strong>
          </Typography>
          <Typography variant="body1" style={{ color: 'black' }}>
            We recognize that every business is unique. That's why we take a tailored approach to recruitment. Whether you're in the tech industry, healthcare, finance, or any other sector, we have the expertise to understand your specific requirements. Our recruitment solutions are designed to fit like a glove, ensuring that the professionals we connect you with align perfectly with your company's goals.
          </Typography>
          <Typography variant="body1" style={{ color: 'black' }}>
            <strong>Extensive Networks</strong>
          </Typography>
          <Typography variant="body1" style={{ color: 'black' }}>
            Over the years, we've built extensive networks across various industries. Our reach extends far and wide, enabling us to tap into a pool of exceptional talent. Whether you're searching for a seasoned executive, a team of experts, or entry-level talent, we have the connections to bring them to your doorstep.
          </Typography>
          <Typography variant="body1" style={{ color: 'black' }}>
            <strong>Proven Methodologies</strong>
          </Typography>
          <Typography variant="body1" style={{ color: 'black' }}>
            Our success is built on proven methodologies. We don't leave things to chance; we follow a systematic and data-driven process to identify the right candidates. From initial screening to final selection, we're meticulous in our approach. Rest assured, the professionals we recommend are thoroughly vetted and well-matched to your requirements.
          </Typography>
          <Typography variant="body1" style={{ color: 'black' }}>
            <strong>Your Growth Partner</strong>
          </Typography>
          <Typography variant="body1" style={{ color: 'black' }}>
            When you partner with REALM HR Services, you're not just getting a recruitment agency. You're getting a growth partner. Our aim is to see your organization thrive by ensuring that you have the best people on board. Your success is our success, and we take pride in contributing to your journey.
          </Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Home;

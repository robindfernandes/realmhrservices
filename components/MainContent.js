// MainContent.js
import styled from 'styled-components';

const MainContentWrapper = styled.div`
  flex: 1; /* Make it flex to fill remaining space */
  padding: 20px; /* Add padding for spacing */
`;

// MainContent.js
const MainContent = () => {
    return (
      <MainContentWrapper>
        {/* Your main content here */}
        {/*<h1>Welcome to the Main Content</h1>
        <p>This is where your main content goes.</p>*/}
      </MainContentWrapper>
    );
  };

export default MainContent;
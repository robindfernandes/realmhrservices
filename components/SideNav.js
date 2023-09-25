// SideNav.js
import styled from 'styled-components';

const SideNavWrapper = styled.div`
  background-color: #333; /* Background color for the side navigation */
  color: #fff; /* Text color */
  width: 250px; /* Set the width as needed */
  height: 100%; /* Make it cover the full height */
  padding: 20px; /* Add padding for spacing */
`;

// SideNav.js
const SideNav = () => {
    return (
      <SideNavWrapper>
        {/* Your navigation links or content here */}
        <ul>
          <li>Link 1</li>
          <li>Link 2</li>
          {/* ... */}
        </ul>
      </SideNavWrapper>
    );
  };

  export default SideNav;
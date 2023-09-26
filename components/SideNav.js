// SideNav.js
import styled from 'styled-components';
import Link from 'next/link';

const SideNavWrapper = styled.div`
  background-color: #333; /* Background color for the side navigation */
  color: #fff; /* Text color */
  width: 250px; /* Set the width as needed */
  height: 100%; /* Make it cover the full height */
  padding: 20px; /* Add padding for spacing */
  position: fixed; /* Fixed position to stick to the top left */
  top: 0; /* Position from the top */
  left: 0; /* Position from the left */
`;

const NavLink = styled.a`
  display: block;
  text-decoration: none;
  color: yellow; /* Default text color */
  transition: color 0.3s; /* Smooth transition effect for color change */

  &:hover {
    color: #00bcb9; /* Color on hover */
  }
`;

// SideNav.js
const SideNav = () => {
  return (
    <SideNavWrapper>
      {/* Your navigation links or content here */}
      <ul>
        <li>
          <Link href="/clients-testimonials">
            <NavLink><strong>Clients Testimonials</strong></NavLink>
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </SideNavWrapper>
  );
};

export default SideNav;

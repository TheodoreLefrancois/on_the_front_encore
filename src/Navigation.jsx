import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Navigation = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleSignOut = () => {
    localStorage.removeItem('token');

    axios.interceptors.request.use(
      (config) => {
        const { origin } = new URL(config.url);
        const allowedOrigins = ['http://localhost:5000'];
        if (allowedOrigins.includes(origin)) {
          // eslint-disable-next-line no-param-reassign
          config.headers.authorization = '';
          // eslint-disable-next-line no-param-reassign
          config.headers.userId = '';
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    history.push('/');
  };
  return (
    <div>
      <Navbar color="warning" light expand="md">
        <NavbarBrand href="/">OnTheRoadAgain</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto p-2 text-dark" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                My Road Trips
              </DropdownToggle>
              <DropdownMenu right className="p-2 ">
                <DropdownItem>ROAD TRIP 1</DropdownItem>
                <DropdownItem>ROAD TRIP 1</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>ALL MY ROAD TRIPS</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className="p-2 text-dark" href="/">
                Sign In
              </NavLink>
            </NavItem>
          </Nav>
          <Button color="dark" onClick={() => handleSignOut()}>
            Sign out
          </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;

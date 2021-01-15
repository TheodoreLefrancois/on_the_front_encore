import axios from 'axios';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
import { clearLocalStorage } from './store/token/actionCreator';

const Navigation = ({ clearToken }) => {
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
    clearToken('false');
    history.push('/signin');
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
                <Link to="/">
                  <DropdownItem>ROAD TRIP 1</DropdownItem>
                </Link>
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

const mapDispatchToProps = (dispatch) => {
  return {
    clearToken: (token) => dispatch(clearLocalStorage(token)),
  };
};

Navigation.propTypes = {
  clearToken: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Navigation);

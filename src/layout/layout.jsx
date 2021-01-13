import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import CreateAccount from '../create_account';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <CreateAccount />
      <Container className="mt-5">{children}</Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;

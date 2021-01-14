import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import Navigation from '../navigation';
import CreateAccount from '../signup';
import SignIn from '../signin';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <CreateAccount />
      <SignIn />
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

import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
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

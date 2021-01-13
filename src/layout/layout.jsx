// import { Container } from 'reactstrap';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <div className="mt-5">{children}</div>
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

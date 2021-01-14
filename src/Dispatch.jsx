/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import LayoutedRoute from './LayoutedRoute';
import SignIn from './pages/SignIn';

export default function Dispatch({
  component: Component,
  layout: Layout,
  tokenAuth: token,
  componentName: compName,
}) {
  return (
    <>
<<<<<<< HEAD
      {!token ? (
=======
      {token !== 'false' ? (
>>>>>>> dev
        <LayoutedRoute
          component={Component}
          layout={Layout}
          componentName={compName}
        />
      ) : (
        <SignIn />
      )}
    </>
  );
}

Dispatch.propTypes = {
  component: PropTypes.node.isRequired,
  layout: PropTypes.node.isRequired,
  tokenAuth: PropTypes.string.isRequired,
  componentName: PropTypes.string.isRequired,
};

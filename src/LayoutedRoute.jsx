/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default function LayoutedRoute({
  component: Component,
  layout: Layout,
  componentName: compName,
  ...rest
}) {
  return (
    <Route
      path={`/${compName}`}
      {...rest}
      render={(props) => {
        return (
          <>
            <Layout />
            <Component {...props} />
          </>
        );
      }}
    />
  );
}

LayoutedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  layout: PropTypes.node.isRequired,
  componentName: PropTypes.string.isRequired,
};

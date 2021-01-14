/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

export default function LayoutedRoute({
  component: Component,
  layout: Layout,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            <Layout />
            <Component {...props} />
          </>
          // </Layout>
        );
      }}
    />
  );
}

LayoutedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  layout: PropTypes.node.isRequired,
};

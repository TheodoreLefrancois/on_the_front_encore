/* eslint-disable react/jsx-props-no-spreading */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// import Layout from './layout/layout';
import Navigation from './Navigation';
import Auth from './pages/Auth';
import Map from './pages/Map';

const LayoutedRoute = ({ component: Component, layout: Layout, ...rest }) => {
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
};
const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={Auth} />
        {/* <Navigation /> */}
        <LayoutedRoute path="/map" component={Map} layout={Navigation} />
      </Switch>
    </BrowserRouter>
  );
};

LayoutedRoute.propTypes = {
  component: PropTypes.node.isRequired,
  layout: PropTypes.node.isRequired,
};

export default Router;

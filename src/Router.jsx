/* eslint-disable react/jsx-props-no-spreading */
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Layout from './layout/layout';
import LayoutedRoute from './LayoutedRoute';
import Navigation from './Navigation';
import Auth from './pages/Auth';
import Map from './pages/Map';

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

export default Router;

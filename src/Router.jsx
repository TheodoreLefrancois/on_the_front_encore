import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dispatch from './Dispatch';
import Navigation from './Navigation';
import Map from './pages/Map';
import SignIn from './pages/SignIn';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Dispatch
          component={Map}
          layout={Navigation}
          tokenAuth={localStorage.getItem('token')}
          componentName="map"
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

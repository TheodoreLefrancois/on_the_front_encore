import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dispatch from './Dispatch';
import Navigation from './Navigation';
import Map from './pages/Map';
import SignIn from './pages/SignIn';
import Upload from './pages/Upload';

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
        <Dispatch
          component={Upload}
          layout={Navigation}
          tokenAuth={localStorage.getItem('token')}
          componentName="upload"
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

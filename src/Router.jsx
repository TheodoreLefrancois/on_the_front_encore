import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dispatch from './Dispatch';
import Navigation from './Navigation';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Locator from './mapComponents/Locator';
import Map from './mapComponents/Map';

const Router = () => {
  const token = useSelector((state) => state.tokenReducer.token);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Dispatch
          component={Locator}
          layout={Navigation}
          tokenAuth={token}
          componentName=""
        />
        <Dispatch
          component={Map}
          layout={Navigation}
          tokenAuth={token}
          componentName="map"
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

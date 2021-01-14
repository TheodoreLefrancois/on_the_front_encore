import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dispatch from './Dispatch';
import Navigation from './Navigation';
import Locator from './mapComponents/Locator';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

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
          componentName="map"
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

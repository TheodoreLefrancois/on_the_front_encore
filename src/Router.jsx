import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dispatch from './Dispatch';
import Navigation from './Navigation';
import Map from './pages/Map';
import SignIn from './pages/SignIn';

const Router = () => {
  const token = useSelector((state) => state.tokenReducer.token);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
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

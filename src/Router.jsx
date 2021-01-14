import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dispatch from './Dispatch';
import Navigation from './Navigation';
import SignIn from './pages/SignIn';
<<<<<<< HEAD
import Locator from './mapComponents/Locator';
=======
import SignUp from './pages/SignUp';
>>>>>>> dev

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
<<<<<<< HEAD
          tokenAuth={localStorage.getItem('token')}
          componentName="locator"
=======
          tokenAuth={token}
          componentName="map"
>>>>>>> dev
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

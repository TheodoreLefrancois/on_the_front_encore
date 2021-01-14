// import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import Dispatch from './Dispatch';
import Navigation from './Navigation';
import SignIn from './pages/SignIn';
import Locator from './mapComponents/Locator';
import SignUp from './pages/SignUp';

const Router = () => {
  // const token = useSelector((state) => state.tokenReducer.token);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Dispatch
          component={Locator}
          layout={Navigation}
          tokenAuth={localStorage.getItem('token')}
          componentName="locator"
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;

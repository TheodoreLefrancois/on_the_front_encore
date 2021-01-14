import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dispatch from './Dispatch';
import Navigation from './Navigation';
import SignIn from './pages/SignIn';
import Locator from './mapComponents/Locator';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin" component={SignIn} />
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

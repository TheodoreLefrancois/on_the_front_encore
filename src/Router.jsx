import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './layout/Layout';
import Auth from './pages/Auth';
import SignIn from './pages/SignIn';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {!localStorage.getItem('token') ? (
            <Route path="/sigin" component={SignIn} />
          ) : (
            /* si authentifié */
            <Route path="/auth" component={Auth} />
          )}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

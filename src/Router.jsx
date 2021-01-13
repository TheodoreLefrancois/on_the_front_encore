import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './layout/layout';
import Auth from './pages/Auth';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

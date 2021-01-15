import { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Dispatch from './Dispatch';
import Navigation from './Navigation';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Locator from './mapComponents/Locator';
// import Map from './mapComponents/Map';

import { setLocalStorage } from './store/token/actionCreator';

const Router = ({ setToken }) => {
  const token = useSelector((state) => state.tokenReducer.token);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }, []);

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
        {/* <Dispatch
          component={Locator}
          layout={Navigation}
          tokenAuth={token}
          componentName="map"
        /> */}
      </Switch>
    </BrowserRouter>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { setToken: (token) => dispatch(setLocalStorage(token)) };
};

Router.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(Router);

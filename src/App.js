import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Switch makes sure redirect is not accessed if any valid route is currently used */}
        <Route path="/" exact>
        {/* Exact = only if path is '/' then route users */}
          <Users />
          {/* User Routing */}
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
        {/* In case of any other, redirect to this ^ */}
      </Switch>
    </Router>
  );
};

export default App;

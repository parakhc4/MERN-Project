import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';

const App = () => {
  return (
    <Router>
        <MainNavigation/>
        <main>
          <Switch>
            {/* Switch makes sure redirect is not accessed if any valid route is currently used */}
            <Route path="/" exact>
            {/* Exact = only if path is '/' then route users */}
              <Users />
              {/* User Routing */}
            </Route>
            <Route path="/:userId/places" exact>
              <UserPlaces/>
            </Route>
            <Route path="/places/new" exact>
              <NewPlace />
            </Route>
            <Redirect to="/" />
            {/* In case of any other, redirect to this ^ */}
          </Switch>
          </main>
    </Router>
  );
};

export default App;

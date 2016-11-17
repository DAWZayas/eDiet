// npm packages
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// our packages
import Home from '../home';
import Other from '../other';
import NotFound from '../notfound';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/other" component={Other}/>
    <NotFoundRoute component={NotFound}/>
  </Router>
);

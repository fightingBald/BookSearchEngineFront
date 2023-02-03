import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Configure routes
import Home from './screens/home';
import Book from './screens/book';
import Recommendations from './screens/recommendations';

export default (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/book/:ID" component={Book}/>
    <Route path="/recommendation/:" component={Recommendations}/>
  </Switch>
);

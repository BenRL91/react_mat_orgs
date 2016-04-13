// Javascript Entry Point
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Home from './home';
import Orgs from './orgs';

render((
  <Router history={hashHistory}>
    <Route path={'/'} component={ Home }/>
    <Route path={'/:user_name/orgs'} component={ Orgs }/>
  </Router>
), document.querySelector('.app'))

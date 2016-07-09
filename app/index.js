import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import About from './components/About.jsx';
import App from './components/App.jsx';
import Repos from './components/Repos.jsx';
render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/repos" component={Repos} />
    </Route>
  </Router>,
  document.getElementById('app')
);


import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ListTable from './pages/ListTable';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/films' component={ListTable} exact/>
        <Route path='/people' component={ListTable} exact/>
        <Route path='/vehicles' component={ListTable} exact/>
      </Switch>
    </Router>
  );
}

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ListTable from './pages/ListTable';
import ApolloLocalProvider from './contexts/ApolloContext';

export default function App() {
  return (
    <ApolloLocalProvider>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/films' component={ListTable} exact/>
          <Route path='/people' component={ListTable} exact/>
          <Route path='/vehicles' component={ListTable} exact/>
        </Switch>
      </Router>
    </ApolloLocalProvider>
  );
}

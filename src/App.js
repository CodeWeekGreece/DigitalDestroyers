import './App.css';
import React, { useState } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Reserve from './reserve';
import Home from './home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/reserve">
          <Reserve></Reserve>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

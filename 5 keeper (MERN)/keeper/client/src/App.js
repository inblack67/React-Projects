import React, { useEffect, Fragment } from 'react';
import Navbar from '../src/components/dumb/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/dumb/About'
import Home from './components/dumb/Home'

import ContactState from './context/contact/ContactState'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';


function App() {

  useEffect(() => {
    // MJS init
    M.AutoInit();
  });

  return (
    <ContactState>
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
    </ContactState>
  );
}

export default App;

import React, { useEffect, Fragment } from 'react';
import Navbar from '../src/components/dumb/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/dumb/About'
import Home from './components/dumb/Home'
import Register from './components/smart/auth/Register'
import Login from './components/smart/auth/Login'
import PrivateRoute from './components/smart/auth/PrivateRoute'

import ContactState from './context/contact/ContactState'
import AuthState from './context/auth/AuthState'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import setAuthToken from './setAuthToken'

import './App.css';

if(localStorage.token)
{
  setAuthToken(localStorage.token);
}

function App() {

  useEffect(() => {
    // MJS init
    M.AutoInit();
  });

  return (
    <AuthState>
    <ContactState>
    <Router>
      <Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </Fragment>
    </Router>
    </ContactState>
    </AuthState>
  );
}

export default App;

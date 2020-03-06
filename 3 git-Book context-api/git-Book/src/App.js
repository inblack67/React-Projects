import React, { Fragment, useEffect } from 'react';
import Navbar from './components/dumb/Navbar';
import User from './components/smart/User';
import About from './components/dumb/About';
import Home from './components/dumb/Home'
import NotFound from './components/dumb/NotFound'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GithubState from './context/github/GithubState'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';


const App = () => {

  useEffect( () => {

     // MJS init
     M.AutoInit();

    //   const initialUsers = async () => {

    //   setLoading(true)

    //   const res = await axios(`https://api.github.com/users?cliient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    //   setUsers(res.data)
    //   setLoading(false)
    //  }

    //  initialUsers();

  });

  // const getRepos = async (username) => {

  //   setLoading(true);

  //   const res = await axios(`https://api.github.com/users/${username}/repos?per_page=5&cliient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   setRepos(res.data);
  //   setLoading(false);
  // }

    return (

    <GithubState>
      <Router>
        <Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" render={About}/>
          <Route exact path="/user/:login" component={User}/>
          <Route component={NotFound}/>
        </Switch>
      </Fragment>
      </Router>
    </GithubState>

    );
}

export default App;

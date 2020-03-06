import React, { Fragment, useState, useEffect } from 'react';
import Navbar from './components/dumb/Navbar';
import Users from './components/smart/Users';
import User from './components/smart/User';
import Search from './components/smart/Search';
import About from './components/dumb/About';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';


const App = () => {

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

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

  const searchUsers = async (text) => {

    setLoading(true);

      const res = await axios(`https://api.github.com/search/users?q=${text}&cliient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      setUsers(res.data.items);
      setLoading(false);
  }

  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  }


  // GET a single user
  const getSingleUser = async (username) => {

    setLoading(true);

    const res = await axios(`https://api.github.com/users/${username}?cliient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUser(res.data);
    setLoading(false);
  }

  const getRepos = async (username) => {

    setLoading(true);

    const res = await axios(`https://api.github.com/users/${username}/repos?per_page=5&cliient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setRepos(res.data);
    setLoading(false);
  }

    return (
      <Router>
        <Fragment>
        <Navbar />

        <Switch>
          <Route exact path="/" render={props => (

            <div className="container">
            <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={ users.length > 0 ? true : false }/>
            <Users loading={loading} users={users}/>
            </div>

          )}/>

          <Route exact path="/about" render={About}/>
          <Route exact path="/user/:login" render={props => (
            <User {...props} getSingleUser={getSingleUser} getRepos={getRepos} loading={loading} user={user} repos={repos}/>
          )}/>

        </Switch>

      </Fragment>
      </Router>
    );
}

export default App;

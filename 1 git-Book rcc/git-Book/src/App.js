import React, { Fragment, Component } from 'react';
import Navbar from './components/dumb/Navbar';
import Users from './components/smart/Users';
import Search from './components/smart/Search';
import About from './components/dumb/About';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import './App.css';


class App extends Component {

  state = {
    loading: false,
    users: []
  }

  async componentDidMount()
  {
      // MJS init
      M.AutoInit();

      // this.setState({ loading: true });

      // const res = await axios(`https://api.github.com/users?cliient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      // this.setState({ loading: false, users: res.data });
  }

  searchUsers = async (text) => {

    this.setState({ loading: true });

      const res = await axios(`https://api.github.com/search/users?q=${text}&cliient_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

      this.setState({ loading: false, users: res.data.items });
  }

  clearUsers = () => {
    this.setState({ loading: false, users: [] });
  }

  render()
  {
    const { loading, users } = this.state;

    return (
      <Router>
        <Fragment>
        <Navbar />

        <Switch>
          <Route exact path="/" render={props => (

            <div className="container">
            <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={ users.length > 0 ? true : false }/>
            <Users loading={loading} users={users}/>
            </div>

          )}/>

          <Route exact path="/about" render={About}/>

        </Switch>

      </Fragment>
      </Router>
    );
  }
}

export default App;
